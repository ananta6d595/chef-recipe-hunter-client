import React from "react";
import { useLoaderData } from "react-router-dom";
import RecipeCard from "../../components/RecipeCard";

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
    // console.log(chef);

    return (
        <div className=" container mb-40">
            {/* banner */}
            <div
                className="hero min-h-[600px]"
                style={{
                    backgroundImage: `url(${chef_picture})`,
                }}>
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="ms-6 text-neutral-content">
                    <div className="w-[50%]">
                        <h1 className="mb-5 text-6xl font-bold  text-start">
                            {chef_name}
                        </h1>
                        <p className="mb-5 text-start text-xl">
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

            {/* recipes */}

            <div className="grid md:grid-cols-2 gap-7 md:mx-10 my-12 ">
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
