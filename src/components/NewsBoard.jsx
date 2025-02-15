import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_NEWS_API}`;
        fetch(url).then(response => response.json()).then(data => setArticles(data.articles));
    }, [category]);

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Latest <span className="badge bg-danger">News</span></h2>
            <div className="row">
                {articles.map((news, idx) => (
                    <div key={idx} className="col-lg-4 col-md-6 col-sm-12 mb-3">
                        <NewsItem title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsBoard;
