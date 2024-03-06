import React from "react";
import axios from "axios";
import { useState } from "react";
import Loading from "../Loading/Loading";

const Stocks = () => {
  const token = sessionStorage.getItem("AuthUser");
  const [stockdata, setStockdata] = useState([]);
  const [loading, setLoading] = useState(true);
  var sno = 0;

  // console.log(sessionStorage.getItem("AuthUser"));
  axios
    .get("http://65.0.137.185:8082/DailySharePrice/allstock", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (response.data != null) {
        // sessionStorage.setItem("AuthUser", JSON.stringify(d.jwttoken));
        // console.log(d.jwttoken);
        console.log(response.data);
        setStockdata(response.data);
        setLoading(false);
      }
    });
  // const incrementsno = () =>{
  //   setSno(sno+1);
  // };
  return (
    <>
      <h1>All Stocks</h1>

      <div class="card">
        <div class="card-body">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">S.no</th>
                <th scope="col">Stock Id</th>
                <th scope="col">Stock Name</th>
                <th scope="col">Stock Value</th>
              </tr>
            </thead>
            <tbody>
              {stockdata.map((stock) => (
                <tr>
                  <th scope="row">{(sno = sno + 1)}</th>
                  <td>{stock.stockId}</td>
                  <td>{stock.stockName}</td>
                  <td>{stock.stockValue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Stocks;
