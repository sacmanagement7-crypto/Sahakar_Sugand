import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const states = [
    'उत्तर प्रदेश', 'महाराष्ट्र', 'राजस्थान', 'मध्य प्रदेश', 
    'गुजरात', 'बिहार', 'पंजाब', 'हरियाणा',
    'दिल्ली', 'कर्नाटक', 'तमिलनाडु', 'पश्चिम बंगाल'
  ];

  const politicians = [
    'प्रधानमंत्री', 'गृह मंत्री', 'रक्षा मंत्री', 'वित्त मंत्री',
    'मुख्यमंत्री यूपी', 'मुख्यमंत्री महाराष्ट्र', 'विपक्ष नेता', 'राज्यपाल'
  ];

  const trendingNews = [
    'सहकार भारती की बैठक',
    'सहकारी समितियों का विकास',
    'कृषि सहकारिता योजना',
    'ग्रामीण विकास कार्यक्रम',
    'सहकारी बैंक समाचार',
    'किसान सहकारिता अपडेट'
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300">

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* About Section */}
          <div>
            <h4 className="text-2xl font-bold mb-4" style={{color: '#FFF861'}}>सहकार सुगंध</h4>
            <p className="text-gray-400 mb-4 leading-relaxed">
              सहकार सुगंध एक मासिक पत्रिका है, जो देशभर में सहकारिता आंदोलन की सुगंध को घर-घर तक पहुँचाने के उद्देश्य से प्रकाशित की जाती है।
            </p>
            <div className="space-y-2">
              <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-[#FFF861] transition-colors">
                <Phone size={16} />
                <span>+91 1234567890</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-[#FFF861] transition-colors">
                <Mail size={16} />
                <span>info@sahkaarpatrika.com</span>
              </a>
              <div className="flex items-start gap-2 text-gray-400">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>लखनऊ, उत्तर प्रदेश, भारत</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4" style={{color: '#FFCA61'}}>त्वरित लिंक</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-[#FFF861] transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  होम
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-[#FFF861] transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  हमारे बारे में
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-[#FFF861] transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  संपर्क करें
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#FFF861] transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  गोपनीयता नीति
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#FFF861] transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  नियम और शर्तें
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#FFF861] transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  विज्ञापन
                </a>
              </li>
            </ul>
          </div>

          {/* Trending News */}
          <div>
            <h4 className="text-lg font-bold mb-4" style={{color: '#FFCA61'}}>प्रचलित समाचार</h4>
            <p className="text-xs text-gray-500 mb-3">सहकार भारती प्रचलित समाचार</p>
            <ul className="space-y-2">
              {trendingNews.map((news, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-[#FFF861] transition-colors flex items-center gap-2 group text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFCA61] flex-shrink-0"></span>
                    {news}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Politicians */}
          <div>
            <h4 className="text-lg font-bold mb-4" style={{color: '#FFCA61'}}>लोकप्रिय</h4>
            <p className="text-xs text-gray-500 mb-3">राजनेता, शीर्ष नेता</p>
            <ul className="space-y-2">
              {politicians.map((politician, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-[#FFF861] transition-colors flex items-center gap-2 group text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFCA61] flex-shrink-0"></span>
                    {politician}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">हमें फॉलो करें</p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all hover:scale-110"
                style={{background: 'linear-gradient(135deg, #FFF861, #FFCA61)'}}
              >
                <Facebook size={20} className="text-gray-800" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all hover:scale-110"
                style={{background: 'linear-gradient(135deg, #FFF861, #FFCA61)'}}
              >
                <Twitter size={20} className="text-gray-800" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all hover:scale-110"
                style={{background: 'linear-gradient(135deg, #FFF861, #FFCA61)'}}
              >
                <Instagram size={20} className="text-gray-800" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all hover:scale-110"
                style={{background: 'linear-gradient(135deg, #FFF861, #FFCA61)'}}
              >
                <Youtube size={20} className="text-gray-800" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all hover:scale-110"
                style={{background: 'linear-gradient(135deg, #FFF861, #FFCA61)'}}
              >
                <Linkedin size={20} className="text-gray-800" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>© 2025 सहकार सुगंध। सर्वाधिकार सुरक्षित।</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#FFF861] transition-colors">गोपनीयता नीति</a>
              <a href="#" className="hover:text-[#FFF861] transition-colors">नियम और शर्तें</a>
              <a href="#" className="hover:text-[#FFF861] transition-colors">कुकी नीति</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;