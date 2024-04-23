import { getSingleProduct, getTrendingProducts } from "@/Helpers";
import Container from "@/components/Container";
import ProductsData from "@/components/ProductsData";
import SingleProducts from "@/components/SingleProducts";
import { Products } from "@/type";
import React from "react";
type Props = {
	searchParams: { [key: string]: string | string[] | undefined };
};

const ProductPage = async ({ searchParams }: Props) => {
	const _idString = searchParams?._id;
	const _id = Number(_idString);
	const product = getSingleProduct(_id);
	const data = await getTrendingProducts();
	console.log(searchParams._id);
	return (
		<div>
			<Container>
				<SingleProducts product={product} />
				<article>
					<p className="text-xl py-1 text-darkText">Trending Products</p>
					<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 ">
						{data?.map((item: Products) => {
							<ProductsData key={item._id} item={item} />;
						})}
					</div>
				</article>
			</Container>
		</div>
	);
};

export default ProductPage;
