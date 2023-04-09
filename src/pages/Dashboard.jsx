import React from 'react'
import DashNav from '../components/DashNav'

const Dashboard = () => {
  return (
    <div className='w-screen min-h-screen grid gap-x-6 px-6 py-6 grid-row-1 grid-cols-5'>
      <DashNav />
      <section className='left--section flex flex-col'>
        <article className='top--section'>
          <span>Dashboard</span>
        </article>
      </section>
    </div>
  )
}

export default Dashboard
