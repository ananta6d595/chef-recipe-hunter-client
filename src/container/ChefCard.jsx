import React from 'react';

const ChefCard = ({chef}) => {
    console.log(chef);

    return (
        <div className=" border border-b-4 border-b-emerald-500 rounded-md shadow-lg shadow-emerald-300 md:text-left p-2">
            {/* <img src={`${chef.chef_picture}`} alt="" /> */}
            <img src={`${chef.chef_picture}`} className="rounded-xl h-72" />
            <h1>{chef.chef_name}</h1>
            <p>Experience: {chef.experience}</p>
            <p>Recipes: {chef.number_of_recipes}</p>
            <p>Likes(chage to stars): {chef.likes}</p>

            <button className="btn bg-white border-2 border-emerald-600 hover:border-0 hover:bg-emerald-500 text-emerald-600 hover:text-white">
                View Recipes
            </button>
        </div>
    );
};

export default ChefCard;