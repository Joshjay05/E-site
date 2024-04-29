"use client";

import Image from "next/image";
import FormattedPrice from "./FormattedPrice";
import { IoMdCart } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
const SingleProducts = ({ product }: any) => {
	console.log(product);
	return (
		<div className="grid lg:grid-cols-2 gap-5 bg-white p-4 rounded-lg">
			SingleProducts
			<div>
				<Image
					src={product?.image}
					alt="product image"
					width={500}
					height={500}
					className="w-full max-h-[700px] object-cover rounded-lg"
				/>
			</div>
			<article className="flex flex-col justify-center gap-y-10">
				<p className="text-3xl font-semibold">{product?.title}</p>
				<p className="text-xl font-semibold">
					<FormattedPrice amount={product?.price} />
				</p>
				<p className="text-lightText">{product?.description}</p>
				<div className="text-sm text-lightText">
					<span>
						SKU:
						<span className="text-darkText">{product?.id}</span>
					</span>
					<span>
						Category: <span>{product?.category}</span>
					</span>
				</div>

				<div>
					<button className="bg-darkText text-slate-100 px-6 py-3 text-sm uppercase first-letter:flex items-center border-r-[1px] border-r-slate-500">
						add to cart
					</button>
					<span className="bg-darkText text-xl text-slate-100 w-12 flex items-center justify-center group hover:bg-orange-500 duration-200 py-3">
						<IoMdCart />
					</span>
					<p className="flex items-center gap-x-2 text-sm">
						<MdFavoriteBorder /> add to wishlist
					</p>
				</div>
			</article>
		</div>
	);
};

export default SingleProducts;
