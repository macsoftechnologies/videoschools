import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <>
          <section className="vd-scl">
         
                <div className="vd-scl-navbar">
                    <nav className="navbar navbar-expand-lg bg-dark">
                        <div className="container-fluid">

                            <img src="https://www.videoschool.com/wp-content/uploads/2020/09/video-school-wide-teal-250.png" />
                            <div className="collapse navbar-collapse ml-5" id="navbarSupportedContent">
                                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/">Free trail</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="video">Video</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="photo">Photo</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="design">Design</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="business">Business</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="animation">Animation</Link>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <Link className="nav-link" to="techai">Tech & AI</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="#">Art</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="Write">Writing</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="login">Login</Link>
                                    </li>


                                </ul>
                                <form className="d-flex" role="search">
                                    <i className="fa fa-search" aria-hidden="true"></i>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </section>
        </>
    )
}

export default Navbar;