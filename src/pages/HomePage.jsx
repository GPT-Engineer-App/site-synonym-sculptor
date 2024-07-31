import { useState } from "react";
import NewsCard from "../components/NewsCard";
import LiveNews from "../components/LiveNews";
import SidebarNews from "../components/SidebarNews";
import TipSection from "../components/TipSection";
import OlympicsSection from "../components/OlympicsSection";

const HomePage = () => {
  const [news] = useState([
    {
      id: 1,
      title: "Moské-angrepet: - Blindt raseri",
      image: "/placeholder.svg",
      category: "Barnedrapene i Southport",
      timeAgo: "55 min siden",
    },
    {
      id: 2,
      title: "- Veldig ubehagelig",
      image: "/placeholder.svg",
    },
    {
      id: 3,
      title: "Helten som ikke fikset livet",
      image: "/placeholder.svg",
    },
  ]);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <LiveNews />
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {news.map((item) => (
              <NewsCard key={item.id} {...item} />
            ))}
          </div>
        </div>
        <div>
          <SidebarNews />
          <TipSection />
        </div>
      </div>
      <OlympicsSection />
    </div>
  );
};

export default HomePage;
