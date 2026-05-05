import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchBook, deleteBook } from "../service/books/BookService";
import { listAuthors } from "../service/authors/AuthorService";
import { listCategories } from "../service/categories/CategoryService";
import { listPublishers } from "../service/publishers/PublisherService";
import Pagination from "../components/Paging";
import Subheader from "../components/Subheader";

export default function BookPage() {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [paging, setPaging] = useState({ page: 1, totalPages: 1, size: 10 });
  const [selected, setSelected] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [categories, setCategories] = useState([]);
  const [publishers, setPublishers] = useState([]);
  const [criteria, setCriteria] = useState({
    title: "", authorId: "", categoryId: "", publisherId: "",
    minPrice: "", maxPrice: "", status: "", page: 1, size: 10,
  });

  useEffect(() => {
    listAuthors(0, 1000).then((res) => setAuthors(res?.data?.pageData || []));
    listCategories(0, 1000).then((res) => setCategories(res?.data?.pageData || []));
    listPublishers(0, 1000).then((res) => setPublishers(res?.data?.pageData || []));
  }, []);

  const search = (body) => {
    setSelected([]);
    const payload = { ...body };
    if (payload.authorId === "") delete payload.authorId;
    if (payload.categoryId === "") delete payload.categoryId;
    if (payload.publisherId === "") delete payload.publisherId;
    if (payload.minPrice === "") delete payload.minPrice;
    if (payload.maxPrice === "") delete payload.maxPrice;
    if (payload.status === "") delete payload.status;
    if (payload.title === "") delete payload.title;
    searchBook(payload).then((res) => {
      const data = res?.data;
      if (data) {
        setBooks(data?.pageData || []);
        setPaging({ page: data?.pageNumber, totalPages: data?.totalPages, size: data?.pageSize });
      }
    });
  };

  useEffect(() => { search(criteria); }, []);

  const onSelect = (e, book) => {
    if (e.target.checked) setSelected([...selected, book]);
    else setSelected(selected.filter((b) => b.id !== book.id));
  };

  const deleteSelected = () => {
    if (selected.length === 0) return;
    if (window.confirm(`Xoá ${selected.length} sách đã chọn?`)) {
      Promise.all(selected.map((b) => deleteBook(b.id))).then(() => {
        search(criteria);
      });
    }
  };

  const changePage = (p) => search({ ...criteria, page: p });
  const incrementPage = () => {
    if (paging.page < paging.totalPages) search({ ...criteria, page: paging.page + 1 });
  };
  const decrementPage = () => {
    if (paging.page > 1) search({ ...criteria, page: paging.page - 1 });
  };

  const getAuthorNames = (book) => {
    if (!book.authors || book.authors.length === 0) return "—";
    return book.authors.map((a) => a.name).join(", ");
  };

  const getStatusBadge = (status) => {
    if (status === "AVAILABLE") return <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">Còn hàng</span>;
    if (status === "OUT_OF_STOCK") return <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm">Hết hàng</span>;
    if (status === "DISCONTINUED") return <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">Ngừng bán</span>;
    return <span className="bg-gray-100 px-2 py-1 rounded text-sm">{status}</span>;
  };

  return (
    <>
      <Subheader page="Quản lý sách" />
      <div className="w-full flex flex-col justify-center items-center py-8">
        <div className="border border-gray-200 rounded-md w-full max-w-7xl">
          <div className="flex md:flex-row flex-col lg:space-x-4 p-5 bg-[#f7f7f7] flex-wrap gap-2">
            <div className="flex flex-col">
              <label className="text-sm">Tên sách</label>
              <input type="text" placeholder="Tìm kiếm..."
                value={criteria.title}
                onChange={(e) => setCriteria({ ...criteria, title: e.target.value })}
                className="border h-9 border-gray-300 px-2 outline-none focus:border-indigo-600 rounded w-40"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm">Tác giả</label>
              <select value={criteria.authorId}
                onChange={(e) => setCriteria({ ...criteria, authorId: e.target.value })}
                className="border h-9 border-gray-300 px-2 outline-none focus:border-indigo-600 rounded w-36"
              >
                <option value="">Tất cả</option>
                {authors.map((a) => <option key={a.id} value={a.id}>{a.name}</option>)}
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-sm">Danh mục</label>
              <select value={criteria.categoryId}
                onChange={(e) => setCriteria({ ...criteria, categoryId: e.target.value })}
                className="border h-9 border-gray-300 px-2 outline-none focus:border-indigo-600 rounded w-36"
              >
                <option value="">Tất cả</option>
                {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-sm">NXB</label>
              <select value={criteria.publisherId}
                onChange={(e) => setCriteria({ ...criteria, publisherId: e.target.value })}
                className="border h-9 border-gray-300 px-2 outline-none focus:border-indigo-600 rounded w-36"
              >
                <option value="">Tất cả</option>
                {publishers.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-sm">Giá từ</label>
              <input type="number" value={criteria.minPrice}
                onChange={(e) => setCriteria({ ...criteria, minPrice: e.target.value })}
                className="border h-9 border-gray-300 px-2 outline-none focus:border-indigo-600 rounded w-24"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm">Giá đến</label>
              <input type="number" value={criteria.maxPrice}
                onChange={(e) => setCriteria({ ...criteria, maxPrice: e.target.value })}
                className="border h-9 border-gray-300 px-2 outline-none focus:border-indigo-600 rounded w-24"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm">Trạng thái</label>
              <select value={criteria.status}
                onChange={(e) => setCriteria({ ...criteria, status: e.target.value })}
                className="border h-9 border-gray-300 px-2 outline-none focus:border-indigo-600 rounded w-36"
              >
                <option value="">Tất cả</option>
                <option value="AVAILABLE">Còn hàng</option>
                <option value="OUT_OF_STOCK">Hết hàng</option>
                <option value="DISCONTINUED">Ngừng bán</option>
              </select>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 px-5 pb-3">
            <button className="bg-[#25a945] hover:bg-[#68dd85] text-white px-4 py-2 rounded text-sm" onClick={() => search(criteria)}>
              Tìm kiếm
            </button>
            <button className="bg-[#017aff] hover:bg-[#65a1e0] text-white px-4 py-2 rounded text-sm" onClick={() => navigate("/books/new")}>
              Thêm sách mới
            </button>
            <button className="bg-[#d93646] hover:bg-[#ed7682] text-white px-4 py-2 rounded text-sm" onClick={deleteSelected}>
              Xoá đã chọn
            </button>
          </div>
          <hr />
          <div className="p-5 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="font-bold bg-gray-50">
                  <th className="p-2"><input type="checkbox"
                    checked={selected.length === books.length && books.length > 0}
                    onChange={(e) => setSelected(e.target.checked ? [...books] : [])}
                  /></th>
                  <th className="p-2 text-left">#</th>
                  <th className="p-2 text-left min-w-[200px]">Tên sách</th>
                  <th className="p-2 text-left">ISBN</th>
                  <th className="p-2 text-right">Giá</th>
                  <th className="p-2 text-center">Kho</th>
                  <th className="p-2 text-left">Tác giả</th>
                  <th className="p-2 text-left">NXB</th>
                  <th className="p-2 text-center">Trạng thái</th>
                  <th className="p-2 text-center">Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {books?.map((b, i) => (
                  <tr key={b.id} className="border-t hover:bg-gray-50">
                    <td className="p-2"><input type="checkbox" checked={selected.some((s) => s.id === b.id)}
                      onChange={(e) => onSelect(e, b)} /></td>
                    <td className="p-2">{i + 1 + (paging.page - 1) * paging.size}</td>
                    <td className="p-2 font-medium">{b.title}</td>
                    <td className="p-2 text-gray-500">{b.isbn || "—"}</td>
                    <td className="p-2 text-right">{b.price?.toLocaleString()}đ</td>
                    <td className="p-2 text-center">{b.stockQuantity}</td>
                    <td className="p-2 max-w-[150px] truncate">{getAuthorNames(b)}</td>
                    <td className="p-2">{b.publisher?.name || "—"}</td>
                    <td className="p-2 text-center">{getStatusBadge(b.status)}</td>
                    <td className="p-2 text-center">
                      <button className="text-[#017aff] hover:text-[#3f45e8] mr-2"
                        onClick={() => navigate(`/books/${b.id}/edit`)}>Sửa</button>
                      <button className="text-[#d93646] hover:text-[#ed7682]"
                        onClick={() => {
                          if (window.confirm(`Xoá sách "${b.title}"?`)) {
                            deleteBook(b.id).then(() => search(criteria));
                          }
                        }}>Xoá</button>
                    </td>
                  </tr>
                ))}
                {books?.length === 0 && (
                  <tr><td colSpan={10} className="text-center p-4 bg-[#eff6ff]">Không có dữ liệu</td></tr>
                )}
              </tbody>
              {paging?.totalPages > 1 && (
                <tfoot>
                  <tr><td colSpan={10}>
                    <Pagination page={paging.page} totalPages={paging.totalPages} changePage={changePage} incrementPage={incrementPage} decrementPage={decrementPage} />
                  </td></tr>
                </tfoot>
              )}
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
