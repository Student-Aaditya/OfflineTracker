import React from 'react';

function Card({ data }) {
  const { bg, topic, title, content, author, date, image, avatar } = data;

  return (
    <div className='h-120 w-75 rounded-2xl bg-white shadow-lg shadow-yellow-400/40 m-5 border-black-950'>
      <img src={image} alt="network issue" className='w-full rounded-xl h-45 hover:shadow-xl/30' />

      <div className='mt-5 ml-2'>
        <span className={`${bg} text-white ml-2 rounded-xl p-1 font-sans`}>{topic}</span>
        <h1 className='text-xl mt-2'><b>{title}</b></h1>
        <p className='text-purple-900 mt-3 font-[cursive]'>{content}</p>

        <div className='flex mt-12'>
          <img src={avatar} alt={author} className='w-12 h-12 rounded-2xl hover:shadow-xl/40' />
          <div className='ml-3 grid'>
            <span className="font-[cursive]"><b>By {author}</b></span>
            <span className='font-[cursive]'>{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
