import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, ArrowRight, Clock, TrendingUp } from "lucide-react";
import { getNews } from "../service/axios";

export default function NewsList() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await getNews();
        setNews(res.data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  const getTimeAgo = (date) => {
    const now = new Date();
    const newsDate = new Date(date);
    const diffMs = now - newsDate;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 60) return `${diffMins} मिनट पहले`;
    if (diffHours < 24) return `${diffHours} घंटे पहले`;
    return `${diffDays} दिन पहले`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl animate-pulse" />
            <div className="h-8 w-48 bg-slate-700 rounded-lg animate-pulse" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-slate-800 rounded-2xl overflow-hidden animate-pulse">
                <div className="h-48 bg-slate-700" />
                <div className="p-6 space-y-3">
                  <div className="h-4 bg-slate-700 rounded w-1/3" />
                  <div className="h-6 bg-slate-700 rounded" />
                  <div className="h-4 bg-slate-700 rounded" />
                  <div className="h-4 bg-slate-700 rounded w-2/3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/20">
              <TrendingUp className="w-6 h-6 text-slate-900" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
              📰 नवीनतम समाचार
            </h1>
          </div>
          <p className="text-slate-400 ml-16">आज की सभी महत्वपूर्ण खबरें एक जगह</p>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <div
              key={item._id}
              onClick={() => navigate(`/news/${item._id}`)}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-1 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              {item.featuredImages?.[0] && (
                <div className="relative h-48 overflow-hidden bg-slate-700">
                  <img
                    src={item.featuredImages[0]}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60" />
                  
                  {/* Time Badge */}
                  <div className="absolute top-3 right-3 bg-slate-900/90 backdrop-blur-sm text-amber-400 px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 border border-amber-500/30">
                    <Clock className="w-3 h-3" />
                    {getTimeAgo(item.createdAt)}
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                {/* Date */}
                <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(item.createdAt).toLocaleDateString("hi-IN")}</span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h2>

                {/* Excerpt */}
                <p className="text-slate-300 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {item.content.replace(/<[^>]+>/g, "").slice(0, 120)}...
                </p>

                {/* Read More Button */}
                <div className="flex items-center gap-2 text-sm font-bold text-amber-400 group-hover:text-amber-300 transition-colors">
                  <span>पूरी खबर पढ़ें</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Bottom Accent */}
              <div className="h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {news.length === 0 && !loading && (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-12 h-12 text-slate-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-300 mb-2">
              कोई समाचार उपलब्ध नहीं है
            </h3>
            <p className="text-slate-500">कृपया बाद में फिर से जांचें</p>
          </div>
        )}
      </div>
    </div>
  );
}