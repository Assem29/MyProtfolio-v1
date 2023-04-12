import Tippy from "@tippyjs/react";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="text-xl flex gap-5 mt-24 text-gray-500">
        <Tippy content="Github profile" className="__className_f6433a">
          <a
            href="https://github.com/Assem29"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
            aria-label="Github profile link"
          >
            <AiFillGithub />
          </a>
        </Tippy>
        <Tippy content="Linkedin profile" className="__className_f6433a">
          <a
            href="https://www.linkedin.com/in/assem-mohamed-564434259/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
            aria-label="Linkedin profile link"
          >
            <AiFillLinkedin />
          </a>
        </Tippy>
      </div>
      <p className="text-gray-500 text-sm __className_f6433a">
        Built and designed by Assem Mohamed
      </p>
    </>
  );
};

export default Footer;
