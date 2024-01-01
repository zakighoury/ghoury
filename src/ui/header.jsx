import React from "react";
import Image from "../assets/img.png";
import Profile from "../assets/profile.png";
import {
  FaUser,
  FaSignInAlt,
  FaLanguage,
  FaShoppingCart,
  FaGlobe,
} from "react-icons/fa";
// import { Link } from "react-router-dom";

const header = () => {
  return (
    <>
      <section className="combined">
        <section className="Header">
          <div className="first">
            <a href="">Become a Seller</a>
            <a href=""> Affiliate Program</a>
            <a href=""> Help & Support</a>
            <a href=""> Logistics Partner</a>
          </div>
          <div className="img_text">save more an app</div>
        </section>
        <section className="second">
          <div className="logo">
            <img className="img" src={Profile}></img>
          </div>
          <div className="search">
            <input
              type="text"
              placeholder="  Search in  Ghoury"
              className="search_text"
            ></input>
          </div>
          <div className="cart">
            <div className="login">
              <a href="">
                <FaUser /> Login
              </a>
            </div>
            <div className="signup">
              <a>
              <FaSignInAlt /> signup
              </a>
            </div>
            <div className="lang">
                <a>
              <FaGlobe /> EN
              </a>
            </div>
            <div className="shop">
                <a>
              <FaShoppingCart /> 
                </a>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default header;
