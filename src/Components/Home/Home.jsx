import BlogSection from "./BlogSection";
import LogoSlider from "./LogoSlider";
import CustomerCount from "./CustomerCount";
import IMG from "../../assets/I1.jpg";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="">
        <div
          id="first-part"
          className="relative bg-cover bg-center h-screen text-white flex flex-col justify-center items-start bg-black/50 bg-blend-darken"
        >
          <div className="px-4 sm:px-6 md:px-10 lg:px-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-wider">
              Axiom Infosys
            </h1>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed tracking-wide">
              We are Sales and Service Providers of all <b>Laptops</b>,{" "}
              <b>Desktops</b>,<b> CCTV Cameras</b>, <b>Printers</b> and{" "}
              <b>All Computer/Laptop Accessories</b>.
              <br />
              Also, we are <b>Wholesellers</b> of <b>CCTV Cameras</b> and{" "}
              <b>SSDs</b>.
              <br />
              We have all <b>Degree Engineers</b> for work and hold{" "}
              <b>Mastery</b> in
              <b>Laptop/Desktop/Printer</b> Repairing.
              <br />
              <br />
              Located at GF-3, Cascade Complex Opp. Mota Apartment, beside Raju
              Pan Corner, Chhani Jakatnaka, Vadodara, Gujarat - 390002
              <br />
              <b>Contact Number: +919898360081</b>
              <br />
              <b>E-Mail: axiominfosys9@gmail.com</b>
            </p>
            <a
              href="tel:+919898360081"
              className="inline-block mt-6 sm:mt-8 px-5 sm:px-6 py-2 text-black bg-orange-500 rounded-lg text-base sm:text-lg font-medium hover:bg-white transition-colors"
            >
              CONTACT US
            </a>
          </div>
        </div>

        <BlogSection />
        <CustomerCount />
        <LogoSlider />
      </div>
    </>
  );
}

export default Home;
