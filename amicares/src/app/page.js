"use client";
import { CheckIcon, DotsIcon, Button, reviews } from "./UIComponents";
import React from "react";
import CaregiverSection from "./switch";
import FAQSection from "./FAQSection";

export default function HomePage() {
  return (
    <div className="bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-xs sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center p-4 max-w-7xl max-h-20">
          <h1 className="text-3xl font-bold font-josefin text-[#9e2f48]">
            AmiCare Services, Inc.
          </h1>
          <nav className="space-x-6 font-dmsans">
            <a
              href="#"
              className="text-[rgb(17,18,17)] hover:text-[#9e2f48] font-medium"
            >
              About us
            </a>
            <a
              href="#"
              className="text-[rgb(17,18,17)] hover:text-[#9e2f48] font-medium"
            >
              Services
            </a>
            <a
              href="#"
              className="text-[rgb(17,18,17)] hover:text-[#9e2f48] font-medium"
            >
              News
            </a>
            <a
              href="#"
              className="text-[rgb(17,18,17)] hover:text-[#9e2f48] font-medium"
            >
              Careers
            </a>
            <a
              href="#"
              className="text-[rgb(17,18,17)] hover:text-[#9e2f48] font-medium"
            >
              Contact us
            </a>
          </nav>
          <button
            className="bg-[rgb(99,27,42)] text-white px-8 py-4 flex items-center space-x-2 
              transition-all duration-200 ease-in-out transform hover:scale-105 hover:bg-[rgb(130,30,50)] 
              hover:text-white active:bg-[rgb(99,27,42)] active:scale-100 active:transition-all hover:cursor-pointer relative"
          >
            <img src="Images/free-phone.png" alt="Phone Icon" className="w-5 h-5" />
            <span className="font-inter">(650) 457-8818</span>
          </button>
        </div>
      </header>

      <div className="fixed bottom-6 right-6 w-15 h-15 flex items-center justify-center rounded-full bg-[#9e2f48] cursor-pointer transition-all duration-300 hover:bg-white group">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 800"
          height="32px"
          width="32px"
          role="img"
          alt="Chat icon"
          aria-labelledby="openIconTitle openIconDesc"
          className="fill-white transition-all duration-300 group-hover:fill-[#9e2f48]"
        >
          <title id="openIconTitle">Opens Chat</title>
          <desc id="openIconDesc">This icon Opens the chat window.</desc>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M400 26.2c-193.3 0-350 156.7-350 350 0 136.2 77.9 254.3 191.5 312.1 15.4 8.1 31.4 15.1 48.1 20.8l-16.5 63.5c-2 7.8 5.4 14.7 13 12.1l229.8-77.6c14.6-5.3 28.8-11.6 42.4-18.7C672 630.6 750 512.5 750 376.2c0-193.3-156.7-350-350-350zm211.1 510.7c-10.8 26.5-41.9 77.2-121.5 77.2-79.9 0-110.9-51-121.6-77.4-2.8-6.8 5-13.4 13.8-11.8 76.2 13.7 147.7 13 215.3.3 8.9-1.8 16.8 4.8 14 11.7z"
          />
        </svg>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto flex flex-col md:flex-row items-center min-h-screen bg-[#f5f2f0] ">
        <div className="w-full md:w-1/2 p-6 pl-30">
          <span className="bg-white text-[#9e2f48] px-3 py-1 rounded-md text-lg font-dmsans font-medium">
            Trusted Home Care
          </span>
          <h2 className="text-5xl font-serif mt-4 max-w-145 leading-tight pb-5">
            Premium home care that elevates your lifestyle to new heights.
          </h2>
          <hr className="border-t-4 border-[rgb(99,27,42)] w-[17%] ml-0 py-4"></hr>
          <p className="text-[rgb(31, 31, 31)] mt-4 max-w-145 text-lg font-dmsans font-normal">
            At AmiCare, we offer exceptional home care services tailored to your
            unique needs, enhancing your comfort, independence, and overall
            well-being. Our personalized support is designed to help you live
            life to the fullest, with the care and attention you deserve.
          </p>
          <Button
            text="Get Started →"
            onClick={() => console.log("Button clicked!")}
            className=""
          />
        </div>

        <div className="w-[800px] h-full">
          <img
            src="Images/dedu.jpg"
            alt="Elderly care"
            className="object-cover h-full w-full md:h-screen"
          />
        </div>
      </section>

      <section className="container mx-auto flex flex-col md:flex-row items-center min-h-screen bg-white py-26">
        <div className="container mx-auto flex flex-col lg:flex-row items-center max-w-7xl">
          <div className="lg:w-1/2 text-left">
            <h5 className="bg-white text-[#9e2f48] px-3 py-1 rounded-md text-lg font-dmsans font-medium">
              Personalized Care
            </h5>
            <h2 className="text-5xl font-serif mt-4 max-w-145 leading-tight pb-5">
              Personalized Care Plans Designed to Fit Your Needs
            </h2>
            <hr className="border-t-4 border-[rgb(99,27,42)] w-[17%] ml-0 py-2"></hr>
            <p className="text-gray-800 mt-4 max-w-145 text-lg font-dmsans font-normal">
              We believe in placing your loved one’s needs at the heart of
              everything we do. That’s why our personalized home care plans are
              designed to support their health, happiness, and personal goals.
              Whether they need a little extra help around the house, assistance
              with managing medications, or companionship, we’re here to provide
              care that’s as unique as they are. You can trust us to walk
              alongside your family, offering thoughtful, individualized support
              every step of the way
            </p>
            <ul className="grid grid-cols-2 gap-x-0 gap-y-2 mt-6 text-gray-800 pb-4 font-dmsans font-normal">
              <li className="flex items-center">
                <CheckIcon /> Companionship
              </li>
              <li className="flex items-center">
                <CheckIcon /> Medication Reminders
              </li>
              <li className="flex items-center">
                <CheckIcon /> Meal Preparation
              </li>
              <li className="flex items-center">
                <CheckIcon /> Range of Motion
              </li>
              <li className="flex items-center">
                <CheckIcon /> Light Housekeeping
              </li>
              <li className="flex items-center">
                <CheckIcon /> Safety Supervision
              </li>
              <li className="flex items-center">
                <CheckIcon /> Laundry
              </li>
              <li className="flex items-center">
                <DotsIcon /> and more...
              </li>
            </ul>

            <Button
              text="Learn More"
              onClick={() => console.log("Button clicked!")}
              className=""
            />
          </div>

          <div className="lg:w-1/2 mt-8 lg:mt-0 lg:ml-12 relative overflow-hidden rounded-lg">
            <img
              src="Images/dedu2.jpg"
              alt="Elderly couple with caregiver"
              className="shadow-lg object-cover h-full w-full md:h-screen transform scale-110 transition-all duration-300 hover:scale-100"
              style={{ clipPath: "inset(10% 0 10% 0)" }}
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto flex flex-col lg:flex-row-reverse items-center min-h-screen bg-white py-15">
        <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center max-w-7xl">
          <div className="lg:w-1/2 text-right ">
            <h5 className="bg-[#f5f2f0] text-[#9e2f48] px-3 py-1 rounded-md text-lg font-dmsans font-medium max-w-[200px] inline-block">
              Specialized Care
            </h5>
            <h2 className="text-5xl font-serif mt-4 max-w-145 leading-tight pb-5">
              Specialized Care for Every Stage of Life
            </h2>
            <hr className="border-t-4 border-[rgb(99,27,42)] w-[17%] ml-auto py-2 mr-8"></hr>
            <p className="text-gray-800 mt-4 max-w-145 text-lg font-dmsans font-normal">
              We understand that life’s journey can bring unexpected challenges.
              When your loved ones need care, it’s important to ensure they’re
              in the best hands. At AmiCare, we provide specialized home care
              that’s tailored to their unique needs—whether it’s dementia
              support, Parkinson’s care, or assisting with stroke recovery. Our
              mission is to offer comfort, compassion, and expert care, making
              sure every moment is filled with dignity and respect. You don’t
              have to face this journey alone. Let us be there to support you,
              every step of the way.
            </p>
            <div className="flex justify-end">
              <ul className="flex flex-col items-end gap-x-0 gap-y-2 mt-6 text-gray-800 pb-4 font-dmsans font-normal mr-5">
                <li className="flex items-center">
                  <span className="mr-2">Alzheimer's & Dementia Care</span>
                  <CheckIcon />
                </li>
                <li className="flex items-center">
                  <span className="mr-2">Parkinson's Care</span>
                  <CheckIcon />
                </li>
                <li className="flex items-center">
                  <span className="mr-2">Hospice & Palliative Care</span>
                  <CheckIcon />
                </li>
                <li className="flex items-center">
                  <span className="mr-2">
                    Cancer, Stroke, and Transitional Care
                  </span>
                  <CheckIcon />
                </li>
              </ul>
            </div>

            <div className="flex justify-end mr-6">
              <Button
                text="Learn More"
                onClick={() => console.log("Button clicked!")}
                className=""
              />
            </div>
          </div>

          <div className="lg:w-1/2 mt-8 lg:mt-0 lg:mr-12 relative overflow-hidden rounded-lg">
            <img
              src="Images/dedu3.jpg"
              alt="Elderly couple with caregiver"
              className="shadow-lg object-cover h-full w-full md:h-screen transform scale-110 transition-all duration-300 hover:scale-100"
              style={{ clipPath: "inset(10% 0 10% 0)" }}
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto flex flex-col md:flex-row items-center min-h-screen bg-white py-16">
        <div className="container mx-auto flex flex-col lg:flex-row items-center max-w-7xl">
          <div className="lg:w-1/2 text-left">
            <h5 className="bg-[#f5f2f0] text-[#9e2f48] px-3 py-1 rounded-md text-lg font-dmsans font-medium max-w-[200px] inline-block">
              Couple's Care
            </h5>
            <h2 className="text-5xl font-serif mt-4 max-w-145 leading-tight pb-5">
              Compassionate Care Keeping Couples Together
            </h2>
            <hr className="border-t-4 border-[rgb(99,27,42)] w-[17%] ml-0 py-2"></hr>
            <p className="text-gray-800 mt-4 max-w-145 text-lg font-dmsans font-normal">
              A lifetime spent together deserves care that honors that bond. At
              AmiCare, we understand the importance of couples staying together,
              even as their care needs change. That’s why our compassionate
              caregivers offer personalized support for both partners. We ensure
              each person receives the care they need while continuing to share
              their lives side by side. Whether it’s helping with daily tasks or
              providing specialized care, we are dedicated to preserving your
              loved ones’ independence and dignity. Our goal is to allow them to
              enjoy their time together, with comfort and peace of mind every
              step of the way.
            </p>

            <Button
              text="Learn More"
              onClick={() => console.log("Button clicked!")}
              className=""
            />
          </div>

          <div className="lg:w-1/2 mt-16 lg:mt-0 lg:ml-12 relative overflow-hidden rounded-lg">
            <img
              src="Images/dedu4.jpg"
              alt="Elderly couple with caregiver"
              className="shadow-lg object-cover h-full w-full md:h-screen transform scale-110 transition-all duration-300 hover:scale-100"
              style={{
                clipPath: "inset(0% 0 25% 0)",
                transform: "translateY(10%)",
              }}
            />
          </div>
        </div>
      </section>

      <section className="bg-[#2D3756] text-white py-16 px-6">
        <div className="flex max-w-7xl text-center justify-between items-center mx-auto">
          <div className="max-w-6xl w-full md:w-1/2 text-left">
            <span className="bg-[#3D4864] text-lg font-dmsans font-normal px-3 py-1 ">
              Commitment
            </span>
            <h2 className="text-5xl font-medium mt-4 font-dmsans">
              Your caregiving needs are our top priority
            </h2>
          </div>

          <CaregiverSection />
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-center font-dmsans font-normal">
          <div className="bg-[#3D4864] p-10 transition-transform transform hover:scale-105 hover:shadow-lg">
            <p className="text-3xl font-bold">9+</p>
            <p>Years of industry experience</p>
          </div>
          <div className="bg-[#3D4864] p-10 transition-transform transform hover:scale-105 hover:shadow-lg">
            <p className="text-3xl font-bold">700+</p>
            <p>Clients served</p>
          </div>
          <div className="bg-[#3D4864] p-10 transition-transform transform hover:scale-105 hover:shadow-lg">
            <p className="text-3xl font-bold">300+</p>
            <p>Active Caregivers</p>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f2f0] py-12 px-6 pt-24">
        <div className="flex justify-between items-center w-full max-w-6xl mx-auto font-dmsans">
          <div className="text-left space-y-2 w-[71%] group pb-5">
            <h2 className="text-5xl font-medium text-[#111211] group relative w-max group-hover:text-[#9e2f48] transition-colors duration-300">
              Reviews
              <span className="absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5 bg-[#9e2f48] group-hover:w-full"></span>
            </h2>

            <p className="font-normal text-[#111211] text-lg pt-2">
              Discover how our personalized home care services have positively
              impacted families and seniors, providing comfort and support
              throughout the Bay Area.
            </p>
          </div>
          <a
            href="https://www.google.com/maps/place/AmiCare+Services,+Inc./@37.4180946,-122.1319476,17z/data=!3m1!4b1!4m6!3m5!1s0x808fbb4e2f558241:0xe23e02b5e7ef370f!8m2!3d37.4180946!4d-122.1319476!16s%2Fg%2F11fjs9z5dz?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoJLDEwMjExNjQwSAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="relative flex h-[60px] w-50 items-center justify-center overflow-hidden bg-white font-medium text-[rgb(99,27,42)] shadow transition-all duration-200 before:absolute before:inset-0 before:border-0 before:border-[rgb(99,27,42)] before:duration-100 before:ease-linear hover:bg-[rgb(99,27,42)] hover:text-white hover:shadow-[rgb(99,27,42)] hover:before:border-[25px] group cursor-pointer">
              <span className="relative z-10 flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 transition-all duration-300 fill-[rgb(99,27,42)] group-hover:fill-white"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.421 8.18 1.179-5.915 5.829 1.396 8.152L12 18.896l-7.329 3.872 1.396-8.152L.152 9.187l8.18-1.179z" />
                </svg>
                Write a Review
              </span>
            </button>
          </a>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-x-[20px] gap-y-[0px] max-w-6xl mx-auto bg-white p-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6">
              <div className="flex items-center gap-3">
                <a href={review.avatarLink} target="_blank" rel="nofollow">
                  {typeof review.avatar === "string" &&
                  review.avatar.startsWith("/") ? (
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-10 h-10 rounded-full"
                    />
                  ) : (
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-300 text-gray-800 font-bold">
                      {review.avatar}
                    </div>
                  )}
                </a>
                <div>
                  <a href={review.profileLink} target="_blank" rel="nofollow">
                    <h3 className="font-semibold">{review.name}</h3>
                  </a>
                  <div className="flex items-center">
                    <p className="text-yellow-500">
                      {"★".repeat(review.rating)}
                    </p>
                    <p className="text-sm text-gray-500 pl-1">{review.time}</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mt-2">{review.text}</p>
            </div>
          ))}
          <img
            src="Images/google.png"
            className="w-[170px] h-[30px] object-cover"
          />
        </div>
      </section>

      <FAQSection />

      <section className="flex items-center justify-center bg-[linear-gradient(to_bottom,white_50%,rgb(99,27,42)_50%)] p-10">
        <div className="flex flex-col md:flex-row">
          {/* Form Section */}
          <div className="w-[600px] h-[690px] bg-[#f5f2f0] p-16 shadow-md flex flex-col">
            <span className="bg-white text-[#9e2f48] px-3 py-1 text-lg font-dmsans font-medium max-w-[140px] inline-block">
              Let's connect
            </span>
            <h2 className="text-4xl font-dmsans font-medium mt-2">
              How can we help?
            </h2>
            <p className="font-dmsans font-normal text-lg mt-2">
              Have a question or feedback? Fill out the form below, and we'll
              get back to you as soon as possible.
            </p>

            <form className="mt-6 space-y-4">
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Full name*"
                  className="w-1/2 p-3 shadow bg-white"
                />
                <input
                  type="text"
                  placeholder="Phone number*"
                  className="w-1/2 p-3 shadow bg-white"
                />
              </div>
              <input
                type="email"
                placeholder="Email address*"
                className="w-full p-3 shadow bg-white "
              />
              <textarea
                placeholder="I would like to..."
                className="w-full p-3 shadow bg-white "
              ></textarea>
              <div
                className="flex items-center cursor-pointer group"
                onClick={(e) => {
                  const checkbox = e.currentTarget.querySelector(
                    "input[type='checkbox']"
                  );
                  if (checkbox) checkbox.checked = !checkbox.checked;
                }}
              >
                <input type="checkbox" className="mr-2 cursor-pointer" />
                <span className="text-gray-800 font-dmsans font-normal text-base">
                  I agree to the{" "}
                  <a
                    href="#"
                    className="text-gray-800 underline hover:text-[rgb(99,27,42)]"
                  >
                    Terms of Use
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="text-gray-800 underline hover:text-[rgb(99,27,42)]"
                  >
                    Privacy Policy
                  </a>
                  .
                </span>
              </div>

              <button
                className="bg-[rgb(99,27,42)] text-white px-8 py-4 flex items-center justify-center 
                  transition-all duration-200 ease-in-out transform hover:scale-105 hover:bg-[rgb(130,30,50)] 
                  hover:text-white active:bg-[rgb(99,27,42)] active:scale-100 active:transition-all 
                  hover:cursor-pointer relative w-full text-center"
              >
                <span className="font-inter">Send</span>
              </button>
            </form>
          </div>

          {/* Image Section */}
          <div className="w-[600px] h-[690px] bg-white shadow-md flex items-center justify-center">
            <div className="relative w-full h-full">
              <img
                src="/Images/ceo.png"
                alt="Joy Lee"
                className="w-full h-full object-cover filter brightness-95"
              />
              <p className="absolute bottom-32 left-4 bg-transparent bg-opacity-50 text-[#f5f2f0] p-4 font-inter text-[22px] w-[500px] pl-17">
                "We focus on creating moments of joy, ensuring that the support
                you receive is always thoughtful and heartfelt."
              </p>
              <p className="absolute bottom-17 left-4 bg-transparent text-[#f5f2f0] p-4 font-dmsans text-[16px] w-[500px] pl-17 font-medium">
                Joy Lee
              </p>
              <p className="absolute bottom-10 left-4 bg-transparent text-[#f5f2f0] p-4 font-dmsans text-[16px] w-[500px] pl-17 font-normal">
                Founder & CEO
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[rgb(99,27,42)] text-white py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-around items-center md:items-start space-y-6 md:space-y-0 pb-10">
          {/* Left Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex flex-col items-center justify-center">
              <img
                src="Images/white.png"
                alt="AmiCare Logo"
                className="w-[118px] h-[82px]"
              />
              <span className="text-[12px] font-bold text-white text-center">
                AmiCare Services, Inc.
              </span>
            </div>
          </div>

          {/* Middle Section - Links */}
          <div className="flex flex-wrap text-center md:text-left space-x-28">
            <div className="flex flex-col space-y-2">
              {/* Location */}
              <a
                href="#"
                className="group relative flex items-center space-x-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className=""
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z" />
                </svg>

                <span className="relative">
                  <p className="text-[16px] font-dmsans font-medium pl-2">
                    3737 El Camino Real, Palo Alto, CA 94306
                  </p>

                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </span>
              </a>

              {/* Phone */}
              <a
                href="#"
                className="group relative flex items-center space-x-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1 1 0 011.1-.24 11.36 11.36 0 003.54.57 1 1 0 011 1v3.79a1 1 0 01-1 1A19.91 19.91 0 012 4a1 1 0 011-1h3.79a1 1 0 011 1 11.36 11.36 0 00.57 3.54 1 1 0 01-.24 1.1z" />
                </svg>
                <span className="relative">
                  <p className="text-[16px] font-dmsans font-medium">
                    +1 (650) 457-8818
                  </p>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:info@amicares.com"
                className="group relative flex items-center space-x-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 2v.01L12 13l8-6.99V6l-8 5-8-5z" />
                </svg>
                <span className="relative">
                  <p className="text-[16px] font-dmsans font-medium">
                    info@amicares.com
                  </p>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </span>
              </a>
            </div>

            <div className="flex flex-col space-y-2">
              <a
                href="#"
                className="group relative text-[16px] font-dmsans font-medium"
              >
                <span className="relative">
                  <p className="text-[16px] font-dmsans font-medium">
                    About us
                  </p>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </span>
              </a>
              <a
                href="#"
                className="group relativetext-[16px] font-dmsans font-medium"
              >
                <span className="relative">
                  <p className="text-[16px] font-dmsans font-medium">
                    Services
                  </p>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </span>
              </a>
              <a
                href="#"
                className="group relative text-[16px] font-dmsans font-medium"
              >
                <span className="relative">
                  <p className="text-[16px] font-dmsans font-medium">News</p>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </span>
              </a>
            </div>
            <div className="flex flex-col space-y-2">
              <a
                href="#"
                className="group relative text-[16px] font-dmsans font-medium"
              >
                <span className="relative">
                  <p className="text-[16px] font-dmsans font-medium">Careers</p>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </span>
              </a>
              <a
                href="#"
                className="group relative text-[16px] font-dmsans font-medium"
              >
                <span className="relative">
                  <p className="text-[16px] font-dmsans font-medium">FAQs</p>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </span>
              </a>
              <a
                href="#"
                className="group relative text-[16px] font-dmsans font-medium"
              >
                <span className="relative">
                  <p className="text-[16px] font-dmsans font-medium">
                    Contact us
                  </p>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </span>
              </a>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="mt-6 flex space-x-4">
            {/* Facebook */}
            <a href="#" className="p-3 bg-white/10 hover:bg-white/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M22 12.06C22 6.52 17.52 2 12 2S2 6.52 2 12.06c0 5.01 3.66 9.16 8.44 9.88v-6.98H7.9V12.06h2.54v-1.97c0-2.51 1.49-3.89 3.76-3.89 1.09 0 2.24.2 2.24.2v2.45h-1.26c-1.24 0-1.62.77-1.62 1.56v1.87h2.77l-.44 2.9h-2.33v6.98C18.34 21.22 22 17.07 22 12.06z" />
              </svg>
            </a>

            {/* Instagram */}
            <a href="#" className="p-3 bg-white/10  hover:bg-white/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7.38a4.62 4.62 0 1 1 0 9.25 4.62 4.62 0 0 1 0-9.25zm0 1.5a3.12 3.12 0 1 0 0 6.25 3.12 3.12 0 0 0 0-6.25zm4.88-2.13a.88.88 0 1 1 0 1.75.88.88 0 0 1 0-1.75z" />
              </svg>
            </a>

            {/* YouTube */}
            <a href="#" className="p-3 bg-white/10  hover:bg-white/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M10 15.5l6-3.5-6-3.5v7z" />
                <path d="M19.6 3H4.4C2.5 3 1 4.5 1 6.4v11.2C1 19.5 2.5 21 4.4 21h15.2c1.9 0 3.4-1.5 3.4-3.4V6.4C23 4.5 21.5 3 19.6 3zm0 2c.8 0 1.4.6 1.4 1.4v11.2c0 .8-.6 1.4-1.4 1.4H4.4c-.8 0-1.4-.6-1.4-1.4V6.4c0-.8.6-1.4 1.4-1.4h15.2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-6 pt-8 text-center text-sm flex justify-between max-w-7xl items-center mx-auto ">
          <p className="text-[16px] font-dmsans font-medium">
            Copyright © 2024 AmiCare Services, Inc. All Rights Reserved.
          </p>
          <div className="mt-2 flex justify-center space-x-4 text-[16px] font-dmsans font-medium">
            <a href="#" className="group relative flex items-center space-x-2">
              <span className="relative">
                <p className="text-[16px] font-dmsans font-medium pl-2">
                  Terms of use
                </p>

                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </span>
            </a>
            <span>|</span>
            <a href="#" className="group relative flex items-center space-x-2">
              <span className="relative">
                <p className="text-[16px] font-dmsans font-medium pl-2">
                  Privacy Policy
                </p>

                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </span>
            </a>
            <span>|</span>
            <a href="#" className="group relative flex items-center space-x-2">
              <span className="relative">
                <p className="text-[16px] font-dmsans font-medium pl-2">
                  Notice of Privacy
                </p>

                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
