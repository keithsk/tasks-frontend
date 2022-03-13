import React, { useState, useEffect } from "react";
import UserDataService from "../services/UserService";

const Register = props => {

  const initialRegisterState = {
    name: null,
    email: null,
    password: null
  };
  const [register, setRegister] = useState(initialRegisterState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setRegister({ ...register, [name]: value });
  };

  const registerNewUser = () => {

      var data = {
        name: register.name,
        email: register.email,
        password: register.password,
      };

      UserDataService.register(data)
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
          <h4>Register</h4>

          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" className="form-control" id="name" name="name" value={register.name} onChange={handleInputChange} required/>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="text" className="form-control" id="email" name="email" value={register.email} onChange={handleInputChange} required/>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" name="password" value={register.password} onChange={handleInputChange} required/>
          </div>

          <button onClick={registerNewUser} className="btn btn-primary">Register</button>
      </div>
    </div>
  );

};

export default Register;
