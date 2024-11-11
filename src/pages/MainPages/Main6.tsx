import React, { useState } from "react";

const Main6 = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setIsSubscribed(true);
      setEmail("");
      // Here you would typically make an API call to your backend
      // to handle the actual subscription process
    }
  };

  return (
    <div>
      <section className="bg-[#4ade80] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-[50%] mb-8 md:mb-0">
              <h3 className="text-3xl font-bold mb-2">Subscribe to newsletter</h3>
              <p>
                Subscribe to receive updates on our latest campaigns, events, and
                impact stories from the FUTO community.
              </p>
            </div>
            {!isSubscribed ? (
              <form
                onSubmit={handleSubscribe}
                className="flex w-[50%] md:w-auto"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-2 rounded-l-md w-full md:w-64 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-r-md transition-colors focus:outline-none focus:ring-2 focus:ring-gray-800"
                >
                  Subscribe
                </button>
              </form>
            ) : (
              <div className="bg-white text-gray-800 px-6 py-3 rounded-md shadow-sm">
                <p className="font-medium">Thanks for subscribing! 🎉</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main6;