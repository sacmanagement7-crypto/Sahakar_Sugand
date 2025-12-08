import React, { useState } from 'react';
import { Menu, X, Search, Bell, User } from 'lucide-react';
import NotificationPopup from "./HeaderComponents/NotificationPopup";
import { href, NavLink } from 'react-router-dom';


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isNotifOpen, setIsNotifOpen] = useState(false);

    const navItems = [
        { name: 'होम', href: '/' },
        { name: 'हमारे बारे में', href: '/about' },
        { name: 'लोकप्रिय गतिविधियाँ', href: '/lokpriya' },
        { name: 'प्रचलित समाचार', href: '/shakarsamachar' },
        { name: 'ताज़ा ख़बर', href: '#' },
        {name:'हमारी पत्रिकाएँ', href:'/magzines'},
        { name: 'संपर्क करें', href: '/contact' },
        
    ];

    return (
        <header className="w-full bg-white shadow-md sticky top-0 z-50">


            <NotificationPopup
                isOpen={isNotifOpen}
                onClose={() => setIsNotifOpen(false)}
            />

            {/* Breaking News Ticker */}
            <div className="overflow-hidden" style={{ backgroundColor: "#FFCA61" }}>
                <div className="max-w-7xl mx-auto px-4 py-2 flex items-center">
                    <span
                        className="font-bold text-sm uppercase bg-white px-3 py-1 rounded mr-4 flex-shrink-0"
                        style={{ color: "red" }}
                    >
                        ब्रेकिंग न्यूज़
                    </span>
                    <div className="flex-1 overflow-hidden">
                        <div className="animate-marquee whitespace-nowrap inline-block">
                            <span className="text-sm text-gray-800 font-medium">
                                पर्यावरण संरक्षण के लिए जागरूकता बढ़ी • स्कूलों में डिजिटल शिक्षा की नई पहल • खेल प्रतियोगिताओं में बच्चों का शानदार प्रदर्शन • कला और संस्कृति के कार्यक्रमों में लोगों की भीड़
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <div className="flex items-center">
                        <h1 className="text-3xl md:text-4xl font-bold text-red-600 tracking-tight">
                            सहकार सुगंध
                        </h1>
                        <span className="hidden md:block ml-3 text-sm text-gray-600 border-l pl-3">
                            सहकारिता की सुगंध, समाज के संग
                        </span>
                    </div>

                    {/* Desktop Search */}
                    <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Search news..."
                                className="w-full px-4 py-2 pr-10 border-2 border-[#FFCA61] rounded-full focus:outline-none focus:ring-2 focus:ring-[#FFF861] focus:border-transparent"
                            />
                            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        </div>

                        <button
                            onClick={() => setIsNotifOpen(!isNotifOpen)}
                            className=" ml-10 hover:opacity-70 transition-opacity text-white-800 relative"
                        >
                            <Bell size={20} color='black' />
                        </button>
                    </div>

                    {/* Mobile Menu & Search */}
                    <div className="flex items-center gap-3 lg:hidden">
                        <button
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <Search size={22} />
                        </button>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Search */}
                {isSearchOpen && (
                    <div className="mt-4 lg:hidden">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search news..."
                                className="w-full px-4 py-2 pr-10 border-2 border-[#FFCA61] rounded-full focus:outline-none focus:ring-2 focus:ring-[#FFF861] focus:border-transparent"
                            />
                            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        </div>
                    </div>
                )}


            </div>



            {/* Navigation */}
            <nav className="border-t border-gray-200 bg-gray-50">
                <div className="hidden lg:block max-w-7xl mx-auto px-4">
                    <ul className="ml-14 mr-14 flex items-center justify-between">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <NavLink
                                    to={item.href}
                                    className={({ isActive }) =>
                                        `block px-3 py-3 font-medium transition-colors relative group 
              ${isActive ? "text-black" : "text-gray-700 hover:text-gray-900"}`
                                    }
                                    style={{ "--hover-color": "#FFCA61" }}
                                >
                                    {item.name}

                                    {/* Underline hover animation */}
                                    <span
                                        className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300"
                                        style={{ backgroundColor: "#FFCA61" }}
                                    ></span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="lg:hidden bg-white border-t border-gray-200">
                        <ul className="px-4 py-2">
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <NavLink
                                        to={item.href}
                                        className={({ isActive }) =>
                                            `block px-3 py-3 font-medium rounded transition-colors
                ${isActive
                                                ? "text-black bg-yellow-100"
                                                : "text-gray-700 hover:bg-[#FFF861] hover:bg-opacity-20 hover:text-gray-900"
                                            }`
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </nav>



            <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
        </header>
    );
};

export default Header;
