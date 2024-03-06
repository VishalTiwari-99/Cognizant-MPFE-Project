import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import UserMutualFund from "../components/UserMutualFund/UserMutualFund";
import UserStocks from "../components/UserStocks/UserStocks";
import WelcomeUser from "../components/WelcomeUser/WelcomeUser";

const DashboardPage = () => {
  const token = sessionStorage.getItem("AuthUser");
  const [netWorth, setNetWorth] = useState("");
  // console.log(sessionStorage.getItem("AuthUser"));
  useEffect(() => {
    const authorizedUserBetWorth = async () => {
      axios
        .get("http://13.235.250.136:8084/calculateNetworth/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          if (response.data != null) {
            // sessionStorage.setItem("AuthUser", JSON.stringify(d.jwttoken));
            // console.log(d.jwttoken);
            console.log(response.data);
            setNetWorth(response.data);
          } else {
            console.log("data not receive");
          }
        });
    };
    authorizedUserBetWorth();
  }, []);

  return (
    <>
      <Navbar />
      <div className="cantainer w-100 h-100 p-5">
        <WelcomeUser />
        <div class="card mb-5 d-flex align-content-center justify-content-center">
          <div class="card-header">
            <h3 class=" text-gray-800 mt-4 card-title">
              Total NetWorth {netWorth}
            </h3>
          </div>
        </div>

        <UserStocks />
        <UserMutualFund />
      </div>
    </>
  );
};

export default DashboardPage;
