import React from 'react';
import { Link } from "react-router-dom";
// import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";

const Login = () => {
    return (
        <>
            <div className="flex h-screen bg-gray-100">
                <div className="m-auto w-full max-w-sm">
                    <div className="text-center">
                        <h1 className="text-3xl font-semibold text-gray-700 mb-2">
                            Login
                        </h1>
                    </div>
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="email">
                                Email
                            </label>
                            <input
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="password">
                                Password
                            </label>
                            <input
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                name="password"
                                type="password"
                                placeholder="**********"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                                type="submit">
                                Sign In
                            </button>
                        </div>
                        <div className="text-center">
                            <span className="text-gray-700">
                                Or login with:
                            </span>
                            <div className="flex justify-center mt-2">
                                <a
                                    href="#"
                                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                                    Google
                                </a>
                                <a
                                    href="#"
                                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow ml-2">
                                    GitHub
                                </a>
                            </div>
                            <p className="mt-4">
                                Don't have an account?{" "}
                                <Link
                                    to="/registration"
                                    className="text-blue-500">
                                    Sign Up
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;