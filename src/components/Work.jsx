import React from 'react'
import WorkImg from '../assests/workImg.jpeg'
import realEstate from '../assests/realestate.jpg'
import NetlflixUi from '../assests/netflix.png';
import Bloggy from '../assests/bloggy.png';
import BestTravel from '../assests/besttravel.png';

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
      <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
          Work
        </p>
        <p className='py-6'>Check out some of my recent work</p>
      </div>

{/* Container */}
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

          {/* Grid Item */}
        <div
          style={{ backgroundImage: `url(${NetlflixUi})` }}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
        >
          {/* Hover Effects */}
          <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold text-white tracking-wider'>
              React JS Application
            </span>
            <div className='pt-8 text-center'>
              <a href='https://netflix-react-4b527.web.app/'target="_blank" rel='noreferrer'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Demo
                </button>
              </a>
              <a href='https://github.com/molessom-8/netflix-react-firebase'target="_blank" rel='noreferrer'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${Bloggy})` }}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
        >
          {/* Hover Effects */}
          <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold text-white tracking-wider'>
              Next JS Application
            </span>
            <div className='pt-8 text-center'>
              <a href='https://bloggy-orcin.vercel.app/'target="_blank" rel='noreferrer'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Demo
                </button>
              </a>
              <a href='https://github.com/molessom-8/bloggy-site-next'target="_blank" rel='noreferrer'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>
          {/* Grid Item */}
        <div
          style={{ backgroundImage: `url(${BestTravel})` }}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
        >
          {/* Hover Effects */}
          <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold text-white tracking-wider'>
              Travel Website Mock up
            </span>
            <div className='pt-8 text-center'>
              <a href='https://molessom-8.github.io/besttravel-html-css-flexgrid/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Demo
                </button>
              </a>
              <a href='https://github.com/molessom-8/besttravel-html-css-flexgrid'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${realEstate})` }}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
        >
          {/* Hover Effects */}
          <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold text-white tracking-wider'>
              React JS Application
            </span>
            <div className='pt-8 text-center'>
              <a href='/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Demo
                </button>
              </a>
              <a href='/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>
          {/* Grid Item */}
        <div
          style={{ backgroundImage: `url(${WorkImg})` }}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
        >
          {/* Hover Effects */}
          <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold text-white tracking-wider'>
              React JS Application
            </span>
            <div className='pt-8 text-center'>
              <a href='/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Demo
                </button>
              </a>
              <a href='/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${realEstate})` }}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
        >
          {/* Hover Effects */}
          <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold text-white tracking-wider'>
              React JS Application
            </span>
            <div className='pt-8 text-center'>
              <a href='/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Demo
                </button>
              </a>
              <a href='/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Work