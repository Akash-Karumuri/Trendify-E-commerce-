import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='px-3 container-fluid fixed-top mb-5 shadow-sm fixed-top'>
        <nav
            className="navbar navbar-expand-md py-2"
        >
            <div className="container center d-flex align-items-center justify-content-between">
                <NavLink className="navbar-brand py-0" to="/">Trendify</NavLink>
                <button
                    className="navbar-toggler d-lg-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId"
                    aria-controls="collapsibleNavId"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active py-0" to="/" aria-current="page">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link py-0" to="/Shirts">Shirts</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link py-0" to="/TShirts">T-Shirts</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link py-0" to="/Pants">Pants</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link py-0" to="/Shoes">Shoes</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link py-0" to="/Contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        

    </header>
  )
}

export default Header