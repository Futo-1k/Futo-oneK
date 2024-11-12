import PopularDona from "./PopularDona.tsx";
import React from "react";
import { BookOpen, Briefcase, LayoutGrid, School } from "lucide-react";
import { Link } from "react-router-dom";

const User = () => {
    return (
        <section className="w-full min-h-screen bg-gray-50">
            <div className="max-w-[1400px] mx-auto p-4 md:p-8 lg:p-12">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12">
                    {/* Funding Section */}
                    <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8 h-full">
                        <div className="bg-slate-200 rounded-lg shadow-md p-6 text-center mb-8">
                            <h2 className="font-extrabold text-2xl md:text-3xl xl:text-4xl">
                                Start Your <br /> Own Funding
                            </h2>
                            <p className="mt-3 text-sm md:text-base xl:text-lg text-gray-600">
                                Create your own Donor Post
                            </p>
                            <button className="px-6 py-3 mt-6 bg-green-500 hover:bg-green-600 text-white rounded-md transition-all duration-300 shadow hover:shadow-lg hover:-translate-y-1">
                                Create Your Post
                            </button>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <Link
                                to=""
                                className="flex items-center justify-center gap-2 p-4 bg-white hover:bg-gray-50 rounded-lg shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                            >
                                <LayoutGrid className="w-6 h-6 text-gray-600 group-hover:scale-110 transition-transform" />
                                <span className="text-gray-800 font-medium">All</span>
                            </Link>

                            <Link
                                to=""
                                className="flex items-center justify-center gap-2 p-4 bg-[#3fc0ba] hover:bg-[#35a5a0] rounded-lg shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                            >
                                <School className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                                <span className="text-white font-medium">School</span>
                            </Link>

                            <Link
                                to=""
                                className="flex items-center justify-center gap-2 p-4 bg-red-500 hover:bg-red-600 rounded-lg shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                            >
                                <Briefcase className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                                <span className="text-white font-medium">Medical</span>
                            </Link>

                            <Link
                                to=""
                                className="flex items-center justify-center gap-2 p-4 bg-purple-500 hover:bg-purple-600 rounded-lg shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                            >
                                <BookOpen className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                                <span className="text-white font-medium">Dept Dues</span>
                            </Link>
                        </div>
                    </div>

                    {/* Popular Campaigns Section */}
                    <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8 h-full">
                        <div className="bg-slate-200 rounded-lg shadow-md p-6 text-center mb-8">
                            <h2 className="font-extrabold text-2xl md:text-3xl xl:text-4xl">
                                Popular <br /> Campaigns
                            </h2>
                            <p className="mt-3 text-sm md:text-base xl:text-lg text-gray-600">
                                Explore trending fundraisers
                            </p>
                            <button className="px-6 py-3 mt-6 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-all duration-300 shadow hover:shadow-lg hover:-translate-y-1">
                                View Campaigns
                            </button>
                        </div>
                        <PopularDona />
                    </div>
                </div>
            </div>
        </section>

    );
};

export default User;
