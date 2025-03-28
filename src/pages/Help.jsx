import { useState } from "react";
import Subheader from "../components/Subheader";

export default function Help() {
  const [pic, setPic]=useState();
  return <>
    <Subheader page={'Hướng dẫn'} />
    {pic &&<div onClick={()=>setPic()} className="fixed z-[21] top-0 left-0 w-full h-full flex flex-col items-center justify-center popup-backgorund lg:p-[300px]">
      <img src={pic} alt="" />
    </div>}
    <div className="w-full flex flex-col justify-center items-center py-8 help-page">
      <div className="flex flex-col justify-center items-center lg:max-w-[1000px]">
        <div className="mb-[60px]">
          <span className="capitalize text-[30px] text-[rgb(19,40,126)]" style={{ fontWeight: 700 }}>Hướng dẫn sử dụng proxy với Dolphin Anty</span>
        </div>
        <div className="w-full policy lg:px-[90px] px-[15px]">
          <div className="flex flex-col gap-10 lg:gap-[60px] mb-16 lg:mb-40">
            <div className="grid  md:gap-10 lg:gap-28">
              <div>
                <div>
                  <div className="mb-6">
                    <h1 className="w-4/5 text-5xl font-medium mb-6">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Cách sử dụng Proxy với trình duyệt Dolphin Anty
                        </font>
                      </font>
                    </h1>
                    <p className="text-[18px] leading-[160%] text-justify">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Dolphin Anty là trình duyệt chống phát hiện cho phép người dùng
                          tạo và quản lý nhiều hồ sơ trình duyệt từ một thiết bị duy nhất.
                          Mỗi hồ sơ trình duyệt được cấp một dấu vân tay thực tế, do đó
                          bạn sẽ trông giống như một người dùng thông thường khi truy cập
                          bất kỳ trang web nào. Dolphin Anty giúp bạn dễ dàng thực hiện
                          bất kỳ chiến dịch tiếp thị nào vì nó tự động hóa các tác vụ
                          truyền thông xã hội. Nó cũng được tạo ra với mục đích làm việc
                          nhóm, do đó bạn có thể làm việc liền mạch với một nhóm người.
                        </font>
                      </font>
                    </p>
                  </div>
                
                </div>
                <hr className="h-px my-10 bg-black border-0" />
                <article className="flex flex-col space-y-12">
                  <div id="Introduction" className="article-body">
                    <p>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Dolphin Anty là trình duyệt chống phát hiện cho phép người dùng
                          tạo và quản lý nhiều hồ sơ trình duyệt từ một thiết bị duy nhất.
                          Mỗi hồ sơ trình duyệt được cấp một dấu vân tay thực tế, do đó
                          bạn sẽ trông giống như một người dùng thông thường khi truy cập
                          bất kỳ trang web nào. Dolphin Anty giúp bạn dễ dàng thực hiện
                          bất kỳ chiến dịch tiếp thị nào vì nó tự động hóa các tác vụ
                          truyền thông xã hội. Nó cũng được tạo ra với mục đích làm việc
                          nhóm, do đó bạn có thể làm việc liền mạch với một nhóm người.
                        </font>
                      </font>
                    </p>
                    <p>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Để sử dụng hiệu quả trình duyệt Dolphin Anty, bạn cần ghép nối
                          nó với một proxy phù hợp. Proxy là thứ cho phép bạn trông giống
                          như người dùng thực sự của bất kỳ trang web nào bạn truy cập.
                          Proxy Dolphin Anty cũng sẽ cho phép bạn bỏ qua các giới hạn tài
                          khoản của các trang web truyền thông xã hội và cho phép bạn tạo
                          nhiều
                        </font>
                      </font>
                      
                    </p>
                    <p>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Proxy Dolphin Anty sẽ xử lý tất cả các yêu cầu web của bạn và
                          cung cấp cho bạn quyền truy cập vào hàng triệu địa chỉ IP. Địa
                          chỉ IP của bạn sẽ được ẩn hoàn toàn và bất kỳ trang web nào bạn
                          truy cập sẽ chỉ có thể thấy địa chỉ IP của máy chủ proxy. Điều
                          này cho phép bạn dễ dàng bỏ qua mọi hạn chế, tránh mọi lệnh
                          cấm/chặn đến từ các trang web và đảm bảo quyền riêng tư của bạn
                          sẽ luôn được bảo vệ.
                        </font>
                      </font>
                    </p>
                    
                  </div>
                  
                  <div
                    id="Dolphin Anty’s Proxy Settings Method 2"
                    className="article-body"
                  >
                    <h2>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Phương pháp tạo profile của Dolphin Anty theo cách thủ công
                        </font>
                      </font>
                    </h2>
                  </div>
                  <div id="Steps" className="article-body">
                    <h3>
                      <strong>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>Bước 1.</font>
                        </font>
                      </strong>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Mở Dolphin Anty và nhấp vào “
                        </font>
                      </font>
                      <strong>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>Tạo profiles</font>
                        </font>
                      </strong>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>”.</font>
                      </font>
                    </h3>
                    <p>
                      <img onClick={()=>setPic('/dolphin1.png')}
                        src="/dolphin1.png"
                        alt="DolphinAntyAlt1.png"
                      />
                    </p>
                    <h3>
                      <strong>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>Bước 2.</font>
                        </font>
                      </strong>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>Nhập thông tin theo thứ tự </font>
                      </font>
                      
                    </h3>
                    <p>
                      <img onClick={()=>setPic('/dolphin2.png')}
                        src="/dolphin2.png"
                        alt="DolphinAntyAlt2.png"
                      />
                    </p>
                    <h3>
                      <strong>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>Bước 3.</font>
                        </font>
                      </strong>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>Start profile vừa tạo </font>
                      </font>
                      
                    </h3>
                    <p>
                      <img onClick={()=>setPic('/dolphin3.png')}
                        src="/dolphin3.png"
                        alt="DolphinAntyAlt3.png"
                      />
                    </p>
                  </div>
                  <hr className="h-px my-10 bg-black border-0" />
                  <div
                    id="Dolphin Anty’s Proxy Settings Method 2"
                    className="article-body"
                  >
                    <h2>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Phương pháp tạo profile của Dolphin Anty từ file template
                        </font>
                      </font>
                    </h2>
                  </div>
                  <div id="Steps" className="article-body">
                    <h3>
                      <strong>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>Bước 1.</font>
                        </font>
                      </strong>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Mở Dolphin Anty và nhấp vào “
                        </font>
                      </font>
                      <strong>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>Tạo profiles</font>
                        </font>
                      </strong>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>”.</font>
                      </font>
                    </h3>
                    <p>
                      <img onClick={()=>setPic('/dolphin1.png')}
                        src="/dolphin1.png"
                        alt="DolphinAntyAlt1.png"
                      />
                    </p>
                    <h3>
                      <strong>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>Bước 2.</font>
                        </font>
                      </strong>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>Nhấn vào mass import, tải về template và sửa thông tin trong file</font>
                      </font>
                      
                    </h3>
                    <p>
                      <img onClick={()=>setPic('/dolphinIP.png')}
                        src="/dolphinIP.png"
                        alt="DolphinAntyAlt2.png"
                      />
                    </p>
                    <p>
                      - Cột <b>Proxy</b> là thông tin proxy lấy được từ file "proxy.txt" đã tải về
                    </p>
                    <p>
                      - Cột <b>User Agent</b> copy thông tin từ mẫu trong file template
                    </p>
                    <p>
                      - Cột <b>Proxy type</b> chọn loại proxy (ở đây là "http")
                    </p>
                    <p>
                      <img onClick={()=>setPic('/template_dolphin.png')}
                        src="/template_dolphin.png"
                        alt="DolphinAntyAlt2.png"
                      />
                    </p>
                    <h3>
                      <strong>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>Bước 3.</font>
                        </font>
                      </strong>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>Import file vừa tạo </font>
                      </font>
                    </h3>
                    
                    <p>
                      <img onClick={()=>setPic('/dolphin4.png')}
                        src="/dolphin4.png"
                        alt="DolphinAntyAlt4.png"
                      />
                    </p>
                    <p>
                      Kéo thả file vừa lưu vào khung hoặc click "FROM FILE" rồi chọn file sau đó ấn "CREATE PROFILE"
                    </p>
                    <h3>
                      <strong>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>Bước 4.</font>
                        </font>
                      </strong>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>Start profile vừa tạo </font>
                      </font>
                      
                    </h3>
                    <p>
                      <img onClick={()=>setPic('/dolphin5.png')}
                        src="/dolphin5.png"
                        alt="DolphinAntyAlt5.png"
                      />
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}