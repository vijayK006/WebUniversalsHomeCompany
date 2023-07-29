import Link from "next/link";
import { useState } from "react";
const MobileHeader = ({ toggle, close }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const active = (value) => setActiveMenu(value === activeMenu ? null : value),
    activeSubMenu = (value) => (value == activeMenu ? "active" : "");
  return (
    <div
      className={`mobile-nav ${toggle ? "open" : "hmburger-menu"}`}
      id="mobile-nav"
      style={{ display: "block" }}
    >
      <div className="res-log">
        <Link href="/">
          <img src="assets/img/logo/WebUniversalslogo-animated-2.gif" alt="Responsive Logo" style={{height:"40px",width:"auto"}}/>
        </Link>
        <p className="" style={{fontSize: '9px',
    color: 'white',
    margin: '0px',
    lineHeight:"3",
    marginLeft:"10px",
    fontWeight: "800"}}>Web Design - Logo - SEO & SMM - Mobile App</p>
      </div>
      <ul>
        <li>
                <Link legacyBehavior href="/">
                  Home
                </Link>
              </li>


              <li>
                <Link legacyBehavior href="/about">
                  About Us
                </Link>
              </li>

    

        <li className={`menu-item-has-children ${activeSubMenu("webDesign")}`}>
          <a href="JavaScript:void(0)" onClick={() => active("webDesign")}>
       Our Services
          </a>
          <ul className="sub-menu">
                  <li>
                    <Link legacyBehavior href="NewWebDesign">
               Web Design
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
                    <Link legacyBehavior href="MobileAppDevelopment">
                    Mobile App
                    </Link>
                  </li>

                  <li>
                    <Link legacyBehavior href="SearchEngineOptimization">
                    Search Engine Optimization
                    </Link>
                  </li>

                  <li>
                    <Link legacyBehavior href="SearchEngineOptimization">
                    Social Media Marketing
                    </Link>
                  </li>

                  <li>
                    <Link legacyBehavior href="SearchEngineOptimization">
Google Ads
                    </Link>
                  </li>

                  
                  <li>
                    <Link legacyBehavior href="SearchEngineOptimization">
Facebook Ads
                    </Link>
                  </li>

                </ul>

        </li>

        <li className={`menu-item-has-children ${activeSubMenu("online")}`}>
          <a href="JavaScript:void(0)" onClick={() => active("online")}>
          Graphic Design
          </a>
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
                <Link legacyBehavior href="MobileAppDevelopment">
             Mobile App Development
                </Link>
              </li>

        <li>
                <Link legacyBehavior href="blog">
                  Blog
                </Link>
              
              </li>

        <li>
          <Link legacyBehavior href="contacts">
            contacts
          </Link>
        </li>
      </ul>
      <a href="JavaScript:void(0)" id="res-cross" onClick={() => close()} />
    </div>
  );
};
export default MobileHeader;
