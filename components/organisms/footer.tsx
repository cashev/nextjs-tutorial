import React from "react";
import Link from "next/link";
import LogoIcon from "../molecules/logo-icon";
import GithubIcon from "../molecules/github-icon";


interface FooterProps {
  topHref: string;
  topText: string;
  gitHubImageUrl: string;
  gitHubImageAltText: string;
  gitHubHref: string;
}

const links = [
  { "href": "/", "text": "Home" },
  { "href": "/about", "text": "About" },
  { "href": "/terms-conditions", "text": "Terms & Conditions" },
  { "href": "/shipping-return-policy", "text": "Shipping & Return Policy" },
  { "href": "/privacy-policy", "text": "Privacy Policy" },
  { "href": "/frequently-asked-questions", "text": "FAQ" },
];

const Footer: React.FC<FooterProps> = ({
  gitHubImageUrl,
}) => {
  return (
    <footer className="border-t border-gray-700 bg-white text-black dark:bg-black dark:text-white">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 border-b border-gray-700 py-12 transition-colors duration-150 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-3">
            <Link href="/" className="flex flex-initial items-center font-bold md:mr-24">
              <span className="mr-2">
                <LogoIcon />
              </span>
              <span>Acme Store</span>
            </Link>
          </div>
          <nav className="col-span-1 lg:col-span-7">
            <ul className="grid md:grid-flow-col md:grid-cols-3 md:grid-rows-4">
              {links.map((link, index) => (
                <li key={index} className="py-3 md:py-0 md:pb-4">
                  <Link href={link.href} className="text-gray-800 transition duration-150 ease-in-out hover:text-gray-300 dark:text-gray-100">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="col-span-1 text-black dark:text-white lg:col-span-2">
            <Link href="https://github.com/cashev/nextjs-tutorial">
              <GithubIcon />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between space-y-4 pb-10 pt-6 text-sm md:flex-row">
            <p>© 2023 Acme Store. All rights reserved.</p>
            <div className="flex items-center text-sm text-white dark:text-black">
              <span className="text-black dark:text-white">Created by</span>
              <a rel="noopener noreferrer" href="https://vercel.com" aria-label="Vercel.com Link" target="_blank" className="text-black dark:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" aria-label="Vercel.com Logo" viewBox="0 0 89 20" fill="currentColor" shape-rendering="geometricPrecision" className="ml-3 inline-block h-6">
                  <path d="M11.5625 0L23.125 20H0L11.5625 0Z"></path>
                  <path d="M49.875 10.625C49.875 7.40625 47.5 5.15625 44.0937 5.15625C40.6875 5.15625 38.3125 7.40625 38.3125 10.625C38.3125 13.7812 40.875 16.0937 44.4062 16.0937C46.3438 16.0937 48.0938 15.375 49.2188 14.0625L47.0938 12.8437C46.4375 13.5 45.4688 13.9062 44.4062 13.9062C42.8438 13.9062 41.5 13.0625 41.0312 11.7812L40.9375 11.5625H49.7812C49.8438 11.25 49.875 10.9375 49.875 10.625ZM40.9062 9.6875L40.9688 9.5C41.375 8.15625 42.5625 7.34375 44.0625 7.34375C45.5938 7.34375 46.75 8.15625 47.1562 9.5L47.2188 9.6875H40.9062Z"></path>
                  <path d="M83.5313 10.625C83.5313 7.40625 81.1563 5.15625 77.75 5.15625C74.3438 5.15625 71.9688 7.40625 71.9688 10.625C71.9688 13.7812 74.5313 16.0937 78.0625 16.0937C80 16.0937 81.75 15.375 82.875 14.0625L80.75 12.8437C80.0938 13.5 79.125 13.9062 78.0625 13.9062C76.5 13.9062 75.1563 13.0625 74.6875 11.7812L74.5938 11.5625H83.4375C83.5 11.25 83.5313 10.9375 83.5313 10.625ZM74.5625 9.6875L74.625 9.5C75.0313 8.15625 76.2188 7.34375 77.7188 7.34375C79.25 7.34375 80.4063 8.15625 80.8125 9.5L80.875 9.6875H74.5625Z"></path>
                  <path d="M68.5313 8.84374L70.6563 7.62499C69.6563 6.06249 67.875 5.18749 65.7188 5.18749C62.3125 5.18749 59.9375 7.43749 59.9375 10.6562C59.9375 13.875 62.3125 16.125 65.7188 16.125C67.875 16.125 69.6563 15.25 70.6563 13.6875L68.5313 12.4687C67.9688 13.4062 66.9688 13.9375 65.7188 13.9375C63.75 13.9375 62.4375 12.625 62.4375 10.6562C62.4375 8.68749 63.75 7.37499 65.7188 7.37499C66.9375 7.37499 67.9688 7.90624 68.5313 8.84374Z"></path>
                  <path d="M88.2188 1.75H85.7188V15.8125H88.2188V1.75Z"></path>
                  <path d="M40.1563 1.75H37.2813L31.7813 11.25L26.2813 1.75H23.375L31.7813 16.25L40.1563 1.75Z"></path>
                  <path d="M57.8438 8.0625C58.125 8.0625 58.4062 8.09375 58.6875 8.15625V5.5C56.5625 5.5625 54.5625 6.75 54.5625 8.21875V5.5H52.0625V15.8125H54.5625V11.3437C54.5625 9.40625 55.9062 8.0625 57.8438 8.0625Z"></path>
                </svg>
              </a>
            </div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
