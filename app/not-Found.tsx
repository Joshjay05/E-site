import React from "react";
import Container from "../components/Container";
import Link from "next/link";
const NotFound = () => {
	return (
		<Container className="flex items-center justify-center py-20 ">
			<div className="max-w-2xl min-h-[500px] flex flex-col justify-center items-center gap-y-5">
				<h2 className="text-base font-medium text-center">Page not Found</h2>
				<p className="text-base font-medium text-center">
					oops! the page you are looking for does not exist or might have been
					moved or deleted
				</p>
				<Link
					href={"/"}
					className="bg-black text-slate-100 w-44 h-12 rounded-full text-base font-semibold flex items-center hover:bg-orange-500 hover:text-white duration-200">
					Back to Home
				</Link>
			</div>
		</Container>
	);
};

export default NotFound;
