import React, { useState, useEffect } from "react";
import UserDataService from "../services/UserService";
import { Link } from "react-router-dom";

const Login = props => {

  const initialLoginState = {
    email: null,
    password: null
  };
  const [login, setLogin] = useState(initialLoginState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setLogin({ ...login, [name]: value });
  };

  const verifyLogin = () => {

      var data = {
        email: login.email,
        password: login.password,
      };

      UserDataService.login(data)
        .then(response => {
          console.log(response.data);
          localStorage.setItem("token", response.data.token);
        })
        .catch(e => {
          console.log(e);
        });

  };

  return (
    <div className="submit-form">
      <div>
          <h4>Login</h4>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="text" className="form-control" id="email" name="email" value={login.email} onChange={handleInputChange} required/>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" name="password" value={login.password} onChange={handleInputChange} required/>
          </div>

          <button onClick={verifyLogin} className="btn btn-primary">Login</button>

          <Link to={"/register"} className="btn btn-link">Register</Link>
      </div>
    </div>
  );

};

export default Login;
