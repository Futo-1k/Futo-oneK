import React from "react";

const Events1 = () => {
  const events = [
    {
      id: 1,
      title: "Campus Talent Show: FUTO Stars Unite",
      description:
        "Get ready for an unforgettable night of entertainment as FUTO's most talented students take the stage! The Campus Talent Show is an annual event that showcases the incredible skills of FUTO students, from singing and dancing to acting and spoken word. Proceeds from entry tickets and donations will directly support the FUTO 1K cause.",
      highlights: [
        "Witness the incredible talents of FUTO students and staff.",
        "Support a great cause and contribute to the FUTO 1K initiative.",
        "Enjoy an evening of entertainment and fun with friends and peers.",
        "Be part of a vibrant and inclusive community that celebrates creativity and diversity.",
      ],
    },
    {
      id: 2,
      title: "1K Day Challenge: A Day to Make a Difference",
      description:
        "This is a dedicated day where everyone – students, lecturers, alumni, and professionals – is encouraged to contribute ₦1,000 to the FUTO 1K initiative. Live donation booths, online campaigns, and competitions between departments make it engaging.",
      highlights: [
        "Be part of a historic day of collective giving.",
        "Enjoy interactive activities, games, and entertainment.",
        "Compete with friends and peers to raise the most funds.",
        "Support a culture of giving and social responsibility.",
      ],
    },
    {
      id: 3,
      title: "Alumni Reunion and Fundraiser: Reuniting for a Purpose",
      description:
        "Reconnect with former classmates and professors while giving back to support current students through the FUTO 1K initiative. Enjoy inspiring speeches, entertainment, and meaningful conversations.",
      highlights: [
        "Reconnect with former classmates and professors.",
        "Support current students and give back to FUTO.",
        "Expand your professional and social network.",
        "Celebrate shared memories while making a difference.",
      ],
    },
    {
      id: 4,
      title: "FUTO 1K Game Fest: Play for a Purpose",
      description:
        "Step into the world of fun and friendly competition at the FUTO 1K Game Fest. Featuring video games, trivia challenges, and traditional games, this event raises funds for the initiative while providing entertainment.",
      highlights: [
        "Showcase your gaming skills and win exciting prizes.",
        "Support a great cause and contribute to the FUTO 1K initiative.",
        "Enjoy a fun-filled day of games, entertainment, and friendly competition.",
        "Be part of a community that values fun, friendship, and giving back.",
      ],
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-green-500 text-white py-8 text-center">
        <h1 className="text-4xl font-bold">FUTO Events</h1>
        <p className="text-lg mt-2">
          Join us in making a difference and celebrating the FUTO community.
        </p>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">{event.title}</h2>
                <p className="text-gray-700 mb-4">{event.description}</p>
                <ul className="list-disc pl-6 mb-4">
                  {event.highlights.map((highlight, index) => (
                    <li key={index} className="text-gray-600">
                      {highlight}
                    </li>
                  ))}
                </ul>
                <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} FUTO Events. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Events1;