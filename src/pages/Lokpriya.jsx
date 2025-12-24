import React, { useEffect, useState } from "react";
import { Megaphone, BookOpen, Sprout, Award, Users, FileText, Smartphone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { activityGet } from "../service/axios";

// 🔹 Icon mapper
const iconMap = { Megaphone, BookOpen, Sprout, Award, Users, FileText, Smartphone };

export default function Lokpriya() {
  const navigate = useNavigate();
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const res = await activityGet();
        setActivities(res.data.data);
      } catch (error) {
        console.error("Failed to fetch activities", error);
      }
    };
    fetchActivities();
  }, []);

  return (
    <div className="min-h-screen bg-[#fefaf5] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 pb-8 border-b-4 border-double border-gray-900">
          <h1 className="text-4xl md:text-5xl font-bold font-serif">
            सहकारी गतिविधियाँ
          </h1>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {activities.map((activity, index) => {
            const IconComponent = iconMap[activity.icon] || FileText;

            return (
              <div key={activity._id} className="bg-white border border-gray-300 shadow-sm hover:shadow-lg transition-shadow duration-300">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img src={activity.image} alt={activity.title} className="w-full h-48 object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-300" />

                  {/* Icon */}
                  <div className="absolute top-3 right-3">
                    <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-br ${activity.color} shadow-md`} >
                      <IconComponent className="w-6 h-6 text-gray-900" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className={`inline-block px-3 py-1 bg-gradient-to-r ${activity.color} mb-3`} >
                    <span className="text-gray-900 font-bold text-xs uppercase">
                      गतिविधि {index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif border-b-2 pb-2">
                    {activity.title}
                  </h3>

                  {/* HTML Description */}
                  <div className="text-sm text-gray-700 leading-relaxed text-justify font-serif" dangerouslySetInnerHTML={{ __html: activity.description }} />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="border-4 border-double border-gray-900 text-center p-10 bg-gradient-to-r from-[#FFF861] via-[#FFCA61] to-[#FFF861]">
          <h2 className="text-3xl font-bold font-serif mb-4">
            हमारे साथ जुड़ें
          </h2>
          <p className="text-lg font-serif mb-6">
            सहकारिता आंदोलन को मजबूत बनाने में सहयोग करें
          </p>
          <button onClick={() => navigate("/contact")} className="bg-gray-900 text-white px-8 py-3 font-bold uppercase tracking-wider hover:scale-105 transition">
            संपर्क करें
          </button>
        </div>
      </div>
    </div>
  );
}
