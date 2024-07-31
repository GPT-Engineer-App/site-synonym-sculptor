const NewsCard = ({ title, image, category, timeAgo }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <img src={image} alt={title} className="w-full h-40 object-cover mb-2" />
    {category && timeAgo && (
      <div className="text-sm text-gray-600 mb-1">
        {category} • {timeAgo}
      </div>
    )}
    <h3 className="text-xl font-bold">{title}</h3>
  </div>
);

export default NewsCard;
