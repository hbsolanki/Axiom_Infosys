import DesktopPc from "../../assets/Services/DesktopPc.jpeg";
import Laptops from "../../assets/Services/Laptops.jpeg";
import Printers from "../../assets/Services/Printers.jpeg";
import CCTVCameras from "../../assets/Services/CCTVCameras.jpeg";
import Projector from "../../assets/Services/Projector.jpeg";
import DataRecovery from "../../assets/Services/DataRecovery.jpeg";
import NetworkServers from "../../assets/Services/NetworkServers.jpeg";
import ComputerAccessories from "../../assets/Services/ComputerAccessories.jpeg";
import Software from "../../assets/Services/Software.jpeg";

const Service = () => {
  return (
    <section className="pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Services
              </span>
              {/* <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]"></h2> */}
              <p className="text-base text-body-color dark:text-dark-6">
                Sales & Service Provider of Whole Unit & Accessories of
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <ServiceCard
            title="Desktop PC"
            details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
            icon={DesktopPc}
          />
          <ServiceCard
            title="Laptops"
            details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
            icon={Laptops}
          />
          <ServiceCard
            title="Printers"
            details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
            icon={Printers}
          />
          <ServiceCard
            title="CCTV"
            details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
            icon={CCTVCameras}
          />
          <ServiceCard
            title="Projector"
            details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
            icon={Projector}
          />
          <ServiceCard
            title="Data Recovery"
            details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
            icon={DataRecovery}
          />
          <ServiceCard
            title="Network-Servers"
            details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
            icon={NetworkServers}
          />
          <ServiceCard
            title="Computer Accessories"
            details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
            icon={ComputerAccessories}
          />
          <ServiceCard
            title="Software Installation"
            details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
            icon={Software}
          />
        </div>
      </div>
    </section>
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
