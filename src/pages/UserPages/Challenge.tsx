import React from "react";

// Challenge.tsx

// Header Component
const Header: React.FC = () => {
  return (
    <header className="sticky top-0 w-full h-16 bg-blue-500 flex items-center justify-between px-6 shadow-md">
      <h3 className="text-white font-bold text-lg">FUTO1K</h3>
      <nav className="flex space-x-6">
        <li className="list-none text-white font-bold text-sm cursor-pointer hover:bg-white hover:text-blue-500 px-3 py-2 rounded-lg">
          Home
        </li>
        <li className="list-none text-white font-bold text-sm cursor-pointer hover:bg-white hover:text-blue-500 px-3 py-2 rounded-lg">
          Doc
        </li>
      </nav>
    </header>
  );
};

// Footer Component
const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-800 text-center text-white py-4">
      <p className="text-sm">© 2024 FUTO 1K Challenge. All rights reserved.</p>
    </footer>
  );
};

// Main Content
const Challenge: React.FC = () => {
  return (
    <div className="font-sans">
      <Header />
      <main className="px-6 py-10">
        <h1 className="text-center text-blue-500 font-extrabold text-3xl mb-10">
          DOCUMENTATION
        </h1>
        <div className="w-full lg:w-4/5 mx-auto bg-white shadow-lg rounded-lg p-6">
          <section className="mb-10">
            <h2 className="text-xl font-extrabold text-gray-800 mb-6">
              The FUTO 1K Challenge: Be a Part of Transforming Our Community! 🚀
            </h2>
            <p className="text-gray-600 leading-7 mb-4">
              Imagine this: with just ₦1,000, you can contribute to a movement
              that changes lives, improves our campus, and strengthens the FUTO
              community. Sounds exciting, right? That’s the heart of the FUTO
              1K Challenge—a simple but powerful way for everyone, from
              students to alumni, to come together and make a big difference.
            </p>
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              What is the FUTO 1K Challenge?
            </h3>
            <p className="text-gray-600 leading-7 mb-4">
              The FUTO 1K Challenge is an initiative to rally the FUTO community
              around a shared goal: raising funds to support essential projects,
              events, and resources that benefit all of us. By contributing
              just ₦1,000, you’re not just giving money—you’re investing in the
              future of FUTO and helping to create opportunities that leave a
              lasting impact.
            </p>
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Why Should You Join?
            </h3>
            <ul className="list-disc list-inside text-gray-600 leading-7 mb-4">
              <li>
                <strong>It’s Affordable for Everyone:</strong> ₦1,000 might not
                seem like much, but when hundreds or thousands of people
                contribute, it adds up to something extraordinary!
              </li>
              <li>
                <strong>You Make a Difference:</strong> The funds raised will
                directly support projects that improve the FUTO experience for
                everyone—things like upgrading facilities, organizing empowering
                events, or helping fellow students in need.
              </li>
              <li>
                <strong>Unity for a Purpose:</strong> This challenge is about
                more than just money—it’s about showing what the FUTO spirit can
                achieve when we come together.
              </li>
            </ul>
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              How Does It Work?
            </h3>
            <p className="text-gray-600 leading-7 mb-4">
              <strong>Sign Up:</strong> Join the FUTO 1K Challenge through our
              app. <br />
              <strong>Contribute:</strong> Donate just ₦1,000 (or more if you
              feel inspired!) through secure payment options. <br />
              <strong>Share:</strong> Encourage your friends, classmates, and
              alumni to join the challenge. The more people we reach, the
              greater the impact.
            </p>
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              What Will the Money Be Used For?
            </h3>
            <ul className="list-disc list-inside text-gray-600 leading-7 mb-4">
              <li>Supporting educational programs and workshops.</li>
              <li>Funding community building events on campus.</li>
              <li>Providing assistance to students in need.</li>
              <li>Improving campus infrastructure to make FUTO a better place for everyone.</li>
            </ul>
            <p className="text-gray-600 leading-7 mb-4">
              Together, We Can Make It Happen! The FUTO 1K Challenge is more
              than a fundraiser; it’s a movement. It’s about showing that every
              small act, when combined with others, creates something truly
              remarkable. Let’s prove the strength of the FUTO family and build
              a legacy we can all be proud of.
            </p>
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Ready to join?
            </h3>
            <p className="text-gray-600 leading-7">
              Your ₦1,000 can be the start of something incredible. Be part of
              the challenge today!
            </p>
          </section>
          <section>
            <h2 className="text-xl font-extrabold text-gray-800 mb-4">
              The FUTO 1K Task
            </h2>
            <p className="text-gray-600 leading-7">
              Create a mobile app from scratch.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Challenge;