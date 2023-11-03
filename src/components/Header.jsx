import React from 'react';
import {FaSearch} from 'react-icons/fa';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
        
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className=' text-slate-500'>Ozzy</span>
            <span className=' text-slate-700'>Estates</span>
        </h1>
        </Link>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
            <input type="text" placeholder='Search....' className='bg-transparent outline-none w-24 sm:w-64 '/>
            <FaSearch className='text-slate-500'/>
        </form>

        <ul className='flex gap-4 text-slate-700'>
            <Link to='/'>
            <li className='hover:underline hidden sm:inline'>Home</li>
            </Link>

            <Link to='/about'>
            <li className='hover:underline'>About</li>
            </Link>

            <Link to='/sign-in'>
            <li className='hover:underline'>Sign in</li>
            </Link>
        </ul>
        </div>
        
    </header>
  )
}

export default Header