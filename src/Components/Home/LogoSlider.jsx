import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppleLogo from "../../assets/Brandweserv/AppleLogo.png";
import AcerLogo from "../../assets/Brandweserv/AcerLogo.png";
import AsusLogo from "../../assets/Brandweserv/AsusLogo.png";
import DellLogo from "../../assets/Brandweserv/DellLogo.png";
import FujitsuLogo from "../../assets/Brandweserv/FujitsuLogo.png";
import HPLOGO from "../../assets/Brandweserv/HPLOGO.png";
import IntelLogo from "../../assets/Brandweserv/IntelLogo.png";
import LenovoLogo from "../../assets/Brandweserv/LenovoLogo.png";
import LGlogo from "../../assets/Brandweserv/LGlogo.png";
import MicrosoftLogo from "../../assets/Brandweserv/MicrosoftLogo.png";
import MsiLogo from "../../assets/Brandweserv/MsiLogo.png";
import SamsungLogo from "../../assets/Brandweserv/SamsungLogo.png";
import SonyLogo from "../../assets/Brandweserv/SonyLogo.png";
import ToshibaLogo from "../../assets/Brandweserv/ToshibaLogo.png";
import VaioLogo from "../../assets/Brandweserv/VaioLogo.png";

const LogoSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 3,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="max-w-screen-lg mx-auto my-24">
      <h1 className="text-3xl font-medium text-center relative mb-16 after:content-[''] after:absolute after:h-1 after:bg-gray-400 after:w-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-bottom-5">
        Brands We Serve
      </h1>
      <div className="logo-slider">
        <Slider {...settings} className="h-20 sm:h-24 md:h-28 lg:h-32">
          {[
            AppleLogo,
            HPLOGO,
            DellLogo,
            AsusLogo,
            MsiLogo,
            AcerLogo,
            MicrosoftLogo,
            SamsungLogo,
            IntelLogo,
            LenovoLogo,
            LGlogo,
            FujitsuLogo,
            SonyLogo,
            ToshibaLogo,
            VaioLogo,
          ].map((logo, index) => (
            <div key={index} className="px-4">
              <img
                src={logo}
                alt={`Brand logo ${index}`}
                className="h-16 w-40 sm:w-40 md:w-40 lg:w-32 mx-auto hover:scale-110 hover:-translate-y-1 transition-transform duration-300"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LogoSlider;
