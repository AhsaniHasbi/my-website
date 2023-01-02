import React, { useState, useRef, useContext } from 'react';
import Title from '../components/Title';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';

interface project {
  name: string,
  description: string,
  technologies: string[],
  mainImage: string,
  images: string[]
}

interface works {
  office: string,
  position: string,
  dateWork: string,
  jobdesk: string[]
}

export default function Home () {
  
  const [totalProjects, setTotalProjects] = useState(3);
  const [numbOfWork, setNumbOfWork] = useState(0);
  const [selectProject, setSelectProject] = useState<number>(projects.length);
  const [isDetailProject, setIsDetailProject] = useState(false);

  const about = useRef(null);
  const isInViewAbout = useInView(about, { once: true });

  const work = useRef(null);
  const isInViewWork = useInView(work, { once: true });

  const project = useRef(null);
  const isInViewProject = useInView(project, { once: true });

  const handleClickShowProjects = (operator : string) => {
    if (operator === 'more') {
      setTotalProjects((n : number) => {
        if (n < projects.length) {
          return n + 3;
        }
        return n;
      });
    } else {
      setTotalProjects((n : number) => {
        if (n > 3) {
          return n - 3;
        }
        return n;
      });
    }
  }

  const handleSelectWork = (index : number) => {
    setNumbOfWork(index);
  }

  const handleOpenDetailProject = (index : number) => {
    document.body.style.overflow = "hidden";
    setSelectProject(index);
    setIsDetailProject(true);
  }

  const handleClodeDetailProject = () => {
    document.body.style.overflow = "auto";
    setSelectProject(projects.length);
    setIsDetailProject(false);
  }

  return (
    <>
      <div className='space-y-6'>

        {/* hero */}
        <div className='w-full min-h-screen sm:flex justify-center items-center pt-28 sm:pt-0'>
          <div className='space-y-12 w-full md:w-5/6 xl:w-4/6'>
            <div className='space-y-4 md:space-y-6'>
              <div className='space-y-2'>

                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1, ease: 'easeInOut' }}
                  className='inline-block text-teal font-mono'
                >
                  Hi, nama saya
                </motion.span>

                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.1, ease: 'easeInOut' }}
                  className='text-slate-50 text-4xl sm:text-5xl lg:text-7xl font-extrabold'
                >
                  Hasbi Ahsani.
                </motion.h1>

                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2, ease: 'easeInOut' }}
                  className='text-slate-400 text-4xl sm:text-5xl lg:text-7xl font-extrabold'
                >
                  I build things for the web.
                </motion.h1>

              </div>

              <motion.p 
                className='text-slate-400 w-full lg:w-3/5 leading-7'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3, ease: 'easeInOut' }}
              >
                Saya adalah seorang Web Developer dan Embedded System yang berfokus pada pembuatan aplikasi berbasis web, dashboard berbasis web, serta rancang bangun sistem kontrol berbasis Arduino, Espressif, dan Raspberry Pi.
              </motion.p>

            </div>
            <Link href='mailto:hasbiahsani92@gmail.com' passHref>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4, ease: 'easeInOut' }}
                className='inline-block px-8 py-4 text-teal border-2 border-teal mt-12'
              >
                Say Hello
              </motion.span>
            </Link>
          </div>
        </div>

        {/* about */}
        <div 
          id='about'
          ref={about} 
          style={{
            transform: isInViewAbout ? 'none' : 'translateY(50px)',
            opacity: isInViewAbout ? 1 : 0,
            transition: 'all 0.5s linear 0.3s'
          }}
          className='pt-28 w-full md:w-5/6 xl:w-4/6 mx-auto md:flex'
        >
          <div className='w-full mr-16'>
            <Title number='01' title='About Me' line={true} />
            {/* content */}
            <div className='py-12 space-y-4 text-slate-400'>
              <p>
                Hello, Nama saya <span className='text-teal'>Muhammad Hasbi Ahsani</span> dan saya senang membuat sesuatu hal di internet. Saya lulusan <span className='text-teal'>D3 Teknik Elektronika</span> disalah satu kampus vokasi di Makassar pada tahun 2018. Ketertarikan saya pada Web Development dimulai sejak 2021 ketika saya memutuskan untuk mencoba mempelajari aplikasi berbasis web di tempat saya bekerja.
              </p>
              <p>
                Setelah beberapa saat sampai hari ini, saya diberi kesempatan untuk bekerja sebagai <span className='text-teal'>Web Developer</span> di balai besar Kementerian Perindustrian di Makassar. Dengan background pendidikan tentang elektronika, saya juga memiliki pengetahuan tentang sistem kontrol menggunakan Arduino, Espressif,Raspberry Pi dan menghubungkannya dengan internet atau biasa kita sebut dengan <span className='text-teal'>Internet of Things</span>.
              </p>
              <p>
                Berikut adalah teknologi yang biasa saya gunakan :
              </p>
              <div className='flex items-start space-x-4 sm:space-x-12 font-mono'>
                <ul>
                  <li className='flex items-start space-x-2'>
                    <ArrowRightIcon className='text-teal mt-[2px]' />
                    Javascript (ES6+)
                  </li>
                  <li className='flex items-start space-x-2'>
                    <ArrowRightIcon className='text-teal mt-[2px]' />
                    React
                  </li>
                  <li className='flex items-start space-x-2'>
                    <ArrowRightIcon className='text-teal mt-[2px]' />
                    Node.js
                  </li>
                  <li className='flex items-start space-x-2'>
                    <ArrowRightIcon className='text-teal mt-[2px]' />
                    Typescript
                  </li>
                </ul>
                <ul>
                  <li className='flex items-start space-x-2'>
                    <ArrowRightIcon className='text-teal mt-[2px]' />
                    PHP
                  </li>
                  <li className='flex items-start space-x-2'>
                    <ArrowRightIcon className='text-teal mt-[2px]' />
                    Elektronika
                  </li>
                  <li className='flex items-start space-x-2'>
                    <ArrowRightIcon className='text-teal mt-[2px]' />
                    Arduino
                  </li>
                  <li className='flex items-start space-x-2'>
                    <ArrowRightIcon className='text-teal mt-[2px]' />
                    Raspberry Pi
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='mt-4 md:mt-20 group relative h-64 w-64 sm:w-72 sm:h-72 lg:h-80 lg:w-80 mx-auto'>
            <div className='relative h-64 w-64 sm:w-72 sm:h-72 lg:h-80 lg:w-80 z-10'>
              <Image 
                alt='Foto Profil'
                src='/foto4.jpg'
                fill={true}
                style={{objectFit: 'contain', position: 'absolute'}}
              />
            </div>
            <div className='absolute top-5 left-5 group-hover:top-2 group-hover:left-2 h-64 w-64 sm:w-72 sm:h-72 lg:h-80 lg:w-80 mx-auto border-2 border-teal z-0 transition-all duration-200'>
            </div>
            <div className='absolute top-0 left-0 h-64 w-64 sm:w-72 sm:h-72 lg:h-80 lg:w-80 mx-auto bg-teal opacity-50 group-hover:opacity-0 z-20 transition-all duration-200'>
            </div>
          </div>
        </div>

        {/* work */}
        <motion.div 
          id='experience'
          ref={work} 
          style={{
            transform: isInViewWork ? 'none' : 'translateY(50px)',
            opacity: isInViewWork ? 1 : 0,
            transition: 'all 0.5s linear 0.3s'
          }}
          className='pt-28 w-full md:w-5/6 xl:w-3/6 mx-auto'
        >
          <Title number='02' title="Where I’ve Worked" line={true} />
          {/* content */}
          <div className='py-12 w-full space-y-12 md:space-y-0 md:flex md:space-x-8'>
            <ul className='text-slate-400 flex md:block font-mono text-sm md:text-base'>
                {
                  works.map((val: works, index: number) => {
                    return (
                      <li 
                        key={index}
                        className={`
                          border-b-2 
                          md:border-l-2 
                          md:border-b-0 
                          ${numbOfWork === index ? 'border-teal' : 'border-slate-400'}
                          `
                        }
                      >
                        <button 
                          className={`
                            px-6 py-2
                            ${numbOfWork === index ? 'text-teal bg-[rgba(39,142,165,0.1)]' : 'text-slate-400'}
                            transition-all
                            duration-500
                            ease-out
                          `}
                          onClick={() => handleSelectWork(index)}
                        >
                          {val.office}
                        </button>
                      </li>
                    );
                  })
                }
            </ul>
            {
              works.map((val: works, index: number) => {
                return (
                  <motion.div
                    key={index}
                    initial={{opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className={`
                      ${numbOfWork === index ? 'block' : 'hidden'}
                      w-full 
                      space-y-4
                    `}
                  >
                    <div className='space-y-2'>
                      <h3 className='text-slate-50 font-semibold text-xl'>{val.position} <span className='text-teal'>@{val.office}</span></h3>
                      <span className='inline-block text-slate-400 font-mono text-base'>{val.dateWork}</span>
                    </div>
                    <ul className='space-y-2'>
                      {
                        val.jobdesk.map((job: string, indexJob: number) => {
                          return (
                            <li key={indexJob} className='flex items-start space-x-2 text-slate-400'>
                              <ArrowRightIcon className='text-teal mt-[2px]' />
                              <p>
                                {job}
                              </p>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </motion.div>
                )
              })
            }
          </div>
        </motion.div>

        {/* project */}
        <div id='work' className='pt-28 w-full md:w-5/6 xl:w-4/6 mx-auto'>
            <motion.div 
              ref={project} 
              style={{
                transform: isInViewProject ? 'none' : 'translateY(-50px)',
                opacity: isInViewProject ? 1 : 0,
                transition: 'all 0.5s linear 0.3s'
              }}
              className='text-teal flex items-end space-x-2 pb-12'
            >
              <span className='font-mono text-xl md:text-2xl'>03.</span> 
              <div className='w-full font-sans text-2xl md:text-3xl font-extrabold text-slate-50 flex items-center'>
                <h2 className='w-max mr-2'> Some Things I’ve Built</h2>
                <div className='flex-1 border-b-[1px] border-blue'></div>
              </div>
            </motion.div>
            {/* content */}
            <div className='py-8 md:py-12 w-full space-y-14 lg:space-y-6'>
              {
                projects.map((val : project, index: number) => {
                  if (index < totalProjects) {
                    return (
                      <motion.div 
                        key={index} 
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className={`w-full relative flex ${index % 2 == 0 ? 'flex-row' : 'flex-row-reverse'} items-center justify-end pb-20 lg:pb-32`}
                      >
                        <div 
                          onClick={() => handleOpenDetailProject(index)}
                          className={`group w-full lg:w-3/5 h-full lg:h-[360px] absolute ${index % 2 == 0 ? 'left-0' : 'right-0'}  flex items-center justify-center overflow-hidden rounded-md cursor-pointer`}
                        >
                          <div className='relative w-full h-full bg-dark'>
                            <Image 
                              alt='project image'
                              src={val.mainImage}
                              fill
                              style={{
                                objectFit: 'cover',
                                position: 'absolute'
                              }}
                            />
                            <div className='w-full h-full bg-dark lg:bg-teal opacity-[95%] z-20 lg:opacity-60 group-hover:opacity-0 transition-all duration-300'></div>
                          </div>
                        </div>

                        <div className={`w-full lg:w-1/2 relative  text-slate-400 min-h-[200px] lg:min-h-[320px] space-y-2 lg:space-y-6 ${index % 2 == 0 ? 'text-left lg:text-right' : 'text-left'} px-8 md:px-14 lg:px-0`}>
                          <div className='w-full '>
                            <span className='block w-full text-teal font-mono text-base'>Featured Project</span>
                            <div className={`w-full flex ${index % 2 == 0 ? 'justify-start lg:justify-end' : 'justify-start'}`}>
                              <h3 
                                onClick={() => handleOpenDetailProject(index)}
                                className='text-slate-50 w-max font-semibold text-2xl cursor-pointer hover:text-teal transition-colors duration-300'
                              >
                                {val.name}
                              </h3>
                            </div>
                          </div>
                          <div className='lg:px-8 py-6 lg:bg-black shadow-md lg:shadow-dark rounded-md'>
                            <p>{val.description}</p>
                          </div>
                          <div>
                            <ul className={`w-full flex flex-wrap ${index % 2 == 0 ? 'lg:justify-end lg:pl-20' : 'lg:justify-start lg:pr-20'} font-mono text-base `}>
                              {
                                val.technologies.map((val : string, index: number) => {
                                  return (
                                    <li key={index} className='pr-2 lg:pl-2'>{val},</li>
                                  );
                                })
                              }
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    );
                  }
                })
              }

              <div className='w-full text-center'>
                {
                  (totalProjects < 4) ?
                      <button onClick={() => handleClickShowProjects('more')} className='px-8 py-4 text-teal border-2 border-teal'>
                        Show More
                      </button>
                    :
                      <button onClick={() => handleClickShowProjects('less')} className='px-8 py-4 text-teal border-2 border-teal'>
                        Show Less
                      </button>
                }
              </div>
              
              
            </div>
        </div>

        {/* contact */}
        <motion.div 
          id='contact' 
          style={{
            transform: isInViewWork ? 'none' : 'translateY(50px)',
            opacity: isInViewWork ? 1 : 0,
            transition: 'all 0.5s linear 0.3s'
          }}
          className='pt-28 w-full md:w-5/6 xl:w-4/6 mx-auto'
        >
          <div className='w-full space-y-6'>
            <div className='w-full text-center space-y-2'>
              <span className='font-mono text-teal'>04. Contact Me</span>
              <h2 className='text-slate-50 text-4xl md:text-7xl font-extrabold'>Get In Touch</h2>
            </div>
            <div className='w-full md:w-1/2 mx-auto text-slate-400 text-center text-xl space-y-12'>
              <p>
                Kotak masuk saya selalu terbuka. Apakah anda memiliki pertanyaan atau hanya ingin menyapa, saya akan mencoba yang terbaik untuk menghubungi anda !
              </p>
              <Link 
                href='mailto:hasbiahsani92@gmail.com'
                passHref
              >
                <span className='inline-block px-8 py-4 text-teal border-2 border-teal mt-12'>
                  Say Hello
                </span>
              </Link>
            </div>
          </div>
          {/* content */}
        </motion.div>

      </div>

      {/* Images of projects */}
      <div 
        className={`
          ${isDetailProject ? 'block' : 'hidden'}
          fixed 
          top-0 left-0 
          w-full 
          h-screen
          z-50
        `}
      >
        <div className='relative w-full h-full'>
          <div 
            onClick={() => handleClodeDetailProject()}
            className='absolute w-full h-screen top-0 left-0 backdrop-blur-sm'
          >
          </div>
          <div 
            className={`
              relative 
              bg-black 
              w-full lg:w-2/3 
              mx-auto 
              h-full 
              px-4 pb-4 md:px-8 md:pb-8 
              space-y-6 
              overflow-auto
            `}
          >
            <div className='sticky top-0 bg-black space-y-1 z-50 py-8 flex items-center justify-between'>
              <div>
                <span className='block w-full text-teal font-mono text-base'>Featured Project</span>
                <h2 className='text-2xl md:text-4xl font-bold text-slate-50'>{selectProject !== projects.length && projects[selectProject].name}</h2>
              </div>
              <button 
                onClick={() => handleClodeDetailProject()}
                className='p-1 md:p-2 border-2 border-teal backdrop-blur-sm z-30 !text-teal'
              >
                <CloseIcon />
              </button>
            </div>
            <div 
              className={`
                relative 
                w-full 
                flex flex-col justify-center items-center 
                space-y-12
                ${isDetailProject ? '' : 'h-[0px]'}
                scroll-
              `}
            >
              {
                selectProject !== projects.length &&
                  projects[selectProject].images.map((img: string, index: number) => {
                    return (
                      <div 
                        key={index}
                        className={`
                          relative 
                          w-full 
                          h-[270px] md:h-[420px] 2xl:h-[520px] 
                          bg-dark 
                          overflow-hidden 
                          rounded-md
                        `}
                      >
                        <Image 
                          alt='project image'
                          src={img}
                          fill
                          style={{
                            objectFit: 'scale-down',
                            position: 'absolute'
                          }}
                        />
                      </div>
                    )
                  })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const projects : project[] = [
  {
    name: 'Website BBIHPMM',
    description: 'Sebuah website dari Balai Besar Standardisasi dan Pelayanan Jasa Industri Hasil Perkebunan, Mineral Logam, dan Maritim (BBIHPMM) untuk menampilkan beberapa informasi terkait layanan jasa, berita, tracking order, dan simulasi tarif pengujian.',
    technologies: ['Node.js', 'React.js', 'Next.js', 'Mysql', 'Javascript', 'Typescript', 'Express.js'],
    mainImage: '/project/web1.png',
    images: [
      '/project/web1.png',
      '/project/web2.png',
      '/project/web3.png',
      '/project/web4.png'
    ]
  },
  {
    name: 'Integrated Dashboard BBIHPMM',
    description: 'Sebuah aplikasi dashboard berbasis web yang menampilkan data terkait setiap proses bisnis di BBIHPMM, seperti data pengujian, kalibrasi, sertifikasi, pemeriksa halal, pelanggan, informasi terkait keuangan, sdm, dan BMN.',
    technologies: ['React.js', 'Next.js', 'Mysql', 'Javascript', 'Typescript', 'PHP', 'CodeIgniter'],
    mainImage: '/project/dashboard1.png',
    images: [
      '/project/dashboard1.png',
      '/project/dashboard2.png',
      '/project/dashboard3.png',
      '/project/dashboard4.png'
    ]
  },
  {
    name: 'SIPAKATAUKI',
    description: 'SIPAKATAUKI (Sistem Pemantauan Kualitas Udara dan Air) merupakan sebuah aplikasi web yang terhubung dengan sebuah alat pengukuran kualitas lingkungan berbasis IoT (Internet of Things) untuk memantau kualitas udara ambien dan air.',
    technologies: ['PHP', 'CodeIgniter', 'Mysql', 'Raspberry Pi'],
    mainImage: '/project/sipakatauki2.jpg',
    images: [
      '/project/sipakatauki2.jpg',
      '/project/sipakatauki.jpg',
      '/project/sipakatauki3.jpg'
    ]
  },
  {
    name: 'Sistem Informasi LPH BBIHPMM',
    description: 'Sistem Informasi LPH (Lembaga Pemeriksa Halal) BBIHPMM adalah sebuah aplikasi sistem informasi untuk menunjang proses pemeriksaan halal, aplikasi ini terintegrasi dengan SIHALAL aplikasi milik Badan Penyelenggara Jaminan Produk Halal Kementerian Agama (BPJPH) melalui API yang disediakan oleh SIHALAL.',
    technologies: ['React.js', 'Next.js', 'Mysql', 'Javascript', 'Typescript', 'PHP', 'CodeIgniter'],
    mainImage: '/project/halal1.png',
    images: [
      '/project/halal1.png',
      '/project/halal2.png'
    ]
  },
  {
    name: 'TAMUKU',
    description: 'TAMUKU adalah buku tamu digital berbasis web untuk mencatat setiap tamu yang masuk di lingkungan kantor.',
    technologies: ['Mysql', 'Javascript', 'Jquery', 'PHP', 'CodeIgniter'],
    mainImage: '/project/tamuku1.jpeg',
    images: [
      '/project/tamuku1.jpeg',
      '/project/tamuku2.jpeg',
      '/project/tamuku3.jpeg',
    ]
  },
  {
    name: 'ASTI - IOT',
    description: 'ASTI - IOT (Automated Safety Tools Inspection Based on IOT) merupakan sebuah alat pemeriksa kelengkapan alat pelindung diri (APD) yang terhubung dengan sebuah aplikasi web melalui API untuk memonitoring penggunaan APD di lingkungan kerja. ',
    technologies: ['Mysql', 'Javascript', 'Node.js', 'Express', 'React.js', 'Next.js', 'Python', 'Open CV', 'Deep Learning'],
    mainImage: '/project/asti.jpeg',
    images: [
      '/project/asti.jpeg',
      '/project/asti2.jpeg',
      '/project/asti3.jpeg',
    ]
  },
];

const works : works[] = [
  {
    office: 'BBIHPMM',
    dateWork: 'Januari 2021 - Sekarang',
    position: 'Web Developer',
    jobdesk: [
      'Merencanakan dan membuat code program web.',
      'Membuat dan bertanggung jawab atas dokumentasi.',
      'Melakukan pengecekan atau pemeliharaan secara berkala untuk mengetahui kerusakan dan masalah pada web.'
    ]
  },
  {
    office: 'BBIHPMM',
    dateWork: 'November 2018 - Desember 2020',
    position: 'Teknisi Laboratorium',
    jobdesk: [
      'Memastikan instalasi peralatan elektronik seperti alat laboratorium, alat proses dan peralatan kantor lainnya berjalan dengan baik.',
      'Melakukan perawatan/pemeliharaan peralatan elektronik seperti alat laboratorium, alat proses dan peralatan kantor lainnya.',
      'Melakukan perbaikan peralatan kantor lainnya apabila terjadi kerusakan.',
      'Membuat laporan pemeriksaan berkala dan perbaikan yang dilakukan kepada atasan.'
    ]
  }
];
