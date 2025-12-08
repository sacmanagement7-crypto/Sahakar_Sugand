import React, { useState, useEffect } from 'react';
import { Mail, Send, CheckCircle, Newspaper, Users, Phone } from 'lucide-react';

const SubscriptionPage = ({ onSuccess }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [subscribers, setSubscribers] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setSubscribers([]);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!name || name.trim().length < 2) {
      setError('कम से कम 2 अक्षर का नाम दर्ज करें');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setError('ईमेल दर्ज करें');
      return;
    }
    if (!emailRegex.test(email)) {
      setError('मान्य ईमेल दर्ज करें');
      return;
    }

    if (!mobile || mobile.length !== 10) {
      setError('10 अंकों का मोबाइल नंबर दर्ज करें');
      return;
    }

    const emailExists = subscribers.some((sub) => sub.email === email);
    if (emailExists) {
      setError('यह ईमेल पहले से पंजीकृत है');
      return;
    }

    const newSubscriber = {
      name: name.trim(),
      email,
      mobile,
      date: new Date().toLocaleDateString('hi-IN'),
    };

    setSubscribers([...subscribers, newSubscriber]);

    localStorage.setItem('subscriberEmail', email);
    localStorage.setItem('subscriberMobile', mobile);

    setShowSuccess(true);
    setName('');
    setEmail('');
    setMobile('');

    if (onSuccess) onSuccess();

    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#fefaf5] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8 pb-4 border-b border-gray-400">
          <Newspaper className="w-7 h-7 text-[#FFCA61] mx-auto mb-2" />
          <h1 className="text-3xl font-bold font-serif text-gray-800">
            सहकार सुगंध पत्रिका
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            सहकारिता आंदोलन का विश्वसनीय माध्यम
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white border border-gray-300 shadow-lg">

          {/* Top Heading */}
          <div className="bg-gradient-to-r from-[#FFF861] via-[#FFCA61] to-[#FFF861] p-5 border-b border-gray-300">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Mail className="w-6 h-6 text-gray-900" />
              <h2 className="text-2xl font-bold font-serif text-gray-900">
                सदस्यता फॉर्म
              </h2>
            </div>
            <p className="text-center text-xs text-gray-800">
              पत्रिका की जानकारी अपने ईमेल व मोबाइल पर पाएं
            </p>
          </div>

          {/* Form */}
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
              className="w-full bg-gray-900 hover:bg-gray-800 text-white text-sm font-bold py-3 flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              सदस्यता लें
            </button>

            {/* Success */}
            {showSuccess && (
              <div className="mt-3 p-3 bg-green-50 border-l-4 border-green-500 text-xs flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <div>
                  <p className="font-bold text-green-900">सदस्यता सफल!</p>
                  <p className="text-green-700">आपको जल्द ही जानकारी मिलेगी।</p>
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
