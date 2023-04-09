import React from 'react'
import {
  FaRegCalendar,
  FaRegSun,
  FaRegUserCircle,
  FaTags
} from 'react-icons/fa'

import { FiPieChart } from 'react-icons/fi'

const DashNav = () => {
  return (
    <section className='box-border bg-black h-full w-full rounded-[1.8rem] px-4 flex flex-col justify-between'>
      <a
        href='/'
        className='text-5xl font-bold text-white text-left py-[3rem] px-8'
      >
        Board.
      </a>
      <ul className='links text-lg text-white mb-auto text-left px-8 font-medium list-none'>
        <li className='link py-4 flex justify-start items-center'>
          <FiPieChart />
          <span className='px-4'>Dashoard</span>
        </li>
        <li className='link py-4 flex justify-start items-center'>
          <FaTags />
          <span className='px-4'>Transaction</span>
        </li>
        <li className='link py-4 flex justify-start items-center'>
          <FaRegCalendar />
          <span className='px-4'>Schedule</span>
        </li>
        <li className='link py-4 flex justify-start items-center'>
          <FaRegUserCircle />
          <span className='px-4'>Users</span>
        </li>
        <li className='link py-4 flex justify-start items-center'>
          <FaRegSun />
          <span className='px-4'>Settings</span>
        </li>
      </ul>
      <article className='exteral--links py-8'>
        <li className='text-base font-light text-white list-none text-left py-2 px-8'>
          Help
        </li>
        <li className='text-base font-light text-white list-none text-left py-2 px-8'>
          Contact Us
        </li>
      </article>
    </section>
  )
}

export default DashNav
