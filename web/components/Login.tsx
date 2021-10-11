import Icons from "assets";
import React, { useEffect } from "react";
import GoogleLogin from "react-google-login";
import { atom, useRecoilState } from "recoil";
import style from "./Login.module.scss";
import { useLogin } from "./useLogin";

export interface ILogin {
  visible: boolean;
  setLoginPanelVisible(visible: boolean): void;
  onClose(): void;
  onLoginSuccess(res: any): void;
  onLoginFail(res: any): void;
}

const Login = () => {
  const {
    visible,
    setLoginPanelVisible,
    onClose,
    onLoginSuccess,
    onLoginFail,
  } = useLogin();

  return (
    <>
      {visible && (
        <section className={style.container}>
          <div className={style.header}>
            <span>로그인</span>
            <img
              onClick={onClose}
              className={style.closeBtn}
              src={Icons.ic_close}
            ></img>
          </div>
          <label className={style.loginBtn}>
            <GoogleLogin
              clientId={process.env.GOOGLE_LOGIN_API || ""}
              onSuccess={onLoginSuccess}
              onFailure={onLoginFail}
              buttonText=""
              icon={false}
            >
              <img className={style.logo} src={Icons.ic_login_google}></img>
              <span className={style.text}>GOOGLE</span>
            </GoogleLogin>
          </label>
        </section>
      )}
    </>
  );
};
export default Login;
