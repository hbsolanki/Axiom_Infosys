import React from "react";

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
            href={"desktoppc"}
            details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
            icon={
              <img
                // className=" h-[70px] w-[100vh]"
                src={
                  "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                }
              />
            }
          />
          <ServiceCard
            title="Laptops"
            href={"laptops"}
            details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
            icon={
              <img
                className=" h-[70px] w-[100vh]"
                src={"./Main_Services/pexels-craigmdennis-205421.jpg"}
              />
            }
          />
          <ServiceCard
            title="Printers"
            href={"printers"}
            details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
            icon={
              <img
                className=" h-[70px] w-[100vh]"
                src={"../../assets/Main_Services/Printers.jpeg"}
              />
            }
          />
          <ServiceCard
            title="CCTV"
            href={"cctv"}
            details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
            icon={
              <img
                className=" h-[70px] w-[100vh]"
                src={"../../assets/Main_Services/CCTVCameras.jpeg"}
              />
            }
          />
          <ServiceCard
            title="Projector"
            href={"projector"}
            details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
            icon={
              <img
                className=" h-[70px] w-[100vh]"
                src={"../../assets/Main_Services/Projector.jpeg"}
              />
            }
          />
          <ServiceCard
            title="Data Recovery"
            href={"datarecovery"}
            details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
            icon={
              <img
                className=" h-[70px] w-[100vh]"
                src={"../../assets/Main_Services/DataRecovery.jpeg"}
              />
            }
          />
          <ServiceCard
            title="Network-Servers"
            href={"networkservers"}
            details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
            icon={
              <img
                className=" h-[70px] w-[100vh]"
                src={"../../assets/Main_Services/NetworkServers.jpeg"}
              />
            }
          />
          <ServiceCard
            title="Computer Accessories"
            href={"computeraccessories"}
            details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
            icon={
              <img
                className=" h-[70px] w-[100vh]"
                src={"../../assets/Main_Services/ComputerAccessories.jpeg"}
              />
            }
          />
          <ServiceCard
            title="Software Installation"
            href={"softwareinstallation"}
            details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
            icon={
              <img
                className=" h-[70px] w-[100vh]"
                src={"../../assets/Main_Services/Software.jpeg"}
              />
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Service;

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ icon, title, details, href }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <a href={"/" + href}>
          <div className="mb-9 rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10">
            <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary">
              {icon}
            </div>
            <h4 className="mb-[14px] text-2xl font-semibold text-dark dark:text-black">
              {title}
            </h4>
            <p className="text-body-color dark:text-dark-6">{details}</p>
          </div>
        </a>
      </div>
    </>
  );
};
