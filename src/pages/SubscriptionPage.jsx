import React, { useState, useEffect } from 'react';
import { Mail, Send, CheckCircle, Newspaper, Users } from 'lucide-react';

const SubscriptionPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subscribers, setSubscribers] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');
  const [mobile,setMobile] = useState('');

  // Load subscribers from memory on component mount
  useEffect(() => {
    const stored = [];
    setSubscribers(stored);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Validate name
    if (!name || name.trim().length < 2) {
      setError('कृपया अपना नाम दर्ज करें (कम से कम 2 अक्षर)');
      return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setError('कृपया अपना ईमेल दर्ज करें');
      return;
    }
    if (!emailRegex.test(email)) {
      setError('कृपया मान्य ईमेल पता दर्ज करें');
      return;
    }

    // Check if email already exists
    const emailExists = subscribers.some(sub => sub.email === email);
    if (emailExists) {
      setError('यह ईमेल पहले से पंजीकृत है');
      return;
    }

    // Add to subscribers list (in-memory storage)
    const newSubscriber = { name: name.trim(), email, date: new Date().toLocaleDateString('hi-IN') };
    const updatedSubscribers = [...subscribers, newSubscriber];
    setSubscribers(updatedSubscribers);

    // Show success message
    setShowSuccess(true);
    setName('');
    setEmail('');

    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#fefaf5] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Newspaper Header */}
        <div className="text-center mb-12 pb-8 border-b-4 border-double border-gray-900">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[#FFCA61] to-transparent"></div>
            <Newspaper className="w-8 h-8 text-[#FFCA61]" />
            <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[#FFCA61] to-transparent"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight font-serif">
            सहकार सुगंध पत्रिका
          </h1>
          <p className="text-lg text-gray-700 font-serif italic">
            सहकारिता आंदोलन का विश्वसनीय माध्यम
          </p>
        </div>

        {/* Main Subscription Card */}
        <div className="bg-white border-4 border-double border-gray-900 shadow-xl mb-8">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-[#FFF861] via-[#FFCA61] to-[#FFF861] p-6 border-b-2 border-gray-900">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Mail className="w-8 h-8 text-gray-900" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif">
                सदस्यता लें
              </h2>
            </div>
            <p className="text-center text-gray-800 font-serif text-sm md:text-base">
              मासिक पत्रिका की नवीनतम जानकारी सीधे अपने ईमेल पर प्राप्त करें
            </p>
          </div>

          {/* Form Section */}
          <div className="p-8 md:p-12">
            <div className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-lg font-bold text-gray-900 mb-3 font-serif">
                  आपका नाम <span className="text-red-600">*</span>
                </label>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="अपना पूरा नाम दर्ज करें"
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 focus:border-[#FFCA61] focus:outline-none text-base font-serif transition-colors"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-lg font-bold text-gray-900 mb-3 font-serif">
                  ईमेल पता <span className="text-red-600">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="आपका ईमेल पता दर्ज करें"
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 focus:border-[#FFCA61] focus:outline-none text-base font-serif transition-colors"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-lg font-bold text-gray-900 mb-3 font-serif">
                  Mobile Number <span className="text-red-600">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="number"
                    id="number"
                    value={mobile}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="आपका ईमेल पता दर्ज करें"
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 focus:border-[#FFCA61] focus:outline-none text-base font-serif transition-colors"
                  />
                </div>
              </div>


              {error && (
                <div className="p-3 bg-red-50 border-l-4 border-red-500">
                  <p className="text-sm text-red-600 font-serif flex items-center gap-2">
                    <span className="w-1 h-1 bg-red-600 rounded-full"></span>
                    {error}
                  </p>
                </div>
              )}

              <button
                onClick={handleSubmit}
                className="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 px-6 transition-all duration-300 flex items-center justify-center gap-3 shadow-md hover:shadow-lg transform hover:scale-[1.02] uppercase tracking-wider text-sm md:text-base cursor-pointer"
              >
                <Send className="w-5 h-5" />
                सदस्यता लें
              </button>
            </div>

            {/* Success Message */}
            {showSuccess && (
              <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-500">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-green-900 font-serif">
                      धन्यवाद! आपकी सदस्यता सफल रही।
                    </p>
                    <p className="text-sm text-green-700 font-serif">
                      आपको शीघ्र ही पत्रिका की जानकारी प्राप्त होगी।
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[
            {
              icon: <Newspaper className="w-8 h-8" />,
              title: "मासिक पत्रिका",
              desc: "हर महीने नई सामग्री"
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: "विशेष लेख",
              desc: "विशेषज्ञों के विचार"
            },
            {
              icon: <CheckCircle className="w-8 h-8" />,
              title: "निःशुल्क सदस्यता",
              desc: "कोई शुल्क नहीं"
            }
          ].map((benefit, idx) => (
            <div key={idx} className="bg-white border border-gray-300 p-6 text-center hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-3 text-[#FFCA61]">
                {benefit.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2 font-serif">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-600 font-serif">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Subscribers Count */}
        {subscribers.length > 0 && (
          <div className="bg-white border-2 border-gray-300 p-6 text-center">
            <p className="text-gray-700 font-serif">
              <span className="font-bold text-2xl text-[#FFCA61]">{subscribers.length}</span>
              {' '}सदस्य पहले से पंजीकृत हैं
            </p>
          </div>
        )}

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 font-serif border-t-2 border-gray-300 pt-6">
            सहकार सुगंध - सहकारिता आंदोलन का प्रमुख प्रकाशन
          </p>
        </div>

      </div>
    </div>
  );
};

export default SubscriptionPage;