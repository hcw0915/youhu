export type FooterLink = {
  title: string;
  href: string;
  isExternal?: boolean;
};

export type FooterSection = {
  title: string;
  links: FooterLink[];
};

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "關於我們",
    links: [
      { title: "公司簡介", href: "/about" },
      { title: "服務條款", href: "/terms" },
      { title: "隱私政策", href: "/privacy" },
    ],
  },
  {
    title: "客戶服務",
    links: [
      { title: "購物指南", href: "/shopping-guide" },
      { title: "退換貨政策", href: "/return-policy" },
      { title: "常見問題", href: "/faq" },
    ],
  },
  {
    title: "聯絡我們",
    links: [
      {
        title: "客服信箱",
        href: "mailto:service@example.com",
        isExternal: true,
      },
      { title: "客服電話", href: "tel:0800-000-000", isExternal: true },
      {
        title: "LINE 官方帳號",
        href: "https://line.me/ti/p/@example",
        isExternal: true,
      },
    ],
  },
] as const;

export const FOOTER_SOCIAL_LINKS: FooterLink[] = [
  {
    title: "Threads",
    href: "https://www.threads.net/@youho666",
    isExternal: true,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/youho666/",
    isExternal: true,
  },
] as const;
