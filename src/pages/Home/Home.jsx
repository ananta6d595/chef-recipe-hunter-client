import React, { useContext, useEffect, useState } from "react";
import { register } from "swiper/element/bundle";
import ChefCard from "../../components/ChefCard";
import { AuthContext } from "../../provider/AuthProvider";
import Spinner from "../../components/Spinner";
import TrendingCard from "../../components/TrendingCard";
import ReviewCard from "../../components/ReviewCard";
register();

const Home = () => {
    const [chefs, setChefs] = useState([]);
    const [trend, setTrend] = useState({});

    const { loader, setLoading } = useContext(AuthContext);
    const images = [
        "https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=600&w=1332&q=80",
        "https://images.unsplash.com/photo-1604908554025-e477d54e85e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=600&w=1332&q=80",
        "https://images.unsplash.com/photo-1618219878829-8afd92751bed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=600&w=1332&q=80",
        "https://plus.unsplash.com/premium_photo-1672242676661-5cbaaffc06fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=600&w=1332&q=80",
        "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=600&w=1332&q=80",
    ];

    const reviews = [
        {
            name: "Kristina Razon",
            review: "That night, I received high praise all-around for dinner. Served with garlic bread and a simple green salad with cucumbers, croutons, and ranch dressing, my husband and kids went back to the skillet for second and third helpings. These meatballs have made it into my coveted monthly meal rotation and I honestly can’t wait to make — and eat — them again. ",
            summary: "GOOD",
            badge1: "Meatballs",
            badge2: "Bread",
        },
        {
            name: "Lauren Kodiak",
            review: "Pulp explores fruit’s place in both sweet and savory cooking, with recipes like Roast Chicken over Blueberries, Cornbread + Lemon and Rum-Plum Clafoutis. But the one that immediately caught my eye was the Strawberry Sundae recipe. With creamy vanilla ice cream, crunchy meringues, sweet strawberry sauce, and flaky salt, this dessert seemed both impressive and approachable.",
            summary: "BEST",
            badge1: "Strawberry ",
            badge2: "Dessert",
        },
        {
            name: "Laura Manzano",
            review: "I’m not known to be discriminatory when it comes to dessert, but I am preferential to chocolate. Fudgy, dense, and intense, a flourless chocolate cake is probably the pinnacle of all chocolate confections, in my opinion. But Sax’s recipe upended all my flourless chocolate cake views with a cake that truly lives up to its name: a cloud.",
            summary: "NICE",
            badge1: "Chocolate",
            badge2: "Fudgy",
        },
    ];
    useEffect(() => {
        setLoading(true);
        fetch("https://chef-recipe-hunter-server-ananta6d595.vercel.app/chefs")
            .then((res) => res.json())
            .then((data) => {
                setChefs(data);
                setLoading(false);
            })
            .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        fetch(`https://chef-recipe-hunter-server-ananta6d595.vercel.app/trend`)
            .then((res) => res.json())
            .then((data) => setTrend(data));
    }, []);

    console.log(trend.trend_id);
    return (
        <div className="md:min-h-[600px] container mb-40">
            {loader ? (
                <Spinner></Spinner>
            ) : (
                <div>
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
                                        <div className="absolute h-[200px] md:h-[300px] w-full md:w-[650px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-amber-50 bg-opacity-70 md:blur md:backdrop-blur"></div>
                                        <div className="absolute top-1/2 left-5 md:left-1/2  md:-translate-x-1/2 -translate-y-1/2 ">
                                            <h1 className="md:w-[98%]  font-bold text-xl md:text-5xl text-left md:text-center text-emerald-900">
                                                Want to cook like a Pro?
                                                <br></br>{" "}
                                                <span className="text-pink-700">
                                                    Chef's Rep
                                                </span>{" "}
                                                <br></br> has your your back
                                                with famous American chefs.
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
                            Chef's rep has some awesome Chefs around America.
                            Checkout their recipes and cook like pros.
                        </p>
                        <div className="grid md:grid-cols-2 gap-7 md:mx-10 my-12 ">
                            {chefs?.map((chef) => (
                                <ChefCard key={chef.id} chef={chef}></ChefCard>
                            ))}
                        </div>
                    </div>

                    {/* section 3  */}
                    <div className="lg:text-center mb-32">
                        <h1 className="font-medium h-16 text-2xl lg:text-5xl mb-6 bg-amber-100">
                            Trending recipes
                        </h1>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center">
                            {trend?.trend_id?.map((single_recipe_id) => {
                                return (
                                    <TrendingCard
                                        key={single_recipe_id}
                                        single_recipe_id={
                                            single_recipe_id
                                        }></TrendingCard>
                                );
                            })}
                        </div>
                    </div>
                    <div className="lg:text-center">
                        <h1 className="font-medium text-2xl lg:text-5xl mb-6">
                            Reviews
                        </h1>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center">
                            {reviews?.map((reviewInfo) => {
                                return (
                                    <ReviewCard
                                        key={reviewInfo}
                                        reviewInfo={reviewInfo}></ReviewCard>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
            {/* Banner */}
        </div>
    );
};

export default Home;
