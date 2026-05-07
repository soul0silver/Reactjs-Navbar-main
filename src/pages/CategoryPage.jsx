import { useEffect, useState } from "react";
import Pagination from "../components/Paging";
import Subheader from "../components/Subheader";
import {
  searchCategory,
  createCategory,
  updateCategory,
  deleteCategory
} from "../service/category/CategoryService";

export default function CategoryPage() {

  const emptyCategory = {
    id: null,
    name: "",
    description: ""
  };

  const [categories, setCategories] = useState([]);

  const [criteria, setCriteria] = useState({
    keyword: "",
    page: 1,
    size: 10,
    name: ""
  });

  const [paging, setPaging] = useState({
    page: 1,
    totalPages: 0,
    size: 10
  });

  const [form, setForm] = useState(emptyCategory);

  const search = (body) => {
    searchCategory(body).then(res => {
      const data = res?.data;

      if (data) {
        setCategories(data?.pageData || []);

        setPaging({
          page: data?.pageNumber,
          totalPages: data?.totalPages,
          size: data?.pageSize
        });
      }
    });
  };

  useEffect(() => {
    search(criteria);
  }, []);

  const submit = () => {

    if (!form?.name?.trim()) {
      alert("Tên danh mục không được để trống");
      return;
    }

    const request = form?.id
        ? updateCategory(form?.id, form)
        : createCategory(form);

    request.then(() => {
      setForm(emptyCategory);
      search(criteria);
    });
  };

  const edit = (item) => {
    setForm({
      id: item?.id,
      name: item?.name,
      description: item?.description
    });
  };

  const remove = (id) => {

    if (!window.confirm("Bạn có chắc chắn muốn xóa ?")) {
      return;
    }

    deleteCategory(id).then(() => {
      search(criteria);
    });
  };

  const changePage = (p) => {
    search({
      ...criteria,
      page: p
    });
  };

  const incrementPage = () => {
    if (paging?.page < paging?.totalPages) {
      changePage(paging?.page + 1);
    }
  };

  const decrementPage = () => {
    if (paging?.page > 1) {
      changePage(paging?.page - 1);
    }
  };

  return (
      <>
        <Subheader page={"Quản lý danh mục"} />

        <div className="w-full flex flex-col justify-center items-center py-8">

          <div className="w-full max-w-[1200px] border border-gray-200 rounded-md">

            {/* Search */}
            <div className="p-[20px] bg-[#f7f7f7] flex flex-col md:flex-row gap-4">

              <div className="flex flex-col flex-1">
                <label>Tìm kiếm</label>

                <input
                    type="text"
                    placeholder="Tên danh mục..."
                    value={criteria?.name}
                    onChange={(e) =>
                        setCriteria({
                          ...criteria,
                          name: e.target.value
                        })
                    }
                    className="border h-[38px] border-gray-300 pl-3 outline-none focus:border-indigo-600"
                />
              </div>

              <div className="flex flex-col">
                <label className="opacity-0">Action</label>

                <button
                    onClick={() => search(criteria)}
                    className="bg-[#1c94c6] px-4 rounded text-white h-[38px]"
                >
                  Tìm kiếm
                </button>
              </div>
            </div>

            {/* Form */}
            <div className="p-[20px] border-t border-gray-200">

              <h2 className="font-bold text-lg mb-4">
                {form?.id ? "Cập nhật danh mục" : "Thêm danh mục"}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div className="flex flex-col">
                  <label>Tên danh mục</label>

                  <input
                      type="text"
                      value={form?.name}
                      onChange={(e) =>
                          setForm({
                            ...form,
                            name: e.target.value
                          })
                      }
                      className="border h-[38px] border-gray-300 pl-3 outline-none"
                  />
                </div>

                <div className="flex flex-col">
                  <label>Mô tả</label>

                  <textarea
                      rows={3}
                      value={form?.description}
                      onChange={(e) =>
                          setForm({
                            ...form,
                            description: e.target.value
                          })
                      }
                      className="border border-gray-300 p-3 outline-none"
                  />
                </div>
              </div>

              <div className="mt-4 flex gap-2">

                <button
                    onClick={submit}
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                  {form?.id ? "Cập nhật" : "Thêm mới"}
                </button>

                <button
                    onClick={() => setForm(emptyCategory)}
                    className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Làm mới
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="p-[20px] overflow-x-auto">

              <table className="w-full border-collapse">

                <thead>
                <tr className="font-bold border-b">
                  <th className="p-2 w-[50px]">#</th>
                  <th className="p-2">Tên danh mục</th>
                  <th className="p-2">Mô tả</th>
                  <th className="p-2 w-[150px]">Hành động</th>
                </tr>
                </thead>

                <tbody>

                {
                  categories?.map((item, index) => (
                      <tr key={item?.id} className="border-b">

                        <td className="p-2 text-center">
                          {(paging.page - 1) * paging.size + index + 1}
                        </td>

                        <td className="p-2">
                          {item?.name}
                        </td>

                        <td className="p-2">
                          {item?.description}
                        </td>

                        <td className="p-2">
                          <div className="flex gap-2 justify-center">

                            <button
                                onClick={() => edit(item)}
                                className="bg-yellow-500 text-white px-3 py-1 rounded"
                            >
                              Sửa
                            </button>

                            <button
                                onClick={() => remove(item?.id)}
                                className="bg-red-600 text-white px-3 py-1 rounded"
                            >
                              Xóa
                            </button>

                          </div>
                        </td>
                      </tr>
                  ))
                }

                {
                    categories?.length === 0 &&
                    <tr>
                      <td
                          colSpan={4}
                          className="text-center p-4 bg-[#eff6ff]"
                      >
                        Không có dữ liệu
                      </td>
                    </tr>
                }

                </tbody>

                {
                    paging?.totalPages > 0 &&
                    <tfoot>
                    <tr>
                      <td colSpan={4}>

                        <Pagination
                            page={paging?.page}
                            pageSize={paging?.size}
                            totalPages={paging?.totalPages}
                            changePage={changePage}
                            incrementPage={incrementPage}
                            decrementPage={decrementPage}
                        />

                      </td>
                    </tr>
                    </tfoot>
                }

              </table>

            </div>
          </div>
        </div>
      </>
  );
}