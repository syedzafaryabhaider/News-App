import { useEffect, useState } from 'react';
import { fetchNews, fetchTopHeadlines } from '../api/newsApi';
import ArticleCard from '../components/ArticleCard';
import Pagination from '../components/Pagination';
import Skeleton from '../components/Skeleton';
import { toast } from 'react-toastify';

const HomePage = ({ query }) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      try {
        const data = query
          ? await fetchNews(query, page)
          : await fetchTopHeadlines(page);
        setArticles(data.articles);
        setTotalResults(data.totalResults);
      } catch (err) {
        toast.error(err.message)
        console.log(err.message) 
      } finally {
        setLoading(false);
      }
    };
    getNews();
  }, [query, page]);

  return (
    <div className="pt-20 container mx-auto p-4 bg-light-background dark:bg-dark-background">
      {loading ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Skeleton cards={21} />
          </div>
        </>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <ArticleCard key={index} article={article} />
            ))}
          </div>
          <Pagination page={page} setPage={setPage} totalResults={totalResults} pageSize={21} />
        </>
      )}
    </div>
  );
};

export default HomePage;
