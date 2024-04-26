import React from "react";
import './Footer.css';
import { Link } from "react-router-dom";




function Footer(){
    return(
        <>
        <footer>
    <div className="footer-head">
      <p>© Copyright 2012 - <script>document.write(new Date().getFullYear());</script> My Website | ALL RIGHTS RESERVED | <a href="privacy-policy.html">TERMS & PRIVACY</a></p>
    <div className="footer-links">

      <Link className='navlink' to="Contacts">Contact</Link>
      <Link className="navlink" to="about">About</Link>
      {/* <Link className="navlink" to={resource}>Resources</Link>  */}
 
    </div>
    </div>
    
    <div className="social-links">
    <a href="https://www.facebook.com/mywebsite" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a>
      <a href="https://www.facebook.com/mywebsite" target="_blank"><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
      <a href="https://www.instagram.com/mywebsite" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a>
      <a href="https://www.twitter.com/mywebsite" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a>
    </div>
  </footer>
  </>
    );
}
export default Footer;