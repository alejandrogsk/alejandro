import { Link } from '@remix-run/react'

const Navigation = () => {
  return (
    <header className='absolute top-[30px] left-0 right-0 z-10'>
        <nav className='flex justify-between max-w-[1900px]
        mx-[1rem] sm:mx-[2rem] md:mx-[3.12rem] lg:mx-[6.25rem] xl:mx-[7rem] big:mx-[9rem] bigXl:mx-auto'>

            <Link to="/" className='cursor-pointer'>Alejandro Suarez</Link>

            <ul className='flex gap-4 xs:gap-6 md:gap-8 lg:gap-12'>
                <Link to="/" className='cursor-pointer'>Home</Link>
                <Link to="/blog" className='cursor-pointer'>Blog</Link>
            </ul>
        </nav>
    </header>
  )
}

export default Navigation