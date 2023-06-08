import React from 'react'

const Navigation = () => {
  return (
    <header className='absolute top-[30px] left-0 right-0'>
        <nav className='flex justify-between max-w-[1900px]
        mx-[1rem] sm:mx-[2rem] md:mx-[3.12rem] lg:mx-[6.25rem] xl:mx-[7rem] big:mx-[9rem] bigXl:mx-auto'>
            <div>
                Alejandro Suarez
            </div>

            <ul className='flex gap-4 xs:gap-6 md:gap-8 lg:gap-12'>
                <li><a>Home</a></li>
                <li><a>Blog</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navigation