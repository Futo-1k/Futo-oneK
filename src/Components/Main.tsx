import React from "react";
import { AcademicCapIcon, HeartIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function Main() {
    return (
        <div>
            <main>
                <section className="container mx-auto px-4 py-16 md:py-24">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                                Giving help to those who need it
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Join us in making a difference across our campus. Whether it’s supporting student initiatives, funding essential projects, or fostering academic success, Futo 1k brings us all together to support the FUTO community.
                            </p>
                            <div className="flex space-x-4">
                                <button className="px-6 py-3 bg-[#4ade80] hover:bg-[#FF5555] text-white rounded-md transition-colors">
                                    Donate Now
                                </button>
                                <Link to="/AboutUs">
                                    <button className="px-6 py-3 border border-[#4ade80] text-[#4ade80] rounded-md hover:bg-[#4ade80] hover:text-white transition-colors">
                                        Know About Us
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <img
                                src="/smile.png?height=400&width=600"
                                alt="Charity work"
                                className="rounded-lg shadow-lg w-full h-auto"
                            />
                        </div>
                    </div>
                </section>

                <section className="bg-white py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Our Programs</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-gray-100 p-6 rounded-lg text-center">
                                <AcademicCapIcon className="h-12 w-12 text-green-400 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-2">School Fees Assistance</h3>
                                <p className="text-gray-600">Helping students raise funds to complete their school fees, ensuring they stay on track with their education.</p>
                            </div>
                            <div className="bg-gray-100 p-6 rounded-lg text-center">
                                <UserGroupIcon className="h-12 w-12 text-green-400 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-2">End Student Hunger</h3>
                                <p className="text-gray-600">Providing food support to ensure no student goes hungry, allowing them to focus fully on their studies.</p>
                            </div>
                            <div className="bg-gray-100 p-6 rounded-lg text-center">
                                <HeartIcon className="h-12 w-12 text-green-400 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Medical Bill Support</h3>
                                <p className="text-gray-600">Assisting financially unstable students with medical bills, supporting their health and well-being.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Recent Champaigns</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Feed a Student Initiative", image: "/feed.png?height=200&width=300", goal: 50000, raised: 30000 },
                                { title: "Campus Clean Water Initiative", image: "/water.png?height=200&width=300", goal: 40000, raised: 25000 },
                                { title: "Student Support Fund", image: "/student_fund.png?height=200&width=300", goal: 30000, raised: 20000 },
                            ].map((cause, index) => (
                                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                                    <img src={cause.image} alt={cause.title} className="w-full h-48 object-cover" />
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold mb-2">{cause.title}</h3>
                                        <div className="mb-4">
                                            <div className="h-2 bg-gray-200 rounded-full">
                                                <div
                                                    className="h-2 bg-[#4ade80] rounded-full"
                                                    style={{ width: `₦{(cause.raised / cause.goal) * 100}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                        <div className="flex justify-between text-sm text-gray-600">
                                            <span>Raised: ₦{cause.raised.toLocaleString()}</span>
                                            <span>Goal: ₦{cause.goal.toLocaleString()}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-gray-100 py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { title: "Charity Football Match", date: "December 15, 2024", location: "Futo main pitch" },
                                { title: "Annual Fundraising Gala", date: "December 22, 2024", location: "SOPS Theatre" },
                                { title: "Campus Clean-up Day", date: "December 5, 2024", location: "Asiabaka Square" },
                            ].map((event, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                                    <p className="text-gray-600 mb-2">{event.date}</p>
                                    <p className="text-gray-600">{event.location}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Latest News</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { title: "New Partnership Announcement", date: "December 28, 2024", image: "/partnership.png?height=200&width=300" },
                                { title: "Successful Fundraising Campaign", date: "December 15, 2024", image: "/donate.png?height=200&width=300" },
                                { title: "Volunteer Appreciation Day", date: "December 5, 2024", image: "/appreciate.png?height=200&width=300" },
                            ].map((news, index) => (
                                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                                    <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
                                        <p className="text-gray-600 mb-4">{news.date}</p>
                                        <a href="#" className="text-[#4ade80] hover:underline">Read More</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-[#4ade80] text-white py-16">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <div className="mb-8 md:mb-0">
                                <h3 className="text-3xl font-bold mb-2">Subscribe to newsletter</h3>
                                <p>Subscribe to receive updates on our latest campaigns, events, and impact stories from the FUTO community.</p>
                            </div>
                            <div className="flex w-full md:w-auto">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="px-4 py-2 rounded-l-md w-full md:w-64 text-gray-800"
                                />
                                <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-r-md transition-colors">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Main
