/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Image } from "antd";
import { ButtonComponent } from "../../components/ButtonComponent/ButtonComponent";
import { InputForm } from "../../components/InputForm/InputForm";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";




export const SignInPage = () => {
  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate("/sign-up");
  };



  const [isShowPassword, setIsShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
 

  const handleOnchangeEmail = (value) => {
    setEmail(value);
  };
  const handleOnchangePassword = (value) => {
    setPassword(value);
  };


  return (
    <div
      className="flex justify-center items-center h-[100vh] px-5"
      style={{ background: "rgba(0,0,0,0.53)" }}
    >
      
      <div className="min-[770px]:w-[800px] min-[770px]:h-[445px] rounded-lg bg-white flex">
        <div className="min-[770px]:w-[500px] pt-10 pb-6 px-[45px] flex flex-1 flex-col">
          <div className="pt-10">
            <h1 className="text-2xl font-bold">Xin chào</h1>
            <p className="text-sm mt-1 mb-5">Đăng nhập hoặc tạo tài khoản</p>
            <InputForm
              className="mb-2"
              placeholder="abc@gmail.com"
              value={email}
              handleonchange={handleOnchangeEmail}
            />
            <div className="relative">
              <span
                className="z-10 absolute top-1 right-2"
                onClick={() => {
                  setIsShowPassword(!isShowPassword);
                }}
              >
                {isShowPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
              </span>
            </div>
            <InputForm
              placeholder="Password"
              type={isShowPassword ? "text" : "password"}
              value={password}
              handleonchange={handleOnchangePassword}
            />
            
            
              <ButtonComponent
                disabled={!email.length || !password.length}
                className="rounded w-full mt-[30px] mb-[23px]"
                danger
                type="primary"
                textButton="Đăng Nhập"
                size="large"
                
              />
            
            <p className="text-sm text-[#0D5CB6]">Quên mật khẩu?</p>
            <p className="text-sm">
              Chưa có tài khoản?{" "}
              <span
                onClick={handleSignUp}
                className="text-[#0D5CB6] cursor-pointer hover:underline"
              >
                Tạo tài khoản
              </span>
            </p>
          </div>
        </div>
        <div
          style={{
            background:
              "linear-gradient(136deg, rgb(240, 248, 255) -1%, rgb(219, 238, 255) 85%",
          }}
          className="w-[300px] h-full min-[770px]:flex justify-center flex-col items-center gap-1 text-blue-600 rounded-r-lg hidden"
        >
          <Image
            width="203px"
            height="203px"
            className="rounded-full object-cover"
            src="https://th.bing.com/th/id/OIP.f955eR5C2FAkk9FL5bbarAHaEK?w=296&h=180&c=7&r=0&o=5&pid=1.7"
            preview={false}
          />
          <h4 className="font-semibold">Mua sắm tại Techtrovedecor</h4>
          <p className="text-sm">Siêu ưu đãi mỗi ngày</p>
        </div>
      </div>
    </div>
  );
};
