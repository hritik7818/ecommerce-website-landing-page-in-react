import React from 'react'

const footerLists = (props) => {
    console.log("This is inside the FooterLists");
    console.log(props);
    return (
        <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font font-thin text-xs tracking-widest mb-3 text-slate-400">
                {props.footerDetails.title}
            </h2>
            <div className="list-none mb-10">
                {
                    (props.footerDetails.hasOwnProperty("links")) ?
                        props.footerDetails.links.map(element => {
                            return (
                                <li>
                                    <a className="hover:underline cursor-pointer text-xs font-medium">{element}</a>
                                </li>
                            );
                        }) : props.footerDetails.data.map(element => {
                            return (
                                <li>
                                    <p className="text-white text-xs font-medium">{element}</p>
                                </li>
                            );
                        })
                }
            </div>
        </div>
    )
}

export default footerLists