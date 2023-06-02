import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Paginate from '../../content/Paginate';
import { fetchRandomNews } from '../../state/news/newsActions';
import { Link } from 'react-router-dom';

export default function NewsSection() {
  const dispatch = useDispatch();
  const randomNews = useSelector((state) => state.news.randomNews);

  useEffect(() => {
    dispatch(fetchRandomNews());
  }, [dispatch]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage] = useState(6);

  // Currently shown news
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = randomNews.slice(indexOfFirstNews, indexOfLastNews);

  const totalPages = Math.ceil(randomNews.length / newsPerPage);

  return (
    <section className='flex flex-col'>
      <div className=' gap-x-10 gap-y-10 items-center m-10 '>
        {currentNews.map((news) => (
          <Link
            to={`/news/${news.source.id}`}
            className='flex flex-col cursor-pointer'
            key={news.source.id}
          >
            <div className='flex flex-row mx-auto my-4 justify-center'>
              {/*Post Image*/}
              <div className='w-full cursor-pointer box duration-200 hover:scale-90 rounded-tl-3xl rounded-tr-3xl justify-center'>
                <img
                  src={news.urlToImage}
                  alt=''
                  className='rounded-tl-3xl rounded-bl-3xl h-[282px] shadow-2xl w-full'
                />
              </div>

              <div className='border-1 rounded-tr-3xl rounded-br-3xl shadow-2xl w-full py-auto'>
                {/*Content*/}
                <div className='p-4 flex flex-col h-full'>
                  <div className='flex flex-col '>
                    <div className='text-lg  font-bold mb-4'>{news.title}</div>
                    <div className='text-base text-gray-900'>
                      {news.description}
                    </div>
                    <div className='pt-2 text-xs text-gray-400'>
                      {news.author}
                    </div>
                    <div className='text-md font-bold text-red-950'>
                      {new Date(news.publishedAt).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/*Post Navigation*/}
      <div className='mx-auto px-auto mb-10'>
        <Paginate
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </section>
  );
}
