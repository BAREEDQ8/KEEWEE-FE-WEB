import instance from "..";
import jwt_Decode from "jwt-decode";

const storeToken = (token) => {
  localStorage.setItem("token", token);
};

const signin = async (userinfo) => {
  const res = await instance.post("/signin", userinfo);
  const { token } = res.data;
  storeToken(token);
  return res.data;
};

const checkToken = () => {
  const token = localStorage.getItem("token");

  if (token) {
    const decoded = jwt_Decode(token);
    const currentTime = Date.now() / 1000;
    console.log(token);
    if (decoded.exp < currentTime) {
      localStorage.removeItem("token");
      return false;
    }
    return true;
  }
  return false;
};

const signout = () => {
  localStorage.removeItem("token");
};

export { signin, signout, checkToken };
