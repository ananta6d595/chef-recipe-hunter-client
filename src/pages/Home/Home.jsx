import React, { useEffect, useState } from "react";
import { register } from "swiper/element/bundle";
import ChefCard from "../../container/ChefCard";
register();

const Home = () => {
    const [{recipes}, setRecipes] = useState({});

    const images = [
        "https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=600&w=1332&q=80",
        "https://images.unsplash.com/photo-1604908554025-e477d54e85e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=600&w=1332&q=80",
        "https://images.unsplash.com/photo-1618219878829-8afd92751bed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=600&w=1332&q=80",
        "https://plus.unsplash.com/premium_photo-1672242676661-5cbaaffc06fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=600&w=1332&q=80",
        "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=600&w=1332&q=80",
    ];

    useEffect(() => {
        fetch(
            "https://chef-recipe-hunter-server-ananta6d595.vercel.app/recipes"
        )
            .then((res) => res.json())
            .then((data) => setRecipes(data))
        .catch((error) => console.log(error));

    }, []);

    console.log(recipes);
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
                                        American chef.
                                    </h1>
                                </div>
                            </swiper-slide>
                        );
                    })}
                </swiper-container>
            </div>
            {/* Chef  section */}

            <div>
                <h1> Our Chef's</h1>
                <p>
                    {" "}
                    Chef's rep has some awesome Chefs around America. Checkout
                    their recipes and cook like pros.
                </p>
         
            </div>
        </div>
    );
};

export default Home;
