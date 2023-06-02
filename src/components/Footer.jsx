import React from 'react';
import { CompanyLogo } from '../utils/svg';
import { Link } from 'react-router-dom';
import Newsletter from '../layouts/footer/NewsletterSection';

export default function Footer() {
  return (
    <>
      <Newsletter />
      <div className='bg-red-950'>
        <section className=' pt-10'>
          <div className=' text-md-start mt-5 '>
            <div className='mt-3 mx-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8'>
              <div md='3' lg='4' xl='3' className='mx-auto mb-4'>
                <Link
                  to='/'
                  className='align-center flex items-center justify-center pt-2'
                >
                  <CompanyLogo />
                </Link>
                <p className='text-gray-700 mt-4 mx-4'>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>

              <div className=' mb-4 capitalise'>
                <h6 className=' font-bold mb-4 text-gray-400 inline-block'>
                  Categories
                </h6>
                <p>
                  <a
                    href='#!'
                    className='flex text-gray-700 hover:text-gray-400 transition'
                  >
                    International
                  </a>
                </p>
                <p>
                  <a
                    href='#!'
                    className='flex text-gray-700 hover:text-gray-400 transition'
                  >
                    Regional
                  </a>
                </p>
                <p>
                  <a
                    href='#!'
                    className='flex text-gray-700 hover:text-gray-400 transition'
                  >
                    Political
                  </a>
                </p>
                <p>
                  <a
                    href='#!'
                    className='flex text-gray-700 hover:text-gray-400 transition'
                  >
                    Business
                  </a>
                </p>
                <p>
                  <a
                    href='#!'
                    className='flex text-gray-700 hover:text-gray-400 transition'
                  >
                    Sport
                  </a>
                </p>
                <p>
                  <a
                    href='#!'
                    className='flex text-gray-700 hover:text-gray-400 transition'
                  >
                    Health
                  </a>
                </p>
              </div>

              <div className=' mb-4 capitalise'>
                <h6 className='font-bold mb-4 text-gray-400 inline-block'>
                  Company
                </h6>
                <p>
                  <a
                    href='#!'
                    className='flex text-gray-700 hover:text-gray-400 transition'
                  >
                    About Us
                  </a>
                </p>
                <p>
                  <a
                    href='#!'
                    className='flex text-gray-700 hover:text-gray-400 transition'
                  >
                    Careers
                  </a>
                </p>
                <p>
                  <a
                    href='#!'
                    className='flex text-gray-700 hover:text-gray-400 transition'
                  >
                    Privacy Policy
                  </a>
                </p>
                <p>
                  <a
                    href='#!'
                    className='flex text-gray-700 hover:text-gray-400 transition'
                  >
                    Terms of Services{' '}
                  </a>
                </p>
                <p>
                  <a
                    href='#!'
                    className='flex text-gray-700 hover:text-gray-400 transition'
                  >
                    Contact us
                  </a>
                </p>
              </div>

              <div className=' mb-md-0 mb-4 capitalise'>
                <h6 className='font-bold mb-4 text-gray-400 inline-block'>
                  Contact
                </h6>
                <p className='text-gray-900 leading-5'>
                  New York, NY 10012, US
                </p>
                <p className='text-gray-700'>info@example.com</p>
                <p className='text-gray-700'>+ 01 234 567 88</p>
                <p className='text-gray-700'>+ 01 234 567 89</p>
              </div>

              <div className=' mb-4 capitalise'>
                <h6 className='font-bold mb-4 text-gray-400 inline-block'>
                  Socials
                </h6>
                <p>
                  <a
                    href='#!'
                    className='flex text-gray-700 hover:text-gray-400 transition'
                  >
                    Facebook
                  </a>
                </p>
                <p>
                  <a
                    href='#!'
                    className='flex text-gray-700 hover:text-gray-400 transition'
                  >
                    Twitter
                  </a>
                </p>
                <p>
                  <a
                    href='#!'
                    className='flex text-gray-700 hover:text-gray-400 transition'
                  >
                    Intagram
                  </a>
                </p>
                <p>
                  <a
                    href='#!'
                    className='flex text-gray-700 hover:text-gray-400 transition'
                  >
                    LinkedIn
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className='text-center p-4'
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
        >
          © 2023 Copyright:
          <a className='px-2 font-bold' href='https://mdbootstrap.com/'>
            theIssue
          </a>
        </div>
      </div>
    </>
  );
}