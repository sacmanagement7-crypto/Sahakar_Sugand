// NotificationPopup.jsx
import React, { useEffect, useRef } from "react";

const NotificationPopup = ({ isOpen, onClose }) => {
  const popupRef = useRef();

  // Close popup on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="absolute right-5 top-25 z-[200]">
      <div
        ref={popupRef}
        className="w-80 bg-white/90 backdrop-blur-xl shadow-xl border border-yellow-200 
                   rounded-xl p-4 animate-fadeSlide"
      >
        <h3 className="text-lg font-bold text-gray-800 mb-2">
          🔔 नवीन सूचनाएँ
        </h3>

        <ul className="space-y-3">
          <li className="p-2 bg-yellow-50 rounded-lg text-gray-800 border border-yellow-200">
            📢 <span className="font-medium">सहकार सुगंध</span> का नया संस्करण प्रकाशित।
          </li>

          <li className="p-2 bg-yellow-50 rounded-lg text-gray-800 border border-yellow-200">
            📰 इस सप्ताह: सहकारिता क्षेत्र में नई नीतियाँ और पहलें।
          </li>

          <li className="p-2 bg-yellow-50 rounded-lg text-gray-800 border border-yellow-200">
            🏆 विशेष रिपोर्ट: लोकप्रिय सहकारी नेताओं पर फ़ोकस।
          </li>

          <li className="p-2 bg-yellow-50 rounded-lg text-gray-800 border border-yellow-200">
            ✍ संपादकीय: “सहकारिता का बदलता भविष्य” – अवश्य पढ़ें।
          </li>
        </ul>

        <button
          onClick={onClose}
          className="mt-3 w-full py-2 bg-gradient-to-r from-yellow-300 to-yellow-400 
                    rounded-lg text-gray-900 font-semibold hover:opacity-90 transition"
        >
          सभी देखें
        </button>
      </div>

      <style>{`
        @keyframes fadeSlide {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeSlide {
          animation: fadeSlide 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default NotificationPopup;
