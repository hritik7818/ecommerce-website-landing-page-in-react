import React from "react";
import ProductCard from "./ProductCard";

export default function ItemGalary(props) {
    console.log(props);
    console.log(props.productDetails.images[0]);
    return (
        <>
            <div className="m-2 mb-0 bg-white mt-3 pl-1 shadow">
                <div className="flex justify-between">
                    <h3 className="py-4 pl-9 text-xl font-mono font-semibold ">{props.productDetails.title}</h3>
                    <button type="button" className="rounded-sm h-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center mr-8 my-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View All</button>
                </div>
            </div>
            <div className="m-2 h-[285px] bg-white mt-[1px] pl-1 shadow">
                {/* <div className="flex justify-between">
                    <h3 className="py-4 pl-9 text-xl font-mono font-semibold ">{props.productDetails.title}</h3>
                    <button type="button" className="rounded-sm h-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center mr-8 my-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View All</button>
                </div> */}

                <div className="flex">
                    <ProductCard img={props.productDetails.images[0]} productName={props.productDetails.productNames[0]} offer={props.productDetails.offers[0]} desp={props.productDetails.desp[0]} />
                    <ProductCard img={props.productDetails.images[1]} productName={props.productDetails.productNames[1]} offer={props.productDetails.offers[1]} desp={props.productDetails.desp[1]} />
                    <ProductCard img={props.productDetails.images[2]} productName={props.productDetails.productNames[2]} offer={props.productDetails.offers[2]} desp={props.productDetails.desp[2]} />
                    <ProductCard img={props.productDetails.images[3]} productName={props.productDetails.productNames[3]} offer={props.productDetails.offers[3]} desp={props.productDetails.desp[3]} />
                    <ProductCard img={props.productDetails.images[4]} productName={props.productDetails.productNames[4]} offer={props.productDetails.offers[4]} desp={props.productDetails.desp[4]} />
                    <ProductCard img={props.productDetails.images[5]} productName={props.productDetails.productNames[5]} offer={props.productDetails.offers[5]} desp={props.productDetails.desp[5]} />
                    <ProductCard img={props.productDetails.images[6]} productName={props.productDetails.productNames[6]} offer={props.productDetails.offers[6]} desp={props.productDetails.desp[6]} />
                </div>
            </div>
        </>
    );
}
