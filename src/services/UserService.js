import http from "../http-common";
import httpAuth from "../http-common-auth";


// Auth
const get = data => {
  return httpAuth.get(process.env.REACT_APP_API_HOST +"/users/me");
};

const logoutAll = data => {
  return httpAuth.post(process.env.REACT_APP_API_HOST +"/users/logoutAll");
};


// No Auth
const login = data => {
  return http.post(process.env.REACT_APP_API_HOST +"/users/login", data);
};

const register = data => {
  return http.post(process.env.REACT_APP_API_HOST +"/users", data);
};

export default {
  get,
  logoutAll,
  login,
  register
};
