import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <div className="container nav-bg">
                <div className="row">
                    <div className="col-12 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container">
                                <NavLink className="navbar-brand" to="/">HK Solution</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink exact activeClassName='active' className="nav-link" to="/home">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact activeClassName='active' className="nav-link" to="/about">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact activeClassName='active' className="nav-link" to="/services">Services</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact activeClassName='active' className="nav-link" to="/contact">Contact</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar
