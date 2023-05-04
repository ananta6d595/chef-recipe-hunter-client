import React, { useEffect, useState } from "react";

const RecipeCard = ({ single_recipe_id }) => {
    const [recipe, setRecipe] = useState();

    const { cooking_method, ingredients, rating, recipe_name } = recipe || {}; // it showa undefined with out "|| {}"
    useEffect(() => {
        fetch(
            `https://chef-recipe-hunter-server-ananta6d595.vercel.app/recipe/${single_recipe_id}`
        )
            .then((res) => res.json())
            .then((data) => setRecipe(data));
    }, []);

    console.log(recipe);

    return (
        <>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                    {/* <img
                        src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        alt=""
                    /> */}
                </figure>
                <div className="card-body ">
                    <h2 className="card-title text-2xl">{recipe_name}</h2>
                    <p className="text-xl bg-slate-200">Ingredients:</p>
                    <p className="grid grid-cols-2 mb-4">
                        {ingredients?.map((ingredient) => {
                            return <p>{ingredient}</p>;
                        })}
                    </p>
                    <p className="text-xl bg-slate-200">Cooking method:</p>

                    <p>{cooking_method}</p>
                    <p>{rating}</p>
                    <button className="btn bg-rose-300 hover:bg-rose-500 border-0">
                        Favorite
                    </button>
                </div>
            </div>
        </>
    );
};

export default RecipeCard;
