import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCategoryNews } from '../api/newsApi';
import ArticleCard from '../components/ArticleCard';
import Pagination from '../components/Pagination';
import Skeleton from '../components/Skeleton';
import { toast } from 'react-toastify';

const CategoryPage = () => {
  const { category } = useParams();
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCategoryNews = async () => {
      setLoading(true);
      try {
        const data = await fetchCategoryNews(category, page);
        setArticles(data.articles);
        setTotalResults(data.totalResults);
      } catch (err) {
        toast.error(err.message)
        console.log(err.message)
      } finally {
        setLoading(false);
      }
    };
    getCategoryNews();
  }, [category, page]);

  return (
    <div className="pt-12 container mx-auto p-4 bg-light-background dark:bg-dark-background">
      {loading ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Skeleton cards={20} />
          </div>
        </>
      ) : (
        <>
          <h2 className="text-black dark:text-light-card text-2xl font-bold mb-4 capitalize">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {articles.map((article, index) => (
              <ArticleCard key={index} article={article} />
            ))}
          </div>
          <Pagination page={page} setPage={setPage} totalResults={totalResults} pageSize={20} />
        </>
      )}
    </div>
  );
};

export default CategoryPage;
