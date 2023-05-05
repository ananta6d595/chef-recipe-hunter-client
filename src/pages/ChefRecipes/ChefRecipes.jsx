import React from "react";
import { useLoaderData } from "react-router-dom";
import RecipeCard from "../../components/RecipeCard";
import LazyLoad from "react-lazy-load";

const ChefRecipes = () => {
    const chef = useLoaderData();
    const {
        chef_name,
        chef_picture,
        description,
        experience,
        id,
        likes,
        number_of_recipes,
        recipe_id,
    } = chef;

    return (
        <div className=" container mb-12 md:mb-36">
            {/* banner */}
            <LazyLoad offset={600} threshold={0.95}>
                <div className="hero md:min-h-[600px]">
                    <img src={chef_picture} className="md:h-[600px] w-full" />
                    <div className="hero-overlay bg-opacity-60 md:bg-opacity-30"></div>
                    <div className="ms-6 text-neutral-content">
                        <div className="md:w-[50%]">
                            <h1 className="mb-5 text-3xl md:text-6xl font-bold  text-start">
                                {chef_name}
                            </h1>
                            <p className="md:mb-5 text-start md:text-xl">
                                {description}{" "}
                            </p>
                            <div className="font-bold flex gap-1">
                                <p className="bg-blue-300 text-slate-600 px-3 py-1 rounded-xl">
                                    Recipes: {number_of_recipes}
                                </p>
                                <p className="bg-cyan-300 text-slate-600 px-3 py-1 rounded-xl">
                                    Experience: {experience}
                                </p>
                                <p className="bg-rose-300 text-slate-600 px-3 py-1 rounded-xl">
                                    Likes: {likes}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </LazyLoad>
            {/* recipes */}

            <h1 className="text-5xl font-bold mt-28 mb-6 underline text-emerald-700 text-center">Recipes</h1>
            <div className="grid md:grid-cols-2 gap-8 md:mx-10 my-12 ">
                {recipe_id.map((single_recipe_id) => {
                    return (
                        <RecipeCard
                            key={single_recipe_id}
                            single_recipe_id={single_recipe_id}></RecipeCard>
                    );
                })}
            </div>
        </div>
    );
};

export default ChefRecipes;
