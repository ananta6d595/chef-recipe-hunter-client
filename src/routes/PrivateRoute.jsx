import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log("user in private route", user);
    if (loading) {
        return (
            <div className="flex h-96 w-full">
                <div className="relative mx-auto my-auto">
                    <div
                        className="w-12 h-12 rounded-full absolute
                            border-4 border-dashed border-gray-200"></div>
                    <div
                        className="w-12 h-12 rounded-full animate-spin absolute
                            border-4 border-dashed border-green-500 border-t-transparent"></div>
                </div>
            </div>
        );
    }

    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;
