import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare, FileText, Newspaper } from "lucide-react";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // Basic validation
    if (!formData.name || !formData.email || !formData.mobile || !formData.subject || !formData.message) {
      alert("कृपया सभी फ़ील्ड भरें।");
      return;
    }

    // Email validation
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) {
      alert("कृपया एक वैध ईमेल पता दर्ज करें।");
      return;
    }

    // Mobile validation
    if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      alert("कृपया एक वैध मोबाइल नंबर दर्ज करें।");
      return;
    }

    alert("धन्यवाद! आपका संदेश सफलतापूर्वक भेज दिया गया है। हम जल्द ही आपसे संपर्क करेंगे।");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      mobile: "",
      subject: "",
      message: ""
    });
  };

  const subjects = [
    "सामान्य पूछताछ",
    "विज्ञापन के लिए संपर्क",
    "सदस्यता संबंधी प्रश्न",
    "तकनीकी सहायता",
    "सुझाव और शिकायत",
    "समाचार / लेख भेजना",
    "अन्य"
  ];

  return (
    <div className="min-h-screen bg-[#fefaf5]">
      {/* Newspaper Header */}
      <div className="bg-white border-b-4 border-double border-gray-900 py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center border-b-2 border-gray-900 pb-4">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[#FFCA61] to-transparent"></div>
              <Newspaper className="w-8 h-8 text-[#FFCA61]" />
              <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[#FFCA61] to-transparent"></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif tracking-tight">
              📞 संपर्क करें
            </h1>
            <p className="text-sm text-gray-600 font-serif italic mt-2">
              आपकी आवाज़, आपकी खबर — हम तक ज़रूर पहुँचाएँ
            </p>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#FFF861] via-[#FFCA61] to-[#FFF861] border-b-4 border-gray-900 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-base text-gray-900 leading-relaxed font-serif">
            सहकार सुगंध आपके साथ, समाज के विकास के लिए।
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-4 bg-white border-b-2 border-gray-300">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {/* Address Card */}
          <div className="bg-white border-2 border-gray-300 p-6 hover:border-[#FFCA61] transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-[#FFF861] to-[#FFCA61] flex items-center justify-center mb-4 mx-auto">
              <MapPin className="w-6 h-6 text-gray-900" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 text-center mb-3 font-serif border-b border-gray-200 pb-2">📍 हमारा पता</h3>
            <p className="text-sm text-gray-700 text-center leading-relaxed font-serif">
              XYZ कार्यालय, XYZ रोड,<br />
              लखनऊ – 226001,<br />
              उत्तर प्रदेश
            </p>
          </div>

          {/* Phone Card */}
          <div className="bg-white border-2 border-gray-300 p-6 hover:border-[#FFCA61] transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-[#FFF861] to-[#FFCA61] flex items-center justify-center mb-4 mx-auto">
              <Phone className="w-6 h-6 text-gray-900" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 text-center mb-3 font-serif border-b border-gray-200 pb-2">📞 हेल्पलाइन</h3>
            <p className="text-sm text-gray-700 text-center leading-relaxed font-serif">
              <a href="tel:+919XXXXXXXXX" className="text-[#FFCA61] hover:underline font-bold">
                +91 9XXXXXXXXX
              </a>
            </p>
            <div className="flex items-center justify-center space-x-2 mt-3 text-xs text-gray-600 font-serif">
              <Clock className="w-4 h-4" />
              <span>सोम–शुक्र | 10 AM – 6 PM</span>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-white border-2 border-gray-300 p-6 hover:border-[#FFCA61] transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-[#FFF861] to-[#FFCA61] flex items-center justify-center mb-4 mx-auto">
              <Mail className="w-6 h-6 text-gray-900" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 text-center mb-3 font-serif border-b border-gray-200 pb-2">📧 ईमेल</h3>
            <p className="text-sm text-gray-700 text-center leading-relaxed font-serif">
              <a href="mailto:info@sahkarsugandh.com" className="text-[#FFCA61] hover:underline font-bold">
                info@sahkarsugandh.com
              </a>
            </p>
            <p className="text-sm text-gray-700 text-center mt-2 font-serif">
              <a href="mailto:support@sahkarsugandh.com" className="text-[#FFCA61] hover:underline font-bold">
                support@sahkarsugandh.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-12 px-4 bg-[#fefaf5]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white border-4 border-gray-900">
            <div className="bg-gradient-to-r from-[#FFF861] to-[#FFCA61] p-4 border-b-2 border-gray-900">
              <h2 className="text-2xl font-bold text-gray-900 font-serif">संपर्क फ़ॉर्म</h2>
              <p className="text-sm text-gray-900 font-serif">कृपया अपना विवरण भरें और हम जल्द ही आपसे संपर्क करेंगे।</p>
            </div>

            <div className="p-6 space-y-4">
              {/* Name */}
              <div>
                <label className="block text-gray-900 font-bold mb-2 text-sm font-serif">
                  <User className="w-4 h-4 inline mr-2" />
                  नाम (Full Name) *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="अपना पूरा नाम दर्ज करें"
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:outline-none focus:border-[#FFCA61] transition-colors font-serif text-sm"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-900 font-bold mb-2 text-sm font-serif">
                  <Mail className="w-4 h-4 inline mr-2" />
                  ई-मेल पता *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="example@email.com"
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:outline-none focus:border-[#FFCA61] transition-colors font-serif text-sm"
                />
              </div>

              {/* Mobile */}
              <div>
                <label className="block text-gray-900 font-bold mb-2 text-sm font-serif">
                  <Phone className="w-4 h-4 inline mr-2" />
                  मोबाइल नंबर *
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  placeholder="10 अंकों का मोबाइल नंबर"
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:outline-none focus:border-[#FFCA61] transition-colors font-serif text-sm"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-gray-900 font-bold mb-2 text-sm font-serif">
                  <FileText className="w-4 h-4 inline mr-2" />
                  विषय (Subject) *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:outline-none focus:border-[#FFCA61] transition-colors bg-white font-serif text-sm"
                >
                  <option value="">-- विषय चुनें --</option>
                  {subjects.map((subject, idx) => (
                    <option key={idx} value={subject}>{subject}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-900 font-bold mb-2 text-sm font-serif">
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  संदेश (Message) *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="अपना संदेश यहाँ लिखें..."
                  rows="5"
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:outline-none focus:border-[#FFCA61] transition-colors resize-none font-serif text-sm"
                ></textarea>
              </div>

              {/* Privacy Notice */}
              <div className="bg-yellow-50 border-l-4 border-[#FFCA61] p-3">
                <p className="text-xs text-gray-800 font-serif">
                  🔒 <strong>गोपनीयता सुरक्षा:</strong> हम आपकी जानकारी पूर्णतः गोपनीय रखते हैं और किसी तीसरे पक्ष के साथ साझा नहीं करते।
                </p>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-gray-900 text-[#FFCA61] font-bold py-3 hover:bg-gray-800 transition-all flex items-center justify-center space-x-2 uppercase tracking-wider text-sm"
              >
                <Send className="w-5 h-5" />
                <span>संदेश भेजें</span>
              </button>
            </div>
          </div>

          {/* Map Section */}
          <div className="space-y-6">
            <div className="bg-white border-4 border-gray-900">
              <div className="bg-gradient-to-r from-[#FFF861] to-[#FFCA61] p-4 border-b-2 border-gray-900">
                <h2 className="text-2xl font-bold text-gray-900 font-serif">🗺️ हमारा स्थान</h2>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-700 mb-4 font-serif">
                  हमारे कार्यालय में आने के लिए नीचे दिए गए मानचित्र का उपयोग करें।
                </p>
                
                {/* Google Map Embed */}
                <div className="relative w-full h-80 border-2 border-gray-300 overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.99973087975!2d80.77769895!3d26.8467088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                  ></iframe>
                </div>

                {/* Get Directions Button */}
                <a
                  href="https://www.google.com/maps/dir//Lucknow,+Uttar+Pradesh/@26.8467088,80.77769895,11z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full bg-gray-900 text-[#FFCA61] font-bold py-3 hover:bg-gray-800 transition-all flex items-center justify-center space-x-2 uppercase tracking-wider text-sm"
                >
                  <MapPin className="w-5 h-5" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-r from-[#FFF861] to-[#FFCA61] border-4 border-gray-900 p-6 text-gray-900">
              <h3 className="text-xl font-bold mb-3 font-serif border-b-2 border-gray-900 pb-2">💬 हमसे जुड़ें</h3>
              <p className="text-sm leading-relaxed font-serif mb-4">
                आपके सुझाव, शिकायतें और प्रश्न हमारे लिए महत्वपूर्ण हैं। हम सदैव आपकी सेवा में तत्पर हैं।
              </p>
              <div className="pt-4 border-t-2 border-gray-900">
                <p className="font-bold text-sm font-serif">
                  "जनता की आवाज़ को समाज तक पहुँचाना ही हमारा लक्ष्य है।"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / Quick Links */}
      <section className="py-12 px-4 bg-white border-t-2 border-gray-300">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif border-b-2 border-gray-900 pb-2 inline-block">अन्य संपर्क विकल्प</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 bg-white border-2 border-gray-300 hover:border-[#FFCA61] transition-all">
              <h3 className="font-bold text-sm text-gray-900 mb-2 font-serif">📰 विज्ञापन पूछताछ</h3>
              <p className="text-xs text-gray-700 font-serif">ads@sahkarsugandh.com</p>
            </div>
            <div className="p-4 bg-white border-2 border-gray-300 hover:border-[#FFCA61] transition-all">
              <h3 className="font-bold text-sm text-gray-900 mb-2 font-serif">✍️ समाचार भेजें</h3>
              <p className="text-xs text-gray-700 font-serif">news@sahkarsugandh.com</p>
            </div>
            <div className="p-4 bg-white border-2 border-gray-300 hover:border-[#FFCA61] transition-all">
              <h3 className="font-bold text-sm text-gray-900 mb-2 font-serif">💼 करियर</h3>
              <p className="text-xs text-gray-700 font-serif">careers@sahkarsugandh.com</p>
            </div>
            <div className="p-4 bg-white border-2 border-gray-300 hover:border-[#FFCA61] transition-all">
              <h3 className="font-bold text-sm text-gray-900 mb-2 font-serif">🛠️ तकनीकी सहायता</h3>
              <p className="text-xs text-gray-700 font-serif">support@sahkarsugandh.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}