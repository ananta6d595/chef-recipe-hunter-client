import React, { useContext, useState } from "react";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
// import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";

const Login = () => {
    const [error, setError] = useState(null);
    const { signInUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const HandelSignIn = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        signInUser(email, password)
            .then((res) => {
                const logInUser = res.user;
                navigate(from, { replace: true });
            })
            .catch((error) => {

                setError(error.message);

                if (error.message.includes("email-already-exists")) {
                    setError("Email already exists");
                }
                if (error.message.includes("wrong-password")) {
                    setError("Wrong password");
                }
                if (error.message.includes("auth/user-not-found")) {
                    setError("User not found");
                }
            });
    };

    return (
        <>
            <div className="flex h-screen bg-gray-100">
                <div className="m-auto w-full max-w-sm">
                    <div className="text-center">
                        <h1 className="text-3xl font-semibold text-gray-700 mb-2">
                            Login
                        </h1>
                    </div>
                    <Form
                        onSubmit={HandelSignIn}
                        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
                                placeholder="Enter Password"
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
                            <p className="text-rose-700">{error}</p>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    );
};

export default Login;
