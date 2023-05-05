import React from "react";
import { Link } from "react-router-dom";

const ChefCard = ({ chef }) => {
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
        <div className=" border border-b-4 border-b-emerald-500 rounded-md shadow-lg shadow-emerald-300 md:text-left p-2">
            {/* <img src={`${chef.chef_picture}`} alt="" /> */}
            <img src={`${chef_picture}`} className="rounded-xl h-72" />
            <h1>{chef_name}</h1>
            <p>Experience: {experience}</p>
            <p>Recipes: {number_of_recipes}</p>
            <p>Likes(chage to stars): {likes}</p>

            <Link to={`/chef/${id}`}>
                <button className="btn bg-white border-2 border-emerald-600 hover:border-0 hover:bg-emerald-500 text-emerald-600 hover:text-white">
                    View Recipes
                </button>
            </Link>
        </div>
    );
};

export default ChefCard;
