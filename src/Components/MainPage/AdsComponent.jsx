import React from 'react'
import { Link } from 'react-router-dom'
import style from "./main.module.css"
export default function AdsComponent() {
    return (
        <div className="avds">
            <div className="avds_container d-flex flex-lg-row flex-column align-items-start justify-content-between">
                <div className={style.avds_small}>
                    <div className="avds_background" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Link to="/shop/steam/1">
                            <img src="./images/banner/Steam.jpg" alt="" style={{ width: "100%", height: "100%" }} />
                        </Link>
                    </div>
                    {/* <div className="avds_small_inner">
                    </div> */}
                </div>
                <div className={style.avds_large}>
                    <div className="avds_background" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Link to="/shop/playstation/3">
                            <img src="./images/banner/PlayStation.jpg" alt="" style={{ width: "100%", height: "100%" }} />
                        </Link>
                    </div>
                    {/* <div className="avds_large_container">
                    </div> */}
                </div>
            </div>
        </div>
    )
}
