import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Calendar, User, TrendingUp, Users, Award, Newspaper, ArrowRight, Clock, Lock, Smartphone, Megaphone, BookOpen, Sprout, FileText } from "lucide-react";
import { aboutGet, activityGet, getNews, heroSlideGet, magazineGet } from "../service/axios";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [userEmail, setUserEmail] = useState('');
  const [allMagazines, setAllMagazines] = useState([]);
  const [heroSlides, setHeroSlides] = useState([]);
  const [popularContent, setPopularContent] = useState([]);
  const [aboutContent, setAboutContent] = useState([]);
  const [latestNews, setLatestNews] = useState([]);

  useEffect(() => {
    const storedEmail = localStorage.getItem("subscriberEmail");
    if (storedEmail) {
      setUserEmail(storedEmail);
    }
  }, []);

  const Navigate = useNavigate();

  const iconMap = {
    Smartphone,
    Megaphone,
    BookOpen,
    Sprout,
    Award,
    Users,
    FileText,
  };

  useEffect(() => {
    const fetchMagazines = async () => {
      try {
        const res = await magazineGet();
        setAllMagazines(res.data.data[0]);
      } catch (error) {
        console.error(error);
      }
    }
    fetchMagazines();
  }, []);


  const handleSubscribe = () => {
    alert("🌼 स्वागत है आपका सहकार सुगंध में…");
  };

  useEffect(() => {
    const fetchHeroSlides = async () => {
      try {
        const res = await heroSlideGet();
        if (res.data.success) {
          setHeroSlides(res.data.data);
        }
      } catch (error) {
        console.error("Failed to fetch hero slides", error);
      }
    };

    fetchHeroSlides();
  }, []);

  useEffect(() => {
    const fetchLatestNews = async () => {
      try {
        const res = await getNews();
        setLatestNews(res.data.data.slice(0, 6));
      }
      catch (error) {
        console.log(error);
      }
    }
    fetchLatestNews();
  }, [])
  console.log(latestNews);

  useEffect(() => {
    if (heroSlides.length === 0) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroSlides]);

  useEffect(() => {
    const fetchPopular = async () => {
      try {
        const res = await activityGet();
        const firstSix = res.data.data.slice(0, 3);
        setPopularContent(firstSix);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPopular();
  }, []);

  const stateNews = [
    { state: "उत्तर प्रदेश", news: "लखनऊ में सहकारी सम्मेलन सफल" },
    { state: "महाराष्ट्र", news: "मुंबई में किसान मेला का आयोजन" },
    { state: "गुजरात", news: "अहमदाबाद में डेयरी सहकारिता पर कार्यशाला" },
    { state: "मध्य प्रदेश", news: "भोपाल में ग्रामीण बैंकिंग सुविधा विस्तार" }
  ];

  useEffect(() => {
    const getAboutUs = async () => {
      try {
        const res = await aboutGet();
        if (res.data.success) {
          setAboutContent(res.data.data.introduction);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getAboutUs();
  }, [])

  console.log(aboutContent);

  const nextSlide = () => {
    if (heroSlides.length === 0) return;
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    if (heroSlides.length === 0) return;
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const limitWords = (html, limit = 50) => {
    if (!html) return "";
    const text = html.replace(/<[^>]*>/g, "");
    const words = text.split(/\s+/);
    if (words.length <= limit) return text;
    return words.slice(0, limit).join(" ") + "...";
  };


  return (
    <div className="min-h-screen bg-[#fefaf5]">
      <section className="relative bg-white border-b-2 border-gray-300">
        <div className="max-w-7xl mx-auto">
          {/* HERO SLIDER */}
          <div className="relative h-[500px] overflow-hidden border-4 border-gray-900">
            {heroSlides.length > 0 &&
              heroSlides.map((slide, index) => (
                <div
                  key={slide._id}
                  className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover grayscale-[30%]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70"></div>

                  <div className="absolute inset-0 flex items-end p-8 md:p-12">
                    <div className="space-y-4">
                      <div className="inline-block bg-gradient-to-r from-[#FFF861] to-[#FFCA61] text-gray-900 px-4 py-1 text-xs font-bold uppercase">
                        ब्रेकिंग न्यूज़
                      </div>

                      <h2 className="text-3xl md:text-5xl font-bold text-white font-serif border-l-4 border-[#FFCA61] pl-4">
                        {slide.title}
                      </h2>

                      <p className="text-lg text-gray-200 font-serif">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

            {/* Arrows */}
            <button onClick={prevSlide} className="absolute left-4 top-1/2 z-10 bg-white/90 p-2">
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button onClick={nextSlide} className="absolute right-4 top-1/2 z-10 bg-white/90 p-2">
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 ${index === currentSlide ? "w-8 bg-[#FFCA61]" : "w-2 bg-white/70"
                    } transition-all`}
                />
              ))}
            </div>
            <section className="py-10 relative z-0">
              <div className="max-w-5xl mx-auto flex justify-center md:justify-end px-3 md:px-0 mt-[-120px] md:mt-0 relative z-20">
                <div className="bg-white w-80 rounded-lg overflow-hidden border-2 border-gray-300 shadow-xl">
                  <div className="bg-gradient-to-r from-[#FFF861] to-[#FFCA61] border-b-4 border-gray-900 p-3 flex justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 font-serif">{allMagazines?.title || "Title not available"}</h3>
                      <p className="text-[10px] text-gray-700">मासिक पत्रिका</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center justify-end text-xs font-bold text-gray-900">
                        <Calendar className="w-3 h-3 mr-1" /> {allMagazines?.createdAt ? new Date(allMagazines.createdAt).toLocaleDateString("hi-IN") : "Date not available"}
                      </div>
                      <p className="text-[10px] text-gray-700">{allMagazines?.issueNumber || "अंक N/A"}</p>
                    </div>
                  </div>
                  <div className="relative group cursor-pointer" onClick={() => {
                    if (!userEmail) {
                      window.location.href = "/magzines";
                    } else if (allMagazines?.pdfUrl) {
                      window.open(allMagazines.pdfUrl, "_blank");
                    }
                  }}>
                    <img src={allMagazines?.coverImageUrl || "/placeholder-image.png"} className="w-full h-66 object-cover" alt="Magazine Cover" />
                    {!userEmail ? (
                      <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 text-xs rounded-full shadow-lg flex items-center gap-1">
                        <Lock className="w-3 h-3" /> लॉक्ड
                      </div>
                    ) : (
                      <div className="absolute top-3 right-3 bg-green-600 text-white px-3 py-1 text-xs rounded-full shadow-lg">✓ सक्रिय</div>
                    )}
                  </div>
                  <div className="bg-gray-900 p-5 border-t-4 border-gray-900">
                    <button onClick={() => {
                      if (!userEmail) {
                        window.location.href = "/magzines";
                        return;
                      } else if (allMagazines?.pdfUrl) {
                        window.open(allMagazines.pdfUrl, "_blank");
                      }
                    }} className="w-full bg-[#FFCA61] text-gray-900 font-bold py-3 border-2 border-gray-900">
                      📖 पूर्ण अंक पढ़ें
                    </button>
                    <p className="text-center text-[11px] text-[#FFCA61] mt-3">{allMagazines?.specialNote || "विशेष: इस अंक में पढ़ें महत्वपूर्ण जानकारी!"}</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      {/* Introduction Section */}
      <section className="py-12 px-4 bg-white border-b-2 border-gray-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif border-b-2 border-gray-900 pb-2">
                {aboutContent.title}
              </h3>
              <div className="space-y-3 text-justify">
                {aboutContent.paragraphs?.map((para, index) => (
                  <p className="text-sm text-gray-800 leading-relaxed font-serif">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            <div className="border-4 border-gray-900">
              <img src={aboutContent.image} alt="Team Collaboration" className="w-full h-80 object-cover grayscale-[20%]" />
              <div className="bg-gradient-to-r from-[#FFF861] to-[#FFCA61] p-4 border-t-2 border-gray-900">
                <div className="flex items-center justify-center space-x-4">
                  <BookOpen className="w-8 h-8 text-gray-900" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 font-serif">40+</div>
                    <div className="text-xs text-gray-900 font-serif uppercase">वर्षों का अनुभव</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-[#fefaf5] border-b-2 border-gray-300">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 pb-3 border-b-4 border-gray-900">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif flex items-center">
              <Award className="w-6 h-6 mr-2 text-[#FFCA61]" />
              सहकारी गतिविधियाँ
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {popularContent.map((content) => {
              const IconComponent = iconMap[content.icon];

              return (
                <div key={content._id} className="bg-white border-2 border-gray-300 p-6 hover:border-[#FFCA61] transition-all cursor-pointer" onClick={() => Navigate("/lokpriya")}>
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${content.color} flex items-center justify-center`}>
                      {IconComponent && (
                        <IconComponent className="w-6 h-6 text-gray-900" />
                      )}
                    </div>

                    {content.isActive && (
                      <span className="bg-green-600 text-white px-2 py-1 text-xs font-bold uppercase">
                        सक्रिय
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 font-serif border-b border-gray-200 pb-2">
                    {content.title}
                  </h3>
                  <div className="text-sm text-gray-700 leading-relaxed font-serif text-justify">
                    {limitWords(content.description, 50)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* Latest News Section */}
      <section className="py-14 px-4 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto">

          {/* Bulletin Style News */}
          <div className="border-4 border-gray-900 bg-white shadow-lg">

            {/* Header */}
            <div className="bg-gradient-to-r from-[#FFF861] to-[#FFCA61] p-5 border-b-2 border-gray-900">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif flex items-center">
                <Newspaper className="w-7 h-7 mr-3" />
                नवीनतम समाचार
              </h2>
              <p className="text-sm text-gray-700 mt-1 font-serif">
                देश और सहकारिता जगत की ताज़ा खबरें
              </p>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="space-y-4">
                {latestNews.map((news, idx) => (
                  <div key={idx} className="group flex items-start gap-4 p-4 border border-gray-200 hover:border-[#FFCA61] hover:bg-[#fefaf5] transition-all cursor-pointer rounded-md" onClick={() => Navigate(`/news/${news._id}`)}>
                    <div className="flex-shrink-0 w-1 bg-[#FFCA61] rounded-full mt-1 group-hover:h-full transition-all"></div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 font-serif group-hover:text-gray-950 leading-snug">
                        {news.title}
                      </h3>
                      <p className="text-sm text-gray-700 mt-1 leading-relaxed">
                        {limitWords(news.content, 50)}…
                      </p>
                      <div className="mt-2 text-xs text-gray-500 font-serif flex items-center gap-2">
                        <span className="inline-block w-1 h-1 bg-gray-400 rounded-full"></span>
                        <span>{news.createdAt}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button onClick={() => Navigate("/news")} className="mt-8 w-full bg-gray-900 text-[#FFCA61] font-bold py-3 hover:bg-gray-800 transition-all uppercase text-sm tracking-wider rounded-sm shadow-md">
                सभी नवीनतम समाचार देखें
              </button>
            </div>
          </div>
        </div>
      </section>
    </div >
  );
}