import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { works } from "@/public";

export const links = [
	{
		name: "Home",
		hash: "#home",
	},
	{
		name: "About",
		hash: "#about",
	},
	{
		name: "Projects",
		hash: "#projects",
	},
	{
		name: "Skills",
		hash: "#skills",
	},
	{
		name: "Experience",
		hash: "#experience",
	},
	{
		name: "Testimonials",
		hash: "#testimonials",
	},
	{
		name: "Contact",
		hash: "#contact",
	},
] as const;

export const experiencesData = [
	{
		title: "Full-Stack Developer",
		location: "Sydney",
		description: "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma, Supabase and MongoDB. I'm open to full-time opportunities.",
		icon: React.createElement(FaReact),
		date: "2024 - present",
		tasks: [],
	},
	{
		title: "Frontend Developer",
		location: "Digital Garden, Sydney (contract)",
		description: "A digital agency, with offices in both Sydney and Melbourne, specialising in UX design, web design and Drupal development projects.",
		icon: React.createElement(CgWorkAlt),
		date: "Jun 2023 - Nov 2023",
		tasks: [
			"Integrating novel functionalities into pre-existing website projects, encompassing animations, modals, forms, and other components.",
			"Engaging in collaborative efforts to construct responsive website projects within a team setting, aligning with Figma design specifications.",
			"Upholding, troubleshooting, and enhancing existing website projects in accordance with client specifications and requirements.",
			"Conducting peer code reviews to ensure code quality and adherence to established standards.",
		],
	},
	{
		title: "Fullstack Developer",
		location: "Maqro, Sydney (contract)",
		description: "An investment company. Maqro is one of Australia leading investment research, trading and advisory firms. Please contact me for a recommendation letter from the head of operations.",
		icon: React.createElement(CgWorkAlt),
		date: "Jan 2023 - Mar 2023",
		tasks: [
			"Developing and maintaining web applications using Next.js, React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
			"Propose and Performing upgrades from legacy to new code structure, including data caching on client side using Redux/Redux toolkit/RTK Query",
		],
	},
	{
		title: "Web Developer/UX UI Designer",
		location: "New Motion Studio, Parramatta, Sydney (intern)",
		description: "Specializing in UX/UI, design, branding, advertising and web development. A full service digital agency, delivering top-tier solutions for companies of all sizes. Please contact me for a recommendation letter from the managing director.",
		icon: React.createElement(CgWorkAlt),
		date: "Aug 2022 - Nov 2022",
		tasks: ["Designing website using CMS Webflow, Figma, Sketch.", "Strong skillset in SEO, web development and deploying digital products."],
	},
	{
		title: "Frontend Developer",
		location: "3F Solutions, Vietnam (full time)",
		description:
			"One of the top web development company in Ho Chi Minh and officially partnered with Google. Specializing in Google search engine advertising and website analytics such as website speed, rankings, traffics, keywords, SEO, website competitors. 3F Solutions also provides a wide range of digital tools and web applications to improve productivity, marketing for thousands of clients connecting to their customers across multiple popular social platforms such as Facebook, Tiktok and Youtube.",
		icon: React.createElement(CgWorkAlt),
		date: "Jun 2019 - Sep 2021",
		tasks: [
			"Developing web applications using JavaScript, Nodejs and Js frameworks (React).",
			"Developing RESTful API.",
			"Testing, quality checking and fixing API, web applications.",
			"Maintaining digital tools, applications and solving customer queries.",
			"Actively participating in designing process for new applications and digital products.",
		],
	},
	{
		title: "Wordpress Developer",
		location: "Thuy Thu Agency, Vietnam (full time)",
		description: "One of the leading Vietnam company in creating high demand e-commerce websites, branding and content creation. Providing over 500+ successful website projects, 200+ branding projects for customers from multiple industry.",
		icon: React.createElement(CgWorkAlt),
		date: "Apr 2018 - Apr 2019",
		tasks: ["Designing and creating responsive websites in accordance to SEO standard, mobile first.", "Creating website layouts and templates using Figma, Photoshop and Illustrator.", "Managing multiple Wordpress projects utilizing website tool-builder"],
	},
] as const;

export const projectsData = [
	{
		title: "Netflix Replication",
		description: "A full-stack application replicating Netflix utilizing Nextjs oauth. User can create account, add movies to their favorite list and login using either email or Github account (Google authentication is not enable on demo app)",
		tags: ["React", "Next.js", "Typescript", "MongoDB", "Tailwind", "Prisma"],
		imageUrl: works.netflix,
		url: "https://netflix-replicate-iol7pe43g-stevenguyen1903.vercel.app/auth",
	},
	{
		title: "Maqro Website",
		description: "Web-based platform that allows users to search for various investment topics and to showcase the best of Maqro investment firm. The project utilized Nextjs framework to bring out best user experience and improving SEO thanks to SSR (server side render)",
		tags: ["React", "Next.js", "Tailwindcss", "Redux/RTK Query", "Framer"],
		imageUrl: works.maqro,
		url: "https://www.maqro.com.au/",
	},
	{
		title: "Maqro portal",
		description:
			"The project involves the development of a web application that empowers users to track the stock market in real time through various paid tiers. This application leverages the capabilities of Redux, Redux Toolkit, and RTK Query to efficiently manage and cache data on the client side, thereby ensuring a seamless user experience.",
		tags: ["React", "Next.js", "Tailwindcss", "Redux/RTK Query", "Framer"],
		imageUrl: works.maqroPortal,
		url: "https://portal.maqro.com.au/dashboard",
	},
	{
		title: "APP website",
		description: "A big scope website project for APP Group, a collaboration of works in a team environment",
		tags: ["Javascript", "Jquery", "GSAP", "Twig", "Figma", "css/scss"],
		imageUrl: works.app,
		url: "https://www.app.com.au/",
	},
	{
		title: "Cinevision Landingpage",
		description: "Landing Page for a photography studio in Sydney, exploring the possibility of Webflow as a website builder",
		tags: ["Javascript", "Webflow", "Jquery", "css/scss"],
		imageUrl: works.cine,
		url: "https://steves-fabulous-site-781fed.webflow.io/",
	},
	{
		title: "Webrank Vietnam",
		description: "Web application that allows users to compare and contrast between different websites based on certain metrics such as values, traffics and so on",
		tags: ["Javascript", "Jquery", "Restapi", "css/scss", "bootstrap"],
		imageUrl: works.webrank,
		url: "https://webrank.vn/rank/lazada.vn?&lang=us",
	},
	{
		title: "Previous portfolio",
		description: "My previous portfolio utilizing threejs and motion framer to create 3d effects and objects on the web",
		tags: ["React", "Tailwindcss", "Threejs", "vite"],
		imageUrl: works.oldport,
		url: "https://steve-portfolio-nine.vercel.app/",
	},
] as const;

export const skillsData = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Git", "Tailwind", "Prisma", "Redux", "RTK Query", "GraphQL", "Express", "PostgreSQL", "MongoDB", "Supabase", "GSAP", "Framer Motion", "Docker", "Figma"] as const;

export const testimonials = [
	{
		name: "Stephen Hanna",
		role: "Managing Partner at Corporate Advantage",
		message:
			"As a passionate developer, Steve has always worked diligently to help improve our internal processes. Ever since he joined our team in, Steve has made a material contribution to the success of our web development department. Steve is a diligent and hard worker. His work ethic, moral compass and attitude is exemplary. In his work, he always displays exceptional organizational skills, neat and thoughtful code construction and is proactive in communication.",
		imgageUrl: works.stephen,
	},
	{
		name: "Rohan Jetha",
		role: "Head of Operations at Maqro",
		message: "Steve is an exceptional front-end software developer with the technical skills, attention to detail, and collaborative mindset necessary to deliver outstanding results. I wholeheartedly recommend him for any front-end development role.",
		imgageUrl: works.rohan,
	},
	{
		name: "Abby Breakwell",
		role: "Founder / Managing Director at Digital Garden at Digital Garden",
		message:
			"Steve has been employed by Digital Garden on a 6 month contract for overflow work during a busy period. He is a good frontend developer, with both Drupal and WordPress experience, he is also proficient with React and creating frontend animations to bring UI's to life. He is a friendly guy, who I highly recommend.",
		imgageUrl: works.abby,
	},
];
