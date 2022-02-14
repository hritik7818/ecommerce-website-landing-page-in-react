import React from 'react';

export default function TopItem(props) {
    return (
        <div className="bg-white  cursor-pointer">
            <div className="flex justify-center items-center w-[137px] h-20">
                <a href="#!">
                    <img className="rounded-t-lg w-20 hover:w-[85px]" src={props.img} alt="" />
                </a>
            </div>
            <div className="flex justify-center items-center">
                <h5 className="text-gray-900 text-sm font-medium mb-2">{props.title}</h5>
            </div>
        </div>
    );
}
