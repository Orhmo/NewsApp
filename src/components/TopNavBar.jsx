import React from 'react';
import { useState, useEffect } from 'react';

import {
  FiSun,
  FiCloud,
  FiCloudDrizzle,
  FiCloudRain,
  FiCloudSnow,
  FiWind,
} from 'react-icons/fi';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import NewsLetterModal from './NewsletterModal';
import CompletedModal from './CompletedModal';

export default function NavBar() {
  const [stage, setStage] = useState(1);
  const [newsLetter, setNewsLetter] = useState(false);
  const handleNewsLetterModal = () => {
    if (stage !== 2) {
      return setStage(stage + 1);
    }
    setNewsLetter(!newsLetter);
    setStage(1);
  };
  const [isScrolled, setIsScrolled] = useState(false);
  const [weatherTemp, setWeatherTemp] = useState('');
  const [cityName, setCityName] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  const fetchWeatherData = async () => {
    const apiKey = 'a79f3262b156e10a151167232a010abd';
    const city = 'Lagos';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(apiUrl);

      if (response.ok) {
        const data = await response.json();
        const temperature = data.main.temp;
        const city = data.name;
        setWeatherTemp(temperature);
        setCityName(city);
      } else {
        throw new Error('Failed to fetch weather data');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWeatherData();

    // Get the current date and update the state
    const currentDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    setCurrentDate(currentDate);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 100;
      setIsScrolled(!isTop);
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className='flex flex-col relative '>
        {newsLetter && (
          <div className='backdrop-blur-sm fixed inset-0 flex items-center justify-center z-50'>
            {stage === 1 && (
              <NewsLetterModal
                handleModal={() => setNewsLetter(!newsLetter)}
                nextModal={handleNewsLetterModal}
              />
            )}
            {stage === 2 && (
              <CompletedModal
                handleModal={() => setNewsLetter(!newsLetter)}
                nextModal={handleNewsLetterModal}
              />
            )}
          </div>
        )}
        <nav
          className={`fixed top-0 left-0 z-10 flex w-full items-center justify-between px-4 pb-4 lg:px-10 bg-red-950 ${
            isScrolled
              ? 'bg-transparent bg-opacity-100 backdrop-blur-md'
              : 'bg-primary-100'
          }`}
        >
          {/* Navigation */}
          <div className='flex items-center'>
            <div className='flex items-center text-white mr-4'>
              {weatherTemp && (
                <>
                  {weatherTemp > 25 ? (
                    <FiSun className='text-xl mr-2 text-yellow-300' />
                  ) : weatherTemp > 15 ? (
                    <FiCloud className='text-xl mr-2 text-white' />
                  ) : weatherTemp > 5 ? (
                    <FiCloudDrizzle className='text-xl mr-2 text-gray-300' />
                  ) : weatherTemp > 0 ? (
                    <FiCloudRain className='text-xl mr-2 text-gray-500' />
                  ) : (
                    <FiCloudSnow className='text-xl mr-2 tex-white' />
                  )}
                  <div className='text-white flex gap-2 cursor-default'>
                    <span
                      className={`text-base ${isScrolled ? 'text-black' : ''}`}
                    >
                      {weatherTemp}°C
                    </span>
                    <div
                      className={`font-bold ${isScrolled ? 'text-black' : ''}`}
                    >
                      {cityName}
                    </div>
                    <div
                      className={`text-xs pt-1.5 ${
                        isScrolled ? 'text-black' : ''
                      }`}
                    >
                      {currentDate}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className='flex gap-2'>
            {/* Social Media Icons */}
            <div className='flex items-center'>
              <a href='#!'>
                <FaTwitter
                  className={` mr-2 hover:text-blue-300 ${
                    isScrolled ? 'text-black' : 'text-white'
                  } transition`}
                />
              </a>
              <a href='#!'>
                <FaFacebook
                  className={`mr-2 hover:text-blue-500 ${
                    isScrolled ? 'text-black' : 'text-white'
                  } transition`}
                />
              </a>
              <a href='#!'>
                <FaInstagram
                  className={` mr-2 hover:text-pink-500 ${
                    isScrolled ? 'text-black' : 'text-white'
                  } transition`}
                />
              </a>
            </div>

            {/* Subscribe Button */}
            <div>
              <button
                onClick={() => setNewsLetter(!newsLetter)}
                className={`hidden lg:inline-block text-center bg-secondary py-2 text-base font-medium hover:text-pink-500 rounded-lg transition-all  shadow-lg px-2 shadow-red-950 ${
                  isScrolled ? 'text-black' : 'text-white'
                }`}
              >
                Subscribe
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
