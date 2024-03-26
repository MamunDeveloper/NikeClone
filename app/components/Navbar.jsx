import { navLinks } from "../constants";
import Link from "next/link";
import Image from "next/image";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";

function Navbar() {
  return (
    <header className="max-container px-8 md:px-12 py-6 relative z-50 max-lg:mb-10">
      <nav className=" flex items-center max-container justify-between">
        <Image src={headerLogo} width={130} height={30} alt="logo" />
        <ul className=" hidden lg:flex gap-16">
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.label}
              className=" font-montserrat leading-normal text-lg text-slate-gray"
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <Image
          src={hamburger}
          alt="hamburger"
          width={30}
          height={30}
          className="block lg:hidden cursor-pointer"
        />
      </nav>
    </header>
  );
}

export default Navbar;
