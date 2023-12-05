import React from 'react'

export default function IconBoxesComponent() {
    return (
        <div className="icon_boxes">

            <div className="container">
                <div className="row icon_box_row">
                    <div className="col-lg-4 icon_box_col">

                        <div className="icon_box">
                            <div className="icon_box_image"><img src="images/icon_1.svg" alt="" /></div>
                            <div className="icon_box_title">Buy Using Crypto</div>
                            <div className="icon_box_text">
                                <p>You can purchase the product using USDT, TRX, ETH, BTC</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 icon_box_col">
                        <div className="icon_box">
                            <div className="icon_box_image"><img src="images/icon_2.svg" alt="" /></div>
                            <div className="icon_box_title">Easy To Buy</div>
                            <div className="icon_box_text">
                                <p>Upon purchase, receive the product activation code immediately on the website and by e-mail</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 icon_box_col">
                        <div className="icon_box">
                            <div className="icon_box_image"><img src="images/icon_3.svg" alt="" /></div>
                            <div className="icon_box_title">24h Fast Support</div>
                            <div className="icon_box_text">
                                <p>24h Fast support is available via Telegram and email</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
