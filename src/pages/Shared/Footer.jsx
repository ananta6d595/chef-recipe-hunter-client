import React from "react";

const Footer = () => {
    return (
        <div>
            <div className="container bg-gradient-to-r from-teal-600 from-10% via-emerald-500 via-80% to-emerald-400 to-100%">
                <div className="relative">
                    <img
                        className="absolute -bottom-[20px] -left-[100px]"
                        src="https://recipepress.inspirythemes.com/second/wp-content/uploads/sites/2/2017/01/recipe-banner-img.png"
                    />{" "}
                    <div className="ms-36 md:flex justify-between gap-6">
                        <div className="text-slate-100 w-9/12">
                            <h2 className="font-bold text-2xl text-black">
                                Are you a Chef? We encourage you to submit your
                                recipe...
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy eirmod
                                invidunt ut labore et dolore
                            </p>{" "}
                        </div>

                        <div className="recipe-button">
                            <button className="btn">Submit Recipe</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* second part */}


                <footer className="bg-cyan-950 pt-24 pb-44 ">
                    <div className="sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:flex justify-between gap-7 px-14 pt-5 pb-5 mx-auto  text-white grid grid-rows-5 text-center md:text-start">
                        <div className="w-72">
                            <h1 className="text-3xl font-bold mb-5">
                                StarkJobs
                            </h1>
                            <p className="font-thin text-gray-400">
                                There are many variations of passages of Lorem
                                Ipsum , but the majority have suffered
                                alteration in some form.
                            </p>
                        </div>
                        <div className="leading-loose">
                            <h4 className="font-bold text-lg mb-2 pb-2">
                                Company
                            </h4>
                            <p className="font-thin text-gray-400">
                                About Us
                                <br />
                                Work
                                <br />
                                Latest News
                                <br />
                                Careers
                            </p>
                        </div>
                        <div className="leading-loose">
                            <h4 className="font-bold text-lg mb-2 pb-2">
                                Product
                            </h4>
                            <p className="font-thin text-gray-400">
                                Prototype
                                <br /> Plans & Pricing
                                <br /> Customers
                                <br /> Integrations
                            </p>
                        </div>
                        <div className="leading-loose">
                            <h4 className="font-bold text-lg mb-2 pb-2">
                                Support
                            </h4>
                            <p className="font-thin text-gray-400">
                                Help Desk
                                <br /> Sales
                                <br /> Become a Partner
                                <br /> Developers
                            </p>
                        </div>
                        <div className="leading-loose">
                            <h4 className="font-bold text-lg mb-2 pb-2">
                                Contact
                            </h4>
                            <div className="font-thin text-gray-400">
                                524 Broadway ,
                                <br /> NYC <br />
                                +1 777 - 978 - 5570
                            </div>
                        </div>
                    </div>
                    <div className="divide-y sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto bg-slate-400 h-[0.5px]  mb-9" />
                    <div className="md:flex md:justify-between sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto px-14 text-gray-500 font-thin">
                        <div>
                            @2023{" "}
                            <span className="font-semibold">StarkJobs</span>.
                            All Rights Reserved
                        </div>
                        <div>
                            Powered by{" "}
                            <span className="font-semibold">StarkJobs</span>
                        </div>
                    </div>
                </footer>
            </div>
      
    );
};

export default Footer;
