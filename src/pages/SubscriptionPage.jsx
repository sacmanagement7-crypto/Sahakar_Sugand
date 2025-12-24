import React, { useState } from "react";
import { Mail, Send, CheckCircle, Users, Phone } from "lucide-react";
import { subscriberCreate } from "../service/axios";

const SubscriptionPage = ({ onSuccess }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!name || name.trim().length < 2) {
      setError("कम से कम 2 अक्षर का नाम दर्ज करें");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setError("ईमेल दर्ज करें");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("मान्य ईमेल दर्ज करें");
      return;
    }

    if (!mobile || mobile.length !== 10) {
      setError("10 अंकों का मोबाइल नंबर दर्ज करें");
      return;
    }

    try {
      setLoading(true);

      const res = await subscriberCreate({
        name: name.trim(),
        email,
        mobile,
      });

      const data = res.data;

      if (!data.success) {
        setError(data.message || "कुछ गलत हो गया");
        return;
      }

      const subscriber = data.data;

      localStorage.setItem("subscriberId", subscriber._id);
      localStorage.setItem("subscriberName", subscriber.name);
      localStorage.setItem("subscriberEmail", subscriber.email);
      localStorage.setItem("subscriberMobile", subscriber.mobile);

      setShowSuccess(true);
      setName("");
      setEmail("");
      setMobile("");

      if (onSuccess) onSuccess(subscriber.email);

      setTimeout(() => setShowSuccess(false), 3000);
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message || "सर्वर से कनेक्ट नहीं हो पाया"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#fefaf5] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white border border-gray-300 shadow-lg">
          <div className="p-6 space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1">
                नाम <span className="text-red-600">*</span>
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="अपना नाम लिखें"
                  className="w-full pl-10 pr-3 py-3 border border-gray-300 text-sm outline-none focus:border-[#FFCA61]"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1">
                ईमेल <span className="text-red-600">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="अपना ईमेल लिखें"
                  className="w-full pl-10 pr-3 py-3 border border-gray-300 text-sm outline-none focus:border-[#FFCA61]"
                />
              </div>
            </div>

            {/* Mobile */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1">
                मोबाइल <span className="text-red-600">*</span>
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="मोबाइल नंबर"
                  className="w-full pl-10 pr-3 py-3 border border-gray-300 text-sm outline-none focus:border-[#FFCA61]"
                />
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="p-2 bg-red-50 border-l-4 border-red-500 text-xs text-red-600">
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-gray-900 hover:bg-gray-800 disabled:opacity-60 text-white text-sm font-bold py-3 flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              {loading ? "कृपया प्रतीक्षा करें..." : "सदस्यता लें"}
            </button>

            {/* Success */}
            {showSuccess && (
              <div className="mt-3 p-3 bg-green-50 border-l-4 border-green-500 text-xs flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <div>
                  <p className="font-bold text-green-900">सदस्यता सफल!</p>
                  <p className="text-green-700">
                    आपको जल्द ही जानकारी मिलेगी।
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;
