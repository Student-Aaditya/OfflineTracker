function Card() {

  return (
    <>
      <div className='h-120 w-75 rounded-2xl bg-white-200 shadow-lg  shadow-yellow-400/40  m-5 border-black-950'>
        
         < img src="images.jpeg" alt="network issue" className='w-full rounded-xl h-45 hover:shadow-xl/30 ' />
          <div className='mt-5 ml-2'>
        <span className='bg-sky-500 text-white ml-2 rounded-xl p-1 font-sans '>Technology</span>
        <h1 className='text-xl mt-2'><b>What's New In 2022 Tech</b></h1>
        <p className='text-purple-900 mt-3 font-[cursive]'>Technologies like AI, ML, and Big Data are driving
           intelligent decision-making while Blockchain ensures secure and transpar... 
        </p>
        <div className='flex mt-13'>
         
          <img src="google.png" alt="network issue" className='w-12 h-12 rounded-2xl hover:shadow-xl/40' />
        <div className='ml-3  grid'>
        <span className="font-[cursive]"> <b>By Aaditya</b></span>
        <span className='font-[cursive]'>2/10/2025</span>
        </div>
        </div>
      </div>

      </div>
      
    </>
  )
}

export default Card
