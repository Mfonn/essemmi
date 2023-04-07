import React from 'react'

const Homepage = ({heading, message}) => {
    return (
        <div className='flex h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
            {/* Overlay */}
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/10 z-[2]' />
            <div className='p-5 text-white z-[2] ml-[auto] mr-[auto]'>
                <h2 className='text-5xl font-bold underline'>{heading}</h2>
                <p className='py-5 text-xlfont-thin italic'>{message}</p>
                <button className='px-8 py-2 border mt-[25rem] text-white/70'>Explore</button>
       
            </div>
             </div>
    )
}

export default Homepage