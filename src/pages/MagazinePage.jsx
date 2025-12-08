import React from "react";
import { Eye } from "lucide-react";
import { magazines } from "../dummydata/magzine";

const MagazinePage = () => {
  const handleView = (mag) => {
    if (!mag.isSubscribed) {
      alert("🔐 Please subscribe to view this magazine.");
      return;
    }

    // Open banner or PDF — here banner is opened
    window.open(mag.banner, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-8">
        हमारी पत्रिकाएँ (Magazines)
      </h1>

      {/* Magazine Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {magazines.map((mag) => (
          <div
            key={mag._id}
            className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition-all"
          >
            {/* Title Page */}
            <img
              src={mag.titlePage}
              alt={mag.title}
              className="w-full h-64 object-cover"
            />

            {/* Title */}
            <div className="p-3 text-center font-semibold text-lg">
              {mag.title}
            </div>

            {/* View Now Button */}
            <div className="p-4">
              <button
                onClick={() => handleView(mag)}
                className={`w-full flex items-center justify-center gap-2 py-2 rounded-lg font-medium 
                ${mag.isSubscribed ? "bg-blue-600 text-white" : "bg-gray-400 text-white cursor-not-allowed"}`}
              >
                <Eye size={18} /> View Now
              </button>

              {/* Subscription Status */}
              <p className="text-center text-sm mt-2 text-gray-600">
                {mag.isSubscribed ? "✔ Subscribed" : "🔒 Not Subscribed"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MagazinePage;
