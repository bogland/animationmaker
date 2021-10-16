import { useDispatch, useSelector } from "react-redux";
import { atom, useRecoilState } from "recoil";
import { UserInfo, userLogin, userVerify } from "service/serviceUser";
import { ILogin } from "./Login";
import { setAuth } from "./reducers/AuthReducer";
import { RootReducerType } from "./store/RootReducer";

export const LoginPanelState = atom({
  key: "Login", // unique ID (with respect to other atoms/selectors)
  default: { visible: false }, // default value (aka initial value)
});

export const useLogin = (): ILogin => {
  const { token } = useSelector((state: RootReducerType) => state.auth);
  const dispatch = useDispatch();
  const [state, setState] = useRecoilState(LoginPanelState);
  const visible = state.visible;
  const setLoginPanelVisible = (visible: boolean) => {
    setState({ visible: visible });
  };
  const onClose = () => {
    setLoginPanelVisible(false);
  };
  const onLoginSuccess = async (res: any) => {
    setLoginPanelVisible(false);
    console.log(res);
    const data: UserInfo = {
      email: res.profileObj.email,
      username: res.profileObj.username,
      type: "google",
    };
    console.log("apiURL : ", process.env.APIURL);
    const token: string = await userLogin(data);
    dispatch(setAuth({ token, username: data.username, email: data.email }));
  };
  const onLoginFail = (res: any) => {
    console.log("실패");
    console.log(res);
  };
  return {
    visible,
    setLoginPanelVisible,
    onClose,
    onLoginFail,
    onLoginSuccess,
  };
};
