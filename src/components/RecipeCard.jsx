import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const RecipeCard = ({ single_recipe_id }) => {
    const [recipe, setRecipe] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const { cooking_method, ingredients, rating, recipe_name } = recipe || {}; // it showa undefined with out "|| {}"

    const notify = () => {
        toast(`${recipe_name} is now favorite`);
        setDisabled(false);
    };
    useEffect(() => {
        fetch(
            `https://chef-recipe-hunter-server-ananta6d595.vercel.app/recipe/${single_recipe_id}`
        )
            .then((res) => res.json())
            .then((data) => setRecipe(data));
    }, []);



    return (
        <>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure className="h-96">
                    <img
                        src={recipe?.image}
                        alt=""
                        className="h-full w-full rounded-xl "
                    />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title text-2xl">{recipe_name}</h2>
                    <p className="text-xl bg-slate-200 ps-4 rounded-xl ">
                        Ingredients:
                    </p>
                    <div className="grid grid-cols-2 mb-4 ps-4">
                        {ingredients?.map((ingredient, index) => {
                            return <p key={index}>{ingredient}</p>;
                        })}
                    </div>
                    <p className="text-xl rounded-xl bg-slate-200 ps-4">
                        Cooking method:
                    </p>

                    <p className="ps-4 ">{cooking_method}</p>
                    <p className="ps-4 bg-yellow-100 rounded-xl mb-4">
                        Rating: {rating}
                    </p>
                    <button
                        onClick={notify}
                        className={`btn bg-rose-600 hover:bg-rose-400 hover:text-slate-700  border-0 ${
                            !disabled && "btn-disabled"
                        }`}>
                        Favorite
                    </button>
                    <Toaster />
                </div>
            </div>
        </>
    );
};

export default RecipeCard;
