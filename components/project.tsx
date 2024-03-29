"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { projectsData } from "@/lib/data";

type ProjectProps = (typeof projectsData)[number];

const Project = ({ title, description, tags, imageUrl, url }: ProjectProps) => {
	const ref = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "1.33 1"],
	});

	const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
	const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

	return (
		<motion.div style={{ scale: scaleProgress, opacity: opacityProgress }} ref={ref} className="group mb-3 sm:mb-8 last:mb-0">
			<section className="sm:group-even:pl-8 bg-gray-100 max-w-[45rem] sm:min-h-[20rem] border border-black/5 overflow-hidden sm:pr-8 relative  hover:bg-gray-200 transition rounded-lg dark:bg-white/10 dark:hover:bg-white/20 dark:text-white">
				<div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
					<h3 className="text-2xl font-semibold">{title}</h3>
					<p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">{description}</p>
					<ul className="flex flex-wrap gap-2 mt-4">
						{tags.map((tag, index) => (
							<li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70" key={index}>
								{" "}
								{tag}
							</li>
						))}
					</ul>
				</div>

				<a href={url} target="_blank" rel="noopener" title="go to project">
					<Image
						src={imageUrl}
						alt="Project wored on"
						quality={95}
						className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-lg shadow-2xl group-even:right-[initial] group-even:-left-40 cursor-pointer 
			group-hover:-translate-x-3 
			group-hover:translate-y-3 
			group-hover:-rotate-2 

			group-even:group-hover:translate-x-3 
			group-even:group-hover:translate-y-3 
			group-even:group-hover:rotate-2 

			transition group-hover:scale-[1.04]"
					/>
				</a>
			</section>
		</motion.div>
	);
};

export default Project;
