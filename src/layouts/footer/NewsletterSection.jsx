import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { subscribeToNewsletter } from '../../state/newsletter/newsletterActions';

export default function NewsletterSection() {
  const dispatch = useDispatch();
  const isSubscribed = useSelector((state) => state.news.isSubscribed);

  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(subscribeToNewsletter(email));
  };

  const closeModal = () => {
    // Implement close modal logic if needed
  };

  return (
    <section className='mt-16'>
      <div className='p-8 md:p-24 my-8 rounded-md  w-[80%] mx-auto shadow-lg shadow-red-950'>
        <div className='flex flex-col md:flex-row md:justify-between md:items-center px-8 mb-8'>
          <div>
            <p className='text-lg md:text-4xl text-center md:text-start space-8 font-bold capitalize text-black md:w-3/4'>
              Subscribe to get the latest news!
            </p>
          </div>
          <div className=' text-black text-center md:text-end p-4 rounded'>
            <p className='text-xs font-bold'>
              "Stay informed, stay entertained!"
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className='flex'>
          <input
            type='email'
            placeholder='Enter your email address'
            className='w-full py-2 px-4 border border-black rounded-s-xl mb-4 text-sm md:text-base'
            value={email}
            onChange={handleEmailChange}
          />
          <button
            type='submit'
            className='md:w-1/5 py-2 px-4 mb-4 bg-red-950 text-white font-bold rounded-e-xl hover:bg-red-800 '
          >
            <p className='text-sm md:text-base'>Subscribe </p>
          </button>
        </form>
        {isSubscribed && (
          <div className='modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
            <div className='modal-content p-8 bg-white rounded'>
              <h3 className='text-2xl font-bold mb-4'>
                Subscription Successful!
              </h3>
              <p>You have successfully subscribed to our newsletter.</p>
              <button
                onClick={closeModal}
                className='mt-4 py-2 px-4 bg-red-950 text-white font-bold rounded hover:bg-red-800'
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
