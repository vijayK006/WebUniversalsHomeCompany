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
                  Social Media 
                    <br />
                    Marketing
                  </h2>
                  <img alt="line" src="assets/img/headingline.png" />
                  <img alt="dots" className="dots" src="assets/img/dots.png" />
                </div>
              </div>
              <div className="col-xl-7">
                <div className="signature">
                  <p>
                  With the advancement of several social media platforms and forums of discussions, 
                  this overall social media phenomenon has become really very vital in the lives of both 
                  the entrepreneurs as well as the clients. The popularity behind these Social Media Marketing 
                  strategies is nothing but the flexibility of media exposure and better advertising 
                  platform creating maximum customer engagements with added promotional perks. <br/><br/> Thus, 
                  Social Media Marketing in today’s date is creating quite a lot of successful activities using various
                   social media platforms such as Facebook, Twitter, Goggle+ and many more.
                  </p>
                 
                </div>
              </div>
            </div>
          </div>
        </section>
   
        <section className="pt-lg-5 pb-lg-4 pt-2 pb-4 ">
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
                      src="assets/img/socialMarketing4.jpg"
                    />
                  </div>
                  <div className="col-xl-6">
                    <div className="latest-blog-post">
                  
                   
                      <p>
                   
                      We, here at our Web Universals, Australia, specializes in monitoring and carrying out such social media strategies in a cost effective way so that you can afford to stay in budget while availing our exclusive service. There are several clients, on being impressed with our timely delivery of a successfully completed project which has made them coming back to us every time.
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
                    
                    
                      <p>
                      We do value your business and know how precious it is for you to get things done on time assuring cost effectiveness, good design quality, 100 % guaranteed satisfaction, no surprises and we always maintain a one point of contact.
                      Our social media marketing service also includes social media audit, competitive analysis, community monitoring, media creation and lot more
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
                    
                    
                      <p>
                      We always maintain a one point of contact for your ease and convenience along with the best in class quality design and 100% satisfaction which is a guarantee from our side. Our clients here at Australia are extremely serious regarding such matters and we never had disappointed them with either of our services which we promise to cater and deliver timely maintain the quality of the task as well
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
export default SocialMediaMarketing;
