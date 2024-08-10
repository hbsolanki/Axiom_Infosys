import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Utils/Header";
import Footer from "./Components/Utils/Footer";

import Home from "./Components/Home/Home";

import Services from "./Components/Services/Services";
import CCTV from "./Components/Services/CCTV";
import DataRecovery from "./Components/Services/DataRecovery";
import DesktopPC from "./Components/Services/DesktopPC";
import Laptops from "./Components/Services/Laptops";
import NetworkServers from "./Components/Services/NetworkServers";
import Printers from "./Components/Services/Printers";
import Projector from "./Components/Services/Projector";
import ComputerAccessories from "./Components/Services/ComputerAccessories";
import SoftwareInstallation from "./Components/Services/SoftwareInstallation";

import Contact from "./Components/Contact/Contact";
import AboutUs from "./Components/AboutUs/AboutUs";
import PageNotFound from "./Components/Utils/PageNotFound";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/services" element={<Services />} />
          <Route path="/cctv" element={<CCTV />} />
          <Route path="/datarecovery" element={<DataRecovery />} />
          <Route path="/desktoppc" element={<DesktopPC />} />
          <Route path="/laptops" element={<Laptops />} />
          <Route path="/networkservers" element={<NetworkServers />} />
          <Route path="/printers" element={<Printers />} />
          <Route path="/projector" element={<Projector />} />
          <Route
            path="/computeraccessories"
            element={<ComputerAccessories />}
          />
          <Route
            path="/softwareinstallation"
            element={<SoftwareInstallation />}
          />

          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
