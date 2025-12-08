import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Calendar, User, TrendingUp, Users, Award, Newspaper, ArrowRight, Clock } from "lucide-react";
import mazineBanner from "../assets/magzine1.png";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSubscribe = () => {
    alert("🌼 स्वागत है आपका सहकार सुगंध में…");
  };

  const heroSlides = [
    {
      title: "आज की मुख्य खबर",
      description: "सहकारिता क्षेत्र में बड़ा बदलाव: नई राष्ट्रीय नीति की घोषणा",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=600&fit=crop"
    },
    {
      title: "सहकार भारती से जुड़ी ताज़ा अपडेट",
      description: "ग्रामीण विकास में नई पहल, 500+ गांवों को मिलेगा सीधा लाभ",
      image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1200&h=600&fit=crop"
    },
    {
      title: "राष्ट्रीय सहकारी नीति समाचार",
      description: "सहकारी समितियों के लिए विशेष पैकेज की घोषणा, किसानों को मिलेगी राहत",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1200&h=600&fit=crop"
    },
    {
      title: "प्रमुख राज्यों की ताज़ा घटनाएँ",
      description: "उत्तर प्रदेश में सहकारी बैंकों की नई शाखाएं खुलीं, लखनऊ में विशेष कार्यक्रम",
      image: "https://images.unsplash.com/photo-1509099863731-ef4bff19e808?w=1200&h=600&fit=crop"
    }
  ];

  const trendingNews = [
    {
      category: "सहकार भारती गतिविधियाँ",
      title: "सहकारिता को नई दिशा देने वाली पहलें",
      excerpt: "ग्रामीण विकास, महिला सशक्तिकरण, युवा नेतृत्व और सामुदायिक प्रगति से जुड़ी हर महत्वपूर्ण गतिविधि की ताज़ा झलकियाँ।",
      image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&h=300&fit=crop",
      time: "2 घंटे पहले"
    },
    {
      category: "सहकारी संस्थाओं की नई योजनाएँ",
      title: "किसानों के लिए अनोखी सुविधाएँ",
      excerpt: "सहकारी संस्थाओं की नई योजनाएँ अब और भी सशक्त! किसानों, कारीगरों और छोटे उद्यमियों के लिए अनोखी सुविधाएँ।",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop",
      time: "5 घंटे पहले"
    },
    {
      category: "कृषि व ग्रामीण विकास",
      title: "किसानों की उन्नति के नए अवसर",
      excerpt: "नई कृषि तकनीक और ग्रामीण विकास की ताज़ा खबरें। जानें सरकार की योजनाएँ और आधुनिक खेती के टिप्स।",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop",
      time: "1 दिन पहले"
    }
  ];

  const popularContent = [
    {
      icon: Users,
      title: "सप्ताह के शीर्ष नेता और उनके विचार",
      excerpt: "इस सप्ताह की प्रमुख सोच ने राजनीतिक और सामाजिक मुद्दों पर नई रोशनी डाली।",
      badge: "विशेष"
    },
    {
      icon: Newspaper,
      title: "विशेष साक्षात्कार",
      excerpt: "सहकारिता और समाज की अहम बातें सीधे सूत्रों से! जानें गहराई से।",
      badge: "एक्सक्लूसिव"
    },
    {
      icon: Award,
      title: "राजनीतिक विचार और शासन निर्णय",
      excerpt: "देश की राजनीति और शासन के फैसलों की ताज़ा जानकारी।",
      badge: "ट्रेंडिंग"
    }
  ];

  const latestNews = [
    { title: "सहकारी समितियों में डिजिटल भुगतान की नई सुविधा शुरू", time: "अभी अभी" },
    { title: "ग्रामीण महिलाओं के लिए स्व-रोजगार योजना की घोषणा", time: "30 मिनट पहले" },
    { title: "उत्तर प्रदेश में 100 नई सहकारी समितियों का उद्घाटन", time: "1 घंटा पहले" },
    { title: "जैविक खेती को बढ़ावा देने के लिए विशेष पैकेज", time: "2 घंटे पहले" },
    { title: "किसान क्रेडिट कार्ड योजना में नए बदलाव", time: "3 घंटे पहले" }
  ];

  const stateNews = [
    { state: "उत्तर प्रदेश", news: "लखनऊ में सहकारी सम्मेलन सफल" },
    { state: "महाराष्ट्र", news: "मुंबई में किसान मेला का आयोजन" },
    { state: "गुजरात", news: "अहमदाबाद में डेयरी सहकारिता पर कार्यशाला" },
    { state: "मध्य प्रदेश", news: "भोपाल में ग्रामीण बैंकिंग सुविधा विस्तार" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <div className="min-h-screen bg-[#fefaf5]">
      {/* Hero Banner with Slides */}
      <section className="relative bg-white border-b-2 border-gray-300">
        <div className="max-w-7xl mx-auto">
          <div className="relative h-[500px] overflow-hidden border-4 border-gray-900">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
              >
                <img src={slide.image} alt={slide.title} className="w-full h-full object-cover grayscale-[30%]" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70"></div>
                <div className="absolute inset-0 flex items-end p-8 md:p-12">
                  <div className="w-full space-y-4">
                    <div className="inline-block bg-gradient-to-r from-[#FFF861] to-[#FFCA61] text-gray-900 px-4 py-1 text-xs font-bold uppercase tracking-wider">
                      ब्रेकिंग न्यूज़
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight font-serif border-l-4 border-[#FFCA61] pl-4">
                      {slide.title}
                    </h2>
                    <p className="text-lg text-gray-200 leading-relaxed font-serif">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Magazine Banner - Top Right Side */}
            <div className="absolute top-4 right-4 w-80 border-4 border-gray-900 z-10 shadow-2xl bg-white">
              {/* Magazine Header */}
              <div className="bg-gradient-to-r from-[#FFF861] to-[#FFCA61] border-b-4 border-gray-900 p-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 font-serif">सहकार सुगंध</h3>
                    <p className="text-[10px] text-gray-700 font-serif">मासिक पत्रिका</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center justify-end text-xs font-bold text-gray-900 font-serif">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>दिसंबर 2025</span>
                    </div>
                    <p className="text-[10px] text-gray-700 font-serif">अंक 12</p>
                  </div>
                </div>
              </div>

              {/* Magazine Cover Image */}
              <div className="cursor-pointer hover:opacity-95 transition-opacity">
                <img
                  src={mazineBanner}
                  alt="सहकार सुगंध मैगज़ीन"
                  className="w-full h-[300px] object-contain"
                />

              </div>

              {/* Magazine Footer */}
              <div className="bg-gray-900 border-t-4 border-gray-900 p-3">
                <button className="w-full bg-gradient-to-r from-[#FFF861] to-[#FFCA61] text-gray-900 font-bold py-2 hover:opacity-90 transition-all uppercase text-xs tracking-wider border-2 border-gray-900">
                  📖 पूर्ण अंक पढ़ें
                </button>
                <p className="text-center text-[10px] text-[#FFCA61] mt-2 font-serif">
                  विशेष: उत्तर भारत की हवा खतरे में!
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 hover:bg-white transition-all z-10">
              <ChevronLeft className="w-5 h-5 text-gray-900" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 hover:bg-white transition-all z-10"
            >
              <ChevronRight className="w-5 h-5 text-gray-900" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 transition-all ${index === currentSlide ? 'bg-[#FFCA61] w-8' : 'bg-white/70 w-2'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Description Section */}
      <section className="py-8 px-4 bg-white border-b-2 border-gray-300">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-[#FFF861] to-[#FFCA61] p-6 border-2 border-gray-900">
            <p className="text-base text-gray-900 leading-relaxed text-justify font-serif">
              सहकारिता, ग्रामीण विकास और समाज से जुड़ी हर ताज़ा ख़बर का सबसे भरोसेमंद मंच। यहां आपको मिलेगा सहकार भारती की गतिविधियाँ, राष्ट्रीय सहकारी नीतियों से लेकर किसानों व ग्रामीण विकास तक की जीवंत और सटीक जानकारी। <strong>सहकार सुगंध</strong> के साथ जुड़े रहें और हर पल देश के हर कोने की महत्वपूर्ण खबरों से रूबरू हों।
            </p>
          </div>
        </div>
      </section>

      {/* Trending News */}
      <section className="py-12 px-4 bg-white border-b-2 border-gray-300">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6 pb-3 border-b-4 border-gray-900">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif flex items-center">
              <TrendingUp className="w-6 h-6 mr-2 text-[#FFCA61]" />
              प्रचलित समाचार
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {trendingNews.map((news, idx) => (
              <div key={idx} className="bg-white border-2 border-gray-300 hover:border-[#FFCA61] transition-all cursor-pointer">
                <div className="relative h-48 border-b-2 border-gray-300">
                  <img src={news.image} alt={news.title} className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all" />
                  <div className="absolute top-2 left-2">
                    <span className="bg-gradient-to-r from-[#FFF861] to-[#FFCA61] text-gray-900 px-2 py-1 text-xs font-bold uppercase">
                      {news.category}
                    </span>
                  </div>
                  <div className="absolute bottom-2 right-2 flex items-center space-x-1 text-white text-xs bg-black/70 px-2 py-1">
                    <Clock className="w-3 h-3" />
                    <span>{news.time}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 font-serif border-b border-gray-200 pb-2">
                    {news.title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed font-serif">{news.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular */}
      <section className="py-12 px-4 bg-[#fefaf5] border-b-2 border-gray-300">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 pb-3 border-b-4 border-gray-900">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif flex items-center">
              <Award className="w-6 h-6 mr-2 text-[#FFCA61]" />
              लोकप्रिय
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {popularContent.map((content, idx) => (
              <div key={idx} className="bg-white border-2 border-gray-300 p-6 hover:border-[#FFCA61] transition-all cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FFF861] to-[#FFCA61] flex items-center justify-center">
                    <content.icon className="w-6 h-6 text-gray-900" />
                  </div>
                  <span className="bg-gradient-to-r from-[#FFF861] to-[#FFCA61] text-gray-900 px-2 py-1 text-xs font-bold uppercase">
                    {content.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 font-serif border-b border-gray-200 pb-2">{content.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed font-serif">{content.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Bulletin Style News */}
            <div className="lg:col-span-2 border-4 border-gray-900 bg-white">
              <div className="bg-gradient-to-r from-[#FFF861] to-[#FFCA61] p-4 border-b-2 border-gray-900">
                <h2 className="text-2xl font-bold text-gray-900 font-serif flex items-center">
                  <Newspaper className="w-6 h-6 mr-2" />
                  ताज़ा ख़बर
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  {latestNews.map((news, idx) => (
                    <div key={idx} className="flex items-start space-x-3 pb-3 border-b border-gray-200 last:border-0 hover:bg-[#fefaf5] p-2 transition-colors cursor-pointer">
                      <div className="flex-shrink-0 w-2 h-2 bg-[#FFCA61] mt-2"></div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 text-sm font-serif">
                          {news.title}
                        </h4>
                        <p className="text-xs text-gray-600 mt-1 font-serif">{news.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="mt-6 w-full bg-gray-900 text-[#FFCA61] font-bold py-3 hover:bg-gray-800 transition-all uppercase text-sm tracking-wider">
                  सभी ताज़ा ख़बरें देखें
                </button>
              </div>
            </div>

            {/* State News */}
            <div className="border-4 border-gray-900 bg-white">
              <div className="bg-gradient-to-r from-[#FFF861] to-[#FFCA61] p-4 border-b-2 border-gray-900">
                <h3 className="text-xl font-bold text-gray-900 font-serif">राज्य की ताज़ा खबरें</h3>
              </div>
              <div className="p-4 space-y-3">
                {stateNews.map((item, idx) => (
                  <div key={idx} className="border-2 border-gray-300 p-3 cursor-pointer hover:border-[#FFCA61] transition-all">
                    <h4 className="font-bold text-gray-900 mb-1 text-sm font-serif">{item.state}</h4>
                    <p className="text-xs text-gray-700 font-serif">{item.news}</p>
                  </div>
                ))}
              </div>
              <div className="p-4 pt-0">
                <button className="w-full bg-gray-900 text-[#FFCA61] font-bold py-2 hover:bg-gray-800 transition-all uppercase text-xs tracking-wider">
                  सभी राज्य देखें
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-12 px-4 border-t-4 border-double border-gray-900 bg-gradient-to-r from-[#FFF861] via-[#FFCA61] to-[#FFF861]">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-24 h-[3px] bg-gray-900"></div>
            <Newspaper className="w-6 h-6 text-gray-900" />
            <div className="w-24 h-[3px] bg-gray-900"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif">न्यूज़लेटर सब्सक्राइब करें</h2>
          <p className="text-base text-gray-800 font-serif">
            हर दिन की महत्वपूर्ण खबरें सीधे आपके इनबॉक्स में पाएं
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-2xl mx-auto pt-4">
            <input
              type="email"
              placeholder="आपका ईमेल पता"
              className="w-full sm:flex-1 px-6 py-3 text-gray-800 focus:outline-none border-2 border-gray-900 font-serif"
            />
            <button
              className="bg-gray-900 text-[#FFCA61] px-8 py-3 font-bold hover:bg-gray-800 transition-all whitespace-nowrap uppercase tracking-wider text-sm"
              onClick={handleSubscribe}
            >
              सब्सक्राइब करें
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}