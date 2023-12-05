import React, { useState } from 'react'
import { Cookies } from 'react-cookie'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Search_item } from '../redux/actions'
import Search from './Search'
export default function HeaderComp() {
  const [handsearch, sethandsearch] = useState(false);
  const [menu, setmenu] = useState(false);
  const [icono, seticono] = useState(false);
  const [icont, seticont] = useState(false);
  let amount = useSelector(state => {
    if (JSON.parse(localStorage.getItem('amount'))) {
      return JSON.parse(localStorage.getItem('amount'))
    }
    else {
      return "0"
    }
  })
  function handlerSearch() {
    sethandsearch(!handsearch)
  }
  function handler() {
    setmenu(!menu)
  }
  let dispatch = useDispatch()
  function handlerClick() {
    dispatch(Search_item("", false))
  }
  function handlerItem() {
    seticono(!icono)
  }
  function handlerItemt() {
    seticont(!icont)

  }
  return (
    <>

      <header className="header">
        <div className="header_container">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="header_content d-flex flex-row align-items-center justify-content-start">
                  <div className="logo"><Link to="/">Toggle Key</Link></div>
                  <nav className="main_nav">
                    <ul>
                      <li className="hassubs">
                        <Link to="/">Home</Link>
                        <ul>
                          <li><Link to="/shop" onClick={() => handlerClick()}>Shop</Link></li>
                          <li><Link to="/cart">Cart</Link></li>
                          <li><Link to="/contact">Contact</Link></li>
                        </ul>
                      </li>
                      <li className="hassubs">
                        <Link to="/shop" onClick={() => handlerClick()}>Shop</Link>
                        <ul>
                          <li><Link to="/shop/binance/0" onClick={() => handlerClick()}>Binance</Link></li>
                          <li><Link to="/shop/steam/1" onClick={() => handlerClick()}>Steam</Link></li>
                          <li><Link to="/shop/ea-origin/2" onClick={() => handlerClick()}>EA Origin</Link></li>
                          <li><Link to="/shop/playstation/3" onClick={() => handlerClick()}>PlayStation</Link></li>
                          <li><Link to="/shop/uplay/5" onClick={() => handlerClick()}>Uplay</Link></li>
                          <li><Link to="/shop/other/4" onClick={() => handlerClick()}>Other</Link></li>
                        </ul>
                      </li>
                      <li><Link to="/contact">Contact</Link></li>
                    </ul>
                  </nav>
                  <div className="header_extra ml-auto">
                    <div className="shopping_cart">
                      <Link to="/cart">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 489 489" style={{ enableBackground: "new 0 0 489 489" }} >
                          <g>
                            <path d="M440.1,422.7l-28-315.3c-0.6-7-6.5-12.3-13.4-12.3h-57.6C340.3,42.5,297.3,0,244.5,0s-95.8,42.5-96.6,95.1H90.3
													c-7,0-12.8,5.3-13.4,12.3l-28,315.3c0,0.4-0.1,0.8-0.1,1.2c0,35.9,32.9,65.1,73.4,65.1h244.6c40.5,0,73.4-29.2,73.4-65.1
													C440.2,423.5,440.2,423.1,440.1,422.7z M244.5,27c37.9,0,68.8,30.4,69.6,68.1H174.9C175.7,57.4,206.6,27,244.5,27z M366.8,462
													H122.2c-25.4,0-46-16.8-46.4-37.5l26.8-302.3h45.2v41c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h139.3v41
													c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h45.2l26.9,302.3C412.8,445.2,392.1,462,366.8,462z"/>
                          </g>
                        </svg>
                        <div>Cart <span>({amount})</span></div>
                      </Link>
                    </div>
                    <div className="search" onClick={() => handlerSearch()}>
                      <div className="search_icon">
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                          viewBox="0 0 475.084 475.084" style={{ enableBackground: "new 0 0 475.084 475.084" }}
                        >
                          <g>
                            <path d="M464.524,412.846l-97.929-97.925c23.6-34.068,35.406-72.047,35.406-113.917c0-27.218-5.284-53.249-15.852-78.087
												c-10.561-24.842-24.838-46.254-42.825-64.241c-17.987-17.987-39.396-32.264-64.233-42.826
												C254.246,5.285,228.217,0.003,200.999,0.003c-27.216,0-53.247,5.282-78.085,15.847C98.072,26.412,76.66,40.689,58.673,58.676
												c-17.989,17.987-32.264,39.403-42.827,64.241C5.282,147.758,0,173.786,0,201.004c0,27.216,5.282,53.238,15.846,78.083
												c10.562,24.838,24.838,46.247,42.827,64.234c17.987,17.993,39.403,32.264,64.241,42.832c24.841,10.563,50.869,15.844,78.085,15.844
												c41.879,0,79.852-11.807,113.922-35.405l97.929,97.641c6.852,7.231,15.406,10.849,25.693,10.849
												c9.897,0,18.467-3.617,25.694-10.849c7.23-7.23,10.848-15.796,10.848-25.693C475.088,428.458,471.567,419.889,464.524,412.846z
												 M291.363,291.358c-25.029,25.033-55.148,37.549-90.364,37.549c-35.21,0-65.329-12.519-90.36-37.549
												c-25.031-25.029-37.546-55.144-37.546-90.36c0-35.21,12.518-65.334,37.546-90.36c25.026-25.032,55.15-37.546,90.36-37.546
												c35.212,0,65.331,12.519,90.364,37.546c25.033,25.026,37.548,55.15,37.548,90.36C328.911,236.214,316.392,266.329,291.363,291.358z
												"/>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="hamburger" onClick={() => handler()}><i className="fa fa-bars" aria-hidden="true"></i></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Search handsearch={handsearch} />
        {/* <div className="header_social">
          <ul>
            <li><Link to="#"><i className="fa fa-pinterest" aria-hidden="true"></i></Link></li>
            <li><Link to="#"><i className="fa fa-instagram" aria-hidden="true"></i></Link></li>
            <li><Link to="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
            <li><Link to="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
          </ul>
        </div> */}
      </header>
      <div className={menu ? "menu menu_mm trans_300 active" : "menu menu_mm trans_300 "}>
        <div className="menu_container menu_mm">
          <div className="page_menu_content">

            <div className="page_menu_search menu_mm">
              <form action="#">
                <input type="search" required="required" className="page_menu_search_input menu_mm" placeholder="Search for products..." />
              </form>
            </div>
            <ul className="page_menu_nav menu_mm">
              <li className="page_menu_item has-children menu_mm" onClick={() => handlerItem()}>
                <Link to="/">Home<i className="fa fa-angle-down"></i></Link>
                <ul className={icono ? "page_menu_selection menu_mm active" : "page_menu_selection menu_mm"} style={{ height: icono ? "auto" : "0px" }}>
                  <li className="page_menu_item menu_mm ban" onClick={() => setmenu(false)}><Link to="/shop">Shop<i className="fa fa-angle-down"></i></Link></li>
                  <li className="page_menu_item menu_mm ban" onClick={() => setmenu(false)}><Link to="/cart">Cart<i className="fa fa-angle-down"></i></Link></li>
                  {/* <li className="page_menu_item menu_mm"><Link to="checkout.html">Checkout<i className="fa fa-angle-down"></i></Link></li> */}
                  <li className="page_menu_item menu_mm ban" onClick={() => setmenu(false)}><Link to="/contact">Contact<i className="fa fa-angle-down"></i></Link></li>
                </ul>
              </li>
              <li className="page_menu_item has-children menu_mm" onClick={() => handlerItemt()}>
                <Link to="/shop">Categories<i className="fa fa-angle-down"></i></Link>
                <ul className={icont ? "page_menu_selection menu_mm active" : "page_menu_selection menu_mm"} style={{ height: icont ? "auto" : "0px" }}>
                  <li className="page_menu_item menu_mm ban" onClick={() => setmenu(false)}><Link to="/shop/binance/0">Binance<i className="fa fa-angle-down"></i></Link></li>
                  <li className="page_menu_item menu_mm ban" onClick={() => setmenu(false)}><Link to="/shop/steam/1">Steam<i className="fa fa-angle-down"></i></Link></li>
                  <li className="page_menu_item menu_mm ban" onClick={() => setmenu(false)}><Link to="/shop/ea-origin/2">EA Origin<i className="fa fa-angle-down"></i></Link></li>
                  <li className="page_menu_item menu_mm ban" onClick={() => setmenu(false)}><Link to="/shop/playstation/3">PlayStation<i className="fa fa-angle-down"></i></Link></li>
                  <li className="page_menu_item menu_mm ban" onClick={() => setmenu(false)}><Link to="/shop/uplay/5">Uplay<i className="fa fa-angle-down"></i></Link></li>

                  <li className="page_menu_item menu_mm ban" onClick={() => setmenu(false)}><Link to="/shop/other/4">Other<i className="fa fa-angle-down"></i></Link></li>
                </ul>
              </li>
              <li className="page_menu_item menu_mm" onClick={() => setmenu(false)}><Link to="/contact">Contact<i className="fa fa-angle-down"></i></Link></li>
            </ul>
          </div>
        </div>

        <div className="menu_close" onClick={() => handler()}><i className="fa fa-times" aria-hidden="true"></i></div>

        {/* <div className="menu_social">
          <ul>
            <li><Link to="#"><i className="fa fa-pinterest" aria-hidden="true"></i></Link></li>
            <li><Link to="#"><i className="fa fa-instagram" aria-hidden="true"></i></Link></li>
            <li><Link to="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
            <li><Link to="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
          </ul>
        </div> */}
      </div>
    </>
  )
}
