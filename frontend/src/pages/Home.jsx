import React from "react";
import heroImg01 from "../assets/images/doc1.jpeg";
import heroImg02 from "../assets/images/female-doc-1.png";
import heroImg03 from "../assets/images/femaledocamazin.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import aihealth from "../assets/images/aihealthtechie.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import faqImg from "../assets/images/faq-img.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <section className="hero__section pt-[60px] 2xl:h-[800px] bg-gradient-to-br from-cyan-100 via-white to-yellow-100">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[50px] items-center justify-between">
            {/* hero content */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px] lg:mt-[-70px]">
                Empowering healthier, extended lives through virtual health services.
                </h1>
                <p className="text__para">
                Through our virtual health services, we connect patients with top medical professionals for personalized care. We’re committed to making preventative care and proactive health management accessible to all, paving the way for a healthier future.
                </p>
                <Link to='/appointment'>
                <button className="btn">Request an appointment</button>
                </Link>
              </div>

              {/* hero counter  */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[- 14px]"></span>
                  <p className="text__para">Years of Experience</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Clinic Location</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Patient Satisfactory</p>
                </div>
              </div>
            </div>

            {/* hero content */}
            <div className="flex flex-col gap-[30px] justify-between  items-center">
  <div className="flex w-full gap-[10px]">
    <div className="w-1/2 h-[value]">
      <img src={heroImg01} className="w-full h-full rounded-lg object-cover" alt="Doc" />
    </div>
    <div className="w-1/2 h-[value]">
      <img
        src={heroImg02}
        className="w-full h-full rounded-lg object-cover"
        alt="DocB"
      />
    </div>
  </div>
  <div className="w-full">
    <img src={heroImg03} className="w-full rounded-lg lg:w-full" alt="DocB" />
  </div>
</div>

          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="lg:w-[700px] mx-auto">
            <h2 className="heading text-center">
            Delivering Premier Healthcare Services Virtually
            </h2>
            <p className="text__para text-center">
            Experience the convenience of expert healthcare right at your fingertips. Our virtual platform connects you with top medical professionals, ensuring personalized care tailored to your unique health needs. Embrace the future of healthcare with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Doctor
                </h2>
                <p>
                Discover experienced healthcare professionals who are ready to partner with you on your health journey. Our platform connects you with a diverse network of doctors across various specialties, ensuring you find the right expert for your needs.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181a1e] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Location
                </h2>
                <p>
                Locate the most convenient healthcare facilities near you. Our comprehensive directory allows you to search and find healthcare locations in your vicinity, making access to care as easy as possible.
                </p>
                <Link
                  to="/location"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181a1e] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Book Appointment
                </h2>
                <p>
                Schedule your consultation at a time that works best for you. Our seamless appointment booking system ensures a hassle-free experience, allowing you to focus on what matters most - your health.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181a1e] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* about section start */}
      <About />
      {/* about section end */}

  {/* feature section */}
<section>
  <div className="container">
    <div className="flex items-center justify-between flex-col lg:flex-row">
      {/* feature content */}
      <div className="xl:w-[670px]">
        <h2 className="heading">
          Get AI Health Assistance <br /> Anytime, Anywhere.
        </h2>
        <ul className="pl-4">
          <li className="text__para">
            1. Interact with the AI Health Assistant directly.
          </li>
          <li className="text__para">
            2. Ask health-related questions and get instant responses.
          </li>
          <li className="text__para">
            3. Get recommendations for further actions or treatments.
          </li>
        </ul>
        <Link to="/chatbot">
          <button className="btn">Start Chatting</button>
        </Link>
      </div>

      {/* feature img */}
      <div className="relative z-10 xl:w-[770px] flex  justify-end mt-[50px]  lg:mt-0">
        <img src={aihealth} className="w-3/4 rounded-lg" alt="" />

        <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[6px] lg:gap-3">
              
            </div>
            
          </div>

          <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
            AI Consultation
          </div>

          <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
            <img src={avatarIcon} alt="" />
            <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
              AI Health Assistant
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* feature section end */}

      {/* faq section */}
        <section>
          <div className="container">
            <div className="flex justify-between gap-[50px] lg:gap-0 ">
              <div className="w-1/2 hidden md:block">
                <img src={faqImg} alt='' />
              </div>

              <div className="w-full md:w-1/2">
                <h2 className="heading">
                  Most Questions by our beloved patients
                </h2>
                <FaqList />
              </div>
            </div>
          </div>
        </section>
      {/* faq section */}

      {/* TESTIMONIAL */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto ">
            <h2 className="heading text-center">What our patient say</h2>
            <p className="text__para text-center">
              World class care for everyone. Our health system offers unmatched, expert health care.
            </p>
          </div>
          
          <Testimonial />
        </div>
      </section>

        {/* TESTIMONIAL */}
    </>
  );
};

export default Home;
