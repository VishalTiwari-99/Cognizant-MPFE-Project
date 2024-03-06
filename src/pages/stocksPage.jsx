import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Stocks from "../components/Stocks/Stocks";
import WelcomeUser from "../components/WelcomeUser/WelcomeUser";

const StocksPage = () => {
  const token = sessionStorage.getItem("AuthUser");
  const [name, setName] = useState("Loading");
  useEffect(() => {
    const authorizedUserName = async () => {
      axios
        .get("http://65.0.137.185:8081/getuname", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          if (response.data != null) {
            setName(response.data);
          }
        });
    };

    authorizedUserName();
  }, []);
  return (
    <>
      <Navbar />
      <div className="cantainer w-100 h-100 p-5">
        <WelcomeUser />
        <Stocks />
      </div>
    </>
  );
};

export default StocksPage;
