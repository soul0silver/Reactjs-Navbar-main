import { useContext, useEffect, useState } from "react"
import { createOrder } from "../service/orders/OrderService";
import { searchProduct } from "../service/products/ProductService";
import { AuthContext } from "../context/AuthProvider";

export default function BuyKey({ product, setBuy }) {
  const [order, setOrder] = useState({
    type: product?.type, quantity: 1, times: 1,
    name: product?.name
  });
  const [products, setProducts] = useState([{ id: 1, price: 15000, type: 'KEY THƯỜNG' }]);
  const [spamPrevent, setSpam] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const { checkWallet, updateUserInfo } = useContext(AuthContext)

  useEffect(() => {
    searchProduct().then(res => {
      if (res.status === 200)
        setProducts(res.data.pageData)
      setSpam(false)
    })
  }, [])

  const create = () => {
    setSpam(true)
    createOrder(order).then(res => {
      if (res.status === 200) {
        alert("Mua thành công!");
        updateUserInfo();
      }
      else alert("Mua thất bại!")
      setSpam(false);
      setConfirm(false);
    })
  }
  return (
    <>
      <div className="absolute top-0 left-0 z-10 w-full 
      h-full flex flex-col items-center justify-center popup-backgorund"

      >
        <div onClick={() => setBuy()}
          className="absolute top-0 left-0 w-full h-full popup-backgorund z-[11]"></div>
        <div className="relative z-[12] lg:w-[25%] w-[80%] rounded-lg popup-buy-key ">
          <div className="px-[15px] py-[15px] bg-[#27a844] popup-header flex justify-between">
            <h1>Mua mới</h1>
            <button onClick={() => setBuy()}>
              <span className="text-xl" aria-hidden="true">×</span>
            </button>

          </div>
          <div className="p-[15px] flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="">Loại key</label>
              <select value={order?.type}
                onChange={(e) => {
                  setOrder({ ...order, type: e.target.value });
                }}
                class="w-full border h-[38px] border-gray-300 pl-3  outline-none
                 focus:border-indigo-600 :ring-indigo-600"
              >
                <option value="ONE_HOUR">1 GIỜ</option>
                <option value="ONE_DAY">1 NGÀY</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="">Số lượng</label>
              <input
                type="number"
                onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                min={1}
                class="w-full border h-[38px] border-gray-300 pl-3  outline-none
                 focus:border-indigo-600 :ring-indigo-600"
                value={order.quantity}
                onChange={(e) => setOrder({ ...order, quantity: e.target.value })}
              />
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
              /> <label>{order?.type === 'ONE_HOUR' ? '7 giờ' : '1 Tuần'}</label>
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
                {order?.type === 'ONE_DAY' ? '1 Tháng' : '30 giờ'}
              </label>
            </div>
            <div><pre>{`Tổng tiền    `} {products.filter(p => p?.type === order?.type)[0]?.price * order?.quantity * order?.times} VND</pre></div>
            {!checkWallet(products.filter(p => p?.type === order?.type)[0]?.price * order?.quantity * order?.times) && <div className="text-red-600">
              {'Tiền trong tài khoản không đủ!'} <a className="text-red-500 hover:text-red-800" href="/recharge">Nạp thêm!</a></div>}
          </div>
          <div className="flex justify-between items-center p-[15px]">
            <button className="p-[8px] rounded-lg" onClick={() => setBuy()}>Huỷ</button>
            <button disabled={!checkWallet(products.filter(p => p?.type === order?.type)[0]?.price * order?.quantity * order?.times)} className="p-[8px] bg-[#27a844] rounded-md text-white"
              onClick={() => setConfirm(true)}
            >Mua</button>
          </div>
        </div>
      </div>

      {confirm && <div className="absolute top-0 left-0 z-10 w-full 
      h-full flex flex-col items-center justify-center popup-backgorund"
      >
        <div onClick={() => setConfirm(false)}
          className="absolute top-0 left-0 w-full h-full popup-backgorund z-[11]"></div>
        <div className="fixed z-[13] z top-[0px] lg:w-[20%] w-[80%] rounded-lg popup-buy-key translate-y-[-10px]">
          <div className="px-[15px] py-[15px] bg-[#fec007] popup-header flex justify-between">
            <h1>Xác nhận mua</h1>
            <button onClick={() => setConfirm(false)}>
              <span className="text-xl" aria-hidden="true">×</span>
            </button>
          </div>
          <div className="p-[15px] flex flex-col gap-2">
            <p>Số lượng key: <span className="font-bold">{order?.quantity}</span></p>
            <p>Số ngày(giờ) mua: <span className="font-bold">{order?.times}</span></p>
            <p>Loại key: <span className="font-bold">{order?.type.replace('_', ' ')}</span></p>
            <p className="text-red-500 font-bold">Thành tiền: <span className="font-bold">
              {products.filter(p => p?.type === order?.type)[0]?.price}</span> VND</p>
            <p className="font-bold">Bạn có chắc chắn muốn mua không?</p>
            <p className="text-red-500 font-bold">VUI LÒNG CHECK KỸ SỐ LƯỢNG VÀ LOẠI KEY!</p>
            <p className="text-red-500 font-bold">Key đã mua sẽ không được đổi/trả!</p>
          </div>
          <div className="flex justify-between items-center p-[15px]">
            <button className="p-[8px] rounded-lg" onClick={() => setConfirm(false)}>Huỷ</button>
            <button className="p-[8px] bg-[#27a844] rounded-md text-white" disabled={spamPrevent}
              onClick={(e) => { e.preventDefault(); create() }}
            >Mua</button>
          </div>
        </div>
      </div>}
    </>
  )
}