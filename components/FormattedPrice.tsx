import React from "react";
interface Amount {
	amount: number;
}
const FormattedPrice = ({ amount }: Amount) => {
	const formattedAmount = amount.toLocaleString("en-us", {
		style: "currency",
		currency: "USD",
		maximumFractionDigits: 2,
	});

	return <span>{formattedAmount}</span>;
};

export default FormattedPrice;
