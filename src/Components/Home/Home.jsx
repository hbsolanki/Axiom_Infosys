import "./Home.css";
import BlogSection from "./BlogSection";
import LogoSlider from "./LogoSlider";
import CustomerCount from "./CustomerCount";

function Home() {
  return (
    <>
      <div className="content ">
        <h1>Axiom Infosys</h1>
        <p className="par">
          We are Sales and Service Providers of all
          <b>Laptops</b> ,<b>Desktops</b>, <b>CCTV Cameras </b>,<b>Printers</b>
          and <b>All Computer/Laptop Accessories.</b>
          <br />
          Also We are <b>Wholesellers</b> of <b>CCTV Cameras</b> and
          <b> SSD's</b>.<br />
          We have all <b>Degree Engineers</b> for work.Also we hold
          <b>Mastery</b> in <b>Laptop/Desktop</b> Repairing. <br />
          We are located at GF-3, Cascade Complex Opp. Mota Appartment, beside
          Raju Pan Corner, Chhani Jakatnaka, Vadodara, Gujarat - 390002 <br />
          <b>Contact Number: 9898360081</b>
          <br />
        </p>
        <button className="cn ">
          <a href="tel:+919898360081">CONTACT US</a>
        </button>
      </div>
      <BlogSection />
      <CustomerCount />
      <LogoSlider />
    </>
  );
}

export default Home;
