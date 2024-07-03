import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards'
import { Link } from 'react-router-dom'

function Course() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4  ">
        <div className='mt-28 justify-center items-center text-center  '>
            <h1 className='text-2xl md:text-4xl'>We are delight to have you <span className='text-pink-500'> Here! :)</span></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid magni unde facere deserunt cupiditate minus eius assumenda neque tempora, nemo obcaecati hic et odit reprehenderit laborum eligendi sapiente nam. Dolor eum ipsam error maxime! Voluptatibus molestias sapiente nesciunt harum odio </p>
            <Link to={"/"}>
            <button className='mt-6 cursor-pointer bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-200'>Back</button>
            </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
            {
                list.map((item)=>(
                    <Cards key={item.id} item={item}/>
                ))
            }

        </div>

    </div>
    </>
  )
}

export default Course
