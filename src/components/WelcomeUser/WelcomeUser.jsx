import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../Loading/Loading";

const WelcomeUser = () => {
  const token = sessionStorage.getItem("AuthUser");
  const [name, setName] = useState("Loading");
  useEffect(() => {
    const authorizedUserName = async () => {
      axios
        .get("http://65.0.137.185:8081/getuname", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          if (response.data != null) {
            setName(response.data);
          }
        });
    };

    authorizedUserName();
  }, []);
  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4 ">
        {name == null ? (
          <Loading />
        ) : (
          <h1 class="h2 mb-0 text-gray-800 mt-4 fw-bold">
            Welcome <span style={{ textTransform: "uppercase" }}>{name}</span>{" "}
          </h1>
        )}
      </div>
    </>
  );
};

export default WelcomeUser;
