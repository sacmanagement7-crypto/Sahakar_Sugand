import React, { useEffect, useState } from "react";
import { BookOpen, Users, Target, TrendingUp, Award, Heart, CheckCircle, Lightbulb, Globe, Handshake, Newspaper } from "lucide-react";
import { aboutGet } from "../service/axios";

export default function AboutUs() {
  const [header, setHeader] = useState({});
  const [heroSlides, setHeroSlides] = useState({});
  const [Introduction, setIntroduction] = useState({});
  const [pourpose, setPurpose] = useState({});
  const [value, setValues] = useState([]);
  const [targetAudience, setTargetAudience] = useState([]);
  const [features, setFeatures] = useState([]);

  const values = [
    { icon: Handshake, title: "सहयोग" },
    { icon: Users, title: "सहभागिता" },
    { icon: CheckCircle, title: "पारदर्शिता" },
    { icon: TrendingUp, title: "सामूहिक विकास" }
  ];

  const commitments = [
    { icon: CheckCircle, title: "विश्वसनीयता", desc: "हर खबर, हर तथ्य को जांच-परख कर प्रकाशित करते हैं" },
    { icon: Lightbulb, title: "तथ्यपरकता", desc: "डेटा और शोध पर आधारित सामग्री प्रदान करते हैं" },
    { icon: Heart, title: "सकारात्मक पत्रकारिता", desc: "समाधान-केंद्रित और रचनात्मक दृष्टिकोण अपनाते हैं" }
  ];

  useEffect(() => {
    const fetchAboutUs = async () => {
      try {
        const res = await aboutGet();
        console.log(res.data.data);
        setHeader(res.data.data.header);
        setHeroSlides(res.data.data.hero);
        setIntroduction(res.data.data.introduction);
        setPurpose(res.data.data.purpose);
        setValues(res.data.data.values);
        setTargetAudience(res.data.data.audience);
        setFeatures(res.data.data.features);
      } catch (error) {
        console.error("Failed to fetch About Us", error);
      }
    };
    fetchAboutUs();
  }, []);
  console.log(value);
  return (
    <div className="min-h-screen bg-[#fefaf5]">
      <div className="bg-white border-b-4 border-double border-gray-900 py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center border-b-2 border-gray-900 pb-4">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[#FFCA61] to-transparent"></div>
              <Newspaper className="w-8 h-8 text-[#FFCA61]" />
              <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[#FFCA61] to-transparent"></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif tracking-tight">
              {header.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#FFF861] via-[#FFCA61] to-[#FFF861] border-b-4 border-gray-900 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight font-serif">
              {heroSlides.title}
            </h2>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 px-4 bg-white border-b-2 border-gray-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif border-b-2 border-gray-900 pb-2">
                {Introduction.title}
              </h3>
              <div className="space-y-3 text-justify">
                {Introduction.paragraphs?.map((para, index) => (
                  <p className="text-sm text-gray-800 leading-relaxed font-serif">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            <div className="border-4 border-gray-900">
              <img src={Introduction.image} alt="Team Collaboration" className="w-full h-80 object-cover grayscale-[20%]" />
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

      {/* Our Purpose Section */}
      <section className="py-12 px-4 bg-[#fefaf5] border-b-2 border-gray-300">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-6">
            <div className="inline-block bg-gradient-to-r from-[#FFF861] to-[#FFCA61] text-gray-900 px-3 py-1 text-xs font-bold uppercase tracking-wider border border-gray-900 mb-4">
              हमारा उद्देश्य
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif border-b-2 border-gray-900 pb-2 inline-block">
              {pourpose?.title}
            </h3>
          </div>

          {/* Content Box */}
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#FFF861] to-[#FFCA61] border-4 border-gray-900 p-8 text-gray-900 text-center">

            {/* Icon */}
            <div className="text-5xl mb-4">
              {pourpose?.icon || "🎯"}
            </div>

            {/* Description */}
            {pourpose?.description
              ?.split("\n\n")
              .map((text, index) =>
                index === 0 ? (
                  <p
                    key={index}
                    className="text-xl md:text-2xl font-bold leading-relaxed mb-4 font-serif"
                  >
                    {text.replace(/"/g, "")}
                  </p>
                ) : (
                  <p
                    key={index}
                    className="text-sm leading-relaxed font-serif"
                  >
                    {text}
                  </p>
                )
              )}
          </div>
        </div>
      </section>


      {/* Core Values */}
      <section className="py-12 px-4 bg-white border-b-2 border-gray-300">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block bg-gradient-to-r from-[#FFF861] to-[#FFCA61] text-gray-900 px-3 py-1 text-xs font-bold uppercase tracking-wider border border-gray-900 mb-4">
              हमारे मूल्य
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif border-b-2 border-gray-900 pb-2 inline-block mb-2">सहकारी मूल्य</h3>
            <p className="text-sm text-gray-600 font-serif">जो हमें परिभाषित करते हैं</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {value.map((val, idx) => (
              <div key={idx} className="border-2 border-gray-300 p-6 text-center hover:border-[#FFCA61] transition-all bg-white">
                <div className="w-10 h-10 bg-gradient-to-br from-[#FFF861] to-[#FFCA61] flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl color-dark">{val.icon}</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 font-serif">{val.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-12 px-4 bg-[#fefaf5] border-b-2 border-gray-300">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block bg-gradient-to-r from-[#FFF861] to-[#FFCA61] text-gray-900 px-3 py-1 text-xs font-bold uppercase tracking-wider border border-gray-900 mb-4">
              हम किसके लिए हैं?
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif border-b-2 border-gray-900 pb-2 inline-block mb-2">हमारे पाठक</h3>
            <p className="text-sm text-gray-600 font-serif">विविध समुदायों को जोड़ने वाला एक साझा मंच</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {targetAudience.map((audience, idx) => (
              <div key={idx} className="bg-white border-2 border-gray-300 p-4 text-center hover:border-[#FFCA61] transition-all">
                <div className="w-8 h-8 text-xl bg-gradient-to-br from-[#FFF861] to-[#FFCA61] flex items-center justify-center mx-auto mb-3">
                  {audience.icon}
                </div>
                <h4 className="text-sm font-bold text-gray-900 mb-1 font-serif">{audience.title}</h4>
                <p className="text-xs text-gray-600 font-serif">{audience.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-12 px-4 bg-white border-b-2 border-gray-300">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block bg-gradient-to-r from-[#FFF861] to-[#FFCA61] text-gray-900 px-3 py-1 text-xs font-bold uppercase tracking-wider border border-gray-900 mb-4">
              हमारी प्रतिबद्धता
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif border-b-2 border-gray-900 pb-2 inline-block mb-2">गुणवत्ता और विश्वास</h3>
            <p className="text-sm text-gray-600 max-w-3xl mx-auto font-serif">
              हम विश्वसनीयता, तथ्यपरकता और सकारात्मक पत्रकारिता के सिद्धांतों के साथ सहकारिता क्षेत्र की हर महत्वपूर्ण गतिविधि को आपके समक्ष लाने के लिए प्रतिबद्ध हैं।
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {commitments.map((commitment, idx) => (
              <div key={idx} className="border-2 border-gray-300 p-6 hover:border-[#FFCA61] transition-all bg-white">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FFF861] to-[#FFCA61] flex items-center justify-center mb-4">
                  <commitment.icon className="w-6 h-6 text-gray-900" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2 font-serif border-b border-gray-200 pb-2">{commitment.title}</h4>
                <p className="text-sm text-gray-700 leading-relaxed font-serif">{commitment.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 px-4 bg-[#fefaf5] border-b-2 border-gray-300">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif border-b-2 border-gray-900 pb-2 inline-block">क्यों चुनें सहकार सुगंध?</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start space-x-3 bg-white border border-gray-300 p-4 hover:border-[#FFCA61] transition-all">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-[#FFCA61]" />
                </div>
                <p className="text-sm text-gray-800 font-serif">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-[#FFF861] via-[#FFCA61] to-[#FFF861] border-t-4 border-double border-gray-900">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-24 h-[3px] bg-gray-900"></div>
            <Users className="w-6 h-6 text-gray-900" />
            <div className="w-24 h-[3px] bg-gray-900"></div>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif">हमारे साथ जुड़ें</h3>
          <p className="text-base text-gray-900 leading-relaxed font-serif">
            सहकारिता के माध्यम से समाज में सकारात्मक बदलाव लाने की यात्रा में हमारे भागीदार बनें
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="bg-gray-900 text-[#FFCA61] px-8 py-3 font-bold hover:bg-gray-800 transition-all uppercase tracking-wider text-sm">
              सब्सक्राइब करें
            </button>
            <button className="bg-white text-gray-900 px-8 py-3 font-bold border-2 border-gray-900 hover:bg-gray-100 transition-all uppercase tracking-wider text-sm">
              संपर्क करें
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}