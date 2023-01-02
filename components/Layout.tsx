import React, { PropsWithChildren } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Header from './Header';
import { motion } from 'framer-motion';
import Head from 'next/head';

export default function Layout({ children } : PropsWithChildren) {
  return (
    <>
      <Head>
        <title>Hasbi Ahsani</title>
        <link rel='icon' href='/iconHAS.png' type='image/png' />
      </Head>

      <Header />

      <main className='px-8 sm:px-12 pb-24 text-base md:text-base lg:text-lg'>
        {children}
      </main>

      <footer className='mt-20 mb-8 text-sm'>
        {/* Social media */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2, ease: 'easeInOut' }} 
          className='static md:fixed left-0 bottom-0 z-0 flex flex-row md:flex-col items-center justify-center space-x-6 md:space-x-0 md:pl-12 text-blue text-md md:text-lg'
        >
          <a href='https://github.com/AhsaniHasbi' target='_blank' ref='noopener noreferrer' className='inline-block mb-4'><GitHubIcon sx={{fontSize: 25}} /></a>
          <a href='https://twitter.com/HasbiAhsani' target='_blank' ref='noopener noreferrer' className='inline-block mb-4'><TwitterIcon sx={{fontSize: 25}} /></a>
          <a href='https://www.instagram.com/hasbi_ahsani' target='_blank' ref='noopener noreferrer' className='inline-block mb-4'><InstagramIcon sx={{fontSize: 25}} /></a>
          <a href='https://www.linkedin.com/in/muhammad-hasbi-ahsani-aba53b246/' target='_blank' ref='noopener noreferrer' className='inline-block mb-4 md:mb-0'><LinkedInIcon sx={{fontSize: 25}} /></a>
          <a href='mailto:hasbiahsani92@gmail.com' className='md:hidden inline-block mb-4'><EmailIcon sx={{fontSize: 25}} /></a>
          <div className='hidden md:block border-blue border-r-2 h-[14vh] mt-8'></div>
        </motion.div>

        {/* Email */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2, ease: 'easeInOut' }} 
          className='hidden w-0 fixed right-0 bottom-0 z-0 md:flex flex-col items-center justify-center pr-12 text-blue text-md md:text-lg'
        >
          <a href='mailto:hasbiahsani92@gmail.com' className='rotate-90 w-max h-max pr-44 flex items-center'><EmailIcon sx={{fontSize: 25, marginRight: 1}} /> hasbiahsani92@gmail.com</a>
          <div className='border-blue border-r-2 h-[14vh] mt-8'></div>
        </motion.div>

        <div className='font-mono text-slate-400 w-full flex flex-col justify-center items-center'>
          <span>Built by Muhammad Hasbi Ahsani</span>
          <span>&copy; 2022</span>
        </div>
      </footer>
    </>
  )
}
