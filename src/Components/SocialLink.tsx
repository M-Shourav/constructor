import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const SocialLink = () => {
  const SocialLinks = [
    {
      _id: "001",
      icons: <FaFacebookF />,
      href: "https://web.facebook.com/profile.php?id=100027878711748",
    },
    {
      _id: "002",
      icons: <FaXTwitter />,
      href: "https://x.com/MasumAh68543",
    },
    {
      _id: "003",
      icons: <FaGooglePlusG />,
      href: "mailto:muhammadshourav625@gmail.com",
    },
    {
      _id: "004",
      icons: <FaInstagram />,
      href: "https://www.instagram.com/masum_shourav/",
    },
  ];
  return (
    <div className="flex items-center gap-3 pl-8">
      {SocialLinks?.map((item) => (
        <Link
          className="text-xl"
          key={item?._id}
          href={item?.href}
          target="blank"
        >
          <p
            className="bg-black/80 text-white/90 w-9 h-9 flex items-center
           justify-center rounded-full hover:bg-black hover:text-white duration-300 ease-in-out"
          >
            {item?.icons}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default SocialLink;
