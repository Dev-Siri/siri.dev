export const links = ["blog", "projects", "book"];

export const location = "Kolkata, India";
export const designation = {
  default: "CEO @ htmx.org (multi-billion)",
  alternative: "CTO @ Twitter Shitposting Org™",
};

export const socialLinks = [
  {
    name: "Youtube",
    handle: "@Dev-Siri",
    icon: "mdi:youtube",
    link: "https://youtube.com/@Dev-Siri",
  },
  {
    name: "Twitter",
    handle: "@DevSiriTweets",
    icon: "mdi:twitter",
    link: "https://twitter.com/DevSiriTweets",
  },
  {
    name: "Github",
    handle: "Dev-Siri",
    icon: "mdi:github",
    link: "https://github.com/Dev-Siri",
  },
] as const;

export interface Project {
  image: {
    src: string;
    height: number;
    width: number;
  };
  name: string;
  description: string;
  source: `https://${string}`;
  link?: `https://${string}` | `/${string}`;
}

export const projects: Project[] = [
  {
    name: "Tik Tik",
    description: "A Fullstack Tik Tok clone with Google Authentication made with React + Next.js & Sanity.",
    image: {
      src: "/images/projects/tik-tik.avif",
      height: 768,
      width: 1366,
    },
    source: "https://github.com/Dev-Siri/Tik-Tik",
    link: "https://tik-tik-siri.vercel.app",
  },
  {
    name: "Phoenix",
    description: "An Ecommerce application with actual payments powered by Stripe. Made with React + Next.js and Sanity CMS.",
    image: {
      src: "/images/projects/ecommerce-next.avif",
      height: 337,
      width: 640,
    },
    source: "https://github.com/Dev-Siri/Ecommerce-Next",
    link: "https://phoenix-stores.vercel.app",
  },
  {
    name: "Youtube Clone",
    description: "Youtube Clone made with React, TailwindCSS and RapidAPI.",
    image: {
      src: "/images/projects/youtube-clone.avif",
      height: 768,
      width: 1366,
    },
    source: "https://github.com/Dev-Siri/Youtube-Clone",
    link: "https://siri-youtube-app.netlify.app",
  },
  {
    name: "Share Me",
    description: "Full Stack Social Media Application made with React + Next.js, TailwindCSS and Sanity.",
    image: {
      src: "/images/projects/share-me.avif",
      height: 768,
      width: 1366,
    },
    source: "https://github.com/Dev-Siri/ShareMe",
    link: "https://share-me-siri.vercel.app",
  },
  {
    name: "Hoo Bank",
    description: "Modern, fast & minimalistic banking landing page created with Astro and TailwindCSS.",
    image: {
      src: "/images/projects/hoo-bank.avif",
      height: 1366,
      width: 768,
    },
    source: "https://github.com/Dev-Siri/Hoo-Bank",
    link: "https://hoo-bank-siri.vercel.app",
  },
  {
    name: "Gedis",
    description: "Fast, Redis inspired, in-memory database written in Go.",
    image: {
      src: "/images/projects/gedis.avif",
      height: 347,
      width: 690,
    },
    source: "https://github.com/Dev-Siri/gedis",
    link: "https://gedis.vercel.app",
  },
  {
    name: "GDN",
    description: "An extremely fast CDN written in Go.",
    image: {
      src: "/images/projects/gdn.avif",
      height: 250,
      width: 690,
    },
    source: "https://github.com/Dev-Siri/gdn",
  },
  {
    name: "Twitter Clone",
    description: "Twitter Clone built with Next.js + React, Drizzle ORM, Neon & Firebase Storage",
    image: {
      src: "/images/projects/twitter-clone.avif",
      height: 367,
      width: 690,
    },
    source: "https://github.com/Dev-Siri/Twitter-Clone",
  },
];
