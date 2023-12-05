import React from 'react'
import { Link } from 'react-router-dom'

export default function FooterComp() {
  return (
    <>
      <div className="footer_overlay"></div>
      <footer className="footer">
        <div className="footer_background" style={{ backgroundImage: "url(images/footer.jpg)" }}></div>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="footer_content d-flex flex-lg-row flex-column align-items-center justify-content-lg-start justify-content-center">
                <div className="footer_logo"><Link to="/">Toggle Key</Link></div>
                <div className="copyright ml-auto mr-auto">
                  © 2023 Toggle Key | All Rights Reserved
                </div>
                <div className="footer_social ml-lg-auto">
                  <ul>
                    {/* <li><a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li> */}
                    {/* <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li> */}
                    {/* <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li> */}
                    {/* <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer >
    </>
  )
}
