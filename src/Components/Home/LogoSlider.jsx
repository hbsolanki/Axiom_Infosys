// LogoSlider.js
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Logo.css";
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
    <div className="container">
      <h1 className="h1-slider">Brands We Serve</h1>
      <div className="logo-slider">
        <Slider {...settings} className=" h-36">
          <div className="item">
            <a href="#">
              <img src={AppleLogo} alt="Apple Logo"></img>
            </a>
          </div>
          <div className="item">
            <a href="#">
              <img src={HPLOGO} alt="HP Logo" />
            </a>
          </div>
          <div className="item">
            <a href="#">
              <img src={DellLogo} alt="Dell Logo" />
            </a>
          </div>
          <div className="item">
            <a href="#">
              <img src={AsusLogo} alt="Asus Logo" />
            </a>
          </div>
          <div className="item">
            <a href="#">
              <img src={MsiLogo} alt="MSI Logo" />
            </a>
          </div>
          <div className="item">
            <a href="#">
              <img src={AcerLogo} alt="Acer Logo" />
            </a>
          </div>
          <div className="item">
            <a href="#">
              <img src={MicrosoftLogo} alt="Microsoft Logo" />
            </a>
          </div>
          <div className="item">
            <a href="#">
              <img src={SamsungLogo} alt="Samsung Logo" />
            </a>
          </div>
          <div className="item">
            <a href="#">
              <img src={IntelLogo} alt="Intel Logo" />
            </a>
          </div>
          <div className="item">
            <a href="#">
              <img src={LenovoLogo} alt="Lenovo Logo" />
            </a>
          </div>
          <div className="item">
            <a href="#">
              <img src={LGlogo} alt="LG Logo" />
            </a>
          </div>
          <div className="item">
            <a href="#">
              <img src={FujitsuLogo} alt="Fujitsu Logo" />
            </a>
          </div>
          <div className="item">
            <a href="#">
              <img src={SonyLogo} alt="Sony Logo" />
            </a>
          </div>
          <div className="item">
            <a href="#">
              <img src={ToshibaLogo} alt="Toshiba Logo" />
            </a>
          </div>
          <div className="item">
            <a href="#">
              <img src={VaioLogo} alt="Vaio Logo" />
            </a>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default LogoSlider;
