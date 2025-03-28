import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { getUser, login } from "../service/auth/LoginService";
import { AuthContext } from "../context/AuthProvider";

export default function AuthPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const { checkLogin, updateUserInfo } = useContext(AuthContext)
  const navigate = useNavigate()
  const handleLogin = (body) => {
    login(body).then(res => {
      if (res.status === 200) {
        localStorage.setItem('token', res.data.token);
        updateUserInfo()
        alert("Đăng nhập thành công!");
        window.location.href = "/"
      }
      else {
        alert(res.data)
      }
    })
  }

  useEffect(() => {
    if (checkLogin()) {
      getUser().then(res => {
        if (res?.status ===200){
          navigate("/")
        }
      })
    }
  }, [])
  return (
    <div className="relative w-full h-[100vh] z-0">
      <div className="w-full h-full absolute z-[1] top-0 left-0 flex items-center justify-center" style={{ backgroundImage: "url('/ai4.png')" }}>
        <div className="rounded-lg bg-white w-[400px] p-5">
          <div className="w-full text-center pb-4">
            <span class="text-blue-800 font-bold text-[24pt]">Đăng Nhập</span>
          </div>

          <form >
            <div class="mb-6 flex flex-row justify-center items-center ">
              <input type="text" name="name" id="name" placeholder="Địa chỉ email"
                required
                value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                class="w-full border h-[38px] border-gray-300 py-2 pl-3 border-r-0 outline-none
                 focus:border-indigo-600 :ring-indigo-600"
                style={{ borderTopLeftRadius: "4px", borderBottomLeftRadius: '4px' }}
              />

              <div className="w-[38px] h-[38px] flex flex-col
               justify-center items-center  bg-[#e9ecec] border border-gray-300"
                style={{ borderTopRightRadius: '4px', borderBottomRightRadius: '4px' }}>
                <span class="fa fa-user"></span>
              </div>
            </div>
            <div class="mb-6 flex flex-row justify-center items-center ">
              <input type="password" name="name" id="name" placeholder="Mật khẩu"
                value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
                class="w-full border h-[38px] border-gray-300 py-2 pl-3 border-r-0 outline-none
                 focus:border-indigo-600 :ring-indigo-600"
                style={{ borderTopLeftRadius: "4px", borderBottomLeftRadius: '4px' }}
              />

              <div className="w-[38px] h-[38px] flex flex-col
               justify-center items-center  bg-[#e9ecec] border border-gray-300"
                style={{ borderTopRightRadius: '4px', borderBottomRightRadius: '4px' }}>
                <span class="fa fa-lock"></span>
              </div>
            </div>
            <button
            disabled={form.email === '' || form.password===''}
              onClick={(e) => {
                e.preventDefault();
                handleLogin(form);

              }}
              class="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded">Đăng nhập</button>
          </form>
        </div>
      </div>
    </div>
  )
}