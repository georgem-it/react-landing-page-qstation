import React from 'react'
import Beginner from '../assets/beg.png'
import Ps from '../assets/psai.png'
import Js from '../assets/jsnr.png'
import IndividualCard from './IndividualCard'

const Cards = () => {
    return (
        
        <div className='w-full py-[8rem] px-4 bg-white'>
            <div className='max-w-[88%] mx-auto grid md:grid-cols-3 gap-8'>

            <IndividualCard  img={Beginner} courseName={'Beginners Front End'} coursePrice={'600 KM'} coursePriceOld={'800 KM'} instructorName={'Instruktor: Milorad Smiljanić'} courseDuration={'3 mj treninga + 1 mj pripreme'}/>

            <IndividualCard  img={Ps} courseName={'Graphic Design Basics'} coursePrice={'760 KM'} coursePriceOld={'850 KM'} instructorName={'Instruktor: Boris Došen'} courseDuration={'2.5 mj treninga + 1 mj pripreme'}/>

            <IndividualCard  img={Js} courseName={'JavaScript Intermediate'} coursePrice={'750 KM'} coursePriceOld={'850 KM'} instructorName={'Petar Aranđić'} courseDuration={'3 mj treninga + 1 mj pripreme'}/>

        </div>

        <div className='flex'>
                <button className='text-[#00E682] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 bg-black hover:scale-105 duration-300'>More Courses ➜</button>
            </div>
            
        </div>
        
    )
}

export default Cards
