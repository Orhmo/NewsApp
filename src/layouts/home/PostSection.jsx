import { shuffle } from 'lodash';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Paginate from '../../content/Paginate';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRandomNews } from '../../state/news/newsActions';
import { shuffleArray } from '../../utils/shuffleArray';

export default function PostSection() {
  const dispatch = useDispatch();
  const randomNews = useSelector((state) => state.news.randomNews);

  useEffect(() => {
    dispatch(fetchRandomNews());
  }, [dispatch]);

  const getRandomNews = () => {
    if (randomNews && randomNews.length > 0) {
      const shuffledNews = shuffleArray(randomNews);
      return shuffledNews.slice(0, 36);
    }
    return [];
  };

  const renderedRandomNews = getRandomNews();
  {
    /*pagination*/
  }
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage] = useState(9);

  {
    /*Currently Shown news*/
  }
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = randomNews.slice(indexOfFirstNews, indexOfLastNews);

  const totalPages = Math.ceil(renderedRandomNews.length / newsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <section className='Post'>
      <div className='m-0 p-8 mt-16 '>
        <div className='flex justify-between mb-8'>
          <h1 className='capitalize text-black text-lg md:text-2xl font-bold'>
            {' '}
            <span className='border-b-2 border-red-950'> Latest </span> News
          </h1>
          <Link
            to='/news'
            className='text-[10px] md:text-xs text-white bg-red-950 hover:bg-red-400 rounded-md p-2 md:p-3'
          >
            View All
          </Link>
        </div>

        {/*News List*/}

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-10 items-center my-10'>
          {currentNews.map((news) => (
            <Link
              to={`/news/${news.source.id}`}
              className='flex flex-col'
              key={uuidv4()}
            >
              <div className='mx-auto justify-center'>
                {/*News Image*/}
                <div className='w-full cursor-pointer box duration-200 hover:scale-90 rounded-tl-3xl rounded-tr-3xl justify-center'>
                  <img
                    src={news.urlToImage}
                    alt=''
                    className='rounded-tl-3xl rounded-tr-3xl h-[282px] w-full'
                  />
                </div>

                <div className=' border-1 rounded-b-3xl shadow-2xl w-full'>
                  {/*Content*/}
                  <div className='p-4'>
                    <div className='text-sm font-bold mb-4'>{news.title}</div>
                    <div className='text-xs text-gray-400'>{news.author}</div>
                    <div className='text-md font-bold text-red-950'>
                      {new Date(news.publishedAt).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
          {/*News Navigation*/}
          <div className='mx-auto px-auto mb-10'>
            <Paginate
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
