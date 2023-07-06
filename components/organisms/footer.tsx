import React from "react";
import Link from "next/link";
import LogoIcon from "../molecules/logo-icon";
import GithubIcon from "../molecules/github-icon";
import VercelIcon from "../molecules/vercel-icon";


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
                <VercelIcon />
              </a>
            </div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
