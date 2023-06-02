import { shuffle } from 'lodash';
import Slider from 'react-slick';
import hero from '../../assets/hero.jpg';
import {
  fetchRandomNews,
  fetchTrendingNews,
} from '../../state/news/newsActions';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroSection = () => {
  const dispatch = useDispatch();
  const randomNews = useSelector((state) => state.news.randomNews);
  const trendingNews = useSelector((state) => state.news.trendingNews);

  useEffect(() => {
    dispatch(fetchRandomNews());
    dispatch(fetchTrendingNews());
  }, [dispatch]);

  const getRandomNews = () => {
    if (randomNews && randomNews.length > 0) {
      const shuffledNews = shuffle(randomNews);
      return shuffledNews.slice(0, 72);
    }
    return [];
  };

  const getTrendingNews = () => {
    if (trendingNews && trendingNews.length > 0) {
      const sortedNews = [...trendingNews].sort(
        (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
      );
      return sortedNews.slice(0, 3);
    }
    return [];
  };

  const renderedRandomNews = getRandomNews();
  const renderedTrendingNews = getTrendingNews();

  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className='hero-section relative'>
      {/* Background Image */}
      <div
        className='background-image bg-cover bg-center h-screen'
        style={{
          backgroundImage: `url(${hero})`,
        }}
      />

      <div className='flex flex-row md:flex-col '>
        {/* Random News Slider */}
        <div className='random-news-slider absolute top-44 md:top-1/2 md:left-4 transform -translate-y-1/2 p-4 shadow  w-[60vw] md:w-1/3'>
          {renderedRandomNews.length > 0 ? (
            <Slider {...settings}>
              {renderedRandomNews.map((news) => (
                <Link
                  to={`/news/${news.source.id}`}
                  className='flex flex-col'
                  key={news.source.id}
                >
                  <div className='news-item mb-4 bg-red-950 bg-opacity-50 p-4'>
                    <h3 className='text-xl font-bold mb-2 text-white'>
                      {news.title}
                    </h3>
                    <p className='text-xs text-gray-900 mt-2'>
                      Published on{' '}
                      {new Date(news.publishedAt).toLocaleDateString()} at{' '}
                      {new Date(news.publishedAt).toLocaleTimeString()}
                    </p>
                  </div>
                </Link>
              ))}
            </Slider>
          ) : (
            <p>No news available</p>
          )}
        </div>

        {/* Trending News Box */}
        <div className='trending-news-box absolute top-80 md:top-40 right-4 bg-black opacity-70 p-4 rounded-md text-white w-[75vw] md:w-1/5 '>
          <h4 className='text-lg font-bold mb-4 uppercase'>Trending News</h4>
          <ul>
            {renderedTrendingNews.length > 0 ? (
              renderedTrendingNews.map((news) => (
                <Link
                  to={`/news/${news.source.id}`}
                  className='flex flex-col'
                  key={news.source.id}
                >
                  <li className='flex flex-col mb-2'>
                    <span className='text-yellow-500 mr-2 text-sm'>•</span>
                    {news.title}
                    <span className='text-xs text-gray-300'>
                      {new Date(news.publishedAt).toLocaleDateString()} at{' '}
                      {new Date(news.publishedAt).toLocaleTimeString()}
                    </span>
                  </li>
                </Link>
              ))
            ) : (
              <p>No trending news available</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
