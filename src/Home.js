import React from 'react'
import "./Home.css"
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <img 
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                alt="Banner"
            />
            {/* Product id,title,price,rating,image */}
            <div className="home__row">
                <Product 
                    id="12321431"
                    title="Forty rules of love"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41gW7yj+ZLL._SX324_BO1,204,203,200_.jpg"
                />
                <Product 
                    id="12321432"
                    title="Pentonic Linc Ball Point Pen - Pack of 10 (Blue)"
                    price={100}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/31M7Y2pLq-L.jpg"
                />
            </div>
            <div className="home__row">
                <Product 
                    id="12321433"
                    title="Camlin Kokuyo Brush Pens, 24 Shades (Multicolor)e"
                    price={20}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/418z+pO7-UL.jpg"
                />
                <Product 
                    id="12321434"
                    title="Tp-Link Smart Cam Pan Tilt Home WiFi Camera | Wireless Indoor Security 360° 2Mp 1080P (Full Hd) | Up to 30 Ft Night Vision | Up to 128 Gb Microsd Card Slot | Works with Alexa and Google (Tapo C200)"
                    price={1000}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/31YJwSbegKL.jpg"
                />
                <Product 
                    id="12321435"
                    title="OFIXO 100 pcs Color Sheets (10 Sheets each color ) Copy Printing Papers / Art and Craft paper A4 Sheets Double Sided Colored Origami Folding Lucky Wish Paper DIY Craft Smooth Finish Home, School , Office Stationery"
                    price={1196}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/51exUnvK6GL.jpg"
                />
            </div>
            <div className="home__row">
                <Product 
                    id="12321436"
                    title="Scotch Double Sided Foam Tape (length 3m , width 24mm)"
                    price={16}
                    rating={2}
                    image="https://m.media-amazon.com/images/I/5197qnrxcXL.jpg"
                />
            </div>
        </div>
    )
}

export default Home
