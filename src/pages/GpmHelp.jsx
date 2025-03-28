import { useState } from "react";
import Subheader from "../components/Subheader";

export default function GPMHelp() {
  const [pic, setPic]=useState();
  return (
    <>
      <Subheader page={'Hướng dẫn'} />
      {pic && <div onClick={() => setPic()} className="fixed z-[21] top-0 left-0 w-full h-full flex flex-col items-center justify-center popup-backgorund lg:p-[300px]">
        <img src={pic} alt="" />
      </div>}
      <div className="w-full flex flex-col justify-center items-center py-8 help-page">
        <div className="flex flex-col justify-center items-center lg:max-w-[1000px]">
          <div className="mb-[60px]">
            <span className="capitalize text-[30px] text-[rgb(19,40,126)]" style={{ fontWeight: 700 }}>Hướng dẫn sử dụng proxy với GPM Login</span>
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
                          GPM Login là gì?
                          </font>
                        </font>
                      </h1>
                      <p className="text-[18px] leading-[160%] text-justify">
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                          GPMLogin là một phần mềm giúp tạo ra môi trường làm việc ảo an toàn, sử dụng nhiều profile khác nhau, với mỗi profile đại diện cho một thiết bị riêng biệt. Điều này giúp người dùng ẩn danh và phục vụ nhiều mục đích như quản lý tài khoản, seeding, airdrop, MMO, POD và các hoạt động khác liên quan đến kiếm tiền online.
                          </font>
                        </font>
                      </p>
                    </div>
                  </div>

                  <div
                    id="Dolphin Anty’s Proxy Settings Method 2"
                    className="article-body"
                  >
                    <h2>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Phương pháp tạo profile của GPM Login theo cách thủ công
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
                          Mở GPM Login nếu chưa chọn thư mục lưu profiles, và nhấp vào nút “
                        </font>
                      </font>
                      <strong>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>...</font>
                        </font>
                      </strong>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>”.</font>
                      </font>
                    </h3>
                    <p>
                      <img onClick={()=>setPic('/gpm1.png')}
                        src="/gpm1.png"
                        alt="gpm1.png"
                      />
                    </p>
                    <h3>
                      <strong>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>Bước 2.</font>
                        </font>
                      </strong>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>Tạo thư mục để lưu profiles và chọn áp dụng </font>
                      </font>
                      
                    </h3>
                    <p>
                      <img onClick={()=>setPic('/gpm2.png')}
                        src="/gpm2.png"
                        alt="gpm.png"
                      />
                    </p>
                    <h3>
                      <strong>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>Bước 3.</font>
                        </font>
                      </strong>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>Mở tab "Quản lý profile" và chọn "Thêm mới" </font>
                      </font>
                      
                    </h3>
                    <p>
                      <img onClick={()=>setPic('/gpm3.png')}
                        src="/gpm3.png"
                        alt="gpm3.png"
                      />
                    </p>
                    <h3>
                      <strong>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>Bước 4.</font>
                        </font>
                      </strong>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>Điền thông tin cần thiết để tạo profile (host và post của proxy trong file proxy đã tải vể) </font>
                      </font>
                      
                    </h3>
                    <p>
                      <img onClick={()=>setPic('/gpm4.png')}
                        src="/gpm4.png"
                        alt="gpm4.png"
                      />
                    </p>
                    <p>
                      <img onClick={()=>setPic('/gpm5.png')}
                        src="/gpm5.png"
                        alt="gpm5.png"
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
                          Phương pháp tạo profile của GPM Login từ file template
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
                          Mở GPM Login vào tab "Quản lý profile", và nhấp vào nút “
                        </font>
                      </font>
                      <strong>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>Từ Excel</font>
                        </font>
                      </strong>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>”.</font>
                      </font>
                    </h3>
                    <p>
                      <img onClick={()=>setPic('/gpm6.png')}
                        src="/gpm6.png"
                        alt="gpm6.png"
                      />
                    </p>
                    <h3>
                      <strong>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>Bước 2.</font>
                        </font>
                      </strong>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>Chọn xem file mẫu và điển thông tin profile bắt đầu từ dong thứ 4 </font>
                      </font>
                      
                    </h3>
                    <p>
                      - Cột "Connecttion Type" điền <b>Proxy</b> <br />
                      - Cột "Connection data" điền thông tin proxy lấy trong file "proxy.txt" đã tải về
                    </p>
                    <p>
                      <img onClick={()=>setPic('/gpm7.png')}
                        src="/gpm7.png"
                        alt="gpm7.png"
                      />
                    </p>
                    <h3>
                      <strong>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>Bước 3.</font>
                        </font>
                      </strong>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>Lưu file excel và ấn "Từ Excel" {'->'} "Chọn" để chọn file excel vừa lưu </font>
                      </font>
                      
                    </h3>
                    <p>
                      <img onClick={()=>setPic('/gpm8.png')}
                        src="/gpm8.png"
                        alt="gpm8.png"
                      />
                    </p>
                    <h3>
                      <strong>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>Bước 4.</font>
                        </font>
                      </strong>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>Tạo profile thành công </font>
                      </font>
                      
                    </h3>
                    <p>
                      <img onClick={()=>setPic('/gpm9.png')}
                        src="/gpm9.png"
                        alt="gpm9.png"
                      />
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}