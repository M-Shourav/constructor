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
    <div className="flex items-start gap-3">
      {SocialLinks?.map((item) => (
        <Link
          href={item?.href}
          key={item?._id}
          target="blank"
          className="bg-gray-500 text-white w-8 h-8 flex items-center justify-center
           text-lg rounded-full border border-gray-200 hover:bg-orange-500 duration-300"
        >
          {item?.icons}
        </Link>
      ))}
    </div>
  );
};

export default SocialLink;
