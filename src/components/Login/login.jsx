import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [status, setStatus] = useState(false);

  const [name, setName] = useState({
    username: "",
    password: "",
  });

  const { username, password } = name;

  const inputEvents = (event) => {
    const { name, value } = event.target;

    setName((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  var body;
  const onSubmit = async (event) => {
    try {
      event.preventDefault();

      setName({ ...name });

      console.log(name);

      body = {
        username: username,
        password: password,
      };
      axios.post("http://65.0.137.185:8081/getToken", body).then((response) => {
        if (response.data != null) {
          const d = response.data;
          console.log(response);
          sessionStorage.setItem("AuthUser", d.jwttoken);
          // console.log(d.jwttoken);
          console.log(response.data);
          navigate("/dashboard");
        }
      });
      // console.log(data);
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div className="card border-0 shadow rounded-3 my-5 mx-auto">
      <div className="card-body p-4 p-sm-5">
        <h5 className="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
        <form>
          <div className="form-floating mb-3">
            <input
              className="form-control"
              type="email"
              name="username"
              id="username"
              placeholder="Email"
              onChange={inputEvents}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              className="form-control"
              type="password"
              name="password"
              id="password"
              placeholder="password"
              onChange={inputEvents}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="rememberPasswordCheck"
            />
            <label className="form-check-label" for="rememberPasswordCheck">
              Remember password
            </label>
          </div>
          <div className="d-grid">
            <button
              className="btn btn-primary btn-login text-uppercase fw-bold"
              type="submit"
              onClick={onSubmit}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
