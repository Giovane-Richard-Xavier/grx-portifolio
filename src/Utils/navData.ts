import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

export const navData = [
  { name: "home", path: "/", icon: HiHome },
  { name: "sobre", path: "/about", icon: HiUser },
  { name: "serviços", path: "/services", icon: HiRectangleGroup },
  { name: "work", path: "/work", icon: HiViewColumns },
  {
    name: "depoimentos",
    path: "/testimonials",
    icon: HiChatBubbleBottomCenterText,
  },
  {
    name: "contato",
    path: "/contact",
    icon: HiEnvelope,
  },
];
