import React from 'react'
import { NavLink } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className='container p-5'>
        <h1 className='text-center'>Admin Dashboard – Trendify
        </h1>
        <div data-aos="fade-right" className='col-sm-12 p-5'>
            <h2 className='display-4 mt-3'>Hello, Akash Karumuri! Welcome back to your dashboard.</h2>
        </div>
    </div>
  )
}

export default Welcome