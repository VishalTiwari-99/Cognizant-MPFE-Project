import React from "react";
import Login from "../components/Login/login";
import "./login.css";

const LoginPage = () => {
  return (
    <>
      <div className="containers">
        <div className="rows">
          <div className="cols">
            <Login />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
