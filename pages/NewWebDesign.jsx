// import BrandSlider from "@/src/components/BrandSlider";
import Layout from "@/src/layout/Layout";
import Link from "next/link";

const Team = () => {
  return (
    <Layout noHeaderBg pageName={"Team"}>
      <section
        className="splash-area-section"
        style={{ backgroundImage: "url(assets/img/background.jpg)" }}
      >
        <div className="container">
          <div className="splash-area">
            <h2>
          New Website 
            <br/>
            Design
            </h2>
            {/* <h2>Crafting Your <br />Digital Identity</h2> */}
            {/* <a href="#">Meet The Team</a> */}
          </div>
        </div>
      </section>
      <section className="gap">
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <div className="heading">
                <h6>Affordable</h6>
                <h2>
                  {" "}
                  Crafting YourDigital Identity
                </h2>
                <img alt="line" src="assets/img/headingline.png" />
                <img alt="dots" className="dots" src="assets/img/dots.png" />

              </div>
            </div>
            <div className="offset-xl-1 col-xl-6">
              <div className="team-welcome-text">
               <p>At Web Universals, we specialize in creating stunning and functional websites that leave a lasting 
                impression on your audience. As a top-notch website design company, we offer 
                diverse services to cater to businesses of all sizes and industries. Whether you
                 need a simple portfolio website or a feature-rich e-commerce platform, our team of 
                 expert designers is here to bring your digital vision to life.</p>
                {/* <p>
                For each and every other company In Australia, the most important thing to be created and maintained 
                is nothing but a proper Cost effective website design with various products and services being listed 
                and updated for the convenience of the consumers. These days every consumer in Australia tend to visit 
                the website of a particular company in order to find out things on their own regarding various products 
                and services along with customer feedbacks associated with it. <br/><br/>So if you are not being able to put 
                up an active website for your company, the impression shall tend to suffer a lot leaving you quite 
                behind in this competitive market. Now for example you have a website but it is not getting the amount
                 of exposure you are expecting; well this kind of situations often take place in case the website is not 
                responsive enough due to several reasons related to it.
                </p> */}
                <a href="tel:08 8121 7826" className="themebtu">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        
        </div>
      </section>
     
      <section
        className="discovery gap no-bottom"
        style={{ backgroundColor: "#f2edf5" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="heading">
                {/* <h6>Web Design Sydney</h6> */}
                {/* <h2> 100% Satisfaction<br/> Guarantee</h2> */}
                <h2>Why Choose Us for <br /> Website Design</h2>
                <img alt="line" src="assets/img/headingline.png" />
                {/* <p>
                Our web design sydney and techies know some efficient remedial measures for such pain points. We here 
                at Web Universals Australia, concentrates on designing websites in such a way which shall ensure faster 
                loading, better display, look and feel and the way it works, which shall be responsive enough. Clients 
                mainly deal with such for several reasons such as timely delivery of job, 
                cost effective website works, 100% satisfaction guarantee, one point of contact and no surprises.
                </p> */}
               <h4>Expertise in WordPress</h4>
               <p>
              Our skilled WordPress website designers have mastered the art of creating visually 
              appealing and user-friendly websites on this popular platform. We harness the power 
              of WordPress to deliver websites that are easy to manage and update.
              </p>
              <h4>Best-in-Class Design</h4>
              <p>
               We take pride in being at the forefront of delivering the best website design 
               solutions. Our team updates the latest design trends to ensure your website stands 
               out.
               </p>
              <h4>Customer-Centric Approach</h4>
              <p>
             Your satisfaction is our priority. As a website design agency, we listen to your ideas
              and requirements to create a website that aligns perfectly with your brand and
               business goals.
               </p>
              <h4>Local Presence, Global Reach</h4>
              <p>
              Whether you're searching for a "website designer near me" or looking for a reliable
               website design company, we have a global reach and serve clients from various corners.
              </p>
              <h4>Portfolio Showcase</h4>
              <p>
              We understand the importance of showcasing your work. Our portfolio website design
               services enable you to present your projects visually, compellingly, and organized.
               </p>
                <h4>Website Design & Development</h4>
                    <p>
                    We don't just stop at design; our team of skilled developers complements our
                     services with seamless website development, ensuring your website performs as
                      brilliantly as it looks.
                      </p>
                {/* <Link href="contacts" className="themebtu full">
                  Contact Us
                </Link> */}
              <br />
              <br />
              <br />
              <br />
          
              </div>
            </div>
            <div className="col-xl-6">
              <div className="discovery-img hoverstyle">
                <figure>
                  <img
                    className="w-100"
                    alt="discovery"
                    src="assets/img/newweb.jpg"
                  />
                </figure>
                <div className="discovery-text">
                  <i>
                    <svg
                      id="Layer_5"
                      enableBackground="new 0 0 64 64"
                      height={512}
                      viewBox="0 0 64 64"
                      width={512}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m33 19v-2h3v-3c0-1.654-1.346-3-3-3h-2c-.552 0-1-.449-1-1v-1h3c.552 0 1 .449 1 1h2c0-1.654-1.346-3-3-3v-2h-2v2h-3v3c0 1.654 1.346 3 3 3h2c.552 0 1 .449 1 1v1h-3c-.552 0-1-.449-1-1h-2c0 1.654 1.346 3 3 3v2z" />
                      <path d="m62.618 47-5-10h-13.974c2.044-1.651 3.356-4.174 3.356-7v-1h-7c-2.826 0-5.349 1.312-7 3.356v-9.406c5.598-.508 10-5.222 10-10.95 0-6.065-4.935-11-11-11s-11 4.935-11 11c0 5.728 4.402 10.442 10 10.949v5.406c-1.651-2.043-4.174-3.355-7-3.355h-7v1c0 4.962 4.037 9 9 9h5v2h-1.382-3.236-20l-5 10h3.618v16h52v-16zm-36.618-14c-3.521 0-6.442-2.612-6.929-6h4.929c3.521 0 6.442 2.612 6.929 6zm14-2h4.929c-.486 3.388-3.408 6-6.929 6h-4.929c.487-3.388 3.408-6 6.929-6zm-17-19c0-4.962 4.037-9 9-9s9 4.038 9 9-4.037 9-9 9-9-4.038-9-9zm8 27h7 18.382l3 6h-26.764l-3-6zm-23.382 0h18.764l-3 6h-18.764zm-.618 8h17.618l2.382-4.764v18.764h-20zm48 14h-26v-18.764l2.382 4.764h23.618z" />
                      <path d="m53 53h-15v6h15zm-2 4h-11v-2h11z" />
                      <path d="m9 53h2v2h-2z" />
                      <path d="m9 57h2v2h-2z" />
                      <path d="m9 49h2v2h-2z" />
                      <path d="m49 33h2v-19h-2.233l4.233-7.056 4.233 7.056h-2.233v9h2v-7h3.767l-7.767-12.944-7.767 12.944h3.767z" />
                      <path d="m55 25h2v2h-2z" />
                      <path d="m55 29h2v2h-2z" />
                      <path d="m6 23h2v-9h-2.233l4.233-7.056 4.233 7.056h-2.233v19h2v-17h3.767l-7.767-12.944-7.767 12.944h3.767z" />
                      <path d="m6 25h2v2h-2z" />
                      <path d="m6 29h2v2h-2z" />
                      <path d="m46 41h2v2h-2z" />
                      <path d="m50 41h2v2h-2z" />
                      <path d="m54 41h2v2h-2z" />
                      <path d="m8 41h2v2h-2z" />
                      <path d="m12 41h2v2h-2z" />
                      <path d="m16 41h2v2h-2z" />
                    </svg>
                  </i>
                  {/* <a href="#">
                    <h4> Web Design Perth</h4>
                  </a>
                  <p>
                  A responsive web design perth shall be able to serve the purpose of a smooth mechanism of the website with no 
                  hindrances as such so that a viewer never gets irritated with the slow work process of a particular website which 
                  is really something annoying. So as we know such unfortunate consequences that 
                  cause quite a lot of trouble, thus never let any of our website design task meet such a fate in future.
                  </p> */}
                    <h4>Tailored Solutions for Small Businesses</h4>
                    <p>
                    We believe in empowering small businesses with an impactful online presence. Our 
                    website design for small business owners is affordable yet powerful enough to make a solid digital statement.
                    </p>
                   <br />

                    <h4>Transparent Pricing</h4>
                    <p>
                    We believe in transparent communication, and our website design cost is competitive without 
                    compromising quality. Our website design packages are designed to suit various budgets and
                    requirements.
                    </p>
                   <br />
 
                    <h4>Comprehensive Design Services</h4>
                    <p>
                     We cover all design styles, from creative website design to minimalist and 
                     modern aesthetics. Our custom website design services ensure your website
                      truly represents your brand essence.
                    </p>
                   <br />

                    <h4>Affordable & High-Quality</h4>
                    <p>
                    Quality web design shouldn't break the bank. Our cheap website design services offer 
                    exceptional value without compromising the final product's quality.
                    </p>
                    <br />
                   
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-hero__shapes">
          <div className="style-shapes-4">
            <img alt="dots1" src="assets/img/dots1.png" />
          </div>
          <div className="style-shapes-5">
            <img alt="dots1" src="assets/img/shap-2.png" />
          </div>
          <div className="style-shapes-6">
            <img alt="dots1" src="assets/img/shap-1.png" />
          </div>
          <div className="style-shapes-7">
            <img alt="dots1" src="assets/img/shap-5.png" />
          </div>
        </div>
      </section>
     <br />
     <br />
     <br />
      <section className=" map-three">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="heading">
                <h6>Contact Us Today</h6>
                <img alt="line" src="assets/img/headingline.png" />
                <p style={{color:"black", fontWeight:"500"}}>Ready to embark on an unforgettable digital journey with Australia's top website design company? Reach out to us, and let's create something extraordinary together!
                </p>      
             </div>
              <form className="touch two">
                <div className="row">
                  <div className="col-lg-4">
                    <input type="text" name="name" placeholder="Your name *" />
                  </div>
                  <div className="col-lg-4">
                    <input
                      type="text"
                      name="email"
                      placeholder="Email address *"
                    />
                  </div>
                  <div className="col-lg-4">
                    <input
                      type="number"
                      name="phone"
                      placeholder="Your Phone (optional)"
                    />
                  </div>
                  <div className="col-xl-12">
                    <textarea placeholder="Your message *" defaultValue={""} />
                  </div>
                  <div className="btugap">
                    <a href="#" className="themebtu full">
                      Send Message
                    </a>
                  </div>
                </div>
              </form>
            </div>
            <div className="offset-xl-1 col-xl-5">
              <div className="map">
              <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13924197.196521623!2d124.37171398494617!3d-31.566370704618578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6aa7589e5be8c7f3%3A0xdb7e79993dfad0d8!2sSouth%20Australia%2C%20Australia!5e0!3m2!1sen!2sin!4v1690524409240!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container  mt-5">
        <div className="awesome-project">
          <h4>Your Gateway to Captivating Website Design & Development!</h4>
          <a href="contacts.html" className="themebtu full">
            Contact us now
          </a>
        </div>
      </div>
      {/* <div className="brands-we-work gap">
        <div className="container">
          <h6>Brands We Work With.</h6>
          <BrandSlider />
        </div>
      </div> */}
      
    </Layout>
  );
};
export default Team;
