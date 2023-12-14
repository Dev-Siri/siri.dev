import Astro from "./components/icons/Astro.astro";
import C from "./components/icons/C.astro";
import CSharp from "./components/icons/CSharp.astro";
import Dart from "./components/icons/Dart.astro";
import Flutter from "./components/icons/Flutter.astro";
import Go from "./components/icons/Go.astro";
import Next from "./components/icons/Next.astro";
import Node from "./components/icons/Node.astro";
import React from "./components/icons/React.astro";
import SASS from "./components/icons/SASS.astro";
import Svelte from "./components/icons/Svelte.astro";
import SvelteKit from "./components/icons/SvelteKit.astro";
import TypeScript from "./components/icons/TypeScript.astro";

export interface TechnologyInfo {
  Icon(_props: Record<string, any>): any;
  name: string;
  link: string;
  description: string;
  tooltipClassname?: string;
}

export const links = ["about", "blog", "projects", "technologies", "guestbook"];

export const technologies: TechnologyInfo[] = [
  {
    name: "React",
    Icon: React,
    description: "The library for web and native user interfaces",
    link: "https://react.dev",
    tooltipClassname: "ml-[200%] w-[276px]",
  },
  {
    name: "Next",
    Icon: Next,
    link: "https://nextjs.org",
    description: "The React Framework for the Web",
    tooltipClassname: "ml-[180%] w-[211px]",
  },
  {
    name: "Astro",
    Icon: Astro,
    link: "https://astro.build",
    description: "Astro is the all-in-one web framework designed for speed",
    tooltipClassname: "ml-[220%] w-[345px]",
  },
  {
    name: "TypeScript",
    Icon: TypeScript,
    link: "https://typescriptlang.org",
    description: "TypeScript is JavaScript with syntax for types.",
    tooltipClassname: "mr-[200%] w-[290px]",
  },
  {
    name: "Svelte",
    Icon: Svelte,
    link: "https://svelte.dev",
    description: "Cybernetically enhanced web apps.",
    tooltipClassname: "ml-[200%] w-[220px]",
  },
  {
    Icon: SvelteKit,
    link: "https://kit.svelte.dev",
    name: "SvelteKit",
    description: "Web development, streamlined.",
    tooltipClassname: "ml-[180%] w-[196px]",
  },
  {
    Icon: Go,
    name: "Go",
    link: "https://go.dev",
    description: "Simple, secure and scalable",
    tooltipClassname: "ml-[180%] w-[174px]",
  },
  {
    Icon: CSharp,
    link: "https://dotnet.microsoft.com/en-us/languages/csharp",
    name: "C#",
    description: "The modern, innovative and open-source programming language.",
    tooltipClassname: "mr-[180%] w-[390px]",
  },
  {
    name: "C",
    Icon: C,
    link: "https://en.wikipedia.org/wiki/C_(programming_language)",
    description: "My report card at school.",
    tooltipClassname: "ml-[180%] w-[160px]",
  },
  {
    name: "Node",
    Icon: Node,
    link: "https://nodejs.org",
    description: "An asynchronous, event-driven JavaScript runtime",
    tooltipClassname: "ml-[180%] w-[310px]",
  },
  {
    name: "Dart",
    Icon: Dart,
    link: "https://dart.dev",
    description: "A client-optimized language for fast apps on any platform.",
    tooltipClassname: "ml-[200%] w-[345px]",
  },
  {
    name: "Flutter",
    Icon: Flutter,
    link: "https://flutter.dev",
    description: "Build apps for any screen.",
    tooltipClassname: "mr-[100%] w-[170px]",
  },
  {
    name: "SASS",
    Icon: SASS,
    link: "https://sass-lang.com",
    description: "CSS with superpowers",
    tooltipClassname: "ml-[100%] w-[170px]",
  },
];

export const socialLinks = [
  {
    name: "Youtube",
    handle: "@Dev-Siri",
    icon: "mdi:youtube",
    iconColor: "red",
    link: "https://youtube.com/@Dev-Siri",
  },
  {
    name: "Github",
    handle: "Dev-Siri",
    icon: "mdi:github",
    link: "https://github.com/Dev-Siri",
  },
  {
    name: "Twitter",
    handle: "@DevSiriTweets",
    icon: "mdi:twitter",
    iconColor: "#2e77ff",
    link: "https://twitter.com/DevSiriTweets",
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
    name: "Tea Share",
    description: "Tea Share is a social media application made for Android in Flutter and the Web with TypeScript + SvelteKit.",
    image: {
      src: "/images/projects/tea-share.avif",
      height: 768,
      width: 1366,
    },
    source: "https://github.com/Dev-Siri/Tea-Share",
    link: "https://tea-share.vercel.app",
  },
  {
    name: "Tik Tik",
    description: "A Fullstack Tik Tok clone with Google Authentication made with Next.js, React & Sanity.",
    image: {
      src: "/images/projects/tik-tik.avif",
      height: 768,
      width: 1366,
    },
    source: "https://github.com/Dev-Siri/Tik-Tik",
    link: "https://tik-tik-siri.vercel.app",
  },
  {
    name: "Next Ecommerce",
    description: "An Ecommerce application with actual payments powered by Stripe. Made with Next.js SSG and Sanity CMS.",
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
    description: "A Youtube Clone made with React.js, TailwindCSS and RapidAPI.",
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
    description: "A Full Stack Social Media Application made with Next.js, TailwindCSS and Sanity.",
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
    description: "A modern, fast & minimalistic banking landing page created with Astro and TailwindCSS.",
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
    description: "A fast Redis inspired in-memory database made with Go.",
    image: {
      src: "/images/projects/gedis.avif",
      height: 347,
      width: 690, // 👀
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
      width: 690, // 👀
    },
    source: "https://github.com/Dev-Siri/gdn",
  },
  {
    name: "Twitter Clone",
    description: "Fully functional Twitter Clone built with Next.js, React, Drizzle ORM, Neon & Firebase Storage",
    image: {
      src: "/images/projects/twitter-clone.avif",
      height: 367,
      width: 690, // 👀
    },
    source: "https://github.com/Dev-Siri/Twitter-Clone",
  },
  {
    name: "Secret Project",
    description: "What could this one be?",
    image: {
      src: "/images/projects/secret-project.avif",
      height: 768,
      width: 1366,
    },
    source: "https://guthib.com",
    link: "/secret",
  },
];
