import React from 'react';
import Footer from '../../components/Footer/Footer'; // Ensure this is correctly exported
import Navbarcopy from '../../components/Navbar/Navbarcopy'; // Ensure this is correctly exported
import { Player } from 'lottie-react'; // Correct import for Lottie animations
// import aboutAnimation from '../../assets/lottie/about-animation.json'; // Ensure the path is correct
import logo from "../../../assets/logo.png"

const About = () => {
  return (
    <div className="About bg-gray-50 min-h-screen">
      <Navbarcopy />
      <div className="about-content mx-8 md:mx-16 lg:mx-32 my-12 md:my-20">
        <header className="about-header text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-800">About <b>Health</b>Assist</h1>
          <p className="text-lg md:text-xl mt-4 text-gray-600">We For You | We Work For You | We Care For You</p>
        </header>
        
        <section className="company-overview mb-12">
          <div className="flex justify-center mb-8">
            <img src={logo} className="w-64 h-64 bg-black" loop autoplay />
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-700">Introducing <b>Health</b>Assist</h2>
          <p className="text-base md:text-lg text-gray-600">
          Welcome to <b>Health Assist</b>, your trusted partner in comprehensive healthcare solutions. Our mission is to empower individuals and families with the tools and support they need to take control of their health and well-being. At <b>Health Assist</b>, we believe in a patient-centered approach that combines cutting-edge technology with compassionate care. From preventive health services to personalized treatment plans, we are dedicated to making healthcare more accessible, efficient, and effective.
          </p>
        </section>
        
        <section className="mission-values mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-700">Our Vision</h2>
          <p className="text-base md:text-lg text-gray-600 mb-4">
          We envision a world where everyone has the knowledge and resources to lead healthier, happier lives. By focusing on holistic wellness and leveraging the latest innovations in healthcare, we aim to bridge the gap between medical professionals and patients, ensuring seamless and personalized care every step of the way.
          </p>
        </section>
        
        <section className="history mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-700">What We Offer</h2>
          <p className="text-base md:text-lg text-gray-600">
          <ul className="list-disc list-inside text-gray-600">
            <li className="mb-2"><b>Telemedicine & Remote Consultations:</b> Access to healthcare professionals from the comfort of your home.</li>
            <li className="mb-2"><b>Health Management Tools:</b> Easy-to-use tools that track your health metrics and progress over time.</li>
            <li className="mb-2"><b>Specialized Care Programs:</b> Tailored programs that cater to chronic illnesses, preventive care, and mental health.</li>
            <li className="mb-2"><b>Educational Resources:</b> Comprehensive guides, articles, and videos to help you make informed health decisions.</li>
          </ul>
          </p>
        </section>

        <section className="team mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-700">Our Commitment</h2>
          <p className="text-base md:text-lg text-gray-600 mb-4">
          <b>Health Assist</b> is committed to delivering exceptional service by fostering a community built on trust, transparency, and empowerment. Our team of experienced healthcare professionals is passionate about improving lives through a modern approach to medicine. At <b>Health Assist</b>, your health is our priority. Together, we can achieve better health outcomes and a higher quality of life.
          </p>
          {/* You can add team member profiles or photos here */}
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default About;
