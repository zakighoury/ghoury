import "./App.css";
import Image from "./img.png";
import First from "./mm.jpg";
import Download from "./ss.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fortawesome/fontawesome-free/css/all.css";

function App() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <main id="web">
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
            <img className="img" src={Image}></img>
          </div>
          <div className="search">
            <input
              type="text"
              placeholder="  Search in  Ghoury"
              className="search_text"
            ></input>
          </div>
          <div className="login">login</div>
          <div className="signup">signup</div>
          <div className="lang">eng</div>
          <div className="shop">shop</div>
        </section>
      </section>
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
              <img src={Image} alt="Image 1" />
            </div>
            <div>
              <img src={Image} alt="Image 2" />
            </div>
            <div>
              <img src={Image} alt="Image 3" />
            </div>
            <div>
              <img src={Image} alt="Image 4" />
            </div>
            <div>
              <img src={Image} alt="Image 5" />
            </div>
          </Slider>
        </section>
      </section>
      <section className="middle">
        <div className="middle_img">
          <img src={Download} alt="Image 1" />
          <a className="middle_btn">
            Add to Cart&nbsp;
            <i class="fa fa-chevron-right" aria-hidden="true"></i>
          </a>
        </div>

        <div className="middle_head">
          <li>
            <i class="fas fa-shield-alt"></i>&nbsp;
            <a href="">Safe Payments</a>
            <span className="word">|</span>
          </li>
          <li>
            <i class="fas fa-truck"></i>&nbsp;
            <a href="">Nationwide Delivery</a>
            <span className="word">|</span>
          </li>
          <li>
            <i class="fas fa-undo"></i>&nbsp;
            <a href="">Free & Easy Returns</a>
            <span className="word">|</span>
          </li>
          <li>
            <i class="fas fa-tag"></i>&nbsp;
            <a href="">Best Price Guaranteed</a>
            <span className="word">|</span>
          </li>
          <li>
            <i class="fas fa-check-circle"></i>&nbsp;
            <a href="">100% Authentic Products</a>
            <span className="word">|</span>
          </li>
          <li>
            <i class="fab fa-glide-g"></i>&nbsp;
            <a href="">Daraz Verified</a>
            <span className="word">
              <i class="fa fa-chevron-right" aria-hidden="true"></i>{" "}
            </span>
          </li>
        </div>

        <div className="part_one">
          <div className="part_one_top">
            <img src={First} alt="Image 1" />
            <a href="">Mart</a>
          </div>
          <div className="part_one_top">
            <img src={First} alt="Image 1" />
            <a href="">Fashion</a>
          </div>
          <div className="part_one_top">
            <img src={First} alt="Image 1" />
            <a href="">Beauty</a>
          </div>
          <div className="part_one_top">
            <img src={First} alt="Image 1" />
            <a href="">Home & Decor</a>
          </div>
          <div className="part_one_top">
            <img src={First} alt="First 1" />
            <a href="">Daraz Like New</a>
          </div>
          <div className="part_one_top">
            <img src={First} alt="Image 1" />
            <a href="">Free Delivery</a>
          </div>
          <div className="part_one_top">
            <img src={First} alt="Image 1" />
            <a href="">Add to Cart</a>
          </div>
          <div className="part_one_top">
            <img src={First} alt="Image 1" />
            <a href="">Everyday Low price</a>
          </div>
          <div className="part_one_top">
            <img src={First} alt="Image 1" />
            <a href="">New on Daraz</a>
          </div>
          <div className="part_one_top">
            <img src={First} alt="Image 1" />
            <a href="">Flash Sale</a>
          </div>
        </div>
      </section>
      <h1 className="fash">Flash Sale</h1>

      <section className="sell">
        <div className="sell_one">
          <div className="sell_texts"></div>
          <div className="sell_detail">
            <p>On Sell Now</p>

            <p>
              Ending In <span>0</span>
              <span>0</span>
              <span>0</span>
            </p>
            <a href="">Show More</a>
          </div>
        </div>
        <div className="light"></div>
        <section className="flash">
          <div className="flash_img">
            <img src={First} alt="Image 1"></img>
            <p>
              Air buds Two Max Wireless Earbuds TWS Earbud, Wireless Earphones
              Bluetooth Ear buds
            </p>
            <p>
              Rs.00.00<span></span>
            </p>
          </div>
          <div className="flash_img">
            <img src={First} alt="Image 1"></img>
            <p>
              Air buds Two Max Wireless Earbuds TWS Earbud, Wireless Earphones
              Bluetooth Ear buds
            </p>
            <p>
              Rs.00.00<span></span>
            </p>
          </div>
          <div className="flash_img">
            <img src={First} alt="Image 1"></img>
            <p>
              Air buds Two Max Wireless Earbuds TWS Earbud, Wireless Earphones
              Bluetooth Ear buds
            </p>
            <p>
              Rs.00.00<span></span>
            </p>
          </div>
          <div className="flash_img">
            <img src={First} alt="Image 1"></img>
            <p>
              Air buds Two Max Wireless Earbuds TWS Earbud, Wireless Earphones
              Bluetooth Ear buds
            </p>
            <p>
              Rs.00.00<span></span>
            </p>
          </div>
          <div className="flash_img">
            <img src={First} alt="Image 1"></img>
            <p>
              Air buds Two Max Wireless Earbuds TWS Earbud, Wireless Earphones
              Bluetooth Ear buds
            </p>
            <p>
              Rs.00.00<span></span>
            </p>
          </div>
        </section>
      </section>
{/* categorie section */}
      <section className="categories">
        <h1 className="cate">Categories</h1>
        <section className="cat_one">
          <div className="cat_img">
            <img src={First} alt="Image 1"></img>
            <span>sample text</span>
          </div>
          <div className="cat_img">
            <img src={First} alt="Image 1"></img>
            <span>sample text</span>

          </div>
          <div className="cat_img">
            <img src={First} alt="Image 1"></img>
            <span>sample text</span>

          </div>
          <div className="cat_img">
            <img src={First} alt="Image 1"></img>
            <span>sample text</span>

          </div>
          <div className="cat_img">
            <img src={First} alt="Image 1"></img>
            <span>sample text</span>
          </div>
        </section>
        <section className="cat_two">
          <div className="cat_img">
            <img src={First} alt="Image 1"></img>
            <span>sample text</span>

          </div>
          <div className="cat_img">
            <img src={First} alt="Image 1"></img>
            <span>sample text</span>
          </div>
          <div className="cat_img">
            <img src={First} alt="Image 1"></img>
            <span>sample text</span>
          </div>
          <div className="cat_img">
            <img src={First} alt="Image 1"></img>
            <span>sample text</span>
          </div>
          <div className="cat_img">
            <img src={First} alt="Image 1"></img>
            <span>sample text</span>
          </div>
        </section>
      </section>
      <section className="bottom">bottom</section>
      <section className="footer">footer</section>
    </main>
  );
}

export default App;
