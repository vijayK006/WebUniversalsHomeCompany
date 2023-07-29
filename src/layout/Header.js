import Link from "next/link";
import { useState } from "react";
import MobileHeader from "./MobileHeader";

import  { BsPersonWorkspace } from "react-icons/bs";
import  { FiSearch, FiFacebook } from "react-icons/fi";
import  { MdSendToMobile } from "react-icons/md";
import  { IoShareSocialOutline, IoLogoGooglePlaystore } from "react-icons/io5";

import  { CgWebsite } from "react-icons/cg";
// import  { FiFacebook } from "react-icons/io";

const Header = ({ headerExtraClass, noHeaderBg, blackLogo }) => {
  const [searchToggle, setSearchToggle] = useState(false);
  const [toggle, setToggle] = useState(false);



 const  clickService =()=>{
    document.getElementById('megaMenu_items').classList.toggle("height-100");
}

  return (
    <>
       <header
      className={headerExtraClass ? headerExtraClass : ""}
      style={
        !noHeaderBg
          ? { backgroundImage: `url(assets/img/header.jpg)` }
          : { backgroundColor: "transparent" }
      }
    >
      <div className="container-fluid adj-all_screen">
        <div className="nav">
          <div className="d-flex align-items-center">
            <div className="logo">
              <Link legacyBehavior href="/">
                <a>
                  {blackLogo ? (
                    <div>
                      <img alt="logo" src="assets/img/logo/black.gif" className="logo-resp2"/>
                  
                    </div>
                    
                  ) : (
                    <div>
                      <img alt="logo" src="assets/img/logo/white.gif" className="logo-resp2"/>
            
                    </div>
                  )}
                </a>
             
              </Link>
       
            </div>
            <ul className="menu">
          

              <li>
                <Link legacyBehavior href="/">
                  Home
                </Link>
              </li>

              <li>
                <Link legacyBehavior href="about">
   About Us
                </Link>
           


              </li>

              <li onClick={clickService}>
                <Link legacyBehavior href="">
      Our Services
                </Link>

                {/* <ul className="sub-menu">
                  <li>
                    <Link legacyBehavior href="NewWebDesign">
              Website Design
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="WebSiteRedesign">
                      Website Redesign
                    </Link>
                  </li>

                  <li>
                    <Link legacyBehavior href="E-commerce">
                      E-Commerce Website
                    </Link>
                  </li>

                  <li>
                    <Link legacyBehavior href="">
                    Mobile App
                    </Link>
                  </li>

                  <li>
                    <Link legacyBehavior href="SearchEngineOptimization">
                    Search Engine  Optimization 
                    </Link>
                  </li>

                  <li>
                    <Link legacyBehavior href="">
                   Social Media Marketing
                    </Link>
                  </li>

                  <li>
                    <Link legacyBehavior href="">
                 Google Ads
                    </Link>
                  </li>

                  <li>
                    <Link legacyBehavior href="">
                 Facebook Ads
                    </Link>
                  </li>

                </ul> */}
              </li>


              <li>
              <Link legacyBehavior href="">
      Graphic Design
                </Link>

                <ul className="sub-menu">
                  <li>
                    <Link legacyBehavior href="">
              Brochure Design
                    </Link>
                  </li>

                  <li>
                    <Link legacyBehavior href="LogoDesign">
                      Logo Design
                    </Link>
                  </li>

                </ul>
              </li>


              <li>
                <Link legacyBehavior href="blog">
                  Blog
                </Link>
              
              </li>

        

                {/* <li>
                  <Link legacyBehavior href="">
                    Online Marketing  
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link legacyBehavior href="SearchEngineOptimization">
                        Search Engine Optimization
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="SocialMediaMarketing">
                        Social Media Marketing
                      </Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link legacyBehavior href="MobileAppDevelopment">
              Mobile App Development
                  </Link>
                </li> */}

         
            </ul>
          </div>
          <div>
      
            <Link legacyBehavior href="/contacts">
              <a className="themebtu">Contact Us</a>
            </Link>
          </div>
          <div className="bar-menu" onClick={() => setToggle(true)}>
            <i className="fa-solid fa-bars" />
          </div>
        </div>
      </div>
      <MobileHeader toggle={toggle} close={() => setToggle(false)} />


    </header>

<div className="mega-menu-items" id="megaMenu_items">
<div className="container">
  <div className="row">

    <div className="col-lg-3">
    <div className="mega-menu-card">
        <Link legacyBehavior href="NewWebDesign">
            <p className="mega-menu-items-list"><CgWebsite className="mega_menu-icons"/> Website Design</p>  
                    </Link>
    </div>
  
                    </div>

     <div className="col-lg-3"> 
     <div className="mega-menu-card">
 <Link legacyBehavior href="WebSiteRedesign">
    <p className="mega-menu-items-list"><BsPersonWorkspace className="mega_menu-icons"/>   Website Redesign</p>
                    </Link>
     </div>              
   
                    </div>

     <div className="col-lg-3">  
     <div className="mega-menu-card">
  <Link legacyBehavior href="E-commerce">
                      <p className="mega-menu-items-list"><CgWebsite className="mega_menu-icons"/> E-Commerce Website</p>
                    </Link>
     </div>             
 
                    </div>

                  <div className="col-lg-3">  
     <div className="mega-menu-card">
   <Link legacyBehavior href="MobileAppDevelopment">
                  <p className="mega-menu-items-list"><MdSendToMobile className="mega_menu-icons"/> Mobile App</p>  
                    </Link>
     </div>             

                    </div>   

</div>

<div className="line-white"/>
<div className="row"  >
    

     <div className="col-lg-3"> 
     <div className="mega-menu-card">
  <Link legacyBehavior href="SearchEngineOptimization">
                  <p className="mega-menu-items-list"><FiSearch className="mega_menu-icons"/> Search Engine  Optimization </p>  
                    </Link>
     </div>              

                    </div>

     <div className="col-lg-3">  
     <div className="mega-menu-card">
 <Link legacyBehavior href="SocialMediaMarketing">
                 <p className="mega-menu-items-list"><IoShareSocialOutline className="mega_menu-icons"/> Social Media Marketing</p>  
                    </Link> 
     </div>           
  
                    </div>

     <div className="col-lg-3">   
     <div className="mega-menu-card">
<Link legacyBehavior href="">
               <p className="mega-menu-items-list"><IoLogoGooglePlaystore className="mega_menu-icons"/>  Google Ads</p> 
                    </Link>
     </div>            
   
                    </div>

     <div className="col-lg-3"> 
     <div className="mega-menu-card">
  <Link legacyBehavior href="">
               <p className="mega-menu-items-list"><FiFacebook className="mega_menu-icons"/> Facebook Ads</p>  
                    </Link>
     </div>              
 

    </div>

  </div>
</div>
</div>
    </>
   

    
  );
};
export default Header;
