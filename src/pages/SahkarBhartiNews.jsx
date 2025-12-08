import React from 'react';
import { Users, TrendingUp, Award, Lightbulb, Sprout, Heart, Newspaper } from 'lucide-react';

export default function SahkarBhartiNews() {
  const newsItems = [
    {
      id: 1,
      icon: <TrendingUp className="w-10 h-10" />,
      title: "सहकारिता के माध्यम से ग्रामीण विकास पर विशेष पहल",
      description: "सहकार भारती ने हाल ही में ग्रामीण क्षेत्रों में सहकारी मॉडल को मजबूत बनाने के लिए जागरूकता कार्यक्रमों की श्रृंखला शुरू की है। इन कार्यक्रमों में स्थानीय किसानों, महिलाओं और युवाओं को सहकारी समितियों से जुड़ने के लाभ बताए जा रहे हैं।",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80"
    },
    {
      id: 2,
      icon: <Users className="w-10 h-10" />,
      title: "युवा सहकार मंच की नई गतिविधियाँ",
      description: "युवा शक्ति को सहकारिता के माध्यम से रोजगार और नेतृत्व के अवसर देने के लिए \"युवा सहकार मंच\" ने विभिन्न राज्यों में कौशल विकास कार्यशालाएँ आयोजित की हैं। इनका उद्देश्य युवाओं को स्टार्टअप, एग्री-टेक, और ग्रामीण उद्यमिता में सहकार मॉडल अपनाने के लिए प्रेरित करना है।",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
    },
    {
      id: 3,
      icon: <Heart className="w-10 h-10" />,
      title: "महिला सहकारिता को बढ़ावा देने की पहल",
      description: "सहकार भारती के महिला प्रकोष्ठ द्वारा स्वयं सहायता समूह (SHGs) और महिला सहकारी समितियों के लिए प्रशिक्षण एवं आर्थिक सशक्तिकरण कार्यक्रम शुरू किए गए हैं। इन कार्यक्रमों से ग्रामीण महिलाओं में आत्मनिर्भरता और नेतृत्व क्षमता में वृद्धि हो रही है।",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
    },
    {
      id: 4,
      icon: <Lightbulb className="w-10 h-10" />,
      title: "सहकारी समितियों के लिए डिजिटल सशक्तिकरण मिशन",
      description: "डिजिटल युग के अनुरूप सहकारी संस्थाओं के कामकाज में पारदर्शिता और गति लाने के लिए सहकार भारती ने डिजिटल सहकार अभियान चलाया है। इस अभियान के तहत ई-गवर्नेंस, डिजिटल भुगतान, ऑनलाइन सदस्य प्रबंधन और आईटी प्रशिक्षण को बढ़ावा दिया जा रहा है।",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
    },
    {
      id: 5,
      icon: <Award className="w-10 h-10" />,
      title: "राष्ट्रीय एवं राज्य स्तरीय सम्मेलन",
      description: "सहकार भारती द्वारा हाल ही में कई राज्यों में सहकार सम्मेलन आयोजित किए गए, जिनमें कृषि, उद्योग, व्यापार और सामाजिक क्षेत्रों के विशेषज्ञों ने सहकारिता के भविष्य पर चर्चा की। इन सम्मेलनों में सहकारिता को मुख्यधारा के विकास मॉडल में जोड़ने पर जोर दिया गया।",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80"
    },
    {
      id: 6,
      icon: <Sprout className="w-10 h-10" />,
      title: "किसानों के लिए नए सहकारी समाधान",
      description: "कृषि क्षेत्र में बढ़ती चुनौतियों को देखते हुए सहकार भारती ने किसानों के लिए जैविक खेती, समूह आधारित विपणन, बीज एवं खाद की सामूहिक आपूर्ति, और फसल प्रसंस्करण यूनिट जैसी सहकारी पहलों को बढ़ावा दिया है, जिससे किसानों की आय में वृद्धि होने लगी है।",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80"
    }
  ];

  const initiatives = [
    "जैविक खेती",
    "समूह आधारित विपणन",
    "बीज एवं खाद की सामूहिक आपूर्ति",
    "फसल प्रसंस्करण यूनिट"
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
              प्रचलित समाचार
            </h1>
            <p className="text-sm text-gray-600 font-serif italic mt-2">
              सहकार भारती की गतिविधियाँ
            </p>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white border-b-2 border-gray-300">
        <div className="max-w-7xl mx-auto">
          <div className="relative border-4 border-gray-900">
            <img 
              src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1400&q=80" 
              alt="Cooperation" 
              className="w-full h-96 object-cover grayscale-[30%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
              <div className="p-8 w-full">
                <div className="w-32 h-1 bg-gradient-to-r from-[#FFF861] to-[#FFCA61] mb-4"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-white font-serif">
                  सहकारिता आंदोलन की प्रमुख खबरें
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-8 px-4 bg-white border-b-2 border-gray-300">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-[#FFF861] to-[#FFCA61] p-6 border-2 border-gray-900">
            <p className="text-base text-gray-900 leading-relaxed text-justify font-serif">
              सहकारिता आंदोलन को नई दिशा देने और समाज के हर वर्ग तक सहकार की भावना पहुँचाने के उद्देश्य से सहकार भारती लगातार सक्रिय भूमिका निभा रही है। देशभर में सहकारी संगठनों, किसानों, ग्रामीण उद्यमियों और युवा वर्ग के बीच सहकारिता आधारित विकास को बढ़ावा देने के लिए कई महत्वपूर्ण कदम उठाए जा रहे हैं।
            </p>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12 px-4 bg-[#fefaf5] border-b-2 border-gray-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <div
                key={item.id}
                className="bg-white border-2 border-gray-300 hover:border-[#FFCA61] transition-all overflow-hidden"
              >
                <div className="relative h-52 border-b-2 border-gray-300">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all"
                  />
                  <div className="absolute bottom-3 left-3">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#FFF861] to-[#FFCA61] shadow-md">
                      <div className="text-gray-900 scale-75">
                        {item.icon}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight font-serif border-b-2 border-gray-200 pb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed text-justify font-serif">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Farmer Initiatives Section */}
      <section className="py-12 px-4 bg-white border-b-2 border-gray-300">
        <div className="max-w-7xl mx-auto">
          <div className="border-4 border-gray-900 overflow-hidden">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1400&q=80" 
                alt="Farmers" 
                className="w-full h-64 object-cover grayscale-[30%]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFF861]/95 via-[#FFCA61]/95 to-[#FFF861]/95"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif text-center border-b-4 border-gray-900 pb-3 px-6">
                  किसान सहकारी पहल
                </h2>
              </div>
            </div>
            <div className="bg-white p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {initiatives.map((initiative, index) => (
                  <div
                    key={index}
                    className="border-2 border-gray-300 p-4 hover:border-[#FFCA61] transition-all"
                  >
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#FFF861] to-[#FFCA61] flex items-center justify-center font-bold text-lg text-gray-900 mr-4">
                        {index + 1}
                      </div>
                      <p className="text-gray-900 font-bold text-sm font-serif">
                        {initiative}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Commitment Section */}
      <section className="py-12 px-4 bg-[#fefaf5]">
        <div className="max-w-7xl mx-auto">
          <div className="border-4 border-gray-900 bg-white">
            <div className="bg-gradient-to-r from-[#FFF861] to-[#FFCA61] p-6 border-b-2 border-gray-900">
              <div className="flex items-center justify-center gap-3">
                <Heart className="w-8 h-8 text-gray-900" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif text-center">
                  सामाजिक सरोकार और राष्ट्रनिर्माण
                </h2>
              </div>
            </div>
            <div className="p-8">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1400&q=80" 
                  alt="Social Unity" 
                  className="w-full h-64 object-cover grayscale-[20%] border-2 border-gray-300 mb-6"
                />
              </div>
              <p className="text-base text-gray-800 leading-relaxed text-justify font-serif max-w-5xl mx-auto">
                सहकार भारती केवल आर्थिक सहकारिता तक सीमित नहीं है, बल्कि सामाजिक समरसता, राष्ट्रीय एकता, पर्यावरण संरक्षण और जनकल्याण के कार्यों में भी अग्रणी भूमिका निभा रही है।
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}