import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home_row">
          <Product
            id="124518"
            title="AmazonBasics 48 Pack AA High-Performance Alkaline Batteries, 10-Year Shelf Life, Easy to Open Value Pack"
            price={19.99}
            image="https://m.media-amazon.com/images/I/71UyNLSv2mL._AC_UY327_QL65_.jpg"
            rating={5}
          />
          <Product
            id="124528"
            title="Samsung Galaxy Tab S6 Lite 10.4, 64GB WiFi Tablet Oxford Gray - SM-P610NZAAXAR - S Pen Included"
            price={329.99}
            image="https://m.media-amazon.com/images/I/718B6zl+b6L._AC_UL480_QL65_.jpg"
            rating={3}
          />
        </div>

        <div className="home_row">
          <Product
            id="124538"
            title="Urban Age Clothing Co. Men's Cotton Blend Fleece Bomber Jacket Zipper Heavyweight Cotton Blend Fleece Sweatshirt for Winters Temperature 0 Degrees to 25 Degrees"
            price={999.99}
            image="https://images-eu.ssl-images-amazon.com/images/I/81%2BrqbqQWEL._AC_UL270_SR180,270_.jpg"
            rating={4}
          />
          <Product
            id="124548"
            title="BLUEWUD Amalet Engineered Wood Study Table, Laptop, Computer Table Desk for Home & Office (Wenge)"
            price={4559.99}
            image="https://m.media-amazon.com/images/I/71ptZKUUIoL._AC_UL480_QL65_.jpg"
            rating={5}
          />
          <Product
            id="124598"
            title="LG 190 L 4 Star Inverter Direct-Cool Single Door Refrigerator (GL-B201ASPY, Scarlet Plumeria) "
            price={23590.99}
            image="https://images-eu.ssl-images-amazon.com/images/I/417A5h1IQAL._AC_SX184_.jpg"
            rating={3}
          />
        </div>

        <div className="home_row">
          <Product
            id="124568"
            title="OnePlus Y Series 80 cm (32 inches) HD Ready LED Smart Android TV 32Y1 (Black) (2020 Model)"
            price={1999.99}
            image="https://images-eu.ssl-images-amazon.com/images/I/817gj7pfUzL._AC_UL200_SR200,200_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
