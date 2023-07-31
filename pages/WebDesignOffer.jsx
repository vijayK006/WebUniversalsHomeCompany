// import BrandSlider from "@/src/components/BrandSlider";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import { PiChartBarLight } from 'react-icons/pi';
import { BsGraphUp } from 'react-icons/bs';
import { PiPresentationChartThin } from 'react-icons/pi';
import { LiaHandPointRightSolid } from 'react-icons/lia';
import { GoCheck } from "react-icons/go";

const Team = () => {
  return (
    <Layout noHeaderBg pageName={"Team"}>
      <section
        className="splash-area-section"
        style={{ backgroundImage: "url(assets/img/background.jpg)" }}
      >
        <div className="container">
          <div className="splash-area">
            {/* <h2>
           Website 
            <br/>
            Design
            </h2> */}
            {/* <h2>Crafting Your <br />Digital Identity</h2> */}
            {/* <a href="#">Meet The Team</a> */}
            <h2>
                  {" "}
                  Website Design <br /> Offer
                </h2>
          </div>
        </div>
      </section>
      <section className="gap">
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <div className="heading">
                <h6>Website Design Experts</h6>
                
                <h3>
                  {" "}
                  Get Seamlessly & Fully Responsive Website Design & user-friendly apps from Web Universals.
                </h3>
                {/* <img alt="line" src="assets/img/headingline.png" /> */}
                <img alt="dots" className="dots" src="assets/img/dots.png" />

              </div>
            </div>
            <div className="offset-xl-1 col-xl-6">
              <div className="team-welcome-text">
           
                 <p>
                 Make first impressions last forever with award-winning Web Development Services from Web Universals. <br /> <br />
                 At Web Universals we are the powerhouse of brainstorming ideas that are developed with the aim of revolutionizing 
                 the digital sphere. With commitment to excellence and inspiration derived from the best industry trends, our team 
                 of in-house developers strive to bring a ripple in the ocean of business ecosystems with a robustly developed program.
                 </p>
             
                <a href="tel:08 8121 7826" className="themebtu">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        
        </div>
      </section>
     
      <div>
        <div className="container mb-3">
          <div className="small-services-color">
            <div className="row">
              <div className="col-xl-4 col-lg-6">
                <div className="small-services">
                  
                  <PiChartBarLight className="offer-icon"/>
                  <div>
                    <a href="services.html">Captivating designs</a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <div className="small-services">
                 <BsGraphUp className="offer-icon"/>
                  <div>
                    <a href="services.html">Custom web design
                    &
                    SEO - Google Adwords (PPC)
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <div className="small-services lest mb-0">
                <PiPresentationChartThin className="offer-icon"/>
                  <div>
                    <a href="services.html">10+ Years Of Experience</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>


      <section
        className="discovery  gap no-bottom"
        style={{ backgroundColor: "#f2edf5" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="heading heading1">
                {/* <h6>Web Design Sydney</h6> */}
                {/* <h2> 100% Satisfaction<br/> Guarantee</h2> */}
                <h2>
                    {/* Why Choose Us for  */}
                    <br /> Website Design offer</h2>
                {/* <img alt="line" src="assets/img/headingline.png" /> */}
                {/* <p>
                Our web design sydney and techies know some efficient remedial measures for such pain points. We here 
                at Web Universals Australia, concentrates on designing websites in such a way which shall ensure faster 
                loading, better display, look and feel and the way it works, which shall be responsive enough. Clients 
                mainly deal with such for several reasons such as timely delivery of job, 
                cost effective website works, 100% satisfaction guarantee, one point of contact and no surprises.
                </p> */}
               <h4>Custom web development and SEO</h4>
               <p>
               We provide flexible and versatile web development services that are based upon our client’s 
               preferences integrated with Search Engine Optimization.
              </p>
              <h4>Captivating designs</h4>
              <p>
              Along with timely delivery and reasonable prices, we create beautiful, responsive websites that
               have an orchestrated layout and are incredibly smooth.
               </p>
              <h4>Years of experience</h4>
              <p>
              We deploy our years of experience to provide you websites 
              and applications that speak volumes about your brand value.
               </p>
             
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
                    src="assets/img/weboffer.jpg"
                  />
                </figure>
                <div className="discovery-text discovery-text1">
                
                    <h4 className="head">We spark life into your ideas</h4>
                    <p>
                    Are those new business ideas ticking your brain cells? Do you want to eliminate the outdated, negative reputation of your brand among the internet audience and preach a fresh, new perspective for your brand image? If so, then get in touch with us. We can design a multitude of native, hybrid, and web apps that can make your dream project come to reality.
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
     
      {/* <section className=" map-three gap">
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
      </section> */}
        <br /><br />
        <section className="container">
  {/* <h2 className="text-center pt-2 pb-2">The team that envisions the digital version of your brand as a stunning piece of art!</h2> */}
      
     <div className="row pt-lg-5 pb-lg-5  pb-3">
       <div className="col-lg-6 col-md-6">
       <img className="w-100 cross-over-img"   alt="discovery"   src="assets/img/weboffer2nd.png" />
     
       

       </div>

<div className="col-lg-6 col-md-6">
<div className="cross-card-text ">
<a href="#">
                 <h3>Compatible and better-looking designs that work flawlessly on multiple devices</h3>
               </a>
               <p className="pt-5">
               When we develop apps and websites, making them responsive is our first and foremost 
               concern. Whether it is your PC, Mac, iPad, iPhone or Android device, we make sure 
               that our program glides effortlessly on all platforms and operating systems. Also 
               as there are frequent bug fixes, all the arising issues will be fixed
               </p>
             </div>
       </div>
       
     </div>
     <div className="row pt-lg-5 pb-lg-5 pt-3 pb-3">
       <div className="col-lg-6 col-md-6">

       <div className="cross-card-text">
               <a href="#">
                 <h3>Websites that don’t burn a hole in your pocket</h3>
               </a>
               <p className="pt-3">
               Ranging from the simplest e-commerce websites and online shopping
                apps to articulate WordPress-based CMS websites, we specialise in 
                providing futuristic development solutions to our expert clientele.
                 Starting from our innovative ideas to your small customizations, 
                 we integrate every necessary element at a price so reasonable that 
                 it will almost seem unreal for you.
               </p>
             </div>
           

       </div>

<div className="col-lg-6 col-md-6">
       <img className="w-100 cross-over-img"   alt="discovery"   src="assets/img/weboffer3rd.png" />
       </div>  
     </div>

     <div className="row pt-lg-5 pb-lg-5 pt-3 pb-3">
       <div className="col-lg-6 col-md-6">
       <img className="w-100 cross-over-img"   alt="discovery"   src="assets/img/discovery-1(1).jpg" />
     
       

       </div>

<div className="col-lg-6 col-md-6">
<div className="cross-card-text pt-2">
               <a href="#">
                 <h3>iOS or Android : You name it, we do it</h3>
               </a>
               <p className="pt-5">
               Whether you want to launch your app on the Apple App Store, the Google Play Store,
                or both, our experts have combined their years of experience with the intricacies
                of <br /> <br />
                 programming language to deliver you an application that works on multiple 
                 Operating systems. Even if you need your app to get updated, we will be happy
                  to do it for you!
               </p>
             </div>
       </div>
     </div>

     <div className="row pt-lg-5 pb-lg-5 pt-3 pb-3">
       <div className="col-lg-6 col-md-6">

       <div className="cross-card-text pt-4">
               <a href="#">
                 <h3>Keep it simply silly</h3>
               </a>
               <p className="pt-5">
               No beauty meets the eye better than simplicity. This is why we develop websites
                and applications that are simple, responsive, and effective. Keeping all your
                <br /><br />
                 personalized remarks in mind, we create web applications that are easily accessible
                  and navigable by your target demographic.
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
<div className="cross-card-text ">
               <a href="#">
                 <h3>Take your website design to the next level for driving sales</h3>
               </a>
               <p >
               Get a uniquely designed website to match your unique brand. We create websites 
               that stand apart from the crowd with their unbelievably smart design and optimized
                interfaces. At Web Universals we make your dream website come to life through
               </p>
               <ul className="pt-1">
                    <li><GoCheck style={{fontSize:"20px"}}/> Passionate and creative ideas</li>
                    <li><GoCheck style={{fontSize:"20px"}}/> The expertise of our complete in-house development team</li>
                    <li><GoCheck style={{fontSize:"20px"}}/> More than a decade of experience</li>
                    <li><GoCheck style={{fontSize:"20px"}}/> Versatile services ranging from SEO to other digital marketing  endeavours</li>
               </ul>
             </div>
       </div>
     </div>

</section>
      <div className="container  mt-5">
        <div className="awesome-project">
          <h4>Come join hands, and our developers will help you harness the<br /> real prowess of digital media!</h4>
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
