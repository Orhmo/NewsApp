import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTrendingNews } from '../../state/news/newsActions';
import { shuffleArray } from '../../utils/shuffleArray';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function RecommendeSection() {
  const dispatch = useDispatch();
  const trendingNews = useSelector((state) => state.news.trendingNews);

  const renderedTrendingNews = shuffleArray(trendingNews);

  useEffect(() => {
    dispatch(fetchTrendingNews());
  }, [dispatch]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
  };

  return (
    <div className='mb-24 mx-2'>
      <h1 className='capitalize text-black text-lg md:text-2xl font-bold mx-6'>
        {' '}
        <span className='border-b-2 border-red-950'> Recommended </span> News
      </h1>
      {renderedTrendingNews.length > 0 ? (
        <Slider {...settings}>
          {renderedTrendingNews.map((news) => (
            <Link
              to={`/news/${news.source.id}`}
              className='flex flex-col'
              key={news.source.id}
            >
              <div>
                <div className='mx-16 mt-8'>
                  {/* Post Image */}
                  <div className='w-full cursor-pointer box duration-200 hover:scale-90 rounded-tl-3xl rounded-tr-3xl justify-center'>
                    <img
                      src={news.urlToImage}
                      alt=''
                      className='rounded-tl-3xl rounded-tr-3xl h-[282px] w-full'
                    />
                  </div>

                  <div className='border-1 rounded-b-3xl w-full'>
                    {/* Content */}
                    <div className='p-4'>
                      <div className='text-sm font-bold mb-4'>{news.title}</div>
                      <div className='text-xs text-gray-400'>{news.author}</div>
                      <div className='text-md font-bold text-red-950'>
                        {new Date(news.publishedAt).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      ) : (
        <p>No random news available</p>
      )}
    </div>
  );
}
