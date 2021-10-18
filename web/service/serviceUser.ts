import Axios from "axios";
import { APIURL } from "config";
Axios.defaults.baseURL = APIURL;
console.log(APIURL);

export const userVerify = async (token: string): Promise<boolean> => {
  console.log("api Url : ", process.env.APIURI);
  const res: any = await Axios.get("user/verify", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res?.data;
};

export class UserInfo {
  email: string = "test@gmail.com";
  username: string = "test";
  type: string = "google";
}

export const userLogin = async (data: UserInfo): Promise<string> => {
  console.log(data);
  console.log("api Url : ", process.env.APIURI);
  const res: any = await Axios.post("user/login", data, {});
  return res?.data;
};
