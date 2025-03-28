import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { searchProduct } from "../service/products/ProductService";
import { updateKeys } from "../service/keys/KeyService";

export default function ExtendKey({ keys, setExtend, search, criteria }) {
  const [order, setOrder] = useState({
    keys: keys.map(k=>k?.keyProxy), times: 1
  });
  const [spamPrevent, setSpam] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [products, setProducts] = useState([]);
  const { checkWallet, updateUserInfo } = useContext(AuthContext);
  const updateKey = () => {
    updateKeys(order).then(res => {
      if (res.status === 200) {

        alert("Gia hạn thành công!");
        setConfirm(false);
        updateUserInfo();
        search(criteria)
      }
      else {
        alert("Gia hạn thất bại!")
      }

    })
  }
  useEffect(() => {
    searchProduct().then(res => {
      if (res?.status === 200)
        setProducts(res?.data?.pageData?.map(v=>{return {type:v?.type , price : v?.price}}))
      setSpam(false)
    })
  }, [])

  function couPrice() {
   return keys?.map(k=>products.filter(p=>p?.type === k?.type)[0]?.price).reduce((a,b)=> a+b, 0)
  }
  return (
    <>
      <div className="fixed top-0 left-0 z-10 w-full 
        h-full flex flex-col items-center justify-center popup-backgorund"

      >
        <div onClick={() => setExtend(false)}
          className="absolute top-0 left-0 w-full h-full popup-backgorund z-[11]"></div>
        <div className="relative z-[12] lg:w-[25%] w-[80%] rounded-lg popup-buy-key ">
          <div className="px-[15px] py-[15px] bg-[#27a844] popup-header flex justify-between">
            <h1>Gia hạn key</h1>
            <button onClick={() => setExtend(false)}>
              <span className="text-xl" aria-hidden="true">×</span>
            </button>

          </div>
          <div className="p-[15px] flex flex-col gap-2">
            <div>
              <span>Đã chọn : {keys?.length} keys</span>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="">Số ngày (giờ) sử dụng</label>
              <input
                type="number"
                value={order.times}
                onChange={(e) => setOrder({ ...order, times: e.target.value })}
                class="w-full border h-[38px] border-gray-300 pl-3  outline-none
                   focus:border-indigo-600 :ring-indigo-600"
              />
            </div>

            <div>
              <input type="checkbox"
                checked={order?.times === 7}
                onChange={(e) => {
                  if (e.target.checked) {
                    setOrder({ ...order, times: 7 })
                  }
                  else {
                    setOrder({ ...order, times: 1 })
                  }
                }}
              /> <label>{'1 Tuần'}</label>
            </div>
            <div>
              <input type="checkbox"
                checked={order?.times === 30}
                onChange={(e) => {
                  if (e.target.checked) {
                    setOrder({ ...order, times: 30 })
                  }
                  else {
                    setOrder({ ...order, times: 1 })
                  }
                }}
              /> <label>
                {'1 Tháng'}
              </label>
            </div>
            <div><pre>{`Tổng tiền    `} {couPrice() * order?.times} VND</pre></div>
            {!checkWallet(couPrice() * order?.times) && <div className="text-red-600">
              {'Tiền trong tài khoản không đủ!'} <a className="text-red-500 hover:text-red-800" href="/recharge">Nạp thêm!</a></div>}
          </div>
          <div className="flex justify-between items-center p-[15px]">
            <button className="p-[8px] rounded-lg" onClick={() => setExtend(false)}>Huỷ</button>
            <button disabled={!checkWallet(couPrice() * order?.times)} className="p-[8px] bg-[#27a844] rounded-md text-white"
              onClick={() => setConfirm(true)}
            >Gia hạn</button>
          </div>
        </div>
      </div>

      {confirm && <div className="fixed top-0 left-0 z-10 w-full 
        h-full flex flex-col items-center justify-center popup-backgorund"
      >
        <div onClick={() => setConfirm(false)}
          className="absolute top-0 left-0 w-full h-full popup-backgorund z-[11]"></div>
        <div className="fixed z-[13] z top-[0px] lg:w-[20%] w-[80%] rounded-lg popup-buy-key translate-y-[-10px]">
          <div className="px-[15px] py-[15px] bg-[#fec007] popup-header flex justify-between">
            <h1>Xác nhận gia hạn</h1>
            <button onClick={() => setConfirm(false)}>
              <span className="text-xl" aria-hidden="true">×</span>
            </button>
          </div>
          <div className="p-[15px] flex flex-col gap-2">
            <p>Đã chọn : {keys?.length} keys</p>
            <p>Số ngày(giờ) mua: <span className="font-bold">{order?.times}</span></p>
            <p className="text-red-500 font-bold">Thành tiền: <span className="font-bold">
              {couPrice() * order?.times}</span> VND</p>
            <p className="font-bold">Bạn có chắc chắn muốn mua không?</p>
            <p className="text-red-500 font-bold">VUI LÒNG CHECK KỸ SỐ LƯỢNG VÀ LOẠI KEY!</p>
            <p className="text-red-500 font-bold">Key đã mua sẽ không được đổi/trả!</p>
          </div>
          <div className="flex justify-between items-center p-[15px]">
            <button className="p-[8px] rounded-lg" onClick={() => setConfirm(false)}>Huỷ</button>
            <button className="p-[8px] bg-[#27a844] rounded-md text-white" disabled={spamPrevent}
              onClick={(e) => { e.preventDefault(); updateKey() }}
            >Gia hạn</button>
          </div>
        </div>
      </div>}
    </>
  )
}