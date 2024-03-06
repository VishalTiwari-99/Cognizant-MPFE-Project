import React from "react";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import WelcomeUser from "../WelcomeUser/WelcomeUser";
import Loading from "../Loading/Loading";

const ViewDetails = () => {
  const token = sessionStorage.getItem("AuthUser");
  const { sname } = useParams();
  const [stockDeatils, setStockDeatils] = useState({});
  console.log(sname);
  useEffect(() => {
    const getStockDetails = async () => {
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
    getStockDetails();
  }, []);

  return (
    <>
      <div class="card w-100 h-50 d-flex align-content-center ">
        <div class="card-body">
          <h1 class="card-title">Stocks Details</h1>
          <h3>Stock Id : {stockDeatils.stockId}</h3>
          <h3>Stock Name : {stockDeatils.stockName}</h3>
          <h3>Stock Value : {stockDeatils.stockValue}</h3>
        </div>
      </div>
    </>
  );
};

export default ViewDetails;
