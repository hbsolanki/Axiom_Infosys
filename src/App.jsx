import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Home from "./Components/Home";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import AboutUs from "./Components/AboutUs";
import PageNotFound from "./Components/PageNotFound";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/services" element={<Services />} />

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
