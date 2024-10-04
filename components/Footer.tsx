import {
  FaLocationArrow,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa"; // Import LinkedIn icon
import Image from "next/image"; // Import the Image component from Next.js
import MagicButton from "./ui/MagicButton";

const socialMedias = [
  {
    id: "linkedin",
    link: "https://www.linkedin.com/in/sachinashelke/",
    icon: <FaLinkedin />,
  },
  {
    id: "facebook",
    link: "https://www.facebook.com/", // Change to the correct link for Facebook
    icon: <FaFacebook />,
  },
  {
    id: "twitter",
    link: "https://twitter.com/", // Change to the correct link for Twitter
    icon: <FaTwitter />,
  },
];

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          src="/footer-grid.svg" // Assuming the image is in the public folder
          alt="grid"
          layout="fill" // Use layout="fill" for responsive design
          objectFit="cover" // Maintain aspect ratio
          className="opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take<span className="text-purple"> your</span> digital
          presence to the next level
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how can help you achieve
          your goals.
        </p>
        <a href="https://www.linkedin.com/in/sachinashelke/">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright ©2024 Sachin Shelke
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedias.map((profile) => (
            <a
              key={profile.id}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              {profile.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
