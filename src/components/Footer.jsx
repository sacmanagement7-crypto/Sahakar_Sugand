import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();

  const states = [
    'आंध्र प्रदेश', 'अरुणाचल प्रदेश', 'असम', 'बिहार', 'छत्तीसगढ़',
    'गोवा', 'गुजरात', 'हरियाणा', 'हिमाचल प्रदेश', 'झारखंड',
    'कर्नाटक', 'केरल', 'मध्य प्रदेश', 'महाराष्ट्र', 'मणिपुर',
    'मेघालय', 'मिजोरम', 'नागालैंड', 'ओडिशा', 'पंजाब',
    'राजस्थान', 'सिक्किम', 'तमिलनाडु', 'तेलंगाना',
    'त्रिपुरा', 'उत्तर प्रदेश', 'उत्तराखंड', 'पश्चिम बंगाल'
  ];

  const socials = [
    { Icon: Facebook, color: 'hover:bg-blue-600' },
    { Icon: Twitter, color: 'hover:bg-sky-500' },
    { Icon: Instagram, color: 'hover:bg-pink-600' },
    { Icon: Youtube, color: 'hover:bg-red-600' },
    { Icon: Linkedin, color: 'hover:bg-blue-700' }
  ];

  return (
    <footer className="bg-gradient-to-br from-orange-50 via-white to-green-50 border-t border-orange-200">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* About */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-orange-600">सहकार सुगंध</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              सहकार सुगंध एक मासिक पत्रिका है, जो देशभर में सहकारिता आंदोलन की
              सुगंध को जन-जन तक पहुँचाने के उद्देश्य से प्रकाशित की जाती है।
            </p>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="w-4 h-4 text-orange-500" />
                +91 12345 67890
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="w-4 h-4 text-orange-500" />
                info@sahkaarsugandh.com
              </div>
              <div className="flex items-start gap-2 text-gray-600">
                <MapPin className="w-4 h-4 text-orange-500 mt-0.5" />
                लखनऊ, उत्तर प्रदेश, भारत
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">त्वरित लिंक</h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: 'होम', path: '/' },
                { name: 'हमारे बारे में', path: '/about' },
                { name: 'सहकार सुगंध पत्रिका', path: '/magzines' },
                { name: 'गतिविधियाँ', path: '/lokpriya' },
                { name: 'संपर्क करें', path: '/contact' }
              ].map(link => (
                <li key={link.name}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-all group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-orange-400 opacity-0 group-hover:opacity-100" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* States */}
          <div className="space-y-4 lg:col-span-2">
            <h3 className="text-lg font-semibold text-gray-800">राज्य कवरेज</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-2 text-sm">
              {states.map(state => (
                <span
                  key={state}
                  className="text-gray-600 hover:text-orange-600 transition-colors"
                >
                  {state}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-orange-200 bg-white/70">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-600">

          <p>
            © 2025 <span className="font-semibold text-gray-700">सहकार सुगंध</span>। सर्वाधिकार सुरक्षित।
          </p>

          <div className="flex gap-3">
            {socials.map(({ Icon, color }, i) => (
              <a
                key={i}
                href="#"
                className={`w-9 h-9 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-white ${color} transition-all hover:scale-110 hover:shadow-md`}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
