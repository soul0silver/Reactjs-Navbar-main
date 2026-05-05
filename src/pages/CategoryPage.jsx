import { useEffect, useState } from "react";
import { listCategories, createCategory, updateCategory, deleteCategory } from "../service/categories/CategoryService";
import Pagination from "../components/Paging";
import Subheader from "../components/Subheader";

export default function CategoryPage() {
  const [items, setItems] = useState([]);
  const [paging, setPaging] = useState({ page: 1, totalPages: 1, size: 10 });
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ name: "", description: "" });

  const search = (page = 1, size = 10) => {
    listCategories(page - 1, size).then((res) => {
      const data = res?.data;
      if (data) {
        setItems(data?.pageData || []);
        setPaging({ page: data?.pageNumber, totalPages: data?.totalPages, size: data?.pageSize });
      }
    });
  };

  useEffect(() => { search(); }, []);

  const openCreate = () => {
    setEditing(null);
    setForm({ name: "", description: "" });
    setShowForm(true);
  };

  const openEdit = (item) => {
    setEditing(item);
    setForm({ name: item.name || "", description: item.description || "" });
    setShowForm(true);
  };

  const handleSave = () => {
    if (!form.name.trim()) {
      alert("Vui lòng nhập tên danh mục");
      return;
    }
    const payload = { name: form.name, description: form.description || null };
    if (editing) {
      updateCategory(editing.id, payload).then((res) => {
        if (res?.status === 200) { setShowForm(false); search(paging.page, paging.size); }
      });
    } else {
      createCategory(payload).then((res) => {
        if (res?.status === 200) { setShowForm(false); search(paging.page, paging.size); }
      });
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc muốn xoá danh mục này?")) {
      deleteCategory(id).then((res) => {
        if (res?.status === 200) search(paging.page, paging.size);
      });
    }
  };

  const changePage = (p) => search(p, paging.size);
  const incrementPage = () => { if (paging.page < paging.totalPages) search(paging.page + 1, paging.size); };
  const decrementPage = () => { if (paging.page > 1) search(paging.page - 1, paging.size); };

  return (
    <>
      <Subheader page="Quản lý danh mục" />
      <div className="w-full flex flex-col justify-center items-center py-8">
        <div className="border border-gray-200 rounded-md w-full max-w-5xl">
          <div className="p-5 bg-[#f7f7f7] flex justify-between items-center">
            <span className="font-bold text-lg">Danh sách danh mục</span>
            <button className="bg-[#25a945] hover:bg-[#68dd85] text-white px-4 py-2 rounded" onClick={openCreate}>
              Thêm danh mục
            </button>
          </div>
          <div className="p-5 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="font-bold bg-gray-50">
                  <th className="p-2 text-left">#</th>
                  <th className="p-2 text-left">Tên</th>
                  <th className="p-2 text-left">Mô tả</th>
                  <th className="p-2 text-center">Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {items?.map((c, i) => (
                  <tr key={c.id} className="border-t hover:bg-gray-50">
                    <td className="p-2">{i + 1}</td>
                    <td className="p-2">{c.name}</td>
                    <td className="p-2 max-w-xs truncate">{c.description}</td>
                    <td className="p-2 text-center">
                      <button className="text-[#017aff] hover:text-[#3f45e8] mr-3" onClick={() => openEdit(c)}>Sửa</button>
                      <button className="text-[#d93646] hover:text-[#ed7682]" onClick={() => handleDelete(c.id)}>Xoá</button>
                    </td>
                  </tr>
                ))}
                {items?.length === 0 && (
                  <tr><td colSpan={4} className="text-center p-4 bg-[#eff6ff]">Không có dữ liệu</td></tr>
                )}
              </tbody>
              {paging?.totalPages > 1 && (
                <tfoot>
                  <tr><td colSpan={4}>
                    <Pagination page={paging.page} totalPages={paging.totalPages} changePage={changePage} incrementPage={incrementPage} decrementPage={decrementPage} />
                  </td></tr>
                </tfoot>
              )}
            </table>
          </div>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-bold mb-4">{editing ? "Sửa danh mục" : "Thêm danh mục"}</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium mb-1">Tên <span className="text-red-500">*</span></label>
                <input type="text" value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border h-10 border-gray-300 px-3 outline-none focus:border-indigo-600 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Mô tả</label>
                <textarea value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  className="w-full border border-gray-300 px-3 py-2 outline-none focus:border-indigo-600 rounded" rows={3}
                />
              </div>
            </div>
            <div className="flex justify-end space-x-3 mt-5">
              <button className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded" onClick={() => setShowForm(false)}>Huỷ</button>
              <button className="bg-[#25a945] hover:bg-[#68dd85] text-white px-4 py-2 rounded" onClick={handleSave}>
                {editing ? "Cập nhật" : "Tạo mới"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
