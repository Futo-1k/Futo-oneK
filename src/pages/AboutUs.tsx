import React from "react";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="bg-[#FCFCFC] min-h-screen">
      <header className="bg-white sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4ade80]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            <h1 className="text-2xl font-bold">Futo 1k</h1>
          </div>
          <nav className=" md:flex space-x-8">
            <Link to="/" className="text-[#4ade80] font-semibold">Home</Link>
            <Link to="/AboutUs" className="text-gray-600 hover:text-[#4ade80]">About</Link>
            <Link to="/Campaigns" className="text-gray-600 hover:text-[#4ade80]">Campaigns</Link>
            <Link to="/Gallery" className="text-gray-600 hover:text-[#4ade80]">Gallery</Link>
            <Link to="/Contact" className="text-gray-600 hover:text-[#4ade80]">Contact</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="hidden md:inline-flex px-4 py-2 border border-[#4ade80] text-[#4ade80] rounded-md hover:bg-[#4ade80] hover:text-white transition-colors">
              Donate Now
            </button>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
        </div>
      </header>

      <main>
        <section className="bg-[#4ade80] text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Futo 1k</h1>
            <p className="text-xl max-w-2xl mx-auto">Dedicated to making a positive impact in our community and beyond.</p>
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
                  src="/placeholder.svg?height=400&width=600"
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
                { name: "Jane Doe", role: "Executive Director", image: "/placeholder.svg?height=300&width=300" },
                { name: "John Smith", role: "Operations Manager", image: "/placeholder.svg?height=300&width=300" },
                { name: "Emily Brown", role: "Fundraising Coordinator", image: "/placeholder.svg?height=300&width=300" },
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
            <button className="px-6 py-3 bg-[#4ade80] hover:bg-[#000000] text-white rounded-md transition-colors">
              Get Involved
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">About Us</h4>
              <p className="text-gray-400">Dedicated to making a positive impact in our community and beyond through various charitable initiatives.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
              <Link to="/" className="text-[#4ade80] font-semibold">Home</Link>
            <Link to="/AboutUs" className="text-gray-600 hover:text-[#4ade80]">About</Link>
            <Link to="/Campaigns" className="text-gray-600 hover:text-[#4ade80]">Campaigns</Link>
            <Link to="/Gallery" className="text-gray-600 hover:text-[#4ade80]">Gallery</Link>
            <Link to="/Contact" className="text-gray-600 hover:text-[#4ade80]">Contact</Link>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Federal University of Technology Owerri</li>
                <li>Phone: +234 802 265 1217</li>
                <li>Email: info@futo1k.org</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Futo 1k. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}