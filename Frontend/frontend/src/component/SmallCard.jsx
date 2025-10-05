import React from 'react'

function SmallCard({image,content}) {
  return (
    <>
      <div className='border-2 w-150 h-14 rounded-2xl flex mt-5'>
        <img src={image} alt="network issue"  className='w-15 h-15 rounded-2xl '/>
        <p className='ml-3 items-center m-auto'><b>{content}</b></p>
      </div>
    </>
  )
}

export default SmallCard
