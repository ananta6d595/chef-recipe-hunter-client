import React, { useContext } from "react";
import { useState } from "react";
import { Form, Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { updateCurrentUser, updateProfile } from "firebase/auth";

const Registration = () => {
    const [error, setError] = useState(null);
    const { createUser, updateUserProfile } = useContext(AuthContext);

    // setError("")
    const HandelSignUp = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirm = event.target.confirm.value;
        const photo = event.target.photo.value;

        if (password != confirm) {
            setError("Confirm password doesn't match!");
            return;
        } else if (password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        } else if (password == null) {
            setError("Password required");
            return;
        } else if (email == null) {
            setError("Email required");
            return;
        }

        createUser(email, password)
            .then((res) => {
                const createdUser = res.user;
                updateProfile(createdUser, {
                    // why updateProfile working here not in Auth provider
                    displayName: name,
                    photoURL: photo,
                });
            })
            .catch((error) => setError(error.message));

    };

    return (
        <>
            <div className="flex bg-amber-100">
                <div className="m-auto w-full max-w-sm">
                    <div className="text-center">
                        <h1 className="text-3xl font-semibold text-gray-700 mb-2">
                            Register
                        </h1>
                    </div>
                    <Form
                        className="bg-emerald-100 shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4"
                        onSubmit={HandelSignUp}>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="name">
                                Name
                            </label>
                            <input
                                className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Name"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="email">
                                Email
                            </label>
                            <input
                                className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                                htmlFor="email">
                                Photo Url
                            </label>
                            <input
                                className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="photo"
                                name="photo"
                                type="text"
                                placeholder="Photo Url"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="password">
                                Password
                            </label>
                            <input
                                className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Password"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="password">
                                Confirm
                            </label>
                            <input
                                className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="confirm"
                                name="confirm"
                                type="password"
                                placeholder="Confirm"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline w-full"
                                type="submit">
                                Sign Up
                            </button>
                        </div>
                        <div className="text-center">
                            <span className="text-gray-700">
                                Or Register with:
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
                                Already have an account?{" "}
                                <Link to="/login" className="text-blue-500">
                                    Sign In
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

export default Registration;
