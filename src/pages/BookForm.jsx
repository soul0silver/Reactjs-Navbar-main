import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBook, createBook, updateBook } from "../service/books/BookService";
import { listAuthors } from "../service/authors/AuthorService";
import { listCategories } from "../service/categories/CategoryService";
import { listPublishers } from "../service/publishers/PublisherService";
import Subheader from "../components/Subheader";

const STATUS_OPTIONS = [
  { value: "AVAILABLE", label: "Còn hàng" },
  { value: "OUT_OF_STOCK", label: "Hết hàng" },
  { value: "DISCONTINUED", label: "Ngừng bán" },
];

export default function BookForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = Boolean(id);

  const [authors, setAuthors] = useState([]);
  const [categories, setCategories] = useState([]);
  const [publishers, setPublishers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    title: "", isbn: "", price: 0, description: "", stockQuantity: 0,
    publishedDate: "", language: "", pageCount: 0, coverImage: "",
    status: "AVAILABLE", publisherId: "", authorIds: [], categoryIds: [],
  });

  useEffect(() => {
    listAuthors(0, 1000).then((res) => setAuthors(res?.data?.pageData || []));
    listCategories(0, 1000).then((res) => setCategories(res?.data?.pageData || []));
    listPublishers(0, 1000).then((res) => setPublishers(res?.data?.pageData || []));
  }, []);

  useEffect(() => {
    if (isEdit) {
      setLoading(true);
      getBook(id).then((res) => {
        const b = res?.data;
        if (b) {
          setForm({
            title: b.title || "",
            isbn: b.isbn || "",
            price: b.price || 0,
            description: b.description || "",
            stockQuantity: b.stockQuantity || 0,
            publishedDate: b.publishedDate || "",
            language: b.language || "",
            pageCount: b.pageCount || 0,
            coverImage: b.coverImage || "",
            status: b.status || "AVAILABLE",
            publisherId: b.publisher?.id || "",
            authorIds: b.authors?.map((a) => a.id) || [],
            categoryIds: b.categories?.map((c) => c.id) || [],
          });
        }
        setLoading(false);
      }).catch(() => setLoading(false));
    }
  }, [id, isEdit]);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleMultiSelect = (field, id) => {
    setForm((prev) => {
      const arr = prev[field];
      return { ...prev, [field]: arr.includes(id) ? arr.filter((v) => v !== id) : [...arr, id] };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) {
      alert("Vui lòng nhập tên sách");
      return;
    }
    const payload = {
      title: form.title,
      isbn: form.isbn || null,
      price: form.price,
      description: form.description || null,
      stockQuantity: form.stockQuantity,
      publishedDate: form.publishedDate || null,
      language: form.language || null,
      pageCount: form.pageCount,
      coverImage: form.coverImage || null,
      status: form.status,
      publisherId: form.publisherId || null,
      authorIds: form.authorIds.length > 0 ? form.authorIds : [],
      categoryIds: form.categoryIds.length > 0 ? form.categoryIds : [],
    };

    if (isEdit) {
      updateBook(id, payload).then((res) => {
        if (res?.status === 200) navigate("/books");
      });
    } else {
      createBook(payload).then((res) => {
        if (res?.status === 200) navigate("/books");
      });
    }
  };

  if (loading) return <div className="w-full min-h-[400px] flex items-center justify-center">Đang tải...</div>;

  return (
    <>
      <Subheader page={isEdit ? "Sửa sách" : "Thêm sách mới"} />
      <div className="w-full flex justify-center py-8">
        <form onSubmit={handleSubmit} className="w-full max-w-3xl bg-white border border-gray-200 rounded-lg p-6 space-y-4">
          <h3 className="text-lg font-bold mb-2">{isEdit ? "Chỉnh sửa thông tin sách" : "Thêm sách mới"}</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Tên sách <span className="text-red-500">*</span></label>
              <input type="text" value={form.title}
                onChange={(e) => handleChange("title", e.target.value)}
                className="w-full border h-10 border-gray-300 px-3 outline-none focus:border-indigo-600 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">ISBN</label>
              <input type="text" value={form.isbn}
                onChange={(e) => handleChange("isbn", e.target.value)}
                className="w-full border h-10 border-gray-300 px-3 outline-none focus:border-indigo-600 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Giá (VND) <span className="text-red-500">*</span></label>
              <input type="number" min={0} value={form.price}
                onChange={(e) => handleChange("price", Number(e.target.value))}
                className="w-full border h-10 border-gray-300 px-3 outline-none focus:border-indigo-600 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Số lượng trong kho</label>
              <input type="number" min={0} value={form.stockQuantity}
                onChange={(e) => handleChange("stockQuantity", Number(e.target.value))}
                className="w-full border h-10 border-gray-300 px-3 outline-none focus:border-indigo-600 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Ngày xuất bản</label>
              <input type="date" value={form.publishedDate}
                onChange={(e) => handleChange("publishedDate", e.target.value)}
                className="w-full border h-10 border-gray-300 px-3 outline-none focus:border-indigo-600 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Ngôn ngữ</label>
              <input type="text" value={form.language}
                onChange={(e) => handleChange("language", e.target.value)}
                className="w-full border h-10 border-gray-300 px-3 outline-none focus:border-indigo-600 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Số trang</label>
              <input type="number" min={0} value={form.pageCount}
                onChange={(e) => handleChange("pageCount", Number(e.target.value))}
                className="w-full border h-10 border-gray-300 px-3 outline-none focus:border-indigo-600 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Ảnh bìa (URL)</label>
              <input type="text" value={form.coverImage}
                onChange={(e) => handleChange("coverImage", e.target.value)}
                className="w-full border h-10 border-gray-300 px-3 outline-none focus:border-indigo-600 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Trạng thái</label>
              <select value={form.status}
                onChange={(e) => handleChange("status", e.target.value)}
                className="w-full border h-10 border-gray-300 px-3 outline-none focus:border-indigo-600 rounded"
              >
                {STATUS_OPTIONS.map((opt) => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Nhà xuất bản</label>
              <select value={form.publisherId}
                onChange={(e) => handleChange("publisherId", e.target.value ? Number(e.target.value) : "")}
                className="w-full border h-10 border-gray-300 px-3 outline-none focus:border-indigo-600 rounded"
              >
                <option value="">-- Chọn NXB --</option>
                {publishers.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Mô tả</label>
            <textarea value={form.description}
              onChange={(e) => handleChange("description", e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 outline-none focus:border-indigo-600 rounded" rows={3}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Tác giả</label>
              <div className="border border-gray-300 rounded p-2 max-h-40 overflow-y-auto">
                {authors.map((a) => (
                  <label key={a.id} className="flex items-center space-x-2 py-1">
                    <input type="checkbox" checked={form.authorIds.includes(a.id)}
                      onChange={() => handleMultiSelect("authorIds", a.id)}
                    />
                    <span>{a.name}</span>
                  </label>
                ))}
                {authors.length === 0 && <span className="text-gray-400 text-sm">Không có tác giả</span>}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Danh mục</label>
              <div className="border border-gray-300 rounded p-2 max-h-40 overflow-y-auto">
                {categories.map((c) => (
                  <label key={c.id} className="flex items-center space-x-2 py-1">
                    <input type="checkbox" checked={form.categoryIds.includes(c.id)}
                      onChange={() => handleMultiSelect("categoryIds", c.id)}
                    />
                    <span>{c.name}</span>
                  </label>
                ))}
                {categories.length === 0 && <span className="text-gray-400 text-sm">Không có danh mục</span>}
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-3 pt-3">
            <button type="button" className="bg-gray-300 hover:bg-gray-400 px-5 py-2 rounded" onClick={() => navigate("/books")}>
              Huỷ
            </button>
            <button type="submit" className="bg-[#25a945] hover:bg-[#68dd85] text-white px-5 py-2 rounded">
              {isEdit ? "Cập nhật" : "Tạo mới"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
