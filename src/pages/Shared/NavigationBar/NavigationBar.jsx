import React, { useState } from "react";
import chefLogo from "/src/assets/chefLogo.png";
import { Link } from "react-router-dom";
const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="md:flex justify-between items-center bg-amber-50 px-4 py-5 mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-14">
            <div className="flex items-center flex-shrink-0 text-white">
                <img src={chefLogo} className="w-100 h-10 mr-2" alt="Logo" />
                <span className="text-black text-4xl font-bold">
                    Chef's Reps
                </span>
            </div>
            <div className="block lg:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400">
                    <svg
                        className={`fill-current h-3 w-3 ${
                            isOpen ? "hidden" : "block"
                        }`}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                    <svg
                        className={`fill-current h-3 w-3 ${
                            isOpen ? "block" : "hidden"
                        }`}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                    </svg>
                </button>
            </div>
            <div
                className={`w-full block flex-grow text-center lg:flex lg:items-center lg:w-auto ${
                    isOpen ? "block" : "hidden"
                }`}>
                <div className="text-sm lg:flex-grow">
                    <Link to="/" className="navigation-text">
                        Home
                    </Link>
                    <Link to="/blog" className="navigation-text">
                        Blog
                    </Link>
                </div>
                <div>
                    {/* dynamic */}
                    <div
                        className="tooltip tooltip-bottom "
                        data-tip="User name">
                        {" "}
                        <div className="avatar">
                            <div className="w-16 mask mask-hexagon ">
                                {/* dynamic */}
                                <img src="/src/assets/userDefault.jpg" />
                            </div>
                        </div>
                    </div>
                    {/* login Button when no user logged in*/}
                    <Link to="/login">
                        <button className="btn inline-flex items-center rounded-md bg-emerald-600 hover:bg-emerald-400 border-0 text-white">
                            Login
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;
