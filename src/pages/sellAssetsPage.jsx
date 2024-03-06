import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import SellAssets from "../components/SellAssets/SellAssets";
import Navbar from "../components/Navbar/Navbar";
import WelcomeUser from "../components/WelcomeUser/WelcomeUser";

const SellAssetsPage = () => {
  const token = sessionStorage.getItem("AuthUser");
  const { sname, assets } = useParams();
  console.log(assets);
  const [stockDeatils, setStockDeatils] = useState({});
  console.log(sname);
  useEffect(() => {
    const getShareDeatils = async () => {
      axios
        .get("http://65.0.137.185:8082/DailySharePrice/" + `${sname}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          if (response.data != null) {
            setStockDeatils(response.data);
          } else {
            console.log("data not receive");
          }
        });
    };
    getShareDeatils();
  }, []);

  return (
    <>
      <Navbar />
      <div className="cantainer w-100 h-100 p-5">
        <WelcomeUser />
        <SellAssets data={stockDeatils} />
      </div>
    </>
  );
};

export default SellAssetsPage;
