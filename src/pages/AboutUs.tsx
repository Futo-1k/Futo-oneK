import Footer from "../Components/Footer.tsx";
import Header from "../Components/Header.tsx";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function AboutUs() {
  const navigate = useNavigate();
  const ToVolunteer = () => {
    navigate("/Volunteer");
  };


  return (
    <div className="bg-[#FCFCFC] min-h-screen">
      <Header/>

      <main>
        <section className="bg-[#4ade80] text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Futo 1k</h1>
            <p className="text-xl max-w-2xl mx-auto">Dedicated to making a positive impact in FUTO and beyond.</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-600 mb-4">
                At Futo 1k, our mission is to empower students by providing essential financial support, enabling them to focus on their education and well-being. We believe that every student deserves access to resources that can help them succeed, regardless of their financial background.
                </p>
                <p className="text-gray-600">
                  Through the power of collective action and compassion, we aim to build a world where every individual has the chance to thrive and reach their full potential.
                </p>
              </div>
              <div className="md:w-1/2">
                <img
                  src="/student_fund.png?height=400&width=600"
                  alt="Charity volunteers in action"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Targets</h2>
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="text-2xl font-bold text-[#4ade80]">2015</div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold mb-2">Foundation</h3>
                  <p className="text-gray-600">Charity was founded by a group of passionate individuals committed to making a difference in their local community.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="text-2xl font-bold text-[#4ade80]">2017</div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold mb-2">Expansion</h3>
                  <p className="text-gray-600">We expanded our reach to neighboring countries, launching our first international programs in education and healthcare.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="text-2xl font-bold text-[#4ade80]">2020</div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold mb-2">Major Milestones</h3>
                  <p className="text-gray-600">Charity reached the milestone of helping over 1 million people and launched our sustainable development initiatives.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="text-2xl font-bold text-[#4ade80]">2024</div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold mb-2">Present Day</h3>
                  <p className="text-gray-600">Today, we continue to grow and adapt, addressing the most pressing challenges facing communities worldwide.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Eze Ernest", role: "Executive Director", image: "/placeholder-image1.png?height=300&width=300" },
                { name: "David Chike", role: "Operations Manager", image: "/placeholder-image3.png?height=300&width=300" },
                { name: "Emily Brown", role: "Fundraising Coordinator", image: "/placeholder-image4.png?height=300&width=300" },
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <img src={member.image} alt={member.name} className="w-48 h-48 rounded-full mx-auto mb-4 object-cover" />
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "1M+", description: "Lives Impacted" },
                { number: "50+", description: "Countries Reached" },
                { number: "500+", description: "Successful Projects" },
                { number: "10K+", description: "Volunteers Worldwide" },
              ].map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-[#4ade80] mb-2">{achievement.number}</div>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Join Us in Making a Difference</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Whether you want to volunteer, donate, or spread the word about our cause, there are many ways to get involved and support our mission.
            </p>
            <button
            onClick={ToVolunteer}
            className="px-6 py-3 bg-[#4ade80] hover:bg-[#000000] text-white rounded-md transition-colors">
              Get Involved
            </button>
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  )
}