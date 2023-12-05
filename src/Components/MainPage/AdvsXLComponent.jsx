import React from 'react'
import { Link } from 'react-router-dom'

export default function AdvsXLComponent() {
    return (
        <div className="avds_xl">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="clearfix">
                            <Link to="/shop" style={{ fontSize: "25px", color: "gray", textDecoration: "none" }}>
                                <div style={{ display: "flex", justifyContent: "center", border: "1px solid grey", padding: "15px 0px" }} >
                                    Check More
                                </div>
                            </Link>
                            <div className="avds_xl_content">
                                {/* <div className="avds_title">More amazing Keys</div> */}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
