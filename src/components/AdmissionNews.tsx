import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import "../styles/AdmissionNews.css";

interface NewsItem {
  id: number;
  title: string;
  date: string;
}

const AdmissionNews: React.FC = () => {
  const news: NewsItem[] = [
    {
      id: 1,
      title: "IIT JEE Advanced 2024 dates announced",
      date: "2024-03-15",
    },
    {
      id: 2,
      title: "NEET UG 2024 application process begins",
      date: "2024-03-10",
    },
    {
      id: 3,
      title: "DU announces new admission policy for 2024",
      date: "2024-03-05",
    },
    {
      id: 4,
      title: "BITS Pilani opens admissions for 2024",
      date: "2024-03-20",
    },
    // Add more news items as needed
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const scrollAnimation = async () => {
      if (containerRef.current) {
        const containerHeight = containerRef.current.offsetHeight;
        const contentHeight = containerRef.current.scrollHeight;

        await controls.start({
          y: [-containerHeight, -contentHeight],
          transition: {
            y: {
              duration: news.length * 5, // Adjust speed here
              ease: "linear",
              repeat: Infinity,
            },
          },
        });
      }
    };

    scrollAnimation();
  }, [controls, news.length]);

  return (
    <div className="admission-news">
      <h2>Latest Admission News</h2>
      <div className="news-container" ref={containerRef}>
        <motion.div animate={controls}>
          {[...news, ...news].map((item, index) => (
            <div key={`${item.id}-${index}`} className="news-item">
              <span className="news-title">{item.title}</span>
              <span className="news-date">{item.date}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AdmissionNews;
