import React from 'react'

const About = () => {
  return (
    <div name="about"
        className='w-full h-screen bg-gradient-to-b from-gray-800 to-black
        text-white' >

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full
         h-full'>

            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 
                border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-7'>
               I am a Full Stack Developer specializing in the MERN stack and Java, currently pursuing my Master of Computer Applications (MCA). With hands-on experience in designing and deploying full-stack applications, I am skilled at building responsive, scalable, and high-performance web solutions.
            </p>
            <br />  
            <p  className='text-xl mt-2'>
                My expertise spans the full development lifecycle, from creating dynamic frontends with React.js, Redux, and Tailwind CSS to engineering robust backends using Node.js and Express.js. I am proficient in developing RESTful APIs, implementing secure JWT authentication, and managing databases like MongoDB and Oracle. 

I enjoy translating business needs into technical solutions and am dedicated to optimizing application performance. In my projects, I have achieved Lighthouse scores of 90+ by implementing asset delivery optimization, lazy loading, and code-splitting. I am currently seeking a Software Developer role where I can apply my skills in an Agile environment.
            </p> 
        </div>

    </div>
  )
}

export default About
