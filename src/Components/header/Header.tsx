"use client";
import Image from "next/image";
import Container from "../Container";
import { logo } from "@/assets/images";
import { HeaderNavigation } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SocialLink from "../SocialLink";
const Header = () => {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <div className="w-full h-20 py-2 shadow">
      <Container className="w-full h-full flex items-center justify-between ">
        <Link href={"/"}>
          <Image src={logo} alt="logo" priority />
        </Link>
        <div className="hidden md:inline-flex items-center gap-5">
          {HeaderNavigation?.map((item) => (
            <Link
              key={item?.title}
              className={`flex items-center text-sm uppercase text-black/80
                 font-semibold hover:text-orange-500 duration-300 ease-in-out group relative ${
                   item?.href === pathName && "text-orange-500"
                 }`}
              href={item?.href}
            >
              {item?.title}
              <span
                className="w-[0px] h-[1px] inline-flex bg-black absolute bottom-0 left-0
                 group-hover:bg-orange-500 duration-500 ease-in-out group-hover:w-full"
              />
            </Link>
          ))}
          <div className="">
            <SocialLink />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
