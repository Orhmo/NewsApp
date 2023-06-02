import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Paginate from '../../content/Paginate';
import { fetchNewsBySource } from '../../state/news/newsActions';
import { DropdownIcon } from '../../utils/svg';

export default function CategoriesSection() {
  const dispatch = useDispatch();
  const newsBySource = useSelector((state) => state.news.newsBySource);
  const categories = useSelector((state) => state.news.categories);

  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredNews, setFilteredNews] = useState([]);
  const categoryOptionsRef = useRef(null);
  const dropdownIconRef = useRef(null);
  const [isDropdownMenuOpen, setDropdownMenuOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchNewsBySource());
  }, [dispatch]);

  useEffect(() => {
    if (selectedCategory) {
      const filtered = newsBySource.filter(
        (news) => news.category === selectedCategory
      );
      setFilteredNews(filtered);
    } else {
      setFilteredNews(newsBySource);
    }
  }, [selectedCategory, newsBySource]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage] = useState(6);

  // Calculate slice indexes
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = filteredNews.slice(indexOfFirstNews, indexOfLastNews);

  const totalPages = Math.ceil(filteredNews.length / newsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setDropdownMenuOpen(false);
  };

  const toggleDropdownMenu = () => {
    setDropdownMenuOpen(!isDropdownMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        categoryOptionsRef.current &&
        !categoryOptionsRef.current.contains(event.target)
      ) {
        setDropdownMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <section className='flex flex-col'>
      {/* Filter Dropdown */}
      <div className='relative flex justify-center mt-5'>
        <div
          onClick={toggleDropdownMenu}
          className='relative px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer'
        >
          <span className='flex items-center'>
            {selectedCategory ? (
              <>
                <span className='capitalize'>
                  {selectedCategory.charAt(0).toUpperCase() +
                    selectedCategory.slice(1)}
                </span>
                <DropdownIcon ref={dropdownIconRef} />
              </>
            ) : (
              <>
                All Categories
                <DropdownIcon ref={dropdownIconRef} />
              </>
            )}
          </span>
          {/* Category Options */}
          {isDropdownMenuOpen && (
            <div
              ref={categoryOptionsRef}
              className='absolute z-10 bg-white border border-gray-300 rounded-md mt-2 py-1 w-40'
            >
              <div
                className='px-4 py-2 cursor-pointer hover:bg-blue-100'
                onClick={() => {
                  handleCategoryChange('');
                }}
              >
                All Categories
              </div>
              {categories.map((category) => (
                <div
                  key={category}
                  className='px-4 py-2 cursor-pointer hover:bg-blue-100'
                  onClick={() => {
                    handleCategoryChange(category);
                  }}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className='gap-x-10 gap-y-10 items-center m-10'>
        {currentNews.map((news) => (
          <a
            href={news.url}
            target='_blank'
            rel='noopener noreferrer'
            className='flex flex-col cursor-pointer'
            key={news.id}
          >
            <div className='flex flex-row mx-auto my-4 justify-center'>
              <div className='border-1 rounded-tr-3xl rounded-br-3xl shadow-2xl w-full py-auto'>
                {/* Content */}
                <div className='p-4 flex flex-col h-full'>
                  <div className='flex flex-col'>
                    <div className='text-lg font-bold mb-4'>{news.name}</div>
                    <div className='text-base text-gray-900'>
                      {news.description}
                    </div>
                    <div className='pt-2 text-xs text-gray-400 capitalize'>
                      {news.category}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Post Navigation */}
      <div className='mx-auto px-auto mb-10'>
        <Paginate
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
}
