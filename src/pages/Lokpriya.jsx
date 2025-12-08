import React from 'react';
import { Megaphone, BookOpen, Sprout, Award, Users, FileText, Smartphone } from 'lucide-react';
import {useNavigate} from "react-router-dom"

export default function Lokpriya() {

  const navigate = useNavigate();

  const activities = [
    {
      id: 1,
      icon: <Megaphone className="w-12 h-12" />,
      title: "सहकारी जागरूकता कार्यक्रम",
      description: "सहकार सुगंध ग्रामीण व शहरी क्षेत्रों में सहकारी सिद्धांतों, योजनाओं और लाभों के बारे में जागरूकता फैलाने हेतु नियमित कार्यक्रम आयोजित करता है। इन कार्यक्रमों का उद्देश्य लोगों को आत्मनिर्भर बनाना और सामूहिक विकास की राह दिखाना है।",
      image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80",
      color: "from-[#FFF861] to-[#FFCA61]"
    },
    {
      id: 2,
      icon: <BookOpen className="w-12 h-12" />,
      title: "मासिक पत्रिका का प्रकाशन",
      description: "सहकार सुगंध अपनी उच्च-गुणवत्ता वाली मासिक पत्रिका के लिए प्रसिद्ध है, जिसमें सहकारिता जगत से जुड़े समाचार, सफलताओं की कहानियाँ, विशेषज्ञ लेख और नवीनतम अपडेट प्रकाशित किए जाते हैं।",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80",
      color: "from-[#FFCA61] to-[#FFF861]"
    },
    {
      id: 3,
      icon: <Sprout className="w-12 h-12" />,
      title: "किसानों और ग्रामीण उद्यमियों के लिए विशेष अभियान",
      description: "कृषि क्षेत्र में नवीन तकनीक, जैविक खेती, सहकारी विपणन और किसानों की आय बढ़ाने पर केंद्रित विशेष अभियान चलाए जाते हैं। इन अभियानों के माध्यम से किसान समुदाय को आधुनिक जानकारी और प्रेरणा प्रदान की जाती है।",
      image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&q=80",
      color: "from-[#FFF861] to-[#FFCA61]"
    },
    {
      id: 4,
      icon: <Award className="w-12 h-12" />,
      title: "सहकारी व्यक्तित्वों का सम्मान",
      description: "सहकार सुगंध समय-समय पर सहकारिता क्षेत्र में उल्लेखनीय योगदान देने वाले व्यक्तियों और संस्थाओं को सम्मानित करता है, जिससे समाज में प्रेरणा और सकारात्मकता का विस्तार होता है।",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80",
      color: "from-[#FFCA61] to-[#FFF861]"
    },
    {
      id: 5,
      icon: <Users className="w-12 h-12" />,
      title: "सामाजिक व सांस्कृतिक गतिविधियाँ",
      description: "यह संगठन केवल सहकारी विषयों तक सीमित नहीं है, बल्कि समाज में शिक्षा, स्वास्थ्य, महिला सशक्तिकरण और युवा विकास से जुड़ी कई गतिविधियाँ भी संचालित करता है।",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
      color: "from-[#FFF861] to-[#FFCA61]"
    },
    {
      id: 6,
      icon: <FileText className="w-12 h-12" />,
      title: "शोध एवं विश्लेषणात्मक रिपोर्टें",
      description: "सहकारिता आंदोलन के विकास, चुनौतियों और भविष्य की संभावनाओं पर विस्तृत शोध और विश्लेषणात्मक रिपोर्टें तैयार कर पाठकों को गहन ज्ञान प्रदान किया जाता है।",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      color: "from-[#FFCA61] to-[#FFF861]"
    },
    {
      id: 7,
      icon: <Smartphone className="w-12 h-12" />,
      title: "डिजिटल जागरूकता और सोशल मीडिया अभियान",
      description: "डिजिटल युग के अनुरूप सहकार सुगंध सोशल मीडिया, वेबसाइट और डिजिटल प्रकाशन के माध्यम से व्यापक स्तर पर जानकारी फैलाता है और युवा पीढ़ी को सहकारिता से जोड़ता है।",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&q=80",
      color: "from-[#FFF861] to-[#FFCA61]"
    }
  ];

  return (
    <div className="min-h-screen bg-[#fefaf5] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Newspaper Header */}
        <div className="text-center mb-12 pb-8 border-b-4 border-double border-gray-900">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[#FFCA61] to-transparent"></div>
            <Megaphone className="w-8 h-8 text-[#FFCA61]" />
            <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[#FFCA61] to-transparent"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight font-serif">
            हमारी गतिविधियाँ
          </h1>
          <p className="text-lg text-gray-700 font-serif italic">
            सहकार सुगंध पत्रिका
          </p>
        </div>

        {/* Introduction Card */}
        <div className="bg-white rounded-sm shadow-md p-8 mb-10 border-l-4 border-[#FFCA61]">
          <p className="text-base md:text-lg text-gray-800 leading-relaxed text-justify font-serif">
            सहकार सुगंध सहकारिता आंदोलन की सोच, उपलब्धियों और जनहितकारी कार्यों को समाज तक पहुँचाने वाला एक प्रमुख माध्यम है। अपनी रचनात्मकता और सकारात्मक सामाजिक दृष्टिकोण के साथ यह कई प्रभावशाली गतिविधियों का संचालन करता है।
          </p>
        </div>

        {/* Activities Grid - Newspaper Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="bg-white border border-gray-300 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <img 
                  src={activity.image} 
                  alt={activity.title}
                  className="w-full h-48 object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute top-3 right-3">
                  <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-br ${activity.color} rounded-sm shadow-md`}>
                    <div className="text-gray-900 scale-75">
                      {activity.icon}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-5">
                <div className={`inline-block px-3 py-1 bg-gradient-to-r ${activity.color} rounded-sm mb-3`}>
                  <span className="text-gray-900 font-bold text-xs uppercase tracking-wider">गतिविधि {activity.id}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight font-serif border-b-2 border-gray-200 pb-2">
                  {activity.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed text-justify font-serif">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="relative border-4 border-double border-gray-900 shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-[#FFF861] via-[#FFCA61] to-[#FFF861] p-8 md:p-12 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-24 h-[3px] bg-gray-900"></div>
              <Users className="w-6 h-6 text-gray-900" />
              <div className="w-24 h-[3px] bg-gray-900"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
              हमारे साथ जुड़ें
            </h2>
            <p className="text-base md:text-lg text-gray-800 leading-relaxed max-w-3xl mx-auto font-serif mb-6">
              सहकारिता आंदोलन को मजबूत बनाने और समाज के विकास में अपना योगदान दें
            </p>
            <button className="bg-gray-900 hover:bg-gray-800 text-white text-sm md:text-base font-bold py-3 px-8 shadow-md transform hover:scale-105 transition-all duration-300 uppercase tracking-wider" onClick={()=>{
              navigate('/contact')
            }}>
              अधिक जानकारी के लिए संपर्क करें
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}