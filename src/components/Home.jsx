import React from 'react'
import heroImage from '../Assets/heroImage.png'
import { BsArrowReturnRight } from "react-icons/bs";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b
    from-black via-black to-gray-800 '>

        <div className='max-w-screen-lg mx-auto flex flex-col items-center
        justify-center h-full px-4 md:flex-row'>

            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    I'm a Full-stack Developer.
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                     Hi everyone, I'm Amit Pandey, an MCA student at Jamia Millia Islamia (2024-26)
                    I am a Full Stack Developer specializing in the MERN stack and Java. I build high-performance,
                  full-stack web solutions using React.js for responsive frontends and Node.js for scalable backends.
                  My passion lies in translating business needs into technical solutions, with a strong focus on performance optimization.
                 I am actively seeking a Software Developer role where I can contribute my skills to an Agile team. 
                </p>

                <div>
                    <Link to='projects' className='group text-white w-fit px-6 py-3 my-2 flex items-center
                    rounded-md bg-gradient-to-r from-cyan-50
                     to-blue-500 cursor-pointer'>
                        Projects 
                        <span className='group-hover:rotate-90 duration-300'>
                            <BsArrowReturnRight size={25} className='ml-1' />
                        </span>
                    </Link>
                </div>
            </div>

            <div>
                <img src={heroImage} alt="My profile" 
                className='rounded-2xl mx-auto w-2/3 md:w-full' />
            </div>
        </div>
    </div>
  )
}

export default Home
