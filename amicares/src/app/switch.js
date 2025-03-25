import React, { useState } from 'react';

export default function CaregiverSection() {
  const [selected, setSelected] = useState('Compassion');

  const handleClick = (text) => {
    setSelected(text);
  };

  let buttonColors = {
    Compassion: selected === 'Compassion' ? 'bg-white text-[#2D3756]' : 'bg-[#3D4864] text-white',
    Reliability: selected === 'Reliability' ? 'bg-white text-[#2D3756]' : 'bg-[#3D4864] text-white',
    PersonalizedCare: selected === 'Personalized Care' ? 'bg-white text-[#2D3756]' : 'bg-[#3D4864] text-white'
  };

  let paragraphText = '';
  if (selected === 'Compassion') {
    paragraphText =
      'At AmiCare, we believe compassion is at the heart of great caregiving. Our caregivers are trained to provide excellent care while fostering meaningful connections with clients. We treat each individual with kindness, patience, and understanding, ensuring they feel valued, respected, and heard. Whether assisting with daily activities or offering emotional support, we are dedicated to creating a warm, nurturing environment for your loved ones.';
  } else if (selected === 'Reliability') {
    paragraphText =
      'When it comes to senior care, reliability is key. At AmiCare, we are committed to providing consistent, high-quality care that families can trust. Our caregivers are thoroughly vetted, trained, and equipped to meet the diverse needs of our clients with professionalism and dedication. From punctual arrival to attentive care throughout the day, we pride ourselves on being a reliable source of support, giving families peace of mind that their loved ones are always in good hands.';
  } else if (selected === 'Personalized Care') {
    paragraphText =
      'We understand that every individual’s needs are unique, which is why AmiCare provides personalized home care plans tailored to each client. Whether it’s assistance with mobility, help with daily tasks, or companionship, we carefully assess each situation to create a care plan that perfectly aligns with the client’s needs and preferences. Our flexible approach allows us to adapt as those needs evolve, ensuring that your loved ones receive the best possible care at every stage of their journey.';
  }

  return (
    <div className="max-w-5xl w-full md:w-1/2 flex flex-col mt-0 md:mt-10">
      <div className="flex space-x-0 border-b border-gray-700 justify-center font-dmsans font-normal">
        <button
          className={`px-9 py-3 font-semibold ${buttonColors.Compassion} cursor-pointer`}
          onClick={() => handleClick('Compassion')}
        >
          Compassion
        </button>
        <button
          className={`px-9 py-3 font-semibold ${buttonColors.Reliability} cursor-pointer`}
          onClick={() => handleClick('Reliability')}
        >
          Reliability
        </button>
        <button
          className={`px-9 py-3 font-semibold ${buttonColors.PersonalizedCare} cursor-pointer`}
          onClick={() => handleClick('Personalized Care')}
        >
          Personalized Care
        </button>
      </div>
      <p className="mt-6 text-gray-300 text-center font-dmsans font-normal">
        {paragraphText}
      </p>
    </div>
  );
  
}
