import React, {useState, useEffect} from "react";
import axios from 'axios'
import { Link } from 'react-router-dom'
const NewsComponent = () => {
  const [news, setNews] = useState([]);
  const fetchNews = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/data_change");
      const data = await response.json();
      console.log(data)
      setNews(data);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <div className="widget popular-feeds">
      <h5 className="widget-title">Trending News</h5>
      <div className="popular-feed-loop">
        {news.map((news, index)=>(
          <div key={index} className="single-popular-feed">
          <div className="feed-desc">
            <h6 className="post-title">
              <Link to={`/newsDetail/${news.id}`}>
                {news.title}
              </Link>
            </h6>
            <span className="time">
              <i className="lni lni-calendar" /> {news.scrapedAt}
            </span>
          </div>
        </div>
          

        ))}
        
        
        
      </div>
    </div>
  );
};

export default NewsComponent;
