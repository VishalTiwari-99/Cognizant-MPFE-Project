import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

const UserStocks = () => {
  const token = sessionStorage.getItem("AuthUser");
  const [stocksdata, setStockdata] = useState([]);
  //const [sno, setSno] = useState(1);
  var sno = 0;
  //console.log(sessionStorage.getItem("AuthUser"));
  axios
    .get("http://13.235.250.136:8084/calculateNetworth/viewAsset", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if (response.data != null) {
        // sessionStorage.setItem("AuthUser", JSON.stringify(d.jwttoken));
        // console.log(d.jwttoken);
        // console.log(response.data.stockDetailList);
        setStockdata(response.data.stockDetailList);
      }
    });
  return (
    <>
      <h1>User Stocks</h1>

      <div class="card mb-5">
        <div class="card-body">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">S.no</th>
                <th scope="col">Stock Id</th>
                <th scope="col">StockName</th>
                <th scope="col">Stock count</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {stocksdata.map((ustock) => (
                <tr>
                  <th scope="row">{(sno = sno + 1)}</th>
                  <td>{ustock.stId}</td>
                  <td>{ustock.stockName}</td>
                  <td>{ustock.stockCount}</td>
                  <td>
                    <Link to={`/viewStocks/${ustock.stockName}`}>
                      <button type="button" class="btn btn-primary">
                        View
                      </button>
                    </Link>
                    &nbsp;
                    <Link to={`/sellAssets/${ustock.stockName}`}>
                      <button type="button" class="btn btn-danger">
                        Sell
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserStocks;
