import React from 'react'

const JournalBanner = () => {
  return (
    <div className='relative bg-gradient-to-r from-teal-500 to-teal-700 mb-8'>
        <div className='mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly'>
            <div className='mb-8 md:mb-0 text-center'>
                <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>Winter Sale</h1>
                <p className='text-lg md:text-xl text-white mb-2'>Chat with characters for</p>
                <p className='text-2xl md:text-5xl font-bold text-gray-800 mb-4'>50% less</p>
            </div>
        </div>
    </div>
  )
}

export default JournalBanner