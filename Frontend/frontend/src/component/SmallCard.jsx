import React from 'react'

function SmallCard({image,content}) {
  return (
    <>
      <div className=' w-150 h-14 rounded-2xl flex mt-6'>
        <img src={image} alt="network issue"  className='w-13 h-13 rounded-2xl hover:w-20'/>
        <p className='ml-3 items-center m-auto'><b>{content}</b></p>
      </div>
      <hr />
    </>
  )
}

export default SmallCard
