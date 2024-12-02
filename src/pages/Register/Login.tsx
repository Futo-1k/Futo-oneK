import React, { useState } from "react";
import UserHeader from "../../Components/UserHeader";
import axios from "axios";
import { Lock, LogIn, Mail, User } from "lucide-react";
import { BsBuildings, BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Mark the handleSubmit function as async
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Email:", email); // Debugging email
    console.log("Password:", password); // Debugging password

    setLoading(true);
    setErrorMessage(null); // Clear previous error messages

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      if (response.status === 200) {
        console.log("Login successful:", response.data);
        localStorage.setItem("token", response.data.token);
        navigate("/User");
      }
    } catch (error: any) {
      console.error("Error during login:", error.response?.data || error.message);
      setErrorMessage(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    console.log("Logging in with Google");
  };

  const handleFacebookLogin = () => {
    console.log("Logging in with Facebook");
  };

  const handlePhoneLogin = () => {
    console.log("Logging in with phone number");
  };

  const handleSchoolEmailLogin = () => {
    console.log("Logging in with school email");
  };

  return (
    <>
      <main className="flex items-center justify-center min-h-screen py-10 bg-gray-100">
        <div className="w-full p-8 bg-white rounded-lg shadow-lg lg:max-w-6xl md:max-w-2xl sm:max-w-lg sm:p-10">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left Section - Main Login Form */}
            <div className="space-y-6">
              <div className="flex items-center justify-center mb-6">
                <User className="w-8 h-8 mr-2 text-[#4ade80] stroke-2" />
                <h3 className="text-2xl font-bold">Sign in</h3>
              </div>
              <p className="mb-6 text-gray-600">
                Don't have an account?{" "}
                <Link to="/Login/userRegister" className="text-[#4ade80] hover:underline">
                  Sign up
                </Link>
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <Mail className="absolute w-5 h-5 text-gray-400 -translate-y-1/2 stroke-2 left-3 top-1/2" />
                  <input
                    type="text"
                    className="w-full h-[40px] pl-10 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Email Address"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <Lock className="absolute w-5 h-5 text-gray-400 -translate-y-1/2 stroke-2 left-3 top-1/2" />
                  <input
                    type="password"
                    className="w-full h-[40px] pl-10 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="reminder">
                    <a href="#" className="text-[#4ade80] hover:underline">
                      Forgot your password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="flex items-center px-6 py-3 font-semibold text-white transition-colors duration-300 bg-[#4ade80] rounded-lg hover:bg-[#2ecc71]"
                    disabled={loading}
                  >
                    {loading ? "Signing in..." : "Sign in"} <LogIn className="w-5 h-5 ml-2 stroke-2" />
                  </button>
                </div>
              </form>
              {errorMessage && (
                <div className="p-4 mt-4 text-sm text-red-700 bg-red-100 rounded-lg">
                  {errorMessage}
                </div>
              )}
            </div>

            {/* Right Section - Alternative Login Options */}
            <div className="space-y-6">
              <div className="mb-6 text-center">
                <h4 className="text-xl font-semibold text-gray-700">Or continue with</h4>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <button
                  onClick={handleGoogleLogin}
                  className="flex items-center justify-center w-full px-4 py-3 font-semibold text-gray-800 transition-colors duration-300 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50"
                >
                  <FaGoogle className="w-6 h-6 mr-3 text-red-500" />
                  Sign in with Google
                </button>
                <button
                  onClick={handleFacebookLogin}
                  className="flex items-center justify-center w-full px-4 py-3 font-semibold text-gray-800 transition-colors duration-300 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50"
                >
                  <FaFacebook className="w-6 h-6 mr-3 text-blue-600" />
                  Sign in with Facebook
                </button>
                <button
                  onClick={handlePhoneLogin}
                  className="flex items-center justify-center w-full px-4 py-3 font-semibold text-gray-800 transition-colors duration-300 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50"
                >
                  <BsFillTelephoneFill className="w-6 h-6 mr-3 text-green-500" />
                  Sign in with Phone
                </button>
                <button
                  onClick={handleSchoolEmailLogin}
                  className="flex items-center justify-center w-full px-4 py-3 font-semibold text-gray-800 transition-colors duration-300 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50"
                  >
                  <BsBuildings className="w-6 h-6 mr-3 text-purple-500" />
                  Sign in with School Email
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;