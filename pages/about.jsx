import TerioCounter from "@/src/components/TerioCounter";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import { latestswiper, partnerswiper, projectsswiper } from "@/src/sliderProps";


import { blogswiper } from "@/src/sliderProps";

import { Swiper, SwiperSlide } from "swiper/react";
const About = () => {
  return (
    <Layout noHeaderBg pageName={"About"}>
      <div>
        <section
          className="splash-area-section"
          style={{ backgroundImage: "url(assets/img/background.jpg)" }}
        >
          <div className="container">
            <div className="splash-area">
            <h2>
            Unleashing Digital 
              <br /> Excellence
            </h2>
            <a href="#">About Us</a>
            </div>
          </div>
        </section>
        <section className="things-differently gap">
          <div className="container">
            <div className="row">
              <div className="col-xl-5">
                <div className="heading">
                  <h6>We Dream Digital</h6>
                  <h2>
              The Most 
                    <br />
           Creative Ideas
                  </h2>
                  <img alt="line" src="assets/img/headingline.png" />
                  <img alt="dots" className="dots" src="assets/img/dots.png" />
                </div>
              </div>
              <div className="col-xl-7">
                <div className="signature">
                  <h2>Our Mission</h2>
                  <p>
                 At Web Universals, we aim to empower businesses with cutting-edge digital solutions that transcend boundaries 
                 and drive growth. We aim to guide enterprises in their digital journey, providing innovative website design, 
                 development, and marketing services that deliver exceptional results. Through our expertise and commitment to 
                 excellence, we strive to create a lasting impact on our clients' success and help them thrive in the ever-evolving 
                 digital landscape.
                 </p>
                 <h2 className="pt-4">Our Vision</h2>
                 <p>
                 Our vision is to be the most trusted and sought-after website design and 
                 development company in Australia and globally. We envision being at the 
                 forefront of digital innovation, shaping the future of web technologies and 
                 digital marketing strategies. We aspire to be the driving force behind our 
                 clients' digital success, consistently exceeding expectations and setting new 
                 benchmarks for creativity, efficiency, and customer satisfaction.
                 </p>
                  <div className="ceo">
                   
                    <a href="team.html" className="themebtu">
                      Contact us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="pt-lg-5 pb-lg-4 pt-2 pb-4 ">
        <div className="container pb-lg-5 pb-2">
        <div className="heading pb-lg-4 pb-2">
              
                  <img alt="dots" className="dots" src="assets/img/dots.png" />
                </div>
       
          <Swiper {...blogswiper} className="swiper-container blogswiper">
            <SwiperSlide className="swiper-slide">
              <div className="blog-content">
                <div className="row">
                  <div className="col-xl-6">
                    <img
                      className="w-100"
                      alt="img"
                      src="assets/img/blog-3.jpeg"
                    />
                  </div>
                  <div className="col-xl-6">
                    <div className="latest-blog-post">
                    
                        <h2>Who We Are</h2>
                        <p>
                         Web Universals is a passionate team of creative minds, tech enthusiasts, and digital 
                         strategists based in Who We Are Australia. Since our inception in 2010, we have been 
                         on a relentless pursuit of excellence, crafting exceptional web solutions that blend 
                         artistry and functionality seamlessly. Our diverse portfolio encompasses a wide array 
                         of industries, and our success stories speak volumes about the transformative power of 
                         our services. 
                         </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <div className="blog-content">
                <div className="row">
                  <div className="col-xl-6">
                    <img
                      className="w-100"
                      alt="img"
                      src="assets/img/blog-4.jpeg"
                    />
                  </div>
                  <div className="col-xl-6">
                    <div className="latest-blog-post">
                  
                <h2>Our Philosophy</h2>
                <p>
                  At the heart of our philosophy lies the belief that every business is unique and
                   deserves a distinct online presence. We approach each project with a personalized touch, 
                   investing time in understanding our client's goals, target audience, and brand identity. 
                   This approach enables us to create tailor-made solutions that resonate with their vision
                    and foster lasting connections with their customers.
                </p>
                    </div>

                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <div className="blog-content">
                <div className="row">
                  <div className="col-xl-6">
                    <img
                      className="w-100"
                      alt="img"
                      src="assets/img/blog-4.jpeg"
                    />
                  </div>
                  <div className="col-xl-6">
                    <div className="latest-blog-post">
                  
                 <h2>Our Team</h2>
               <p>Our team is our biggest asset. Comprising talented individuals from diverse
                 backgrounds, we bring together a wealth of knowledge and expertise to every
                  project. Collaboration is at the core of our work culture, fostering an environment 
                  where creativity flourishes and ideas are nurtured.</p>
                    </div>
                    
                  </div>
                </div>
              </div>
            </SwiperSlide>

        
            <div className="swiper-button-next">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 476.213 476.213"
                style={{ enableBackground: "new 0 0 476.213 476.213" }}
                xmlSpace="preserve"
              >
                <polygon
                  points="405.606,167.5 384.394,188.713 418.787,223.106 0,223.106 0,253.106 418.787,253.106 384.394,287.5 
    405.606,308.713 476.213,238.106 "
                />
              </svg>
            </div>
            <div className="swiper-button-prev">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 476.213 476.213"
                style={{ enableBackground: "new 0 0 476.213 476.213" }}
                xmlSpace="preserve"
              >
                <polygon
                  points="405.606,167.5 384.394,188.713 418.787,223.106 0,223.106 0,253.106 418.787,253.106 384.394,287.5 
    405.606,308.713 476.213,238.106 "
                />
              </svg>
            </div>
          </Swiper>
        </div>
      </section> */}
 <section className="pt-lg-5 pb-lg-4 pt-2 pb-4 ">
        <div className="container pb-lg-5 pb-2">
        <div className="heading pb-lg-4 pb-2">
                
                  <h2>
                  Our Services

                  </h2>
                  <img alt="line" src="assets/img/headingline.png" />
                  <img alt="dots" className="dots" src="assets/img/dots.png" />
                </div>
       
          <Swiper {...blogswiper} className="swiper-container blogswiper">
            <SwiperSlide className="swiper-slide">
              <div className="blog-content">
                <div className="row">
                  <div className="col-xl-6">
                    <img
                      className="w-100"
                      alt="img"
                      src="assets/img/blog-3.jpeg"
                    />
                  </div>
                  <div className="col-xl-6">
                    <div className="latest-blog-post">
                      {/* <p>Web Universals</p>
                     <h2>Services for Australian Clients</h2>
                      <p>
                   
                      Whether it’s a website design, re design, SEO service, E-Commerce Website design and maintenance, 
                      proper implementation of info graphics,
                       hosting services, Social Media Marketing; 
                      Web Universals does it all for their most valuable Australian clients.
                      </p> */}
                 
                   <Link href="NewWebDesign"><h2>Website Design</h2></Link>  


                    <p>For each and every other company In Australia, the most important thing to
                      be created and maintained is nothing but a proper Cost effective website
                        design with various products and services being listed and updated for 
                        the convenience of the consumers. These days every consumer in Australia 
                        tend to visit the website of a particular company in order to find out things 
                        on their own regarding various products and services along with customer feedbacks
                        associated with it.</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <div className="blog-content">
                <div className="row">
                  <div className="col-xl-6">
                    <img
                      className="w-100"
                      alt="img"
                      src="assets/img/blog-4.jpeg"
                    />
                  </div>
                  <div className="col-xl-6">
                    <div className="latest-blog-post">
                    {/* <p>Critical Elements of a Good Design</p>
                    <h2>
                     
                     Texts, Active Links, Unique Look and Feel</h2>
                      <p>
                      A good web design should consists of proper and relevant texts, good content quality, 
                      proper navigation, actively working links and a unique look and feel 
                      in order to make the website look elegant.
                      </p> */}
                   {/* <h2>E-commerce</h2> */}
                   <Link href="E-commerce"><h2>E-commerce</h2></Link>  
                
                <p>
                With various developments and digitalization of several commercial sectors; 
                E-Commerce websites and maintaining them thoroughly is one such advancement
                that has occurred largely in the recent days. So a proper functionality of 
                an E-Commerce website is really very much vital in order to pull more customer 
                interactions and in order to make your product sell in the 
                commercial market much more effectively than before.
                </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <div className="blog-content">
                <div className="row">
                  <div className="col-xl-6">
                    <img
                      className="w-100"
                      alt="img"
                      src="assets/img/blog-4.jpeg"
                    />
                  </div>
                  <div className="col-xl-6">
                    <div className="latest-blog-post">
                    {/* <p>Your One-Stop Solution</p> */}
                    {/* <h2>Website Development and Business Growth</h2>
                      <p>
                      So, this service agency is basically a one stop solution for you where you can find an answer each 
                      and every quarry and an effective solution for each and every dilemma of yours. Do feel free to give us a 
                      call in case you want your website to be made live with the most happening themes 
                      and conceptual inputs required to take your business to the next level.
                      </p> */}
                 <Link href="SearchEngineOptimization"><h2>Search Engine Optimization</h2></Link>  
               
               <p>Is the process of affecting the visibility of a website or a web page in a search
                  engine’s unpaid results—often referred to as “natural,” “organic,” or “earned” 
                  results. In general, the earlier (or higher ranked on the search results page),
                   and more frequently a site appears in the search results list, the more visitors
                    it will receive from the search engine’s users. SEO may target different kinds 
                    of search, including image search, local search, video search, academic search,
                     news search and industry-specific vertical search engines.</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

        
            <div className="swiper-button-next">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 476.213 476.213"
                style={{ enableBackground: "new 0 0 476.213 476.213" }}
                xmlSpace="preserve"
              >
                <polygon
                  points="405.606,167.5 384.394,188.713 418.787,223.106 0,223.106 0,253.106 418.787,253.106 384.394,287.5 
    405.606,308.713 476.213,238.106 "
                />
              </svg>
            </div>
            <div className="swiper-button-prev">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 476.213 476.213"
                style={{ enableBackground: "new 0 0 476.213 476.213" }}
                xmlSpace="preserve"
              >
                <polygon
                  points="405.606,167.5 384.394,188.713 418.787,223.106 0,223.106 0,253.106 418.787,253.106 384.394,287.5 
    405.606,308.713 476.213,238.106 "
                />
              </svg>
            </div>
          </Swiper>
        </div>
      </section>
      <section
          className="we-deliver-results gap"
          style={{ backgroundColor: "#f2edf5" }}
        >
          <div className="container">
            <div className="heading two">
              <h2>Why Choose Web Universals</h2>
              <img alt="line" src="assets/img/headingline.png" />
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-6">
                <div className="makes-us-different-text">
                  
                  <h4>Expertise</h4>
                  <p>
                  With over a decade of experience, our team has honed their 
                  skills to perfection. We stay ahead of the curve by continuously 
                  upgrading our knowledge and techniques.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <div className="makes-us-different-text">
                  
                  <h4>Innovative Approach</h4>
                  <p>
                  We thrive on creativity and innovation, consistently pushing boundaries 
                  to deliver fresh and captivating digital experiences. Our approach is characterized by innovation
                  </p>
                  
                </div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <div className="makes-us-different-text">
                 
                  <h4>Client-Centric</h4>
                  {/* <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Phasellus hendrerit. Pellentesque aliquet nibh nec urna.
                  </p> */}
                  <p>
                  Our clients are our top priority, and we are dedicated to delivering
                   services that align with their objectives and timelines  putting our clients' needs and preferences at  heart of everything we do.
                  </p>
                  
                </div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <div className="makes-us-different-text">
                  
                  {/* <h4>Ecommerce</h4>
                  <p>
                    Sed pretium, ligula sollicitudin laoreet viverra, tortor
                    libero sodales leo, eget blandit nunc tortor eunibh. Nullam
                    mollis. Ut justo.
                  </p> */}
                  <h4>Result-Oriented</h4>
                  <p> Data drives our strategies. We are committed to delivering tangible
                     results that propel our clients' businesses toward success</p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <div className="makes-us-different-text">
                 
                  <h4>End-to-End Solutions</h4>
                  <p>
                  We offer comprehensive services under one roof
                  , from website design and development to digital marketing and app development.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <div className="makes-us-different-text">
                 
                  <h4>Transparency</h4>
                  <p>
                  We believe in transparent communication and keep 
                  our clients informed about every step of the process
                   Transparent practices are trust in relationships.
                  </p>
                </div>
              </div>
            </div>
            <div className="btugap">
              {/* <a href="services.html" className="themebtu">
                More Services
              </a> */}
            </div>
          </div>
          </section>
         
        
      <section className="gap reaview-section">
        <div className="container">
          <div className="heading">
            <h6>Why Partner With Us?</h6>
            <h2>We Love  What We Do</h2>
            <img alt="line" src="assets/img/headingline.png" />
          </div>
          <Swiper {...partnerswiper} className="swiper-container partnerswiper">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="reaview">
                  {/* <img alt="man" src="assets/img/reaview-1.jpg" /> */}
                  {/* <p>
                    “Morbi in sem quis dui placerat ornare. Pellentesque odio
                    nisi, euismod in, pharetra a, ultricies in, diam.”
                  </p>
                  <div className="boder" />
                  <span>
                    Kalem Patel
                    <br />
                    Manager of Terio
                  </span> */}
                  <h4>Who We Are</h4>
                  <div className="boder" />
                  <p>
                Web Universals is a passionate team of creative minds, tech 
                enthusiasts, and digital strategists based in Australia. Since
                 our inception in 2010, we have been on a relentless pursuit of 
                 excellence, crafting exceptional web solutions that blend artistry
                  and functionality seamlessly. Our diverse portfolio encompasses a
                   wide array of industries, and our success stories speak volumes about
                    the transformative power of our services.
                    </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="reaview">
                  {/* <img alt="man" src="assets/img/reaview-2.jpg" /> */}
                  {/* <p>
                    “Praesent dapibus, neque id cursus faucibus, tortor neque
                    egestas auguae, eu vulputate magna eros eu erat.”
                  </p>
                  <div className="boder" />
                  <span>
                    Bernard Castro
                    <br />
                    Owner of Love Digital
                  </span> */}
                  <h4>Our Philosophy</h4>
                  <div className="boder" />

                  <p>At the heart of our philosophy lies the belief that every
                     business is unique and deserves a distinct online presence
                     . We approach each project with a personalized touch, investing
                      time in understanding our client's goals, target audience, and 
                      brand identity. This approach enables us to create tailor-made 
                      solutions that resonate with their vision 
                    and foster lasting connections with their customers.Our philosophy centers around 
                    embracing creativity.</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="reaview">
                  {/* <img alt="man" src="assets/img/reaview-3.jpg" /> */}
                  {/* <p>
                    “Quisque a lectus. Donec consectetuer ligula vulputate sem
                    tristique cursus. Nam nulla quam, gravida non, commodo a.”
                  </p>
                  <div className="boder" />
                  <span>
                    Lori Moses
                    <br />
                    Manager of Digitalagency
                  </span> */}
                  <h4>Our Team</h4>
                  <div className="boder" />

                  <p>
                  Our team is our biggest asset. Comprising talented individuals
                   from diverse backgrounds, we bring together a wealth of
                    knowledge and expertise to every project. Collaboration is
                     at the core of our work culture, fostering an environment 
                     where creativity flourishes and ideas are nurtured.We are a dedicated team,
                      united by a passion for creativity and innovation. Together, we strive to 
                      deliver exceptional digital experiences that captivate and inspire.

                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="reaview">
                  {/* <img alt="man" src="assets/img/reaview-4.jpg" /> */}
                  {/* <p>
                    “Morbi in sem quis dui placerat ornare. Pellentesque odio
                    nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.
                    Cras consequat.”
                  </p>
                  <div className="boder" />
                  <span>
                    Kalem Patel
                    <br />
                    Manager of Terio
                  </span> */}
                  <h4>Join Hands with Web Universals</h4>
                  <div className="boder" />

                  <p>
                  Join Hands with Web Universals: Whether you are a startup 
                  looking for a captivating website or an established brand
                   seeking to revamp your online presence, Web Universals is
                    your ideal partner. We are committed to bringing your 
                    digital dreams to life, armed with the latest tools and 
                    a passionate team driven to make a difference."Join Hands
                     with Web Universals" is an invitation to collaborate and
                      partner 

                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="reaview">
                  {/* <img alt="man" src="assets/img/reaview-4.jpg" /> */}
                  {/* <p>
                    “Morbi in sem quis dui placerat ornare. Pellentesque odio
                    nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.
                    Cras consequat.”
                  </p>
                  <div className="boder" />
                  <span>
                    Kalem Patel
                    <br />
                    Manager of Terio
                  </span> */}
                  <h4>Contact Us</h4>
                  <div className="boder" />

                  <p>
                  Let's embark on an unforgettable journey 
                  of digital excellence together. Reach out to us today, 
                  and let's discuss how we can unleash the true potential 
                  of your business in the digital realm.Join us on an extraordinary
                   adventure of digital excellence. Contact us now to explore how we 
                   can unlock the full potential of your business in the digital realm
                   , together. <br/>
                   Experience the brilliance of Web Universals - Your Gateway to Online Success!
                  </p>
                </div>
              </SwiperSlide>
            </div>
            <div className="swiper-button-next">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 476.213 476.213"
                style={{ enableBackground: "new 0 0 476.213 476.213" }}
                xmlSpace="preserve"
              >
                <polygon
                  points="405.606,167.5 384.394,188.713 418.787,223.106 0,223.106 0,253.106 418.787,253.106 384.394,287.5 
    405.606,308.713 476.213,238.106 "
                />
              </svg>
            </div>
            <div className="swiper-button-prev">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 476.213 476.213"
                style={{ enableBackground: "new 0 0 476.213 476.213" }}
                xmlSpace="preserve"
              >
                <polygon
                  points="405.606,167.5 384.394,188.713 418.787,223.106 0,223.106 0,253.106 418.787,253.106 384.394,287.5 
    405.606,308.713 476.213,238.106 "
                />
              </svg>
            </div>
            <div className="swiper-pagination" />
          </Swiper>
        </div>
      </section>
       
      <div className="container">
        <div className="awesome-project">
          <h4>Let's Start An Awesome Project Now!</h4>
          <a href="contacts.html" className="themebtu full">
            Get Started
          </a>
        </div>
      </div>
      </div>
    </Layout>
  );
};
export default About;
