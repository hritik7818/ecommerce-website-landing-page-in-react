import React from 'react';

export default function ProductCard(props) {
    return <div className="mx-2 w-40 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-center items-center w-40 h-44">
            <a href="#">
                <img
                    className=" w-[125px] h-[150px] block"
                    src={props.img}
                    alt=""
                />
            </a>
        </div>
        <div className="">
            <a href="#">
                <h5 className="mb-1 flex justify-center items-center font-medium tracking-tight text-gray-900 dark:text-white">
                    {props.productName}
                </h5>
            </a>
            <a href="#">
                <h5 className="mb-1 flex justify-center items-center tracking-tight text-green-600 dark:text-white">
                    {props.offer}
                </h5>
            </a>
            <a href="#">
                <h5 className="mb-1 flex justify-center items-center tracking-tight text-gray-500 dark:text-white">
                    {props.desp}
                </h5>
            </a>

        </div>
    </div>;
}
