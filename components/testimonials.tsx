"use client";

import { motion } from "framer-motion";
import React, { useRef, useEffect } from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { testimonials } from "@/lib/data";
import Image from "next/image";

// import Swiper core and required modules
import { Pagination, EffectCreative, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testimonials = () => {
	const { ref } = useSectionInView("Testimonials", 0);

	return (
		<motion.section
			ref={ref}
			className="mb-28 max-w-[50rem] w-[min(100%,50rem)] text-justify leading-8 sm:mb-40 scroll-mt-28"
			initial={{ opacity: 0 }}
			whileInView={{
				opacity: 1,
			}}
			transition={{
				duration: 1,
			}}
			viewport={{
				once: true,
			}}
			id="testimonials">
			<SectionHeading>What others say about me</SectionHeading>
			{/* <div className="flex flex-col">
				<div>
					<p>"Steve is an exceptional front-end software developer with the technical skills, attention to detail, and collaborative mindset necessary to deliver outstanding results. I wholeheartedly recommend him for any front-end development role."</p>
				</div>
				<div className="flex flex-row gap-4 items-center justify-center mt-4 sm:mt-8">
					<div>
						<Image src={testimonials[0].imgageUrl} alt="ava" width="69" height="69" quality="95" priority={true} className="h-15 w-15 rounded-full border-[0.1rem] object-cover shadow-xl" />
					</div>
					<div className="flex flex-col">
						<p className="font-semibold capitalize">Rohan Jetha</p>
						<p className="text-sm leading-none">Head of Operations at Maqro</p>
					</div>
				</div>
			</div> */}
			<Swiper
				// install Swiper modules
				modules={[EffectCreative, Autoplay, Pagination]}
				freeMode={false}
				direction="horizontal"
				// keyboard={true}
				// mousewheel={true}
				effect={"creative"}
				slidesPerView={1}
				spaceBetween={0}
				loop={true}
				autoplay={{
					disableOnInteraction: false,
					delay: 5000,
				}}
				pagination={{ clickable: true }}
				allowTouchMove={true}
				// breakpoints={{
				// 	100: {
				// 		slidesPerView: 2,
				// 		spaceBetween: 12,
				// 	},

				// 	1024: {
				// 		slidesPerView: 1,
				// 		spaceBetween: 16,
				// 	},
				// }}
				creativeEffect={{
					prev: {
						shadow: false,
						translate: [0, 0, -200],
						opacity: 0,
					},
					next: {
						translate: ["100%", 0, 0],
						opacity: 1,
					},
				}}>
				{testimonials.map((item, index) => (
					<SwiperSlide key={`testimonial-${index}`}>
						<div className="flex flex-col sm:min-h-[20rem] ">
							<div className="">
								<p>"{item.message}"</p>
							</div>
							<div className="flex flex-row gap-4 items-center justify-center mt-4 sm:mt-8">
								<div>
									<Image src={item.imgageUrl} alt="ava" width="69" height="69" quality="95" priority={true} className="h-15 w-15 rounded-full border-[0.1rem] object-cover shadow-xl" />
								</div>
								<div className="flex flex-col">
									<p className="font-semibold capitalize">{item.name}</p>
									<p className="text-sm leading-none">{item.role}</p>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</motion.section>
	);
};

export default Testimonials;
