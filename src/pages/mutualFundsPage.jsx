import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import MutualFunds from "../components/MutualFunds/MutualFunds";
import Navbar from "../components/Navbar/Navbar";
import WelcomeUser from "../components/WelcomeUser/WelcomeUser";

const MutualFundsPage = () => {
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
        <MutualFunds />
      </div>
    </>
  );
};

export default MutualFundsPage;
