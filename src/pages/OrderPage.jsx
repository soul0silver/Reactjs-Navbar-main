import { useEffect, useState } from "react";
import { searchOrder } from "../service/orders/OrderService";
import Pagination from "../components/Paging";
import Subheader from "../components/Subheader";

export default function OrderPage() {
  const [orders, setOrders] = useState([]);
  const [criteria, setCriteria] = useState({
    from: "", to: "", type: "", content: '', page: 1, size: 10
  });
  const [paging, setPage] = useState({ page: 1, totalPages: 0, size: criteria?.size })

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
    searchOrder(body).then(res => {
      let data = res?.data;
      if (data) {
        setOrders(data?.pageData);
        setPage({ ...paging, page: data?.pageNumber, totalPages: data?.totalPages, size: data?.pageSize })
      }
    })
  }
  useEffect(() => {
    search(criteria)
  }, []);
  return <>
    <Subheader page={"Lịch sử giao dịch"}/>
    <div className="w-full flex flex-col justify-center items-center py-8">
      <div className="border border-gray-200 rounded-md">
        <div className="flex flex-col ">
          <div className="flex md:flex-row flex-col lg:space-x-6 p-[20px] bg-[#f7f7f7]">
            <div className="flex flex-col w-full md:w-auto">
              <label htmlFor="">Tìm kiếm</label>
              <div className="flex flex-row space-x-2 md:w-full">

                <input type="text"
                  placeholder="Nội dung giao dịch... "
                  value={criteria?.content}
                  onChange={(e) => {
                    setCriteria({ ...criteria, content: e.target.value })
                  }}
                  class="border h-[38px] border-gray-300 pl-3  outline-none w-full md:w-auto
                 focus:border-indigo-600 :ring-indigo-600"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Loại giao dịch</label>
              <select name="" id="" value={criteria?.type}
                onChange={(e) => setCriteria({ ...criteria, type: e.target.value })}
                class="w-full border h-[38px] border-gray-300 pl-3  outline-none
                 focus:border-indigo-600 :ring-indigo-600"
              >
                <option value="">All</option>
                <option value="RECHARGE">Nạp tiền</option>
                <option value="PAID">Trừ tiền</option>
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
            <div className="flex flex-col h-full">
              <label className="text-white opacity-0">Hiển thị</label>
              <button onClick={()=>search(criteria)} className="bg-[#1c94c6] px-3 rounded text-white h-[38px]">Tìm kiếm</button>
            </div>
          </div>

          <div className="p-[20px] max-w-[412px] md:max-w-full overflow-scroll md:overflow-hidden">
            <div className="w-full">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="font-bold">
                    <th className="w-[30px]">#</th>
                    <th className="lg:w-[200px] w-[100px]">Thời gian giao dịch</th>
                    <th className="lg:w-[100px]">Số tiền</th>
                    <th className="lg:w-[500px]">Mô tả</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    orders?.map((k, i) => <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{new Date(k?.createdAt).toLocaleString()}</td>
                      <td>{k?.amount}</td>
                      <td>{k?.content}</td>
                    </tr>)
                  }
                  {
                    orders.length === 0 && <tr className="bg-[#eff6ff]"><td className="text-center" colSpan={8}>Không có dữ liệu</td></tr>
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