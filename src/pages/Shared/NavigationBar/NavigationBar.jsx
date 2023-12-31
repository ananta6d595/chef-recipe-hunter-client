import React, { useContext, useState } from "react";
import chefLogo from "/src/assets/chefLogo.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    const handelLogout = () => {
        logOut()
            .then()
            .catch((error) => console.log(error.message));
    };

    console.log(user);
    return (
        <nav className="md:flex justify-between items-center px-4 py-5 mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-14">
            <div className="flex items-center flex-shrink-0">
                <img src={chefLogo} className="w-100 h-10 mr-2" alt="Logo" />
                <span className=" text-4xl font-bold">Chef's Reps</span>
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
                <div className="lg:flex-grow">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "text-xl px-4 text-emerald-600 font-semibold underline"
                                : "px-4 text-xl text-slate-400"
                        }>
                        Home
                    </NavLink>
                    <NavLink
                        to="/blog"
                        className={({ isActive }) =>
                            isActive
                                ? "text-xl px-4 text-emerald-600 font-semibold underline"
                                : "px-4 text-xl text-slate-400"
                        }>
                        Blog
                    </NavLink>
                </div>
                <div className="flex items-center gap-6">
                    {user ? (
                        <div
                            className="tooltip tooltip-bottom "
                            data-tip={user?.displayName}>
                            {" "}
                            <div className="avatar">
                                <div className="w-16 mask mask-hexagon ">
                                    <img src={user?.photoURL} className="" />
                                    <img src="/src/assets/userDefault.jpg" />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <></>
                    )}
                    {user ? (
                        // <Link to="/">
                        <button
                            onClick={handelLogout}
                            className="btn inline-flex items-center rounded-md bg-emerald-600 hover:bg-emerald-400 border-0 text-white">
                            Logout
                        </button>
                    ) : (
                        // </Link>
                        <Link to="/login">
                            <button className="btn inline-flex items-center rounded-md bg-emerald-600 hover:bg-emerald-400 border-0 text-white">
                                Login
                            </button>
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;
