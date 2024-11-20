import DonateButton from "../../Components/DonateButton";
import DonationModal from "../../Components/DonationModal";
import React, { useState } from "react";
import { FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Camera } from "lucide-react";


const UserDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCampaignId, setSelectedCampaignId] = useState<number | null>(null); // Track the selected campaign ID

  const [userStats] = useState({
    donationsMade: 25,
    rankingPercent: 92,
    totalAmountDonated: 12000, // in Naira
  });

  const campaigns = [
    {
      id: 1,
      name: 'Campaign A',
      description: 'Help build a school in rural areas.',
      donationGoal: 500000,
      raisedAmount: 12500,
      startDate: '2024-11-01',
    },
    {
      id: 2,
      name: 'Campaign B',
      description: 'Support medical research for cancer.',
      donationGoal: 1000000,
      raisedAmount: 700000,
      startDate: '2024-10-15',
    },
  ];

  const notifications = [
    'New campaign launched!',
    'You have a new donation match!',
    'Campaign A has reached 50% of its goal!',
  ];
  const [imagePreview, setImagePreview] = useState<string | null>(null);
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
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
         {/* Profile Picture Upload */}
         <div className="flex flex-col items-center mb-8">
                                <div className="relative w-32 h-32 mb-4">
                                    <div className={`w-full h-full rounded-full overflow-hidden border-4 border-gray-200 ₦{!imagePreview ? 'bg-gray-100' : ''}`}>
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
                                        className="absolute bottom-0 right-0 bg-[#4ade80] hover:bg-[#2ecc71] text-white p-2 rounded-full cursor-pointer shadow-lg transition-all duration-300"
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




      {/* Welcome Card with User Stats */}
      <div
        className="bg-cover bg-center bg-no-repeat p-8 rounded-lg shadow-lg mb-10"
        style={{ backgroundImage: 'url("/background.png")' }}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-white">Welcome, [User Name]</h2>
          <div className="relative">

            {/* Professional Notification Bell Icon */}
            <FaBell className="text-2xl text-white cursor-pointer" />
            {notifications.length > 0 && (
              <span className="absolute top-0 right-0 cursor-pointer bg-red-500 text-white rounded-full text-xs w-5 h-5 flex justify-center items-center">
                {notifications.length}
              </span>
            )}
          </div>
        </div>
        <p className="text-white mb-4">
          You have donated {userStats.donationsMade} times, contributing a total of ₦{userStats.totalAmountDonated}.
        </p>
        <p className="text-white">
          You are in the top {userStats.rankingPercent}% of donors!🥳
        </p>
      </div>

      {/* Available Campaigns */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Available Campaigns</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {campaigns.map((campaign) => (
            <div key={campaign.id} className="bg-white rounded-lg shadow-lg p-6 h-auto">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{campaign.name}</h3>
              <p className="text-gray-600 mb-4">{campaign.description}</p>
              <p className="text-gray-600 mb-2">Goal: ₦{campaign.donationGoal}</p>
              <p className="text-gray-600 mb-4">Raised: ₦{campaign.raisedAmount}</p>
              <button
                onClick={() => {
                  setSelectedCampaignId(campaign.id); // Set the selected campaign ID
                  setIsModalOpen(true); // Open the modal
                }}
                className="mt-4 px-6 py-2 bg-[#4ade80] hover:bg-[#2ecc71] text-white rounded-md"
              >
                Donate Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Donation History Table */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Your Donation History</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
            <thead>
              <tr className="border-b">
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">Campaign Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">Donation Goal</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">Amount Donated</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">Donation Date</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((campaign) => (
                <tr key={campaign.id} className="border-b">
                  <td className="px-6 py-4 text-sm text-gray-600">{campaign.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">₦{campaign.donationGoal}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">₦{Math.round(Math.random() * campaign.raisedAmount)}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{campaign.startDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Donation Modal */}
      {isModalOpen && selectedCampaignId !== null && (
        <DonationModal setIsModalOpen={setIsModalOpen} campaignId={selectedCampaignId} />
      )}
    </div>
  );
};

export default UserDashboard;
