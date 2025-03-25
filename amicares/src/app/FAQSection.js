"use client";
import { useState } from "react";
import { Button } from "./UIComponents";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "1.   How does AmiCare create personalized care plans?",
      answer:
        "We believe that every individual has unique needs. Our personalized home care plans are created through a thorough assessment of the client’s health, preferences, and lifestyle. We collaborate closely with family members, caregivers, and medical professionals to ensure that care addresses both physical and emotional well-being, offering a truly customized solution that evolves as the client’s needs change.",
    },
    {
      question:
        "2.   What services does AmiCare offer for specialized care needs?",
      answer:
        "We offer a wide range of specialized home care services, including chronic condition management, post-surgery recovery, Alzheimer’s and dementia care, mobility support, and skilled nursing care. Our caregivers are trained to manage complex medical needs while providing compassionate, personalized support tailored to each client’s circumstances, ensuring the best possible quality of life.",
    },
    {
      question: "3.   How do you ensure the safety and well-being of clients?",
      answer:
        "The safety and well-being of our clients are our top priorities. We ensure this through multiple layers of protection: comprehensive background checks and training for all caregivers, regular evaluations of the client’s home care plan, and continuous monitoring to adjust services as needs change. Additionally, we implement safety measures at home, including fall prevention, medication management, and maintaining close communication with family members and medical professionals.",
    },
    {
      question: "4.   What is the process for scheduling care services??",
      answer:
        "Scheduling home care services with AmiCare is simple. Contact us through our website or call our main line to schedule an initial consultation. During this consultation, we assess your specific needs and preferences to match you with a caregiver who is the best fit. Once your care plan is in place, we create a flexible schedule that works for you, ensuring ongoing support and adjustments as your needs evolve.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6 flex justify-between">
        <div className="mb-8 max-w-[530px]">
          <span className="bg-[#f5f2f0] text-[#9e2f48] px-3 py-1 rounded-md text-lg font-dmsans font-medium max-w-[200px] inline-block">
            Help center
          </span>
          <h2 className="text-5xl font-dmsans mt-4 max-w-145 leading-tight pb-3 font-medium">
            Got questions? Your answers are right here.
          </h2>
          <p className="text-gray-800 mt-1 max-w-145 text-lg font-dmsans font-normal">
            Quick answers to questions you may have. Can't find what you're
            looking for? Get in touch with us.
          </p>
          <Button
            text="View FAQs"
            onClick={() => console.log("Button clicked!")}
            className=""
          />
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 bg-[#f5f2f0] overflow-hidden"
            >
              <button
                className="w-[600px] text-center px-6 py-5 flex justify-between items-center bg-[#f5f2f0] text-base font-dmsans font-normal hover:bg-gray-200 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span
                  className={`text-base font-dmsans font-normal ${
                    openIndex === index ? "text-[#9e2f48]" : "text-gray-800"
                  }`}
                >
                  {faq.question}
                </span>
                <span
                  className={`text-xl ${
                    openIndex === index ? "text-[#9e2f48]" : "text-gray-800"
                  }`}
                >
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-700 ease-in-out transform ${
                  openIndex === index
                    ? "max-h-[1000px] scale-100"
                    : "max-h-0 scale-95"
                }`}
                style={{ transitionProperty: "max-height, transform" }}
              >
                {openIndex === index && (
                  <div className="p-4 text-gray-800 mt-4 max-w-145 text-base font-dmsans font-normal w-[560px] text-left pl-8">
                    {faq.answer}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
