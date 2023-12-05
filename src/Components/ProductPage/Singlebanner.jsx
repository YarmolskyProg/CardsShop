import React from 'react'
import style from "./SingleProd.module.css"
export default function Singlebanner() {
    return (
        <div className={style.home}>
            <div className="home_container">
                <div className="home_background" >
                <img src="./images/banner/categories.jpg" alt="" style={{ width: "100%", height: "100%" }} />
                </div>
                <div className="home_content_container">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                {/* <div className="home_content">
                                    <div className="home_title">Smart Phones<span>.</span></div>
                                    <div className="home_text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viverra velit venenatis fermentum luctus.</p></div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
