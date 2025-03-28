import { useState } from "react";
import Subheader from "../components/Subheader";

export default function Tutorial() {
  const [pic, setPic] = useState();
  return (
    <>
      <Subheader page={'Hướng dẫn'} />
      <div className="w-full flex flex-col justify-center items-center py-8 help-page">
        <div className="flex flex-col justify-center items-center lg:max-w-[1000px]">
          <div className="mb-[60px]">
            <span className="capitalize text-[30px] text-[rgb(19,40,126)]" style={{ fontWeight: 700 }}>Hướng dẫn sử dụng proxy</span>
          </div>
          <div className="w-full policy lg:px-[90px] px-[15px] lg:min-w-[1000px]">
            <div className="flex flex-col gap-10 lg:gap-[60px] mb-16 lg:mb-40">
              <div className="grid  md:gap-10 lg:gap-28">
                <div
                  id="Dolphin Anty’s Proxy Settings Method 2"
                  className="article-body"
                >
                  <h2 className="font-bold text-2xl">
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Hướng dẫn sử dụng với một số tool phổ biến
                      </font>
                    </font>
                  </h2>
                </div>
                <div id="Steps" className="article-body">
                  <a href="/help/dolphin-anty" className="text-xl hover:text-blue-500">
                    <strong>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>1. </font>
                      </font>
                    </strong>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Sử dụng với Dolphin Anty 
                      </font>
                    </font>
                  </a>
                  <br />
                  <a href="/help/gpm-login" className="text-xl hover:text-blue-500">
                    <strong>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>2. </font>
                      </font>
                    </strong>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Sử dụng với GPM Login
                      </font>
                    </font>
                  </a>
                </div>

                <div
                  id="Dolphin Anty’s Proxy Settings Method 2"
                  className="article-body"
                >
                  <h2 className="font-bold text-2xl">
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Ngoài ra có thể tham khảo thêm một số tool khác
                      </font>
                    </font>
                  </h2>
                  <br />
                  <div>
                  <p>- <a className="text-xl hover:text-blue-500" href="https://gologin.com/">GoLogin</a></p>
                  <p>- <a className="text-xl hover:text-blue-500" href="https://www.vmlogin.us/">VM Login</a></p>
                  <p>- <a className="text-xl hover:text-blue-500" href="https://www.vmlogin.us/">AdsPower</a></p>
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