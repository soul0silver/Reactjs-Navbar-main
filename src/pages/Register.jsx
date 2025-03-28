import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { getUser, sigup } from "../service/auth/LoginService";

function Resgister() {
  const regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const [form, setForm] = useState({ email: '', password: '', rePassword: '' });
  const { checkLogin, updateUserInfo } = useContext(AuthContext)
  const navigate = useNavigate()
  const handleRegister = (body) => {
    sigup(form).then(res=>{
      if (res?.status === 200) {
        alert('Đăng ký thành công!');
        navigate('/login')
      }
      else {
        alert(res?.response?.data)
      }
    })
  }

  useEffect(() => {
    if (checkLogin()) {
      getUser().then(res => {
        if (res?.status === 200) {
          navigate("/")
        }
      })
    }
  }, [])
  return (
    <>
      <div className="relative w-full h-[100vh] z-0">
        <div className="w-full h-full absolute z-[1] top-0 left-0 flex items-center justify-center" style={{ backgroundImage: "url('/ai4.png')" }}>
          <div className="rounded-lg bg-white w-[400px] p-5">
            <div className="w-full text-center pb-4">
              <span class="text-blue-800 font-bold text-[24pt]">Đăng ký</span>
            </div>

            <form onSubmit={(e)=>{e.preventDefault()}}>
              <div className="relative">
                <div class="mb-6 flex flex-row justify-center items-center ">
                  <input type="email" name="name" id="name" placeholder="Địa chỉ email"
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
                {form.email === null &&
                  <p className="absolute bottom-[-20px] text-sm text-red-500">Email không được để trống</p>}
                {
                  form.email !== null && form.email!=='' && !emailRegex.test(form.email) &&
                  <p className="absolute bottom-[-20px] text-sm text-red-500">Email không đúng định dạng</p>
                }
              </div>
              <div className="relative">
                <div class="mb-6 flex flex-row justify-center items-center ">
                  <input type="password" name="name" id="name" placeholder="Mật khẩu"
                    value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value, email: form.email==='' ? null : form.email })}
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
                {form.password!=='' && !regularExpression.test(form.password) && <div className="relative bottom-[20px]">
                  <p className="text-sm text-red-500">Mật khẩu phải gồm 6-16 ký tự</p>
                  <p className="text-sm text-red-500">Mật khẩu phải có ít nhất 1 ký tự đặc biệt</p>
                  <p className="text-sm text-red-500">Mật khẩu phải có ít nhất 1 số</p>
                </div>}
              </div>
              <div className="relative">
                <div class="mb-6 flex flex-row justify-center items-center ">
                  <input type="password" name="name" id="name" placeholder="Nhập lại mật khẩu"
                    value={form.rePassword} onChange={(e) => setForm({ ...form, rePassword: e.target.value })}
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
                {form.rePassword !== form.password && form.password !== '' &&
                  <p className="absolute bottom-[-20px] text-sm text-red-500">Mật khẩu không khớp</p>}
              </div>
              <div className="flex flex-row items-center space-x-3">
                <input type="checkbox" className="" required />
                <span>Tôi đã đọc và đồng ý với <a className="text-blue-400" href="#">điều khoản</a></span>
              </div>

              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  handleRegister(form);

                }}
                class="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded">Đăng ký</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resgister;
