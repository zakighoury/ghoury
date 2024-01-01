import React from 'react'
import Slider from "react-slick";
import Picture from "../assets/pic.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fortawesome/fontawesome-free/css/all.css";

const main = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    
      }
  return (
    <section className="content">
    <section className="left">
      <a href="">
        <i className="fas fa-shopping-basket"></i> Groceries & Pets
      </a>
      <br></br>
      <a href="">
        <i className="fas fa-heart"></i> Health & Beauty
      </a>
      <br></br>
      <a href="">
        <i className="fas fa-male"></i> Men's Fashion
      </a>
      <br></br>
      <a href="">
        <i className="fas fa-female"></i> Women's Fashion
      </a>
      <br></br>
      <a href="">
        <i className="fas fa-baby"></i> Mother & Baby
      </a>
      <br></br>
      <a href="">
        <i className="fas fa-home"></i> Home & Lifestyle
      </a>
      <br></br>
      <a href="">
        <i className="fas fa-laptop"></i> Electronics Devices
      </a>
      <br></br>
      <a href="">
        <i className="fas fa-mobile-alt"></i> Electronics Accessories
      </a>
      <br></br>
      <a href="">
        <i className="fas fa-tv"></i> TV & Home Appliances
      </a>
      <br></br>
      <a href="">
        <i className="fas fa-bicycle"></i> Sports & Outdoor
      </a>
      <br></br>
      <a href="">
        <i className="level-1-icon ic-cat-FashionAccess \uE73F"></i>{" "}
        Watches, Bags & Jewellery
      </a>
      <br></br>
      <a href="">
        <i className="fas fa-car"></i> Automotive & Motorbike
      </a>
      <br></br>
    </section>
    <section className="right">
      <Slider {...sliderSettings}>
        <div>
          <img src={Picture} alt="Image 1" />
        </div>
        <div>
          <img src={Picture} alt="Image 2" />
        </div>
        <div>
          <img src={Picture} alt="Image 3" />
        </div>
        <div>
          <img src={Picture} alt="Image 4" />
        </div>
        <div>
          <img src={Picture} alt="Image 5" />
        </div>
        <div>
          <img src={Picture} alt="Image 5" />
        </div>
      </Slider>
    </section>
  </section>

  )
}

export default main