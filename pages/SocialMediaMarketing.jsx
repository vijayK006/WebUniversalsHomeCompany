import TerioCounter from "@/src/components/TerioCounter";
import Layout from "@/src/layout/Layout";
import { blogswiper } from "@/src/sliderProps";

import { Swiper, SwiperSlide } from "swiper/react";
const SocialMediaMarketing = () => {
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
            Social Media Marketing
            </h2>
            <a href="#"></a>
            </div>
          </div>
        </section>
        <section className="things-differently gap">
          <div className="container">
            <div className="row">
              <div className="col-xl-5">
                <div className="heading">
                  {/* <h6>We Turn Your Ideas Into Beautiful Feature Mobile Apps At Affordable Costs</h6> */}
                  <h2>
                  Amplify Your Brand Presence, Engage,<br /> and Grow!
                  </h2>
                  <img alt="line" src="assets/img/headingline.png" />
                  <img alt="dots" className="dots" src="assets/img/dots.png" />
                </div>
              </div>
              <div className="col-xl-7">
                <div className="signature">
                  <p>
                  Are you looking to establish a solid social media presence for your business
                   but need help figuring out where to start? Look no further! At Web Universals, 
                   we offer comprehensive Social Media Marketing (SMM) solutions that will set your 
                   business on the path to social media success.
                  </p>
                  <br />
                  <h4>Unlock the Power of Social Media</h4>
Our Social Media Marketing services are tailored to meet the needs of businesses of all sizes, from startups to established enterprises. In today's digital age, social media has evolved into an essential marketing tool, with billions of active users across multiple platforms. It presents an unparalleled opportunity to engage with your target audience, boost brand recognition, and foster customer loyalty.

                </div>
              </div>
            </div>
          </div>
        </section>
   
        {/* <section className="pt-lg-5 pb-lg-4 pt-2 pb-4 ">
        <div className="container pb-lg-5 pb-2">
        <div className="heading pb-lg-4 pb-2">
        <h2> Your Key to Social Media Success
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
                      src="assets/img/socialMarketing4.jpg"
                    />
                  </div>
                  <div className="col-xl-6">
                    <div className="latest-blog-post">
                  
                     <h4>Account Creation</h4>
                      <p> 
                       If you still need social media accounts for your business, we'll create them for you. From Facebook and Instagram to Twitter and LinkedIn, we'll set up accounts on the platforms most relevant to your industry and target audience.
                      </p>
                      <h4 className="pt-3">Tailored Content Creation</h4>
                      <p>
                      Our team of experts will skillfully create captivating and meaningful content
                       that deeply connects with your audience. We will meticulously design striking
                        posters  unique personality and align seamlessly with your business objectives.
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
                      src="assets/img/socialMarketing2.jpg"
                    />
                  </div>
                  <div className="col-xl-6">
                    <div className="latest-blog-post">
                    <h4>Customized Posting-Frequency</h4>
                      <p> 
                      You can choose the best posting frequency that suits your business.
                       We offer three options - 3 posts weekly, five posts weekly, or seven
                        posts weekly. This flexibility your social media presence
                         remains active  keeping your audience engaged.
                      </p>
                      <h4 className="pt-3">Targeted Audience Reach</h4>
                      <p>
                      We will conduct extensive research your target audience and identify
                       to gain insights into their preferences. By gaining insights into their 
                       interests, we will customize our content to resonate with them, 
                       boosting and fostering brand loyalty.
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
                      src="assets/img/socialMarketing3.jpg"
                    />
                  </div>
                  <div className="col-xl-6">
                    <div className="latest-blog-post">
                    <h4>Brand Awareness & Credibility</h4>
                      <p> 
                      Having an active and engaging social media  When potential customers search for your business on 
                       Google, they'll be delighted to find your social media accounts actively 
                       connecting with your audience.
                      </p>
                      <h4 className="pt-3">Ongoing Support & Insights</h4>
                      <p>
                      Our commitment to your success doesn't end with posting content. We'll provide regular 
                      reports and insights on your social media performance,valuable data to fine-tune 
                      your marketing strategy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="blog-content">
                <div className="row align-items-center">
                  <div className="col-xl-6">
                    <img
                      className="w-100"
                      alt="img"
                      src="assets/img/socialMarketing3.jpg"
                    />
                  </div>
                  <div className="col-xl-6">
                    <div className="latest-blog-post">
                    <h4>Get Started Today</h4>
                      <p> 
                      If you still need social media accounts for your business, we'll
                       create them for you. From Facebook and Instagram to Twitter and
                        LinkedIn, we'll set up accounts on the platforms most relevant to your 
                        industry and target audience.
                      </p>
                     

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
  {/* <hr /> */}

 <section className="container">
  <h2 className="text-center pt-2 pb-2">Amplify Your Brand Presence, Engage, and Grow!</h2>
      <div className="row pt-lg-5 pb-lg-5 pt-3 pb-3">
        
       <div className="col-lg-6 col-md-6">

       <div className="cross-card-text pt-4">
               <a href="#">
                 <h3>Account Creation</h3>
               </a>
               <p className="pt-5">
               At the heart of our philosophy lies the belief that every business
                is unique and deserves a distinct online presence. We approach each
                 project with a personalized touch, investing time in understanding 
                 our client's goals, target audience, and brand identity.<br/><br/> This approach 
                 enables us to create tailor-made solutions that resonate with their vision
                  and foster lasting connections with their customers.
               </p>
             </div>
           

       </div>

<div className="col-lg-6 col-md-6">
       <img className="w-100 cross-over-img"   alt="discovery"   src="assets/img/discovery-4(4).jpg" />
       </div>  
     </div>

     <div className="row pt-lg-5 pb-lg-5 pt-3 pb-3">
       <div className="col-lg-6 col-md-6">
       <img className="w-100 cross-over-img"   alt="discovery"   src="assets/img/discovery-3(3)(3).jpg" />
     
       

       </div>

<div className="col-lg-6 col-md-6">
<div className="cross-card-text pt-2">
               <a href="#">
                 <h3>Tailored Content Creation</h3>
               </a>
               <p className="pt-5">
               Our team of experts will skillfully create captivating and meaningful content that 
               deeply connects with your audience. We will meticulously design striking posters <br />
                and write attention-grabbing captions that effortlessly reflect your brand's
                 unique personality and align seamlessly with your business objectives.
               </p>
             </div>
       </div>
       
     </div>
     <div className="row pt-lg-5 pb-lg-5 pt-3 pb-3">
       <div className="col-lg-6 col-md-6">

       <div className="cross-card-text pt-4">
               <a href="#">
                 <h3>Customized Posting-Frequency</h3>
               </a>
               <p className="pt-5">
               You can choose the best posting frequency that suits your business.
                We offer three options - 3 posts weekly, five posts weekly, or seven <br /><br />
                 posts weekly. This flexibility ensures that your social media presence 
                 remains active and vibrant, keeping your audience engaged.
               </p>
             </div>
           

       </div>

<div className="col-lg-6 col-md-6">
       <img className="w-100 cross-over-img"   alt="discovery"   src="assets/img/discovery-2(2).jpg" />
       </div>  
     </div>

     <div className="row pt-lg-5 pb-lg-5 pt-3 pb-3">
       <div className="col-lg-6 col-md-6">
       <img className="w-100 cross-over-img"   alt="discovery"   src="assets/img/discovery-1(1).jpg" />
     
       

       </div>

<div className="col-lg-6 col-md-6">
<div className="cross-card-text pt-4">
               <a href="#">
                 <h3>Targeted Audience Reach</h3>
               </a>
               <p className="pt-5">
               We will conduct extensive research your target audience and 
               identify to gain insights into their preferences. By <br /><br />
               gaining insights into their interests, we will customize 
               our content to resonate with them, boosting engagement and 
               fostering brand loyalty.
               </p>
             </div>
       </div>
     </div>

     <div className="row pt-lg-5 pb-lg-5 pt-3 pb-3">
       <div className="col-lg-6 col-md-6">

       <div className="cross-card-text pt-4">
               <a href="#">
                 <h3>Brand Awareness & Credibility</h3>
               </a>
               <p className="pt-5">
               Having an active and engaging social media presence boosts brand awareness 
               and establishes credibility. When potential customers search for your business <br /><br />
                on Google, they'll be delighted to find your social media accounts actively 
                connecting with your audience.
               </p>

             </div>
           

       </div>

<div className="col-lg-6 col-md-6">
       <img className="w-100 cross-over-img"   alt="discovery"   src="assets/img/discovery-2(2)(2).jpg" />
       </div>  
     </div>


     <div className="row pt-lg-5 pb-lg-5 pt-3 pb-3">
       <div className="col-lg-6 col-md-6">
       <img className="w-100 cross-over-img"   alt="discovery"   src="assets/img/discovery-1(1)(1).jpg" />
     
       

       </div>

<div className="col-lg-6 col-md-6">
<div className="cross-card-text pt-4">
               <a href="#">
                 <h3>Ongoing Support & Insights</h3>
               </a>
               <p className="pt-5">
               Our commitment to your success doesn't end with posting content.
                We'll provide regular reports and insights on your social media
                <br /><br />
                 performance, giving you valuable data to fine-tune your marketing strategy.
               </p>
             </div>
       </div>
     </div>

</section>
      <div className="container  mt-5">
        <div className="awesome-project">
          <h4>Your Gateway to Social Media Marketing Excellence!</h4>
          <a href="contacts.html" className="themebtu full">
            Contact Us Now
          </a>
        </div>
      </div>

       
      </div>
    </Layout>
  );
};
export default SocialMediaMarketing;
