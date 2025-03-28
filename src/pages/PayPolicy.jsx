import Subheader from "../components/Subheader";

export default function PayPolicy() {
  return <>
    <Subheader page={'Chính sách'} />
    <div className="w-full flex flex-col justify-center items-center py-8">
      <div className="flex flex-col justify-center items-center ">
        <div className="mb-[60px]">
          <span className="capitalize text-[30px] text-[#13287e]" style={{ fontWeight: 700 }}>Chính sách thanh toán</span>
        </div>
        <div className="w-full policy px-[90px]">
          <>
            <p style={{ color: "black" }}>
              1. Nạp tiền bằng hình thức chuyển khoản, cách thức như sau: <br />
              Khách hàng nhập số tiền muốn nạp vào tài khoản và chọn “Tạo QR code”. Sau
              đó, khách hàng quét mã QR bằng ứng dụng thanh toán trên thiết bị di dộng
              hoặc chuyển khoản theo thông tin tài khoản được website cung cấp:
            </p>
            <p style={{ fontWeight: "bold", color: "black", fontStyle: "italic" }}>
              Ngân hàng thương mại cổ phần Ngoại thương Việt Nam
              <br />
              STK: 2112139999
              <br />
              Người nhận: CTY TNHH PHAT TRIEN CONG NGHE SO HCT
              <br />
              Nội dung chuyển khoản: Mã chuyển khoản theo thông tin Website cung cấp
            </p>
            <p style={{ color: "black" }}>
              2. Sau khi khách hàng hoàn tất lệnh chuyển tiền, tiền sẽ được ghi nhận vào
              tài khoản của khách hàng trong vòng từ 01 đến 10 phút kể từ khi giao dịch
              thành công.
              <br />
              3. Khi khách hàng mua sản phẩm trên Liveproxy, tiền trong tài khoản của khách
              hàng sẽ được tự động trừ đi bằng với giá trị hàng hóa mua.
              <br />
            </p>
          </>
        </div>
      </div>
    </div>
  </>
}