"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const Projects = () => {
	const { ref } = useSectionInView("Projects", 0);

	return (
		<motion.section ref={ref} id="projects" className="scroll-mt-28 mb-28">
			<SectionHeading>My projects</SectionHeading>
			<div>
				{projectsData.map((project, index) => (
					<React.Fragment key={index}>
						<Project {...project} />
					</React.Fragment>
				))}
			</div>
		</motion.section>
	);
};

export default Projects;
