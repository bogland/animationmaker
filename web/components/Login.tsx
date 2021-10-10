import React, { useEffect } from "react";
import GoogleLogin from "react-google-login";
import { atom, useRecoilState } from "recoil";
import style from "./Login.module.scss";

export const LoginPanelState = atom({
  key: "loginPanel", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

const Login = ({}) => {
  const [visible, setVisible] = useRecoilState(LoginPanelState);
  useEffect(() => {}, []);
  const onClose = () => {
    setVisible(false);
  };

  const onLoginSuccess = (res: any) => {
    console.log("성공");
    console.log(res.profileObj);
    setVisible(false);

    /*
    email
    name
    imageUrl
    */
  };
  const onLoginFailed = (res: any) => {
    console.log("실패");
    console.log(res);
  };
  return (
    <>
      {visible && (
        <section className={style.container}>
          <div onClick={onClose}>닫기</div>
          <GoogleLogin
            clientId={process.env.GOOGLE_LOGIN_API || ""}
            onSuccess={onLoginSuccess}
            onFailure={onLoginFailed}
            buttonText="로그인"
          />
        </section>
      )}
    </>
  );
};
export default Login;
