import React, { Component } from "react";

const Projects = [
    {
     title: "Feed a Student Initiative",
     image: "/feed.png?height=200&width=300",
     goal: 50000,
     raised: 30000
    },
    {
        title: "Campus Clean Water Initiative",
        image: "/water.png?height=200&width=300",
        goal: 40000,
        raised: 25000
    },
    {
        title: "Student Support Fund",
        image: "/student_fund.png?height=200&width=300",
        goal: 30000,
        raised: 20000
    },
]
export class Main3 extends Component {
  render() {
    return (
      <div>
            <section className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Recent Champaigns</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {Projects.map((cause, index) => (
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
      </div>
    )
  }
}

export default Main3
