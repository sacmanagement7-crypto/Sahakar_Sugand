import React, { useState, useEffect } from "react";
import { Eye, Newspaper, Calendar, Lock } from "lucide-react";
import { magazines } from "../dummydata/magzine";
import SubscriptionPopup from "./SubscriptionPopup";

const MagazinePage = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedMag, setSelectedMag] = useState(null);
    const [userEmail, setUserEmail] = useState(null);

    useEffect(() => {
        const storedEmail = localStorage.getItem("subscriberEmail");
        setUserEmail(storedEmail);
    }, []);

    const handleView = (mag) => {
        setSelectedMag(mag);

        if (!mag.isSubscribed) {
            alert("🔐 You are not subscribed for this magazine.");
            return;
        }

        if (userEmail) {
            window.open(mag.pdf, "_blank");
            return;
        }

        setShowPopup(true);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50 py-12 px-4 sm:px-6 lg:px-8">
            {/* Header Section - Newspaper Style */}
            <div className="max-w-7xl mx-auto mb-12">
                <div className="text-center border-b-4 border-double border-gray-800 pb-6">
                    <div className="flex items-center justify-center gap-3 mb-2">
                        <Newspaper className="w-10 h-10 text-amber-700" />
                        <h1 className="text-5xl font-serif font-bold text-gray-900 tracking-tight">
                            हमारी पत्रिकाएँ
                        </h1>
                        <Newspaper className="w-10 h-10 text-amber-700" />
                    </div>
                    <p className="text-lg text-gray-600 font-serif italic mt-2">
                        हमारी पत्रिका संग्रह
                    </p>
                    <div className="flex items-center justify-center gap-2 mt-3 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span className="font-mono">{new Date().toLocaleDateString('hi-IN')}</span>
                    </div>
                </div>
            </div>

            {/* Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {magazines.map((mag) => (
                    <div
                        key={mag._id}
                        className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-gray-200"
                    >
                        {/* Magazine Cover with Vintage Frame */}
                    
                            <div className="relative group" onClick={()=>{
                                if(!userEmail){
                                    setShowPopup(!showPopup)
                                }else{
                                     window.open(mag.pdf, "_blank");
                                }
                            }}>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                            <img
                                src={mag.titlePage}
                                alt={mag.title}
                                className="w-full h-72 transform group-hover:scale-105 transition-transform duration-300"
                            />
                            {!userEmail && (
                                <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                                    <Lock className="w-3 h-3" />
                                     लॉक्ड
                                </div>
                            )}
                            {userEmail && (
                                <div className="absolute top-3 right-3 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                                    ✓ सक्रिय
                                </div>
                            )}
                        </div>
                        

                        {/* Title Section - Newspaper Header Style */}
                        <div className="bg-gradient-to-b from-amber-50 to-white border-t-4 border-amber-600">
                            <div className="p-4 text-center border-b border-gray-300">
                                <h3 className="font-serif text-xl font-bold text-gray-900 leading-tight">
                                    {mag.title}
                                </h3>
                            </div>

                            {/* Action Section */}
                            <div className="p-5">
                                <button
                                    onClick={() => handleView(mag)}
                                    className={`w-full flex items-center justify-center gap-2 py-3 rounded-md font-bold text-base uppercase tracking-wide transition-all duration-300 shadow-md hover:shadow-lg
                                    ${userEmail
                                        ? "bg-gradient-to-r from-orange-600 to-orange-700 text-white hover:from-red-700 hover:to-red-800" 
                                        : "bg-gradient-to-r from-gray-400 to-gray-500 text-white cursor-not-allowed"
                                    }`}
                                >
                                    <Eye size={20} strokeWidth={2.5} />
                                    <span className="font-serif">
                                         देखें
                                    </span>
                                </button>

                                <div className="mt-4 text-center">
                                    <p className={`text-sm font-semibold inline-flex items-center gap-2 px-4 py-2 rounded-full
                                        ${mag.isSubscribed 
                                            ? "bg-green-100 text-green-700 border border-green-300" 
                                            : "bg-red-100 text-red-700 border border-red-300"
                                        }`}>
                                        {mag.isSubscribed ? "✔ सक्रिय" : "🔒 लॉक्ड"}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Popup */}
            {showPopup && (
                <SubscriptionPopup
                    onClose={() => setShowPopup(false)}
                    onSuccess={() => {
                        setShowPopup(false);
                        localStorage.setItem("subscriberEmail", "true");
                        window.open(selectedMag.pdf, "_blank");
                    }}
                />
            )}
        </div>
    );
};

export default MagazinePage;