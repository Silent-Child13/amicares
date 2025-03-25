const CheckIcon = ({ className = "h-6 w-6 text-[rgb(99,27,42)] mr-2" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 11 12 14 22 4" />
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>
);

const DotsIcon = ({ className = "h-6 w-6 text-[rgb(99,27,42)] mr-2" }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <circle cx="5" cy="12" r="1" />
    <circle cx="12" cy="12" r="1" />
    <circle cx="19" cy="12" r="1" />
  </svg>
);

const Button = ({
  text = "Learn more",
  className = "",
  onClick = () => {},
}) => (
    <button
    className={`relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-[rgb(99,27,42)] text-white px-6 py-3 mt-6 transition-all before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-[rgb(130,30,50)] before:transition-all before:duration-300 hover:before:-rotate-180 hover:before:h-56 hover:before:w-56 hover:scale-105 hover:bg-[#aa3d5a] hover:text-white active:bg-[rgb(99,27,42)] active:scale-100 active:transition-all hover:cursor-pointer ${className}`}
    onClick={onClick}
  >
    <span className="relative z-10">{text}</span>
  </button>
  
);
const reviews = [
  {
    name: "David M. Stone",
    avatar: "D",
    avatarLink: "https://www.google.com/maps/contrib/116856647999840177765/reviews",
    profileLink: "https://www.google.com/maps/contrib/116856647999840177765/reviews",
    rating: 5,
    time: "2 months ago",
    text: "Our Mom has been on 24/7 care with Amicare for a couple years now in the South Bay, and we have had nothing but great experiences with them. The caregivers are great, like part of her family, and the management is very caring too!",
  },
  {
    name: "Vivien Arnold",
    avatar: "/Images/review5.png",
    avatarLink: "https://www.google.com/maps/contrib/100816517080587886757/reviews",
    profileLink: "https://www.google.com/maps/contrib/100816517080587886757/reviews",
    rating: 4,
    time: "2 months ago",
    text: "We are grateful for AmiCare - they work with the caregivers my mother prefers, and have back-up when we need. Billing and interface always easy.",
  },
  {
    name: "Lissette Espinoza",
    avatar: "/Images/review1.png",
    avatarLink: "https://www.google.com/maps/contrib/117145176472894639341/reviews",
    profileLink: "https://www.google.com/maps/contrib/117145176472894639341/reviews",
    rating: 5,
    time: "2 months ago",
    text: "Worrying about how to afford your loved one's care or feeling grief over suddenly having to take care of a parent who once took care of you. You can kindly take your phone and call Amicare service incorporated we be willing to help you.",
  },
  {
    name: "Coleen Kate Valle",
    avatar: "/Images/review2.png",
    avatarLink: "https://www.google.com/maps/contrib/107177073881058449323/reviews",
    profileLink: "https://www.google.com/maps/contrib/107177073881058449323/reviews",
    rating: 5,
    time: "2 months ago",
  },
  {
    name: "Precy Eve Majaducon",
    avatar: "/Images/review3.png",
    avatarLink: "https://www.google.com/maps/contrib/113970339467130296492/reviews",
    profileLink: "https://www.google.com/maps/contrib/113970339467130296492/reviews",
    rating: 5,
    time: "2 months ago",
  },
  {
    name: "Romeo Ybanez",
    avatar: "/Images/review4.png",
    avatarLink: "https://www.google.com/maps/contrib/103835943232679527565/reviews",
    profileLink: "https://www.google.com/maps/contrib/103835943232679527565/reviews",
    rating: 5,
    time: "5 months ago",
    text: "I work for AmiCare for two years and it's been an incredibly rewarding experience. From the start, the team here has made me feel valued and supported.",
  },
];

export { CheckIcon, DotsIcon, Button, reviews };
