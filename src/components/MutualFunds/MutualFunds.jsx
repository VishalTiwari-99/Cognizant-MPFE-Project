import React from "react";
import axios from "axios";
import { useState } from "react";
import Loading from "../Loading/Loading";

const MutualFunds = () => {
  const token = sessionStorage.getItem("AuthUser");
  const [funddata, setFunddata] = useState([]);
  var sno = 0;

  // console.log(sessionStorage.getItem("AuthUser"));

  const getAllMutulFund = async () => {
    console.log(token);
    axios
      .get("http://65.0.137.185:8083/DailyMutualFundNAV/allmf", {
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
          setFunddata(response.data);
        }
      });
  };
  getAllMutulFund();

  //   const incrementsno = () =>{
  //     setSno(sno+1);
  //   };
  return (
    <>
      <h1>All MutualFunds</h1>

      <div class="card">
        <div class="card-body">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">S.no</th>
                <th scope="col">MutualFund Id</th>
                <th scope="col">MutualFund Name</th>
                <th scope="col">MutualFund Value</th>
              </tr>
            </thead>
            <tbody>
              {funddata.map((mfund) => (
                <tr>
                  <th scope="row">{(sno = sno + 1)}</th>
                  <td>{mfund.mutualFundId}</td>
                  <td>{mfund.mutualFundName}</td>
                  <td>{mfund.mutualFundValue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MutualFunds;
