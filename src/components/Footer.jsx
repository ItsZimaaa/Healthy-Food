import logo from "./../assets/logo.png";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white py-10 px-6 md:px-16 flex flex-col md:flex-row justify-between gap-10">
      <ul className="flex flex-col gap-3 items-start text-sm md:text-base">
        <li><img src={logo} className="w-[45px]" alt="logo" /></li>
        <li>www.companyname.com</li>
        <li>companyname@gmail.com</li>
        <li>Phone: +7 485-118-03-25</li>
      </ul>

      <ul className="flex flex-col gap-3 items-start text-sm md:text-base">
        <li className="font-bold text-lg md:text-2xl">Home</li>
        <li>Landingpage</li>
        <li>Documentation</li>
        <li>Referral Program</li>
        <li>UI & UX Design</li>
      </ul>

      <ul className="flex flex-col gap-3 items-start text-sm md:text-base">
        <li className="font-bold text-lg md:text-2xl">Menu</li>
        <li>Landingpage</li>
        <li>Documentation</li>
        <li>Referral Program</li>
        <li>UI & UX Design</li>
      </ul>

      <ul className="flex flex-col gap-3 items-start text-sm md:text-base">
        <li className="font-bold text-lg md:text-2xl">Company</li>
        <li>Landingpage</li>
        <li>Documentation</li>
        <li>Referral Program</li>
        <li className="flex gap-4 text-2xl mt-2">
          <FaInstagram className="hover:text-pink-500 transition-colors duration-200" />
          <FaFacebook className="hover:text-blue-500 transition-colors duration-200" />
          <FaTwitter className="hover:text-sky-400 transition-colors duration-200" />
          <FaYoutube className="hover:text-red-500 transition-colors duration-200" />
        </li>
      </ul>
    </footer>
  );
}
