import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Loading from "../Loading/Loading";

const SellAssets = (props) => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("AuthUser");
  const [details, setDetails] = useState({
    soldUnits: "",
  });
  // console.log(details);

  const { soldUnits } = details;

  const inputEvents = (event) => {
    const { name, value } = event.target;

    setDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const onSubmit = async (event) => {
    try {
      event.preventDefault();

      setDetails({ ...details });

      console.log(details);

      var body = [
        {
          assetName: props.data.stockName,
          soldUnits: soldUnits,
        },
      ];
      sellAssets(body);
      // console.log(data);
      // console.log("object");
      // console.log(body);
    } catch (error) {
      console.log("error");
    }
  };
  const sellAssets = async (body) => {
    axios
      .post("http://13.235.250.136:8084/calculateNetworth/sellAssets", body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.data != null) {
          console.log(response.data);
          navigate("/dashboard");
        }
      });
  };
  return (
    <>
      <h2 class="card-title">Sell Stocks</h2>

      <div class="card w-100 h-50 d-flex align-content-center ">
        <div class="card-body">
          <h3>Stock Id : {props.data.stockId}</h3>
          <h3>Stock Name : {props.data.stockName}</h3>
          <h3>Stock Value : {props.data.stockValue}</h3>

          <input
            type="number"
            name="soldUnits"
            id="soldUnits"
            onChange={inputEvents}
            value={soldUnits}
            className="d-flex-row mx-2 p-2"
          />

          <button
            className="btn btn-primary btn-login text-uppercase fw-bold"
            type="submit"
            onClick={onSubmit}
          >
            Sell
          </button>
        </div>
      </div>
    </>
  );
};

export default SellAssets;
