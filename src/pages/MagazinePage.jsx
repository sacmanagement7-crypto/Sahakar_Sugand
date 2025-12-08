import React, { useState, useEffect } from "react";
import { Eye, Newspaper, Calendar, Lock } from "lucide-react";
import { magazines } from "../dummydata/magzine";
import SubscriptionPopup from "./SubscriptionPopup";

const MagazinePage = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedMag, setSelectedMag] = useState(null);
    const [userEmail, setUserEmail] = useState(null);



    // Load subscriber from localStorage
    useEffect(() => {
        const storedEmail = localStorage.getItem("subscriberEmail");
        if (storedEmail) {
            setUserEmail(storedEmail);
        }
    }, []);

    console.log(userEmail);

    // View Button Action
    const handleView = (mag) => {
        setSelectedMag(mag);

        // If user not subscribed → open popup
        if (!userEmail && !mag.isFree) {
            setShowPopup(true);
            return;
        }

        // Already subscribed → open PDF directly
        window.open(mag.pdf, "_blank");
    };


    return (
        <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50 py-12 px-4 sm:px-6 lg:px-8">

            {/* Header */}
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
                        <span className="font-mono">
                            {new Date().toLocaleDateString("hi-IN")}
                        </span>
                    </div>
                </div>
            </div>

            {/* Magazines Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

                {magazines.map((mag) => (
                    <div
                        key={mag._id}
                        className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-gray-200"
                    >
                        <div className="bg-gradient-to-r from-[#FFF861] to-[#FFCA61] border-b-4 border-gray-900 p-3">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 font-serif">सहकार सुगंध</h3>
                                    <p className="text-[10px] text-gray-700 font-serif">मासिक पत्रिका</p>
                                </div>
                                <div className="text-right">
                                    <div className="flex items-center justify-end text-xs font-bold text-gray-900 font-serif">
                                        <Calendar className="w-3 h-3 mr-1" />
                                        <span>दिसंबर 2025</span>
                                    </div>
                                    <p className="text-[10px] text-gray-700 font-serif">अंक 12</p>
                                </div>
                            </div>
                        </div>

                        {/* Mag Cover */}
                        <div
                            className="relative group cursor-pointer"
                            onClick={() => {
                                setSelectedMag(mag); // FIXED
                                if (!userEmail) {
                                    setShowPopup(true);
                                } else {
                                    window.open(mag.pdf, "_blank");
                                }
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                            <img
                                src={mag.titlePage}
                                alt={mag.title}
                                className="w-full h-72 transform group-hover:scale-105 transition-transform duration-300"
                            />

                            {/* Lock / Active Badge */}
                            {!userEmail ? (
                                <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                                    <Lock className="w-3 h-3" /> लॉक्ड
                                </div>
                            ) : (
                                <div className="absolute top-3 right-3 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                                    ✓ सक्रिय
                                </div>
                            )}
                        </div>

                        {/* Mag Details */}
                        <div className="bg-gray-900 border-t-4 border-gray-900 p-5">

                            {/* READ BUTTON — footer style */}
                            <button
                                onClick={() => handleView(mag)}
                                className={`w-full bg-gradient-to-r from-[#FFF861] to-[#FFCA61] 
        text-gray-900 font-bold py-3 hover:opacity-90 transition-all 
        uppercase text-sm tracking-wider border-2 border-gray-900 flex items-center justify-center gap-2
        ${!userEmail && "opacity-60 cursor-not-allowed"}`}
                            >
                                📖 पूर्ण अंक पढ़ें
                            </button>


                            {/* Highlight Text */}
                            <p className="text-center text-[11px] text-[#FFCA61] mt-3 font-serif">
                                {mag.highlight || "विशेष: इस अंक में पढ़ें महत्वपूर्ण जानकारी!"}
                            </p>
                        </div>
                    </div>
                ))}

            </div>

            {/* SUBSCRIPTION POPUP */}
            {showPopup && (
                <SubscriptionPopup
                    onClose={() => setShowPopup(false)}
                    onSuccess={(email) => {
                        setUserEmail(email);
                        localStorage.setItem("subscriberEmail", email);

                        // Auto-open PDF after subscribing
                        if (selectedMag) {
                            window.open(selectedMag.pdf, "_blank");
                        }

                        setShowPopup(false);
                    }}
                />
            )}
        </div>
    );
};

export default MagazinePage;
