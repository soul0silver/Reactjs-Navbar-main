import { useContext, useEffect, useState } from "react"
import { deleteKeys, searchKey, updateKeys } from "../service/keys/KeyService";
import Pagination from "../components/Paging";
import GetProxy from "../components/GetProxy";
import { AuthContext } from "../context/AuthProvider";
import ExtendKey from "../components/ExtendKey";
import BuyKey from "../components/BuyKey";
import Subheader from "../components/Subheader";

export default function KeyManage() {
  const [keys, setKeys] = useState([]);
  const [criteria, setCriteria] = useState({
    keyProxy: "", alias: "", type: "", field: 'key',
    page: 1, size: 10, active: null, sortBy: 'outdated'
  });
  const [paging, setPage] = useState({ page: 1, totalPages: 1, size: criteria?.size })
  const [chosenKey, setChosen] = useState();
  const [selected, setSelected] = useState([]);
  const [extend, setExtend] = useState(false);
  const [buy, setBuy] = useState(false);
  const { seconds, setSeconds } = useContext(AuthContext)
  const onSelect = (e, key) => {
    if (e.target.checked) {
      setSelected([...selected, key])
    }
    else {
      setSelected(selected.filter(k => k?.id !== key?.id))
    }
  }

  const changePage = (p) => {
    if (!(p === paging?.totalPages || p === 1))
      search({ ...criteria, page: p })
  }

  const incrementPage = () => {
    if (paging?.page < paging?.totalPages) {
      let next = paging?.page + 1;
      search({ ...criteria, page: next })
    }
  }

  const decrementPage = () => {
    if (paging?.page > 1) {
      let prev = paging?.page - 1;
      search({ ...criteria, page: prev })
    }
  }

  const search = (body) => {
    setSelected([])
    searchKey(body).then(res => {
      let data = res?.data;
      if (data) {
        setKeys(data?.pageData);
        setPage({ ...paging, page: data?.pageNumber, totalPages: data?.totalPages, size: data?.pageSize })
      }
    })
  }
  useEffect(() => {
    search(criteria)
  }, []);
  function deleteSelected() {
    deleteKeys(selected.map(v => v.keyProxy)).then(res => {
      if (res?.status === 200) {
        alert("Xoá thành công!")
      }
    })
  }
  return <>
    <Subheader page={"Quản lý key"}/>
    <div className="w-full flex flex-col justify-center items-center py-8">
      {buy && <BuyKey setBuy={setBuy} creteria={criteria} searchKey={search} />}
      {extend && <ExtendKey keys={extend} setExtend={setExtend} search={search} criteria={criteria} />}
      {chosenKey && <GetProxy keys={chosenKey} setShow={setChosen} />}
      <div className="border border-gray-200 rounded-md">
        <div className="flex flex-col ">
          <div className="flex md:flex-row flex-col lg:space-x-6 p-[20px] bg-[#f7f7f7]">
            <div className="flex flex-col w-full md:w-auto">
              <label htmlFor="">Tìm kiếm</label>
              <div className="flex flex-row space-x-2 md:w-full">
                <select name="" id="" value={criteria?.field}
                  onChange={(e) => setCriteria({ ...criteria, keyProxy: '', alias: '', field: e.target.value })}
                  class="border h-[38px] border-gray-300 pl-3  outline-none w-full md:w-auto
                 focus:border-indigo-600 :ring-indigo-600"
                >
                  <option value="key">Key</option>
                  <option value="alias">Alias</option>
                </select>
                <input type="text"
                  placeholder="Search ..."
                  value={criteria?.field === 'key' ? criteria?.keyProxy : criteria?.alias}
                  onChange={(e) => {
                    if (criteria?.field === 'key')
                      setCriteria({ ...criteria, keyProxy: e.target.value })
                    else
                      setCriteria({ ...criteria, alias: e.target.value })
                  }}
                  class="border h-[38px] border-gray-300 pl-3  outline-none w-full md:w-auto
                 focus:border-indigo-600 :ring-indigo-600"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Loại key</label>
              <select name="" id="" value={criteria?.type}
                onChange={(e) => setCriteria({ ...criteria, type: e.target.value })}
                class="w-full border h-[38px] border-gray-300 pl-3  outline-none
                 focus:border-indigo-600 :ring-indigo-600"
              >
                <option value="">All</option>
                <option value="ONE_DAY">Thường</option>
                <option value="ONE_HOUR">1 giờ</option>
              </select>
            </div>
            <div className="flex flex-col ">
              <label htmlFor="">Trạng thái</label>
              <select name="" id="" value={criteria?.active}
                onChange={(e) => setCriteria({ ...criteria, active: e.target.value })}
                class="w-full border h-[38px] border-gray-300 pl-3  outline-none
                 focus:border-indigo-600 :ring-indigo-600"
              >
                <option value="">All</option>
                <option value="true">Còn hiệu lực</option>
                <option value="false">Hết hiệu lực</option>

              </select>
            </div>
            <div className="flex flex-col ">
              <label htmlFor="">Sắp xếp theo</label>
              <select name="" id="" value={criteria?.sortBy}
                onChange={(e) => setCriteria({ ...criteria, sortBy: e.target.value })}
                class="w-full border h-[38px] border-gray-300 pl-3  outline-none
                 focus:border-indigo-600 :ring-indigo-600"
              >
                <option value="">All</option>
                <option value="outdated">Hạn dùng</option>
                <option value="type">Loại key</option>
              </select>
            </div>
            <div className="flex flex-col ">
              <label htmlFor="">Hiển thị</label>
              <select name="" id=""
                class="w-full border h-[38px] border-gray-300 pl-3  outline-none
                 focus:border-indigo-600 :ring-indigo-600"
              >
                <option value="10">10 / trang</option>
                <option value="20">20 / trang</option>
                <option value="50">50 / trang</option>
              </select>
            </div>
          </div>

          <div className="w-full flex flex-wrap items-center action-btn-group  p-[20px] ">
            <button className="bg-[#25a945] hover:bg-[#68dd85] text-nowrap" onClick={() => search(criteria)}>Tìm kiếm</button>
            <button className="bg-[#25a945] hover:bg-[#68dd85] text-nowrap"
              onClick={() => setBuy(true)}
            >Mua mới</button>
            <button className="bg-[#017aff] hover:bg-[#65a1e0] text-nowrap" onClick={(e) => { e.preventDefault(); setExtend(selected) }} >Gia các hạn key đã chọn</button>
            <button className="bg-[#d93646] hover:bg-[#ed7682] text-nowrap"
              onClick={() => {
                if (selected.length !== 0) {
                  deleteSelected();
                }
              }}
            >Xoá các key đã chọn</button>
            <button className="bg-[#017aff] hover:bg-[#65a1e0] text-nowrap" onClick={() => setChosen(selected)}>Lấy proxy các key đã chọn</button>
          </div>
          <hr />
          <div className="p-[20px] max-w-[412px] md:max-w-full overflow-scroll md:overflow-hidden">
            <div className="w-full">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="font-bold">
                    {keys?.length > 0 && <th><input type="checkbox"
                      checked={selected.length === keys.length && keys.length > 0}
                      onChange={(e) => {
                        setSelected(e.target.checked ? keys?.map((k, i) => k) : [])
                      }}
                    /></th>}
                    <th className="w-[30px]">#</th>
                    <th className="lg:w-[400px] w-[100px]">Key</th>
                    <th className="lg:w-[100px]">Alias</th>
                    <th className="lg:w-[100px]">Loại key</th>
                    <th className="lg:w-[100px]">Thời gian mua</th>
                    <th className="lg:w-[100px]">Hạn dùng</th>
                    <th className="lg:w-[100px]">Trạng thái</th>
                    <th className="lg:w-[100px]">Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    keys?.map((k, i) => <tr key={i}>
                      <td><input type="checkbox" checked={selected.includes(k)}
                        onChange={(e) => onSelect(e, k)}
                      /></td>
                      <td>{i + 1}</td>
                      <td>{k?.keyProxy}</td>
                      <td>{k?.alias}</td>
                      <td>{k?.type}</td>
                      <td>{new Date(k?.createdAt).toLocaleString()}</td>
                      <td>{new Date(k?.outdated).toLocaleString()}</td>
                      <td>{new Date(k?.outdated).getTime() > new Date() ?
                        'Còn hiệu lực' : 'Hết hiệu lực'
                      }</td>
                      <td>
                        <div className="flex flex-col text-nowrap">
                          {new Date(k?.outdated).getTime() > new Date() &&
                            <button onClick={() => setChosen([k])}
                              disabled={seconds > 0}
                              className="text-[#71a2cf] hover:text-[#3f45e8]">{seconds > 0 ? seconds : 'Lấy proxy'}</button>}
                          <button className="text-[#71a2cf] hover:text-[#3f45e8]">Đổi alias</button>
                          <button className="text-[#71a2cf] hover:text-[#3f45e8]"
                            onClick={() => setExtend([k])}
                          >Gia hạn</button>
                        </div>
                      </td>
                    </tr>)
                  }
                  {
                    keys.length === 0 && <tr className="bg-[#eff6ff]"><td className="text-center" colSpan={8}>Không có dữ liệu</td></tr>
                  }
                </tbody>
                {paging?.totalPages > 0 && <tfoot className="">
                  <tr>
                    <td colSpan={9}> <Pagination page={paging?.page} pageSize={criteria?.size} totalPages={paging?.totalPages}
                      changePage={changePage} incrementPage={incrementPage} decrementPage={decrementPage}
                    /> </td>
                  </tr>

                </tfoot>}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}