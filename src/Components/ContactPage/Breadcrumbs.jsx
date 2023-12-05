import React from 'react'
import { Link } from 'react-router-dom'

export default function Breadcrumbs() {
    return (
        <div className="home">
            <div className="home_container">
                <div className="home_background" style={{ backgroundColor: "#191d1e" }}></div>
                <div className="home_content_container">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="home_content">
                                    <div className="breadcrumbs">
                                        <ul>
                                            <li><Link to="/">Home</Link></li>
                                            <li>Contact</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
