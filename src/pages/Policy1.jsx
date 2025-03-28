import Subheader from "../components/Subheader";

export default function Policy1() {
  return <>
    <Subheader page={'Chính sách'} />
    <div className="w-full flex flex-col justify-center items-center py-8">
      <div className="flex flex-col justify-center items-center ">
        <div className="mb-[60px] px-8 text-center">
          <span className="capitalize text-[30px] text-[#13287e]" style={{ fontWeight: 700 }}>Chính sách giải quyết khiếu nại</span>
        </div>
        <div className="w-full policy px-[90px]">
          <p className="break-before-auto">
            HCT luôn làm tròn trách nhiệm trong việc tiếp nhận và xử lý khiếu nại của Khách hàng khi gặp vấn đề liên quan đến chất lượng sản phẩm và dịch vụ của chúng tôi. Khi phát sinh các khiếu nại, tranh chấp, HCT đề cao giải pháp thương lượng, hòa giải giữa đôi bên nhằm duy trì mối quan hệ, sự tin cậy của Khách hàng vào chất lượng dịch vụ của HCT.
            Khách hàng sử dụng dịch vụ của HCT được bảo đảm quyền lợi hợp pháp theo thỏa thuận trong hợp đồng và quy định của pháp luật.
          </p>
          <p className="font-bold">1. QUY ĐỊNH CHUNG</p>
          <p className="font-bold">1.1. Đối tượng khiếu nại</p>
          <p>Là các tổ chức, cá nhân đứng tên trong Hợp Đồng sử dụng dịch vụ hoặc là người đại diện hợp pháp của người sử dụng dịch vụ do Công ty TNHH Phát triển Công nghệ số HCT cung cấp.</p>
          <p className="font-bold">1.2. Hình thức khiếu nại</p>
          <p>Khách hàng khi có khiếu nại về dịch vụ do HCT cung cấp có thể khiếu nại trực tiếp tại văn phòng công ty hoặc khiếu nại gián tiếp qua mạng xã hội
            <a href="https://www.facebook.com/Liveproxycom" className="font-bold"><i> https://www.facebook.com/Liveproxycom </i></a>
            hoặc gửi mail về <b><i>support@Liveproxy.com</i></b>.</p>
          <p className="font-bold">1.3. Thời hạn khiếu nại</p>
          <p>
            Là thời hạn khách hàng được quyền khiếu nại theo như quy định của công ty.<br />

            · Không quá 50 ngày đối với vấn đề về chất lượng dịch vụ.<br />

            · Không quá 20 ngày đối với vấn đề kinh doanh.<br />

            · Với các khiếu nại sau thời hạn kể trên, HCT có quyền từ chối giải quyết.
          </p>

          <p className="font-bold">2. CÁC BƯỚC THỰC HIỆN GIẢI QUYẾT KHIẾU NẠI</p>
          <p className="font-bold">Bước 1: Tiếp nhận khiếu nại</p>
          <p>
            Bộ phận CSKH của HCT có trách nhiệm tiếp nhận khiếu nại của khách hàng và kiểm tra, hồi âm cho khách trong vòng 48 tiếng đồng hồ.
          </p>
          <p className="font-bold">Bước 2: Xác minh, xử lý</p>
          <p>
            Sau khi tiếp nhận khiếu nại của khách hàng, bộ phận CSKH sẽ chủ động kiểm tra và giải quyết trong phạm vi quyền hạn của mình.<br />

            Các khiếu nại không thuộc thẩm quyền giải quyết sẽ phối hợp và chuyển đến phòng chuyên môn, đơn vị có thẩm quyền để giải quyết cho khách hàng.
          </p>
          <p className="font-bold">Bước 3: Xem xét, giải quyết khiếu nại</p>
          <p>
            Các bộ phận có chức năng theo thẩm quyền quyết định tiến hành kiểm tra, xác minh thông tin khiếu nại của khách hàng và đưa ra kết luận cuối cùng.
          </p>
          <p className="font-bold">Bước 4: Trả lời khách hàng</p>
          <p>
            Khi có kết quả kiểm tra, xác minh, bộ phận CSKH sẽ trả lời cho khách hàng bằng nhiều hình thức: Gọi điện thoại, gặp trực tiếp, gửi văn bản, gửi email,…<br />

            Nếu khách hàng chưa thỏa mãn kết quả khiếu nại, các bộ phận chức năng có trách nhiệm kiểm tra lại từ đầu thông tin khiếu nại và phúc đáp khách hàng (Lần 2).<br />

            Nếu khách hàng vẫn không/chưa đồng ý với giải quyết lần 2 của HCT thì có thể gửi Đơn đến cơ quan quản lý hoặc khởi kiện ra Tòa án.
          </p>
          <p className="font-bold">Bước 5: Kết thúc khiếu nại</p>
          <p>
            Sau khi đạt được thỏa thuận giữa 2 bên, lưu hồ sơ và kết thúc khiếu nại.
          </p>
          <p className="font-bold">3. THỜI HẠN GIẢI QUYẾT KHIẾU NẠI</p>
          <p>
            Thời hạn giải quyết khiếu nại căn cứ theo từng nội dung khiếu nại của khách hàng tính từ ngày nhận được khiếu nại:<br />

            · Tối đa 20 ngày với các khiếu nại thông thường.<br />

            · Tối đa 03 tháng với các khiếu nại, tranh chấp phức tạp.
          </p>
        </div>
      </div>
    </div>
  </>
}