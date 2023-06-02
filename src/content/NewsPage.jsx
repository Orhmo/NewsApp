import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRandomNews } from '../state/news/newsActions';

export default function NewsPage() {
  const dispatch = useDispatch();
  const randomNews = useSelector((state) => state.news.randomNews);
  const { id } = useParams();
  const news = randomNews.find((news) => news.source.id.toString() === id);

  useEffect(() => {
    dispatch(fetchRandomNews());
  }, [dispatch]);

  return (
    <div className='flex flex-col relative'>
      <div className='bg-primary-100 w-full flex justify-center px-4 pt-0 pb-16 md:pt-10 md:pb-16 lg:pt-20 lg:pb-24'>
        <div className='flex flex-col items-center md:items-start justify-center md:flex-row gap-10 md:gap-20 lg:gap-44 w-full max-w-7xl p-4'>
          <div className='w-full flex flex-row gap-8'>
            <div className='flex flex-col'>
              <div className=' flex justify-center items-center'>
                <img src={news.urlToImage} />
              </div>
              <div className='flex flex-col items-start'>
                <p className='text-base font-medium font-space'>
                  {news.author}
                </p>
                <p className='text-xs text-secondary-200 font-inter'>
                  {new Date(news.publishedAt).toLocaleDateString()} at
                </p>
              </div>
            </div>
            <div className='flex flex-col gap-6 items-center'>
              <h1 className='text-5xl font-semibold font-space'>
                {news.title}
              </h1>
              <p className='text-secondary-200 text-base md:text-lg lg:text-xl'>
                {news.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='shadow-xl w-full max-w-6xl self-center -mt-16 bg-white mb-8'>
        <div className='px-4 lg:px-14 py-8 lg:py-14'>
          <h1 className='font-bold text-4xl text-start font-space'>
            News Overview
          </h1>
          <div className='pt-10'>
            <p>{news.content}</p>
            <p>
              Read more: <Link to={news.url}>{news.url}</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
