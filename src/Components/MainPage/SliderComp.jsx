import React from 'react'
import style from "./main.module.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
export default function SliderComp() {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    return (
        <div className={style.home} >
            <div className={style.home_slider_container}>
                <Slider {...settings} >

                    <Link to="shop/binance/0" style={{ height: "100%" }}>
                        <div>
                            <img src="./images/banner/Binance.png" alt="" style={{ maxWidth: "100%", height: "100%" }} />
                        </div>
                    </Link>


                    <Link to="shop/uplay/5" >
                        <div>
                            <img src="./images/banner/AssassinsCreedValhalla.png" alt="" style={{ width: "100%", height: "100%" }} />
                        </div>
                    </Link>


                    <Link to="shop/ea-origin/2">
                        <div>
                            <img src="./images/banner/EA.jpg" alt="" style={{ width: "100%", height: "100%" }} />
                        </div>
                    </Link>

                </Slider>


            </div>
        </div >
    )
}
