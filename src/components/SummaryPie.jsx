import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import PieChart from './PieChart'

const SummaryPie = () => {
  return (
    <div className='summarys h-full w-full row-span-2 grid grid-rows-1 grid-cols-2 gap-8'>
      <div className='pie--chart bg-white rounded-2xl grid grid-rows-1 grid-cols-2'>
        <div className='piechart flex-col'>
          <h1 className='text-2xl text-left px-8 py-4 font-semibold'>
            Top products
          </h1>
          <PieChart />
        </div>
        <div className='wrapper flex flex-col px-4 py-4'>
          <select
            id='cars'
            name='cars'
            className='w-fit px-4 py-2 opacity-70 self-end rounded-lg font-medium text-gray-600'
          >
            <option value='volvo'>May-June 2022</option>
            <option value='saab'>May-June 2023</option>
            <option value='fiat'>May-June 2024</option>
            <option value='audi'>May-June 2025</option>
          </select>
          <ul className='flex flex-col items-start justify-between list-none'>
            <li className='py-1'>
              <span className='text-3xl font-semibold text-left px-4 mr-auto'>
                Basic Trees
              </span>
              <p className='text-lg text-left px-6'>53%</p>
            </li>
            <li className='py-1'>
              <span className='text-3xl font-semibold text-left px-4 mr-auto'>
                Custom shorts
              </span>
              <p className='text-lg text-left px-6'>67%</p>
            </li>
            <li className='py-1'>
              <span className='text-3xl font-semibold text-left px-4 mr-auto'>
                Super hoodies
              </span>
              <p className='text-lg text-left px-6'>69%</p>
            </li>
          </ul>
        </div>
      </div>
      <div className='more--details relative bg-white rounded-2xl flex-col'>
        <a
          href='#'
          className='absolute top-[10px] right-[10px] px-8 py-4 flex text-blue-700'
        >
          <span className='px-4'>See more</span>
          <FaArrowRight />
        </a>
        <h1 className='text-2xl text-left px-8 py-4 font-semibold'>
          Today's Schedule
        </h1>
        <div className='event--wrapper flex flex-col justify-around px-8'>
          <div className='item border-l-4 border-[#F4ECDD] px-4 my-2'>
            <h1 className='title text-lg font-semibold text-left my-0'>
              Meeting with Bali
            </h1>
            <p className='time text-left text-lg opacity-60'>12:00 - 1:00 PM</p>
            <p className='location text-left'>At my bathroom</p>
          </div>
          <div className='item border-l-4 border-[#EFDADA] px-4 my-2'>
            <h1 className='title text-lg font-semibold text-left my-0'>
              Meeting with Bali
            </h1>
            <p className='time text-left text-lg opacity-60'>12:00 - 1:00 PM</p>
            <p className='location text-left'>At my bathroom</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SummaryPie
