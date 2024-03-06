import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

const UserMutualFund = () => {
  const token = sessionStorage.getItem("AuthUser");
  const [mutualfunddata, setMutualfunddata] = useState([]);
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
        //console.log(response.data.mutualFundList);
        setMutualfunddata(response.data.mutualFundList);
      }
    });
  return (
    <>
      <h1>User Mutual Funds</h1>

      <div class="card">
        <div class="card-body">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">S.no</th>
                <th scope="col">MutualFund Id</th>
                <th scope="col">Mutual Fund Name</th>
                <th scope="col">Mutual Fund Units</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mutualfunddata.map((ufund) => (
                <tr>
                  <th scope="row">{(sno = sno + 1)}</th>
                  <td>{ufund.mfId}</td>
                  <td>{ufund.mutualFundName}</td>
                  <td>{ufund.mutualFundUnits}</td>
                  <td>
                    <Link to={`/viewMutualFunds/${ufund.mutualFundName}`}>
                      <button type="button" class="btn btn-primary">
                        View
                      </button>
                    </Link>
                    &nbsp;
                    <Link to={`/sellMFAssets/${ufund.mutualFundName}`}>
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

export default UserMutualFund;
