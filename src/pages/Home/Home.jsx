import React, { useEffect, useState } from "react";
import { register } from "swiper/element/bundle";
import ChefCard from "../../components/ChefCard";
register();

const Home = () => {
    const [chefs, setChefs] = useState([]);

    const images = [
        "https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=600&w=1332&q=80",
        "https://images.unsplash.com/photo-1604908554025-e477d54e85e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=600&w=1332&q=80",
        "https://images.unsplash.com/photo-1618219878829-8afd92751bed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=600&w=1332&q=80",
        "https://plus.unsplash.com/premium_photo-1672242676661-5cbaaffc06fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=600&w=1332&q=80",
        "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=600&w=1332&q=80",
    ];

    useEffect(() => {
        fetch("https://chef-recipe-hunter-server-ananta6d595.vercel.app/chefs")
            .then((res) => res.json())
            .then((data) => setChefs(data))
            .catch((error) => console.log(error));
    }, []);

    // console.log(chefs);
    // chefs.map()
    return (
        <div className="min-h-[600px] container mb-40">
            {/* Banner */}
            <div className="relative">
                <swiper-container
                    slides-per-view="1"
                    autoplay
                    speed="500"
                    loop="true"
                    css-mode="true">
                    {images.map((image, index) => {
                        return (
                            <swiper-slide key={index}>
                                <img src={image} />
                                <div className="absolute h-[300px] w-[650px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-amber-50 bg-opacity-70 blur backdrop-blur"></div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                                    <h1 className="w-[98%] mx-auto font-bold text-5xl text-center text-emerald-900">
                                        Want to cook like a Pro?<br></br>{" "}
                                        <span className="text-pink-700">
                                            Chef's Rep
                                        </span>{" "}
                                        <br></br> has your your back with famous
                                        American chefs.
                                    </h1>
                                </div>
                            </swiper-slide>
                        );
                    })}
                </swiper-container>
            </div>
            {/*  section 2 Chef */}

            <div className="lg:text-center my-28 ">
                <h1 className="font-medium text-2xl lg:text-5xl mb-6">
                    {" "}
                    Our Chef's
                </h1>
                <p className="text-slate-700 w-72 lg:w-96 md:mx-auto">
                    {" "}
                    Chef's rep has some awesome Chefs around America. Checkout
                    their recipes and cook like pros.
                </p>
                <div className="grid md:grid-cols-2 gap-7 md:mx-10 my-12 ">
                    {chefs?.map((chef) => (
                        // console.log(chef)
                        <ChefCard key={chef.id} chef={chef}></ChefCard>
                    ))}
                </div>
            </div>

            {/* section 3  */}
            <div className="lg:text-center">
                <h1 className="font-medium text-2xl lg:text-5xl mb-6">
                    Trending recipes
                </h1>
            </div>
            <div className="lg:text-center">
                <h1 className="font-medium text-2xl lg:text-5xl mb-6">
                    What our user say
                </h1>
            </div>
        </div>
    );
};

export default Home;
