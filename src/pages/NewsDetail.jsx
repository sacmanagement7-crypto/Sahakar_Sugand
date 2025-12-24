import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Calendar, ArrowLeft, User, MapPin } from "lucide-react";
import { getNewsById } from "../service/axios";

export default function NewsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await getNewsById(id);
        setNews(res.data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-amber-50 py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="h-10 w-32 bg-gray-200 mb-6 animate-pulse" />
          <div className="h-16 bg-gray-200 mb-4 animate-pulse" />
          <div className="h-96 bg-gray-200 mb-6 animate-pulse" />
        </div>
      </div>
    );
  }

  if (!news) {
    return (
      <div className="min-h-screen bg-amber-50 flex items-center justify-center">
        <p className="text-gray-600 text-lg">समाचार नहीं मिला</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Newspaper Header */}
      <div className="bg-white border-b-4 border-black">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="text-center border-b-2 border-black pb-4 mb-4">
            <h1 className="text-5xl md:text-7xl font-serif font-black tracking-tight">
              नवीनतम समाचार
            </h1>
            <div className="flex justify-center items-center gap-4 mt-2 text-sm">
              <span className="font-semibold">लखनऊ, उत्तर प्रदेश</span>
              <span>•</span>
              <span>{new Date().toLocaleDateString("hi-IN", { 
                weekday: "long", 
                year: "numeric", 
                month: "long", 
                day: "numeric" 
              })}</span>
            </div>
          </div>
          
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-700 hover:text-black font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>वापस जाएं</span>
          </button>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <article className="bg-white shadow-lg border-2 border-gray-300">
          {/* Article Header */}
          <div className="border-b-4 border-black px-8 pt-8 pb-6">
            {/* Category Tag */}
            <div className="inline-block bg-black text-white px-4 py-1 text-xs font-bold uppercase tracking-wider mb-4">
              विशेष रिपोर्ट
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl font-serif font-black leading-tight mb-6">
              {news.title}
            </h1>

            {/* Byline */}
            <div className="flex flex-wrap items-center gap-6 text-sm border-t border-b border-gray-300 py-4">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span className="font-semibold">
                  {news.author || "समाचार संवाददाता"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>
                  {new Date(news.createdAt).toLocaleDateString("hi-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>लखनऊ</span>
              </div>
            </div>
          </div>

          {/* Featured Images */}
          {news.featuredImages?.length > 0 && (
            <div className="px-8 pt-6">
              <div className={`${news.featuredImages.length === 1 ? "" : "grid md:grid-cols-2 gap-4"}`}>
                {news.featuredImages.map((img, i) => (
                  <figure key={i} className="mb-6">
                    <img
                      src={img}
                      alt={news.title}
                      className="w-full border-2 border-gray-800"
                    />
                    <figcaption className="text-xs text-gray-600 mt-2 italic text-center">
                      चित्र {i + 1}: {news.title}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          )}

          {/* Article Body */}
          <div className="px-8 pb-8">
            {/* Drop Cap Style First Letter */}
            <div
              className="newspaper-content font-serif text-gray-900 text-lg leading-relaxed"
              dangerouslySetInnerHTML={{ __html: news.content }}
              style={{
                columnCount: window.innerWidth > 768 ? 2 : 1,
                columnGap: '3rem',
                textAlign: 'justify'
              }}
            />
          </div>

          {/* Article Footer */}
          <div className="border-t-2 border-black px-8 py-4 bg-gray-50">
            <p className="text-sm text-gray-600 italic text-center">
              समाचार का अंत
            </p>
          </div>
        </article>

        {/* Advertisement Style Box */}
        <div className="mt-8 bg-white border-4 border-black p-6 text-center">
          <p className="text-xs uppercase tracking-widest mb-2">विज्ञापन</p>
          <p className="text-2xl font-serif font-bold">
            अधिक समाचार के लिए हमें फॉलो करें
          </p>
        </div>
      </div>

      <style>{`
        .newspaper-content p:first-of-type::first-letter {
          float: left;
          font-size: 4rem;
          line-height: 3.5rem;
          padding-right: 0.5rem;
          font-weight: bold;
          font-family: Georgia, serif;
        }
        
        .newspaper-content p {
          margin-bottom: 1rem;
          hyphens: auto;
        }
        
        .newspaper-content h1,
        .newspaper-content h2,
        .newspaper-content h3 {
          font-family: Georgia, serif;
          font-weight: bold;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          break-after: avoid;
        }
        
        .newspaper-content h2 {
          font-size: 1.5rem;
          border-bottom: 2px solid black;
          padding-bottom: 0.25rem;
        }
        
        .newspaper-content h3 {
          font-size: 1.25rem;
          font-style: italic;
        }
        
        .newspaper-content blockquote {
          border-left: 4px solid black;
          padding-left: 1rem;
          margin: 1.5rem 0;
          font-style: italic;
          background: #f9f9f9;
          padding: 1rem;
        }
        
        .newspaper-content strong {
          font-weight: 700;
        }
        
        .newspaper-content a {
          color: #1a1a1a;
          text-decoration: underline;
        }
        
        .newspaper-content ul,
        .newspaper-content ol {
          margin-left: 1.5rem;
          margin-bottom: 1rem;
        }
        
        .newspaper-content li {
          margin-bottom: 0.25rem;
        }
      `}</style>
    </div>
  );
}