const ArticleCard = ({ article }) => {
  const { title, description, source, publishedAt, url, urlToImage } = article;
  const handleClick = ()=>{
    window.open(url);
  };
  return (
    <div className="bg-light-card dark:bg-dark-secondary p-4 rounded-3xl shadow-md cursor-pointer" onClick={handleClick}>
      <img src={urlToImage} alt="image" className='rounded-bl-full' />
      <h3 className="mb-4 text-lg font-serif font-extrabold text-black dark:text-gray-300">{title}</h3>
      <p className="mb-4 text-sm text-black dark:text-gray-300">{description ? description : "No description available"}</p>
      <p className="text-xs text-gray-600 dark:text-gray-400">Source: {source.name}</p>
      <p className="mb-8 text-xs text-gray-600 dark:text-gray-400">Published: {new Date(publishedAt).toLocaleDateString()}</p>
    </div>
  );
};

export default ArticleCard;
