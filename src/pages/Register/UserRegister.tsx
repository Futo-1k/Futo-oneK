import React, { useState } from "react";
import axios from "axios";

const UserRegister = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    institution: "",
  });
  const [passwordChecks, setPasswordChecks] = useState({
    hasLowercase: false,
    hasUppercase: false,
    hasNumber: false,
    hasSymbol: false,
    hasMinLength: false,
  });
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "password") {
      validatePassword(value);
    }
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const Universities = [
    "Federal University of Technology Owerri (FUTO)",
    "University of Nigeria, Nsukka (UNN)",
    "University of Lagos (UNILAG)",
    "University of Ibadan (UI)",
    "Ahmadu Bello University (ABU)",
    "University of Benin (UNIBEN)",
    "University of Port Harcourt (UNIPORT)",
    "Obafemi Awolowo University (OAU)",
    "Federal University of Technology Akure (FUTA)",
    "University of Ilorin (UNILORIN)",
    "Nnamdi Azikiwe University (UNIZIK)",
    "Lagos State University (LASU)",
    "Covenant University",
    "Babcock University",
    "American University of Nigeria",
    "Pan-Atlantic University",
    "Landmark University",
    "Afe Babalola University",
    "Federal University Oye-Ekiti (FUOYE)",
    "Michael Okpara University of Agriculture",
  ].sort();

  const validatePassword = (password: string) => {
    // Update each validation rule dynamically
    setPasswordChecks({
      hasLowercase: /[a-z]/.test(password),
      hasUppercase: /[A-Z]/.test(password),
      hasNumber: /\d/.test(password),
      hasSymbol: /[@!%?&]/.test(password),
      hasMinLength: password.length >= 8,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const allChecksValid = Object.values(passwordChecks).every((check) => check);
    if (!allChecksValid) {
      setResponseMessage("Please ensure your password meets all requirements.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/api/auth/register", {
        firstName: formData.firstName,    // Ensure firstName is sent
        lastName: formData.lastName,      // Ensure lastName is sent
        email: formData.email,
        password: formData.password,
        phoneNumber: formData.phoneNumber,
        institution: formData.institution,
      });

      if (response.status === 201) {
        setResponseMessage("User registered successfully! You can now log in.");
      }
    } catch (error: any) {
      setResponseMessage(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full min-h-screen bg-gray-50">
      <div className="max-w-[1400px] mx-auto p-4 md:p-8 lg:p-12">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
            <div className="bg-slate-200 rounded-lg shadow-md p-6 text-center mb-8">
              <h2 className="font-extrabold text-2xl md:text-3xl xl:text-4xl">
                Create Your Account
              </h2>
              <p className="mt-3 text-sm md:text-base xl:text-lg text-gray-600">
                Join our community and start making a difference
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Firstname"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Lastname"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    required
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Email Address @example.com"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    required
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label htmlFor="institution" className="block text-sm font-medium text-gray-700 mb-2">
                    Institution
                  </label>
                  <select
                    id="institution"
                    name="institution"
                    value={formData.institution}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white"
                    required
                  >
                    <option value="">Select your institution</option>
                    {Universities.map((university, index) => (
                      <option key={index} value={university}>
                        {university}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      required
                    />
                    <div className="mt-3 space-y-1">
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          readOnly
                          checked={passwordChecks.hasLowercase}
                          className="form-checkbox h-4 w-4 text-green-500"
                        />
                        <span className="text-sm text-gray-600">
                          Contains a lowercase letter
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          readOnly
                          checked={passwordChecks.hasUppercase}
                          className="form-checkbox h-4 w-4 text-green-500"
                        />
                        <span className="text-sm text-gray-600">
                          Contains an uppercase letter
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          readOnly
                          checked={passwordChecks.hasNumber}
                          className="form-checkbox h-4 w-4 text-green-500"
                        />
                        <span className="text-sm text-gray-600">
                          Contains a number
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          readOnly
                          checked={passwordChecks.hasSymbol}
                          className="form-checkbox h-4 w-4 text-green-500"
                        />
                        <span className="text-sm text-gray-600">
                          Contains a symbol (@, !, %, ?, &)
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          readOnly
                          checked={passwordChecks.hasMinLength}
                          className="form-checkbox h-4 w-4 text-green-500"
                        />
                        <span className="text-sm text-gray-600">
                          At least 8 characters long
                        </span>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              <button
                type="submit"
                className={`w-full bg-[#4ade80] hover:bg-[#2ecc71] text-white font-semibold py-3 rounded-lg shadow hover:shadow-lg transition-all duration-300 mt-8 ${loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                disabled={loading}
              >
                {loading ? "Creating Account..." : "Create Account"}
              </button>
            </form>

            {responseMessage && (
              <div
                className={`mt-4 px-4 py-3 rounded-lg ${responseMessage.includes("successfully")
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                  }`}
              >
                {responseMessage}
              </div>
            )}

            <p className="text-gray-600 text-sm">
              By clicking the Sign up button below, you agree to the
              <a href="#" className="text-[#4ade80] hover:underline"> Terms of service</a> and
              acknowledge the{" "}
              <a href="#" className="text-[#4ade80] hover:underline"> Privacy notice</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserRegister;