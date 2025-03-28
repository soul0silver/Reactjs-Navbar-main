import { useState } from "react";
import { recharge } from "../service/orders/OrderService";
import Subheader from "../components/Subheader";

export default function Recharge() {
  const [amount, setAmount] = useState(2000);
  const [check, setCheck] = useState(false)
  const [checkoutInfo, setInfo] = useState('');
  const checkMoney = () => {
    if (amount % 1000 !== 0 && amount !== '') {
      return false
    }
    return true;
  }

  const rechargeMoney = () => {
    recharge({ amount: amount }).then(res => {
      console.log(res);
      if (res.status===200 && res?.data.error === 0) {
        window.location.href = res?.data?.data?.checkoutUrl
      }
    })
  }
  return (
    <>
      <Subheader page={'Nạp tiền'}/>
      
  
      {check && <div className="absolute top-0 left-0 z-13 w-full 
      h-full flex flex-col items-center justify-center popup-backgorund">
        <div onClick={() => setCheck()}
          className="absolute top-0 left-0 w-full h-full popup-backgorund z-[14]"></div>
        <div className="absolute z-[40]"><iframe src={checkoutInfo} width={900} height={900} /></div>
      </div>}
      <div className="w-full min-h-[500px] flex flex-col items-center justify-center">
        <div className="w-fit">
          <label htmlFor="">Số tiền nạp</label>
          <div className="flex space-x-3">
            <input type="number"
              value={amount}
              onChange={(evt) => setAmount(evt.target.value)}
              onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
              className="w-full border h-[38px] border-gray-300 pl-3  outline-none
                 focus:border-indigo-600 :ring-indigo-600"/>
            <button
              onClick={() => {setCheck(true);rechargeMoney()}}
              disabled={!checkMoney()} className="bg-[#25a945] w-[160px] h-[38px] text-white rounded-sm px-2">Tạo mã QR</button>
          </div>
          <span className="text-red-500">{!checkMoney() && 'Số tiền nhập không hợp lệ!'}</span>
        </div>

        <div>
          <p className="text-red-600">
            Lưu ý:
            <br />
            - Số tiền nạp là bội số của 1000!
            <br />
            - Tiền sẽ vào tài khoảng trong vòng 1-10 phút kể từ khi giao dịch thành công. Tuy nhiên đôi lúc do một vài lỗi khách quan, tiền có thể sẽ vào chậm hơn một chút.
            <br />
            - Vietcombank trong khoảng 23-3h không thể kiểm tra lịch sử giao dịch, các giao dịch trong khung giờ này có thể mất từ 15 phút đến 2 giờ tiền mới vào tài khoản.
            <br />
            - Bạn có thể tránh nạp tiền trong khung giờ này để đỡ mất thời gian chờ đợi nhé.
            <br />
            - Nếu quá lâu không thấy cập nhật số dư, Vui lòng liên hệ hỗ trợ!
          </p>
        </div>
      </div>
    </>
  )
}