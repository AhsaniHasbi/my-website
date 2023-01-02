import React, { useState, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [scrollDirection, setScrollDirection] = useState<string>('');
  const [top, setTop] = useState<boolean>(true);

  useEffect(() => {

    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? 'down' : 'up';

      if (direction !== scrollDirection && (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)) {
        setScrollDirection(direction);
      }

      if (scrollY < 3) {
        setTop(true);
      } else {
        setTop(false);
      }

      lastScrollY = scrollY > 0 ? scrollY : 0;

    }
    
    window.addEventListener('scroll', updateScrollDirection);

    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    }
  }, [scrollDirection]);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClickNav = () => {
    let isUnmount = false;

    if (!isUnmount) {
      setIsOpen(n => n ? false : true);
    }

    return () => isUnmount = true;
  }

  return (
    <>
      <div 
        className={`${isOpen ? 'block' : 'hidden'} fixed w-full top-0 left-0 h-screen backdrop-blur-md z-30`} 
        onClick={handleClickNav}
      >
      </div>
      <header 
        className={`
          w-full 
          h-20 
          fixed 
          px-8 sm:px-12 
          ${scrollDirection === 'down' ? 'top-[-100%]' : 'top-0'} ${!top ? 'shadow-md shadow-black py-8' : 'py-14'} 
          left-0 
          flex items-center justify-between 
          transition-all ease-in-out duration-200 
          bg-dark
          k z-40 
          text-sm
        `}
      >
        <Link href={'#about'} passHref>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: 'easeOut' }}
            className='relative font-extrabold text-2xl text-teal w-[50px] h-[50px]'
          >
            <Image 
              alt='logo'
              src='/iconHAS.png'
              fill
              style={{
                objectFit: 'contain',
                position: 'absolute'
              }}
            />
          </motion.div>
        </Link>

        <nav className='relative'>
          <button 
            className='lg:hidden z-20 relative font-extrabold text-2xl text-teal rounded-full w-12 h-12 flex items-center justify-center'
            onClick={handleClickNav}
          >
            {isOpen ? <CloseIcon sx={{fontSize: 40}} /> : <MenuIcon sx={{fontSize: 40}} />}
          </button>
          {/* blur background */}
          
          <ul className={`fixed lg:static top-0 ${isOpen ? 'right-0' : '-right-full'} bg-dark lg:bg-transparent h-screen lg:h-auto w-3/4 lg:w-auto list-none flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-6 font-mono text-slate-50 transition-all lg:transition-none duration-200 ease-in-out`}>
            <motion.li 
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            >
              <Link href={'#about'} passHref>
                <div className='flex flex-col justify-center items-center lg:block'>
                  <span className='text-teal'>01.</span>About
                </div>
              </Link>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
              
            >
              <Link href={'#experience'} passHref>
                <div className='flex flex-col justify-center items-center lg:block'>
                  <span className='text-teal'>02.</span>Experience
                </div>
              </Link>
            </motion.li>

            <motion.li 
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
            >
              <Link href={'#work'} passHref>
                <div className='flex flex-col justify-center items-center lg:block'>
                  <span className='text-teal'>03.</span>Work
                </div>
              </Link>
            </motion.li>
            
            <motion.li 
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
            >
              <Link href={'#contact'} passHref>
                <div className='flex flex-col justify-center items-center lg:block'>
                  <span className='text-teal'>04.</span>Contact
                </div>
              </Link>
            </motion.li>

            {/* <motion.li 
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
            >
              <Link href={'#blog'} passHref>
                <div className='flex flex-col justify-center items-center lg:block'>
                  <span className='text-teal'>05.</span>Blog
                </div>
              </Link>
            </motion.li> */}

            <motion.li
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
            >
              <div className='py-2 px-6 border-2 border-teal text-teal'>
                Resume
              </div>
            </motion.li>
          </ul>
        </nav>
      </header>
    </>
  )
}
