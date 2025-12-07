import type { Link } from "../types";

export const SITE = {
  title: "주사비 환자를 위한 음식 가이드",
  description: "주사비(안면홍조) 환자가 알아야 할 음식별 홍조 유발 정보",
  author: "MediInfo",
  url: "https://rosacea.mediinfo.blog",
  locale: "ko-KR",
  dir: "ltr",
  charset: "UTF-8",
  basePath: "/",
  postsPerPage: 10,
};

export const NAVIGATION_LINKS: Link[] = [
  {
    href: "/",
    text: "홈",
  },
  {
    href: "/about",
    text: "소개",
  },
];

export const OTHER_LINKS: Link[] = [
  {
    href: "/about",
    text: "소개",
  },
];

export const SOCIAL_LINKS: Link[] = [];