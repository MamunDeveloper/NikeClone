import Image from "next/image";
import React from "react";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";
import Link from "next/link";
import { copyrightSign } from "../assets/icons";

function Footer() {
  return (
    <section className="max-container bg-black px-8 md:px-12 py-20 flex flex-col justify-start gap-20">
      <div className="flex max-lg:flex-col gap-10">
        <div className="flex flex-col">
          <Image src={footerLogo} alt="FooterLogo" width={150} height={50} />
          <p className=" text-white mt-6 max-w-sm font-montserrat">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex gap-4 mt-4">
            {socialMedia.map((icon) => (
              <div key={icon.alt} className="w-12 h-12 rounded-full bg-white flex justify-center items-center ">
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={24}
                  height={24}
                  className=" cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
        <div className=" flex flex-1 flex-wrap lg:justify-evenly gap-10 w-full ">
          {footerLinks.map((link) => (
            <div key={link.title} className="">
              <h4 className="text-white text-2xl font-montserrat font-semibold">
                {link.title}
              </h4>
              <div className=" flex flex-col mt-5 gap-1">
                {link.links.map((li) => (
                  <Link
                    key={li.name}
                    href={li.link}
                    className="text-white font-montserrat hover:text-slate-gray cursor-pointer"
                  >
                    {li.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-1 justify-between items-center max-sm:flex-col">
        <div className="flex justify-center">
          <Image src={copyrightSign} alt="copyright" width={20} height={20} />
          <p className=" text-white font-montserrat">
            Copyright. All rights reserved.
          </p>
        </div>
        <p className="text-white font-montserrat cursor-pointer">
          Terms & Conditions
        </p>
      </div>
    </section>
  );
}

export default Footer;
