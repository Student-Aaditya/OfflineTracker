import React from 'react'

function TechCard({topic,image,content}) {
  return (
    <>
       <div className='h-80 w-75 rounded-2xl bg-blue-50  shadow-lg shadow-green-300/30 m-5  hover:shadow-sky-300'>
      <img src={image} alt="network issue" className='w-full rounded-xl h-45 hover:shadow-xl/30 hover:cursor-pointer' />

      <div className='mt-5 ml-2'>
        <h1 className='text-xl mt-2'><b>{topic}</b></h1>
        <p className='text-purple-900 mt-3 font-[cursive]'>{content}</p>
</div>
</div>
    </>
  )
}

export default TechCard
