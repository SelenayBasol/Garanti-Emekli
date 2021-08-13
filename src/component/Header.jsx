import React from 'react'
import "./css/Header.css"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="header">
      <Link to="/"> <div className="logo my-4 container">
        <img src="img/garanti_logo.png" alt="garanti logo" />
      </div></Link>
      <div className="nav row  py-3 bg-light">
        <div className="offset-md-1 col-md-4  d-flex justify-content-around nav-item ">
          <Link className="link-item" to="/">  <h5>Anasayfa</h5> </Link>
          <Link className="link-item" to="/hakkimizda"> <h5 >Hakkımızda</h5></Link>
          <Link className="link-item" to="/gorusleriniz"> <h5> Görüşleriniz</h5> </Link>
        </div>
        <div className="offset-md-4 col-md-2  d-flex headerInput ">
          <input type="text" placeholder="Ara..." className="form-control mx-3 shadow-none" />
        </div>
      </div>
    </header>
  )
}

export default Header
