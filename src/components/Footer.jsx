export default function Footer() {
  return (
    <>
      <div className="footer-content-area">
        <div className="flex justify-center w-full lg:px-[100px] px-[10px]">
          <div className="flex lg:flex-row flex-col space-y-7 lg:space-y-0 justify-start items-start w-full lg:space-x-9">
            <div className="footer-copywrite-info max-w-[420px]">
              <div className="text-white flex flex-col items-start" data-wow-delay="0.2s">
                <div className="flex p-0 items-start justify-center text-left h-[60px]">
                  <span className="text-2xl uppercase">Live proxy</span>  
                </div>
                <p className="text-wrap text-[12px]">Live proxy cung cấp dịch vụ proxy dân cư xoay hàng đầu Việt Nam. IP trải khắp các tỉnh thành trên toàn quốc.</p>
              </div>
              <div className="footer-social-info fadeInUp" data-wow-delay="0.4s">
                <span>
                  <a href="https://www.facebook.com/liveproxy" target="_blank">
                    <img src="./facebook.svg" width={30} />
                  </a>
                </span>
                {/* <span><a href="#"> <i className="fa fa-twitter" aria-hidden="true"></i></a></span>
                <span><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></span>
                <span><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></span>
                <span><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></span> */}
              </div>
              <div className="footer-bct fadeInUp" data-wow-delay="0.2s">
                <div className="footer-bct">
                  <br />
                  <br />
                  <a href="http://online.gov.vn/Home/WebDetails/113919">
                    <img alt="" title="Đã Thông Báo Bộ Công Thương" src="/assets/end-user/img/core-img/bct.png" /></a>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-start max-w-[420px]">
              <div class="text-left text-white" data-wow-delay="0.4s">
                <div className="text-[16px] font-bold h-[60px]">ABOUT US</div>
                <div className="text-[15px]">
                  <p>Công ty TNHH công nghệ số NTD</p>
                  <p>Địa chỉ: Số 8 Tôn Thất Thuyết, Mỹ Đình, Từ Liêm, Hà Nội</p>
                  <p>Số điện thoại: 0846549228</p>
                  <p>Email: support@liveproxy.com</p>
                  <p>Giờ làm việc: Mon-Sat 08:00am - 10:00pm</p>
                  <p>Facebook: https://www.facebook.com/liveproxy</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-start max-w-[420px]">
              <div class="text-left text-white" data-wow-delay="0.4s">
                <div className="text-[16px] font-bold h-[60px]">DỊCH VỤ KHÁCH HÀNG</div>
                <div className="text-[15px]">
                  <p><a className="leading-[22px]" href="/feedback_policy">Chính sách giải quyết khiếu nại</a></p>
                  <p><a className="leading-[22px]" href="/secured_policy">Chính sách bảo mật thông tin</a></p>
                  <p><a className="leading-[22px]" href="/pay_policy">Chính sách thanh toán</a></p>
                  <p><a className="leading-[22px]" href="/service_policy">Chính sách sử dụng dịch vụ</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}