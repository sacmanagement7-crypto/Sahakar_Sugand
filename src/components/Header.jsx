import React, { useState } from 'react';
import { Menu, X, Search, Bell } from 'lucide-react';
import NotificationPopup from "./HeaderComponents/NotificationPopup";
import { NavLink } from 'react-router-dom';
import logo from "../assets/sahakar sugandh logo.png";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isNotifOpen, setIsNotifOpen] = useState(false);
    const [showAdsMenu, setShowAdsMenu] = useState(false);
    const changeLanguage = (lang) => {
        const select = document.querySelector("select.goog-te-combo");
        if (select) {
            select.value = lang;
            select.dispatchEvent(new Event("change"));
        }
    };
    const navItems = [
        { name: 'होम', href: '/' },
        { name: 'हमारे बारे में', href: '/about' },
        { name: 'सहकार सुगंध पत्रिका', href: '/magzines' },
        { name: 'सहकारी गतिविधियाँ', href: '/lokpriya' },
        { name: 'विज्ञापन ⬇', href: '#' },
        { name: 'नवीनतम समाचार', href: '/news' },
        { name: 'संपर्क करें', href: '/contact' },
    ];
    const adsSubMenu = [
        { name: 'वेबसाइट विज्ञापन', href: '/website-ads' },
        { name: 'स्मारिका विज्ञापन', href: '/ads/smarika' },
    ];
    return (
        <header className="w-full bg-white shadow-md sticky top-0 z-50">
            <NotificationPopup isOpen={isNotifOpen} onClose={() => setIsNotifOpen(false)} />
            {/* Header Top Row */}
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <NavLink to="/" className="flex items-center gap-3">
                    <img src={logo} alt="सहकार सुगंध" className="h-10 md:h-12 w-auto object-contain" />
                    <span className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent 
                   bg-gradient-to-r from-red-500 via-orange-400 via-yellow-400 
                   via-green-400 via-blue-500 via-indigo-600 to-purple-600">
                        सहकार सुगंध
                    </span>
                </NavLink>
                {/* Desktop Search */}
                <div className="hidden lg:flex items-center gap-6">
                    <select onChange={(e) => changeLanguage(e.target.value)} className="border px-2 py-1 text-sm">
                        <option value="hi">हिंदी</option>
                        <option value="en">English</option>
                        <option value="ta">தமிழ்</option>
                        <option value="te">తెలుగు</option>
                        <option value="mr">मराठी</option>
                        <option value="bn">বাংলা</option>
                        <option value="gu">ગુજરાતી</option>
                        <option value="pa">ਪੰਜਾਬੀ</option>
                        <option value="ml">മലയാളം</option>
                        <option value="kn">ಕನ್ನಡ</option>
                        <option value="ur">اردو</option>
                    </select>
                    <div className="relative">
                        <input type="text" placeholder="Search news..." className="px-4 py-2 pr-10 border-2 border-[#FFCA61] rounded-full" />
                        <Search className="absolute right-3 top-2 text-gray-400" size={20} />
                    </div>
                    <button onClick={() => setIsNotifOpen(true)} className="hover:opacity-70">
                        <Bell size={22} />
                    </button>
                </div>
                {/* Mobile Menu Button */}
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 rounded-full border">
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            {/* Desktop Navigation */}
            <nav className="hidden lg:block border-t bg-gray-50">
                <ul className="flex justify-around items-center gap-6 py-3">
                    {navItems.map((item, index) => (
                        <React.Fragment key={index}>
                            {item.name !== "विज्ञापन ⬇" ? (
                                <li>
                                    <NavLink to={item.href} className="px-3 py-2 font-medium text-gray-700 hover:text-black">
                                        {item.name}
                                    </NavLink>
                                </li>
                            ) : (
                                <li className="relative group">
                                    <button className="font-medium px-3 py-2 hover:text-black">
                                        विज्ञापन ⬇
                                    </button>
                                    {/* Dropdown */}
                                    <ul className="absolute hidden group-hover:block bg-white border rounded-lg shadow-lg mt-1">
                                        {adsSubMenu.map((menu, i) => (
                                            <li key={i}>
                                                <NavLink to={menu.href} className="block px-4 py-2 hover:bg-yellow-100 text-gray-700">
                                                    {menu.name}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            )}
                        </React.Fragment>
                    ))}
                </ul>
            </nav>
            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white border-t">
                    <ul className="flex flex-col">
                        {navItems.map((item, index) => (
                            <React.Fragment key={index}>
                                {item.name !== "विज्ञापन ⬇" ? (
                                    <li>
                                        <NavLink to={item.href} className="block px-4 py-3 hover:bg-yellow-100" onClick={() => setIsMenuOpen(false)}>
                                            {item.name}
                                        </NavLink>
                                    </li>
                                ) : (
                                    <li>
                                        <button onClick={() => setShowAdsMenu(!showAdsMenu)} className="block w-full text-left px-4 py-3 hover:bg-gray-100">
                                            विज्ञापन ⬇
                                        </button>
                                        {showAdsMenu && (
                                            <ul className="pl-8 bg-gray-50">
                                                {adsSubMenu.map((menu, i) => (
                                                    <li key={i}>
                                                        <NavLink to={menu.href} className="block py-2 hover:text-black" onClick={() => setIsMenuOpen(false)}>
                                                            {menu.name}
                                                        </NavLink>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                )}
                            </React.Fragment>
                        ))}
                    </ul>
                </div>
            )}
            {/* Animation */}
            <style>
                {`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 20s linear infinite;
                }
                `}
            </style>
        </header>
    );
};
export default Header;