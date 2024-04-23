import { getProducts } from "@/Helpers";
import Banner from "@/components/Banner";
import Products from "@/components/Products";
import Image from "next/image";

export default async function Home() {
	// const products = await getProducts();
	// console.log(products);
	return (
		<main>
			<Banner />
			<Products />
		</main>
	);
}
