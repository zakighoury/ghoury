import React from 'react'
import Download from "../assets/img.png";
import First from "../assets/mm.jpg";
import Banner from "../assets/banner.png";
import Shirt from "../assets/shirt.jpg";
import Camera from "../assets/camera.png";
import Skin from "../assets/skinprod.jpg";



const middle = () => {
  return (
    <>
    <section className="middle">
        <div className="middle_img">
          <img src={Banner} alt="Image 1" />
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
            <img src={Shirt} alt="Image 1" />
            <a href="">Fashion</a>
          </div>
          <div className="part_one_top">
            <img src={Skin} alt="Image 1" />
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
            <img src={Camera} alt="Image 1" />
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
            <p className="on_sell">On Sell Now</p>

            <p>
              Ending In <span className='count'>4</span>
              <span className='count1'>52</span>
              <span className='count2'>01</span>
            </p>
            <a href="" className='show'>Show More</a>
          </div>
        </div>
        <div className="light"></div>
        <section className="flash">
          <div className="just_img">
            <img src={First} alt="Image 1"></img>
            <p>
              Air buds Two Max Wireless Earbuds TWS Earbud, Wireless Earphones
              Bluetooth Ear buds
            </p>
            <p>
              Rs.00.00<span></span>
            </p>
          </div>
          <div className="just_img">
            <img src={First} alt="Image 1"></img>
            <p>
              Air buds Two Max Wireless Earbuds TWS Earbud, Wireless Earphones
              Bluetooth Ear buds
            </p>
            <p>
              Rs.00.00<span></span>
            </p>
          </div>
          <div className="just_img">
            <img src={First} alt="Image 1"></img>
            <p>
              Air buds Two Max Wireless Earbuds TWS Earbud, Wireless Earphones
              Bluetooth Ear buds
            </p>
            <p>
              Rs.00.00<span></span>
            </p>
          </div>
          <div className="just_img">
            <img src={First} alt="Image 1"></img>
            <p>
              Air buds Two Max Wireless Earbuds TWS Earbud, Wireless Earphones
              Bluetooth Ear buds
            </p>
            <p>
              Rs.00.00<span></span>
            </p>
          </div>
          <div className="just_img">
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
  </>
  )
}

export default middle