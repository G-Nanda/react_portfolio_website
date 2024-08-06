import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineDribbble } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FaCode } from "react-icons/fa";

export const links = [
  { id: 1, link: "#home", title: "Home" },
  { id: 2, link: "#about", title: "About" },
  { id: 3, link: "#experience", title: "Experience" },
  { id: 4, link: "#projects", title: "Projects" },
  { id: 5, link: "#contact", title: "Contact" },
];

export const socials = [
  
  {
    id: 1,
    link: "https:linkedin.com/in/nanda-g-163812231",
    icon: <FaLinkedinIn />,
  },
  { id: 2, link: "https://github.com/G-Nanda", icon: <AiFillGithub /> },
  { id: 3, link: "https://leetcode.com/u/NANDA__G/", icon: <SiLeetcode /> },
  
  {
    id: 4,
    link: "https://www.skillrack.com/faces/resume.xhtml?id=352668&key=894032e84e62149a65d002bea560b07be682bcdd",
    icon: <FaCode />,
  },
];