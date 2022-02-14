import React from 'react';
import logo from "../utils/logo.png";

export default function Navbar() {
    return (
        <header className="text-gray-900 body-font sticky top-0 z-10 bg-white">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src={logo} alt="logo" />
                    <span className="ml-3 text-xl">lets Shops</span>
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <div className="flex items-center justify-center">
                        <div className="flex rounded mr-10">
                            <input type="text" className="px-4 py-2 w-80 outline-0 bg-slate-300" placeholder="Search..." />
                            <button className="flex items-center justify-center px-4 border-l bg-black">
                                <svg className="w-6 h-6 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <a className="mr-5 hover:text-gray-900 font-bold">Cart</a>
                    <a className="mr-5 hover:text-gray-900 font-bold">More</a>
                    <a className="mr-5 hover:text-gray-900 font-bold" >Best Sellers</a>
                    <a className="mr-5 hover:text-gray-900 font-bold">Today's Deal</a>
                </nav>
                <button className="inline-flex items-center bg-black text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Log In
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
            <hr />
        </header>

    );
}
