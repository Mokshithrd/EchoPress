import image from "../assets/news.jpg";

const NewsItem = ({ title, description, src, url }) => {
    return (
        <div className="card bg-dark text-light shadow-lg rounded overflow-hidden mx-2 my-2 px-3 px-3">
            <img src={src ? src : image} className="card-img-top img-fluid" alt="news" />
            <div className="card-body">
                <h5 className="card-title">{title ? title.slice(0, 50) + "..." : "Untitled"}</h5>
                <p className="card-text">{description ? description.slice(0, 80) + "..." : "No description available."}</p>
                <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-100">Read More</a>
            </div>
        </div>
    );
};

export default NewsItem;
