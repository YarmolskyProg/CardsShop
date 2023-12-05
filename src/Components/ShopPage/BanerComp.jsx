import React from 'react'
import style from "./Shop.module.css"
export default function BanerComp() {
    return (
        <div className={style.home}>
            <div className={style.home_container}>
                <div className="home_background" >
                    <img src="./images/banner/categories.jpg" alt="" style={{ width: "100%", height: "100%" }} />
                </div>
                <div className="home_content_container">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="home_content">
                                    <div className="home_title"></div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
