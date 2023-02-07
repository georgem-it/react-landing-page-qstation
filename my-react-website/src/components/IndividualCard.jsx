import React from 'react'

const IndividualCard = ({img, courseName, coursePrice, coursePriceOld, instructorName, courseDuration}) => {
    return (
        <>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-45 mx-auto mt-[-3rem] bg-white' src={img} alt="" />
                    <h2 className='text-2xl font-bolt text-center py-8'>{courseName}</h2>
                    <p className='text-center text-4xl font-bold'>{coursePrice}</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8 line-through'>{coursePriceOld}</p>
                        <p className='py-2 border-b mx-8'>{instructorName}</p>
                        <p className='py-2 border-b mx-8'>{courseDuration}</p>
                    </div>
                    <button className='bg-[#00E682] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black'>Sign Up</button>
                </div>


                {/* <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-45 mx-auto mt-[-3rem] bg-white' src={Ps} alt="" />
                    <h2 className='text-2xl font-bolt text-center py-8'>Graphic Design Basics</h2>
                    <p className='text-center text-4xl font-bold'>750 KM</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8 line-through'>850 KM</p>
                        <p className='py-2 border-b mx-8'>Instruktor: Boris Došen</p>
                        <p className='py-2 border-b mx-8'>2.5 mj treninga + 1 mj pripreme</p>
                    </div>
                    <button className='bg-[#00E682] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black'>Sign Up</button>
                </div>

                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-45 mx-auto mt-[-3rem] bg-white' src={Js} alt="" />
                    <h2 className='text-2xl font-bolt text-center py-8'>JavaScript Intermediate</h2>
                    <p className='text-center text-4xl font-bold'>750 KM</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8 line-through'>850 KM</p>
                        <p className='py-2 border-b mx-8'>Instruktor: Petar Aranđić</p>
                        <p className='py-2 border-b mx-8'>3 mj treninga + 1 mj pripreme</p>
                    </div>
                    <button className='bg-[#00E682] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black'>Sign Up</button>
                </div>
            </div>
            <div className='flex'>
                <button className='text-[#00E682] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 bg-black hover:scale-105 duration-300'>More Courses ➜</button>
            </div> */}
        </>
    )
}

export default IndividualCard
