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
    <footer>
      <div>
        <Link href="/">
          <LogoIcon />
          <span>Acme Store</span>
        </Link>
      </div>
      <div>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <Link href={link.href}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Link href="https://github.com/cashev/nextjs-tutorial">
          <GithubIcon />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
