import React from "react";
import ViewMFDetails from "../components/ViewMFDetails/ViewMFDetails";
import Navbar from "../components/Navbar/Navbar";
import WelcomeUser from "../components/WelcomeUser/WelcomeUser";

const ViewMFDeatils = () => {
  return (
    <>
      <Navbar />
      <div className="cantainer w-100 h-100 p-5">
        <WelcomeUser />
        <ViewMFDetails />
      </div>
    </>
  );
};

export default ViewMFDeatils;
