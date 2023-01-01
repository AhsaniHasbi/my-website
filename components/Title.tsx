import React from 'react';

interface props {
  number: string,
  title: string
  line? : boolean
}

export default function Title(props : props) {
  return (
    <>
      <div className='text-teal flex items-end space-x-2'>
        <span className='font-mono text-xl md:text-2xl'>{props.number}.</span> 
        <div className='w-full font-sans text-2xl md:text-3xl font-extrabold text-slate-50 flex items-center'>
          <h2 className='w-max mr-2'> {props.title}</h2>
          {
            props.line && <div className='flex-1 border-b-[1px] border-blue'></div>
          }
          
        </div>
      </div>
    </>
  )
}
