"use client";
import React from "react";
import Image from "next/image";
import {
	BsYoutube,
	BsGithub,
	BsLinkedin,
	BsFacebook,
	BsReddit,
} from "react-icons/bs";
import payment from "@/Image/payment (1).png";
import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";
const Footer = () => {
	return (
		<footer className="w-full bg-darkText text-slate-100">
			<Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
				<section className="flex flex-col gap-y-4 ">
					<Logo />
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
						aliquid architecto obcaecati nihil quis nisi culpa voluptas!
						Suscipit nam cumque iure repellendus corrupti quis consectetur quae
						temporibus reiciendis earum, minus laboriosam dicta beatae
						reprehenderit, quia officiis vitae quod expedita aliquid.
					</p>

					<article className="flex gap-x-1">
						<a href="">
							<span className="socialLinks ">
								<BsYoutube />
							</span>
						</a>
						<a href="">
							<span className="socialLinks ">
								<BsGithub />
							</span>
						</a>
						<a href="">
							<span className="socialLinks ">
								<BsLinkedin />
							</span>
						</a>
						<a href="">
							<span className="socialLinks ">
								<BsFacebook />
							</span>
						</a>
						<a href="">
							<span className="socialLinks ">
								<BsReddit />
							</span>
						</a>
					</article>
				</section>
				<section>
					<article>
						<p className="text-lg"> Latest Post</p>
						<ul className="text-sm font-light mt-2 flex flex-col gay-y-2">
							<li className=" flex flex-col">
								<span className="text-slate hover:text-orange-600">
									{" "}
									raining days
								</span>
								<span>rain</span>
							</li>
							<li className=" flex flex-col">
								<span className="text-slate hover:text-orange-600"></span>
								<span></span>
							</li>
							<li className=" flex flex-col">
								<span className="text-slate hover:text-orange-600"></span>
								<span></span>
							</li>
							<li className=" flex flex-col">
								<span className="text-slate hover:text-orange-600"></span>
								<span></span>
							</li>
						</ul>
					</article>
				</section>
				<section>
					<article>
						<p className="text-lg">Links</p>
						<ul className=" text-base font-medium mt02 flex flex-col gap-y-2">
							<Link href={"/"}>
								<li className="hover:text-orange-500 cursor-pointer duration-200">
									Home
								</li>
							</Link>

							<li className="hover:text-orange-500 cursor-pointer duration-200">
								Cart
							</li>
							<li className="hover:text-orange-500 cursor-pointer duration-200">
								About
							</li>
							<li className="hover:text-orange-500 cursor-pointer duration-200">
								Newsletter
							</li>
							<li className="hover:text-orange-500 cursor-pointer duration-200">
								Contact
							</li>
						</ul>
					</article>
				</section>
				<section>
					<p className="text-lg mt-2">Pay us with your trusted services</p>

					<Image
						src={payment}
						alt="payment"
						className="w-full h-10 object-cover "
					/>
				</section>
			</Container>
		</footer>
	);
};

export default Footer;
