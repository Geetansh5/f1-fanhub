// src/components/News.js

import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import './News.css';

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/everything?q=f1&apiKey=680f3656ee71462692f76cd8e8abc576'
        );
        setNews(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="news-container">
      <h1 className="news-title">F1 News</h1>
      <div className="news-grid">
        {news.map((article, index) => (
          <div key={index} className="news-card">
            {article.urlToImage && (
              <img src={article.urlToImage} alt={article.title} className="news-image" />
            )}
            <div className="news-content">
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="news-link"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;

