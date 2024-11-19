import React, { useState } from "react";
import { Camera } from "lucide-react";

const UserRegister = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: "",
        institution: "",
    });

    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState<string | null>(null);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (name === "password") {
            validatePassword(value);
        }
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };


    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
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
        "Michael Okpara University of Agriculture"
    ].sort();
    const validatePassword = (password: string) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(password)) {
            setPasswordError(
                "Your password must have at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number, and 1 symbol."
            );
        } else {
            setPasswordError(null);
        }
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
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
                            {/* Profile Picture Upload */}
                            <div className="flex flex-col items-center mb-8">
                                <div className="relative w-32 h-32 mb-4">
                                    <div className={`w-full h-full rounded-full overflow-hidden border-4 border-gray-200 ${!imagePreview ? 'bg-gray-100' : ''}`}>
                                        {imagePreview ? (
                                            <img
                                                src={imagePreview}
                                                alt="Profile preview"
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center">
                                                <Camera className="w-12 h-12 text-gray-400" />
                                            </div>
                                        )}
                                    </div>
                                    <label
                                        htmlFor="profile-photo"
                                        className="absolute bottom-0 right-0 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full cursor-pointer shadow-lg transition-all duration-300"
                                    >
                                        <Camera className="w-5 h-5" />
                                    </label>
                                    <input
                                        type="file"
                                        id="profile-photo"
                                        placeholder="Photo"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="hidden"
                                    />
                                </div>
                                <p className="text-sm text-gray-500">Upload your profile picture</p>
                            </div>

                            {/* Name Fields */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="Firstname @Ernest"
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
                                        placeholder="Lastname @chike"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Contact Information */}
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
                                        placeholder="Number @+234 or 070"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Institution & Password */}
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="institution" className="block text-sm font-medium text-gray-700 mb-2">
                                        Institution
                                    </label>
                                    <select
                                        id="institution"
                                        name="institution"
                                        placeholder="Select Institution"
                                        value={formData.institution}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white"
                                        required
                                    >
                                        <option value="">Select your institution</option>
                                        {Universities.map((University, index) => (
                                            <option key={index} value={University}>
                                                {University}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                {/* Password section with validation */}
        <div className="space-y-6">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <div className="relative">
                    <input
                        type="password"
                        placeholder="Password @EzeDarling1."
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                            passwordError
                                ? "border-red-500 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                                : "border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        }`}
                        required
                    />
                    {passwordError && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mt-2">
                            {passwordError}
                        </div>
                    )}
                </div>
            </div>
        </div>

                    {/* Password requirements */}
                    <div className="bg-gray-100 rounded-lg p-4 mb-6">
                        <p className="font-semibold text-gray-700 mb-2">Your password must have at least:</p>
                        <ul className="list-disc pl-6 text-gray-600 space-y-2">
                            <li>Minimum 8 characters</li>
                            <li>1 uppercase letter</li>
                            <li>1 lowercase letter</li>
                            <li>1 number</li>
                            <li>1 symbol</li>
                        </ul>
                    </div>

                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg shadow hover:shadow-lg transition-all duration-300 mt-8"
                            >
                                Create Account
                            </button>
                        </form>
                                   {/* Terms and privacy */}
                        <p className="text-gray-600 text-sm">
                            By clicking the Sign up button below, you agree to the
                            <a href="#" className="text-blue-500 hover:underline">
                                Terms of service
                            </a>{" "}
                            and acknowledge the{" "}
                            <a href="#" className="text-blue-500 hover:underline">
                                Privacy notice
                            </a>
                        </p>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default UserRegister;