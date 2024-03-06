import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const logoutUser = () => {
    sessionStorage.removeItem("AuthUser");
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <div className="conatainer">
      <nav className="navbar navbar-expand-lg   navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/dashboard" className="navbar-brand">
            Portfolio Management System
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/viewStocks" className="nav-link">
                Stocks
              </Link>
              <Link to="/viewMutualFunds" className="nav-link">
                Mutual Funds
              </Link>
              <button
                class="btn btn-sm btn-outline-danger"
                onClick={logoutUser}
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
