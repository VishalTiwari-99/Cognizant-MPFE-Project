import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ROUTES from "./routes";
import LoginPage from "./pages/loginPage";
import DashboardPage from "./pages/dashboardPage";
import StocksPage from "./pages/stocksPage";
import MutualFundsPage from "./pages/mutualFundsPage";
import ViewDetailsPage from "./pages/viewDetailsPage";
import ViewMFDeatils from "./pages/viewMFDeatilsPage";
import SellAssetsPage from "./pages/sellAssetsPage";
import SellMFAssetsPage from "./pages/sellMFAssetsPage";

function App() {
  const { LOGIN, DASHBOARD, STOCK, MUTUALFUND, SELL, SELLMF } = ROUTES;
  return (
    <>
      {" "}
      <Router>
        <Routes>
          <Route exact path={LOGIN} element={<LoginPage />} />
          <Route exact path={DASHBOARD} element={<DashboardPage />} />
          <Route exact path={STOCK} element={<StocksPage />} />
          <Route exact path={MUTUALFUND} element={<MutualFundsPage />} />
          <Route exact path={`${STOCK}/:sname`} element={<ViewDetailsPage />} />
          <Route
            exact
            path={`${MUTUALFUND}/:mfname`}
            element={<ViewMFDeatils />}
          />
          <Route exact path={`${SELL}/:sname`} element={<SellAssetsPage />} />
          <Route
            exact
            path={`${SELLMF}/:mfname`}
            element={<SellMFAssetsPage />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
