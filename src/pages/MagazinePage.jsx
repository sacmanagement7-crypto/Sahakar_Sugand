import React, { useState, useEffect } from "react";
import { Eye, Newspaper, Calendar, Lock } from "lucide-react";
import SubscriptionPopup from "./SubscriptionPopup";
import { checkSubscriber, magazineGet } from "../service/axios";

const MagazinePage = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedMag, setSelectedMag] = useState(null);
    const [userEmail, setUserEmail] = useState(null);
    const [isVerified, setIsVerified] = useState(false);
    const [allMagazines, setAllMagazines] = useState([]);

    useEffect(() => {
        const storedEmail = localStorage.getItem("subscriberEmail");
        if (storedEmail) {
            setUserEmail(storedEmail);
            verifySubscriber(storedEmail);
        }
    }, []);

    const verifySubscriber = async (email) => {
        try {
            const res = await checkSubscriber(email);
            setIsVerified(res.data.success);
        } catch {
            setIsVerified(false);
        }
    };

    useEffect(() => {
        const fetchMagazines = async () => {
            try {
                const res = await magazineGet();
                setAllMagazines(res.data.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchMagazines();
    }, []);

    console.log(allMagazines);

    const handleView = async (mag) => {
        setSelectedMag(mag);

        if (mag.isFree) {
            window.open(mag.pdfUrl, "_blank");
            return;
        }

        const email = localStorage.getItem("subscriberEmail");

        if (!email) {
            setShowPopup(true);
            return;
        }

        try {
            const res = await checkSubscriber(email);

            if (!res.data.success) {
                setShowPopup(true);
                return;
            }

            window.open(mag.pdfUrl, "_blank");
        } catch (err) {
            console.error(err);
            setShowPopup(true);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50 py-12 px-4 sm:px-6 lg:px-8">

            {/* Header */}
            <div className="max-w-7xl mx-auto mb-12">
                <div className="text-center border-b-4 border-double border-gray-800 pb-6">
                    <div className="flex items-center justify-center gap-3 mb-2">
                        <Newspaper className="w-10 h-10 text-amber-700" />
                        <h1 className="text-5xl font-serif font-bold text-gray-900">
                            हमारी पत्रिकाएँ
                        </h1>
                        <Newspaper className="w-10 h-10 text-amber-700" />
                    </div>
                    <p className="text-lg text-gray-600 font-serif italic mt-2">
                        हमारी पत्रिका संग्रह
                    </p>
                    <div className="flex items-center justify-center gap-2 mt-3 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date().toLocaleDateString("hi-IN")}</span>
                    </div>
                </div>
            </div>

            {/* Magazines */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

                {allMagazines.map((mag) => (
                    <div key={mag._id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all border-2 border-gray-200">

                        {/* Top */}
                        <div className="bg-gradient-to-r from-[#FFF861] to-[#FFCA61] border-b-4 border-gray-900 p-3">
                            <h3 className="text-xl font-bold font-serif">{mag.title}</h3>
                            <p className="text-[10px] font-serif">मासिक पत्रिका</p>
                        </div>

                        {/* Cover (SECURE CLICK) */}
                        <div className="relative group cursor-pointer" onClick={() => handleView(mag)} >
                            <img src={mag.coverImageUrl} alt={mag.coverImageUrl} className="w-full h-72 group-hover:scale-105 transition-transform" />

                            {!isVerified && !mag.isFree ? (
                                <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full text-xs flex gap-1">
                                    <Lock className="w-3 h-3" /> लॉक्ड
                                </div>
                            ) : (
                                <div className="absolute top-3 right-3 bg-green-600 text-white px-3 py-1 rounded-full text-xs">
                                    ✓ सक्रिय
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        <div className="bg-gray-900 p-5">
                            <button onClick={() => handleView(mag)} className="w-full bg-gradient-to-r from-[#FFF861] to-[#FFCA61] text-gray-900 font-bold py-3 border-2 border-gray-900">
                                📖 पूर्ण अंक पढ़ें
                            </button>

                            <p className="text-center text-[11px] text-[#FFCA61] mt-3 font-serif">
                                {mag.highlight || "विशेष जानकारी इस अंक में"}
                                <br />
                                {mag.createdAt.slice(0, 10)}
                            </p>
                        </div>

                    </div>
                ))}
            </div>

            {/* Popup */}
            {showPopup && (
                <SubscriptionPopup onClose={() => setShowPopup(false)}
                    onSuccess={(email) => {
                        localStorage.setItem("subscriberEmail", email);
                        setUserEmail(email);
                        verifySubscriber(email);

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
