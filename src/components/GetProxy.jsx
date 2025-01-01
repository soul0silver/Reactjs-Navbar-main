import { useEffect, useState } from "react";
import { randProxy } from "../service/proxies/ProxiesService";

export default function GetProxy({ keys, setShow }) {
  const [location, setLocation] = useState([]);
  const [selectedLoc, setSelected] = useState('');
  const [result, setResult] = useState([]);
  const copyToClip = () => {
    window.navigator.clipboard.writeText(result.join('\n'))
  }
  useEffect(() => {

  }, [])

  const getProxies = () => {
    randProxy({ keys: keys, location: selectedLoc }).then(res => {
      console.log(res);

      if (res?.status === 200)
        setResult(res?.data?.map(v => v?.ip + ':' + v?.port))

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
                onClick={() => { getProxies() }}
                className="bg-[#25a945] w-[160px] h-[38px] text-white rounded-sm px-2">Lấy proxy</button>
              {result?.length > 0 && <button
                onClick={() => { copyToClip() }}
                className="bg-[#25a945] w-[160px] h-[38px] text-white rounded-sm px-2">Copy all</button>}
            </div>
            <div className="max-h-[200px] overflow-auto">
              {result?.map((v, i) => <p key={i}>{v}</p>)}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}