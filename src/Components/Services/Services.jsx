import DesktopPc from "../../assets/Services/DesktopPc.jpeg";
import Laptops from "../../assets/Services/Laptops.jpeg";
import Printers from "../../assets/Services/Printers.jpeg";
import CCTVCameras from "../../assets/Services/CCTVCameras.jpeg";
import Projector from "../../assets/Services/Projector.jpeg";
import DataRecovery from "../../assets/Services/DataRecovery.jpeg";
import NetworkServers from "../../assets/Services/NetworkServers.jpeg";
import ComputerAccessories from "../../assets/Services/ComputerAccessories.jpeg";
import Software from "../../assets/Services/Software.jpeg";
import CustomBuiltPC from "../../assets/Services/CustomBuiltPC.jpeg";

import LogoSlider from "../Home/LogoSlider";

const Service = () => {
  return (
    <>
      <section className="pt-2 dark:bg-dark lg:pb-[0px]  lg:pt-[8px] mt-10">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                <span className="mb-2 block text-lg font-semibold text-primary text-orange-500">
                  Our Services
                </span>
                {/* <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]"></h2> */}
                <p className="text-base text-body-color dark:text-dark-6">
                  Sales & Service Provider of Laptops , Desktop PC'S , CCTV
                  Cameras and Printers.
                </p>
              </div>
            </div>
          </div>

          <div className="mx-4 flex flex-wrap ">
            <ServiceCard
              title="Desktop PC"
              details="PC Problem? We’ll solve it. We’re who you call when your desktop runs slow and your programs stop working. We Also Sell Refurbished PC and System."
              icon={DesktopPc}
            />
            <ServiceCard
              title="Laptops"
              details="Laptop gone down? Don’t worry! Our qualified, friendly laptop repair technicians will bring it back to life.We Also Sell Best Quality Refurbished Laptops."
              icon={Laptops}
            />
            <ServiceCard
              title="Printers"
              details="Is your printer giving you trouble? Our expert team is here to help with top-notch printer service and repair solutions. Whether you’re experiencing issues or need support. "
              icon={Printers}
            />
            <ServiceCard
              title="CCTV"
              details="Ensure the safety and security of your property with our expert CCTV solutions. Whether you’re looking to purchase a new CCTV system or need professional repair services for your existing setup, we offer comprehensive solutions to meet all your surveillance needs."
              icon={CCTVCameras}
            />
            <ServiceCard
              title="Projector"
              details="Illuminate your presentations, events, and entertainment with our top-quality projectors. Whether you’re looking to buy a projector for long-term use or rent one for a special occasion, we offer a wide range of options and services to meet your needs."
              icon={Projector}
            />
            <ServiceCard
              title="Computer Accessories"
              details="Explore Our Top-Quality Computer Accessories.Whether you’re a tech enthusiast, a professional, or just looking to upgrade your setup, we offer a wide range of products designed to enhance your computing experience."
              icon={ComputerAccessories}
            />
            <ServiceCard
              title="Network-Servers"
              details="Our technicians can set up a secure wireless network in your home that will allow you to share everything between as many computers as you like with 100% security."
              icon={NetworkServers}
            />
            <ServiceCard
              title="Data Backup & Recovery"
              details="We can help you back up your important personal data (photos, videos, documents, school work, etc.) to disk and cloud with no hassles."
              icon={DataRecovery}
            />
            <ServiceCard
              title="Custom Built PC"
              details="We are experienced in building custom computers to meet your specific needs using quality, stable components at an affordable price."
              icon={CustomBuiltPC}
            />
          </div>
        </div>
      </section>
      <LogoSlider />
    </>
  );
};

export default Service;

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ icon, title, details }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-9 rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10">
          <img
            className="mb-8 h-40 w-60 flex items-center justify-center rounded-2xl bg-primary"
            src={icon}
          />
          <h4 className="mb-[14px] text-2xl font-semibold text-dark dark:text-black">
            {title}
          </h4>
          <p className="text-body-color dark:text-dark-6">{details}</p>
        </div>
      </div>
    </>
  );
};
