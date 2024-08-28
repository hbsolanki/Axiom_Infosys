// LogoSlider.js
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LogoSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="container">
      <h1>Brands We Serve</h1>
      <div className="logo-slider">
        <Slider {...settings}>
          <div className="item">
            <a href="#">
              <img src="AppleLogo.png" alt="Apple Logo" />
            </a>
          </div>
          <div className="item">
            <a href="#">
              <img src="HPLOGO.png" alt="HP Logo" />
            </a>
          </div>
          <div className="item">
            <a href="#">
              <img src="Dell Logo.png" alt="Dell Logo" />
            </a>
          </div>
          <div className="item">
            <a href="#">
              <img src="Asus Logo.png" alt="Asus Logo" />
            </a>
          </div>
          <div className="item">
            <a href="#">
              <img src="Msi Logo.png" alt="MSI Logo" />
            </a>
          </div>
          <div className="item">
            <a href="#">
              <img src="Acer Logo.png" alt="Acer Logo" />
            </a>
          </div>
          <div className="item">
            <a href="#">
              <img src="Microsoft Logo.png" alt="Microsoft Logo" />
            </a>
          </div>
          <div className="item">
            <a href="#">
              <img src="Samsung Logo.png" alt="Samsung Logo" />
            </a>
          </div>
          <div className="item">
            <a href="#">
              <img src="Intel Logo.png" alt="Intel Logo" />
            </a>
          </div>
          <div className="item">
            <a href="#">
              <img src="LenovoLogo.png" alt="Lenovo Logo" />
            </a>
          </div>
          <div className="item">
            <a href="#">
              <img src="LG logo.png" alt="LG Logo" />
            </a>
          </div>
          <div className="item">
            <a href="#">
              <img src="Fujitsu Logo.png" alt="Fujitsu Logo" />
            </a>
          </div>
          <div className="item">
            <a href="#">
              <img src="Sony Logo.png" alt="Sony Logo" />
            </a>
          </div>
          <div className="item">
            <a href="#">
              <img src="Toshiba Logo.png" alt="Toshiba Logo" />
            </a>
          </div>
          <div className="item">
            <a href="#">
              <img src="Vaio Logo.png" alt="Vaio Logo" />
            </a>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default LogoSlider;
