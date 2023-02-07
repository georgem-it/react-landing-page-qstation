import React from 'react'
import Raja from '../assets/raja.jpg'

const Presentation = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[88%] mx-auto grid md:grid-cols-2 gap-5'>
                <img className='w-[500px] mx-auto my-4 rounded-md' src={Raja} alt="/" />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00E682] font-bold text-xl'>Lorem, ipsum dolor.</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Lorem ipsum dolor sit amet.</h1>
                    <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia fugiat, odit obcaecati rem id, iste corrupti perferendis fuga voluptatibus autem vero a voluptas quisquam odio laboriosam repellat, amet reprehenderit quod.</p>
                    <button className='text-[#00E682] w-[200px] rounded-md font-medium my-6 mx-auto py-3 bg-black md:mx-0 hover:scale-105 duration-300'>Get Started</button>
                </div>
            </div>

        </div>
    )
}

export default Presentation
