import react from "./assets/technologies/react.webp";
import next from "./assets/technologies/next.svg";
import node from "./assets/technologies/node.webp";
import astro from "./assets/technologies/astro.webp";
import typescript from "./assets/technologies/typescript.webp";
import svelte from "./assets/technologies/svelte.webp";
import svelteKit from "./assets/technologies/svelte-kit.webp";
import csharp from "./assets/technologies/c-sharp.webp";
import c from "./assets/technologies/c.webp";
import go from "./assets/technologies/go.webp";
import dart from "./assets/technologies/dart.webp";
import sass from "./assets/technologies/sass.webp";
import flutter from "./assets/technologies/flutter.webp";

import ecommerceNext from "./assets/projects/ecommerce-next.webp";
import youtubeClone from "./assets/projects/youtube-clone.webp";
import teaShare from "./assets/projects/tea-share.webp";
import shareMe from "./assets/projects/share-me.webp";
import hooBank from "./assets/projects/hoo-bank.webp";
import tiktik from "./assets/projects/tik-tik.webp";

export interface TechnologyInfo {
  image: ImageMetadata;
  name: string;
  link: string;
  description: string;
  imageClassname?: string;
  tooltipClassname?: string;
  imageHeight?: number;
  imageWidth?: number;
}

export const technologies: TechnologyInfo[] = [
  {
    image: react,
    description: "The library for web and native user interfaces",
    link: "https://react.dev",
    name: "React",
    imageClassname: "spin",
    tooltipClassname: "ml-[200%] w-[276px]",
    imageHeight: 70,
    imageWidth: 80,
  },
  {
    image: next,
    link: "https://nextjs.org",
    name: "Next",
    description: "The React Framework for the Web",
    imageClassname: "bg-white rounded-full",
    tooltipClassname: "ml-[180%] w-[211px]",
  },
  {
    image: astro,
    link: "https://astro.build",
    name: "Astro",
    description: "Astro is the all-in-one web framework designed for speed",
    imageClassname: "rounded-full",
    tooltipClassname: "ml-[220%] w-[345px]",
  },
  {
    image: typescript,
    link: "https://typescriptlang.org",
    name: "TypeScript",
    description: "TypeScript is JavaScript with syntax for types.",
    imageClassname: "bg-white rounded-full",
    tooltipClassname: "mr-[200%] w-[290px]",
  },
  {
    image: svelte,
    link: "https://svelte.dev",
    name: "Svelte",
    description: "Cybernetically enhanced web apps.",
    imageHeight: 80,
    imageWidth: 68,
    tooltipClassname: "ml-[200%] w-[220px]",
  },
  {
    image: svelteKit,
    link: "https://kit.svelte.dev",
    name: "SvelteKit",
    description: "Web development, streamlined.",
    imageHeight: 200,
    imageWidth: 200,
    tooltipClassname: "ml-[180%] w-[196px]",
  },
  {
    image: go,
    link: "https://go.dev",
    name: "Go",
    description: "Simple, secure and scalable",
    imageHeight: 90,
    imageWidth: 69,
    tooltipClassname: "ml-[180%] w-[174px]",
  },
  {
    image: csharp,
    link: "https://dotnet.microsoft.com/en-us/languages/csharp",
    name: "C#",
    description: "The modern, innovative and open-source programming language.",
    imageHeight: 90,
    imageWidth: 80,
    tooltipClassname: "mr-[180%] w-[390px]",
  },
  {
    image: c,
    link: "https://en.wikipedia.org/wiki/C_(programming_language)",
    name: "C",
    description: "My report card at school.",
    imageHeight: 90,
    imageWidth: 80,
    tooltipClassname: "ml-[180%] w-[160px]",
  },
  {
    image: node,
    link: "https://nodejs.org",
    name: "Node",
    description: "An asynchronous, event-driven JavaScript runtime",
    imageHeight: 80,
    imageWidth: 80,
    tooltipClassname: "ml-[180%] w-[310px]",
  },
  {
    image: dart,
    link: "https://dart.dev",
    name: "Dart",
    description: "A client-optimized language for fast apps on any platform.",
    imageHeight: 80,
    imageWidth: 80,
    tooltipClassname: "ml-[200%] w-[345px]",
  },
  {
    image: flutter,
    link: "https://flutter.dev",
    name: "Flutter",
    description: "Build apps for any screen.",
    imageHeight: 80,
    imageWidth: 80,
    tooltipClassname: "mr-[100%] w-[170px]",
  },
  {
    image: sass,
    link: "https://sass-lang.com",
    name: "SASS",
    description: "CSS with superpowers",
    imageHeight: 80,
    imageWidth: 80,
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
    handle: "@WebDev_Siri",
    icon: "mdi:twitter",
    iconColor: "#2e77ff",
    link: "https://twitter.com/WebDev_Siri",
  },
] as const;

export interface Project {
  image: ImageMetadata;
  name: string;
  description: string;
  source: `https://${string}`;
  link?: `https://${string}`;
}

export const projects: Project[] = [
  {
    name: "Tea Share",
    description: "Tea Share is a social media application made for Android in Flutter and the Web with Javascript/Typescript.",
    image: teaShare,
    source: "https://github.com/Dev-Siri/Tea-Share",
    link: "https://tea-share.vercel.app",
  },
  {
    name: "Tik Tik",
    description: "A Fullstack Tik Tok clone with Google Authentication made with Next.js, React & Sanity.",
    image: tiktik,
    source: "https://github.com/Dev-Siri/Tik-Tik",
    link: "https://tik-tik-siri.vercel.app",
  },
  {
    name: "Next Ecommerce",
    description: "An Ecommerce application with actual payments powered by Stripe. Made with Next.js SSG and Sanity CMS.",
    image: ecommerceNext,
    source: "https://github.com/Dev-Siri/Ecommerce-Next",
    link: "https://phoenix-stores.vercel.app",
  },
  {
    name: "Youtube Clone",
    description: "A Youtube Clone made with React.js, TailwindCSS and RapidAPI.",
    image: youtubeClone,
    source: "https://github.com/Dev-Siri/Youtube-Clone",
    link: "https://siri-youtube-app.netlify.app",
  },
  {
    name: "Share Me",
    description: "A Full Stack Social Media Application made with React, TailwindCSS and Sanity",
    image: shareMe,
    source: "https://github.com/Dev-Siri/ShareMe",
    link: "https://shareme-siri.netlify.app",
  },
  {
    name: "Hoo Bank",
    description: "A modern, fast & minimalistic banking landing page created with Astro and TailwindCSS.",
    image: hooBank,
    source: "https://github.com/Dev-Siri/Hoo-Bank",
    link: "https://hoo-bank-siri.netlify.app",
  },
];
