import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import SellMFAssets from "../components/SellAssets/SellMFAssets";
import Navbar from "../components/Navbar/Navbar";
import WelcomeUser from "../components/WelcomeUser/WelcomeUser";

const SellMFAssetsPage = () => {
  const token = sessionStorage.getItem("AuthUser");
  const { mfname, assets } = useParams();
  console.log(assets);
  const [mfDetails, setMfDetails] = useState({});
  console.log(mfname);
  useEffect(() => {
    const getShareDetails = async () => {
      axios
        .get("http://65.0.137.185:8083/DailyMutualFundNAV/" + `${mfname}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          if (response.data != null) {
            setMfDetails(response.data);
          } else {
            console.log("data not receive");
          }
        });
    };
    getShareDetails();
  }, []);

  return (
    <>
      <Navbar />
      <div className="cantainer w-100 h-100 p-5">
        <WelcomeUser />
        <SellMFAssets data={mfDetails} />
      </div>
    </>
  );
};

export default SellMFAssetsPage;
