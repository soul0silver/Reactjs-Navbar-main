import { useContext, useEffect, useState } from "react";
import { randProxy } from "../service/proxies/ProxiesService";
import { AuthContext } from "../context/AuthProvider";

export default function GetProxy({ keys, setShow }) {
  const [location, setLocation] = useState([]);
  const [selectedLoc, setSelected] = useState('');
  const [result, setResult] = useState([]);
  const {seconds, setSeconds} = useContext(AuthContext)
  const copyToClip = () => {
    // navigator.clipboard.writeText(result.join('\n'))
    var a = document.createElement("a");
    var json = result.join('\n'),
        blob = new Blob([json], {type: "octet/stream"}),
        url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = 'proxy.txt';
    a.click();
    window.URL.revokeObjectURL(url);
  }

  const getProxies = () => {
    setSeconds(180)
    randProxy({ keys: keys?.map(k=>k?.keyProxy), location: selectedLoc }).then(res => {
      if (res?.status === 200){
        setResult(res?.data)
      }
    })
  }

  
  
  return (
    <>
      <div className="fixed top-0 left-0 z-10 w-full 
      h-full flex flex-col items-center justify-center popup-backgorund"
      >
        <div onClick={() => setShow()}
          className="absolute top-0 left-0 w-full h-full popup-backgorund z-[11]"></div>
        <div className="relative z-[12] lg:w-[25%] w-[80%] rounded-lg popup-buy-key ">
          <div className="px-[15px] py-[15px] bg-[#27a844] popup-header flex justify-between">
            <h1>Lấy proxy </h1>
            <button onClick={() => setShow()}>
              <span className="text-xl" aria-hidden="true">×</span>
            </button>

          </div>
          <div className="p-[15px] flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="">Chọn khu vực</label>
              <select value={selectedLoc}
                onChange={(e) => {
                  setSelected(e.target.value);
                }}
                class="w-full border h-[38px] border-gray-300 pl-3  outline-none
                 focus:border-indigo-600 :ring-indigo-600"
              >
                <option value="HANOI">Hà Nội</option>
                <option value="QUANGNINH">Quảng Ninh</option>
              </select>
            </div>
            <div className=" flex justify-between">
              <button
                onClick={(e) => { e.preventDefault() ;getProxies() }}
                disabled={seconds>0}
                className="bg-[#25a945] w-[160px] h-[38px] text-white rounded-sm px-2">{seconds > 0 ? seconds : "Lấy proxy"}</button>
              {result?.length > 0 && <button
                onClick={() => { copyToClip() }}
                className="bg-[#25a945] w-[160px] h-[38px] text-white rounded-sm px-2">Copy all</button>}
            </div>
            <div className="max-h-[200px] overflow-auto w-full flex flex-wrap justify-between">
              {result?.map((v, i) => <div key={i}>{v}</div>)}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}