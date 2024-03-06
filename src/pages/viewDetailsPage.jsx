import axios from "axios";
import React, { useEffect, useState } from "react";
import ViewDetails from "../components/ViewDeatils/ViewDeatils";
import Navbar from "../components/Navbar/Navbar";
import WelcomeUser from "../components/WelcomeUser/WelcomeUser";

const ViewDetailsPage = () => {
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
      <Navbar />
      <div className="cantainer w-100 h-100 p-5">
        <WelcomeUser />
        <ViewDetails />
      </div>
    </>
  );
};

export default ViewDetailsPage;
