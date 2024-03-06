import React from "react";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Loading from "../Loading/Loading";

const ViewMFDetails = () => {
  const token = sessionStorage.getItem("AuthUser");
  const { mfname } = useParams();
  const [mfDetails, setMfDetails] = useState({});
  //console.log(sname)
  useEffect(() => {
    const getMFDetails = async () => {
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
    getMFDetails();
  }, []);

  return (
    <>
      <div class="card w-100 h-50 d-flex align-content-center ">
        <div class="card-body">
          <h1 class="card-title">Mutual Details</h1>
          <h3>Mutual Fund Id:{mfDetails.mutualFundId}</h3>
          <h3>Mutual Fund Name:{mfDetails.mutualFundName}</h3>
          <h3>Mutual Fund Value:{mfDetails.mutualFundValue}</h3>
        </div>
      </div>
    </>
  );
};

export default ViewMFDetails;
