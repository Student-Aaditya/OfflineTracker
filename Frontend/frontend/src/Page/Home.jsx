import React from 'react';
import Header from '../component/Header';
import Card from '../component/Card';
import Button from '@mui/material/Button';


function Blog() {
  const cards = [
    {
      bg: "bg-blue-500",
      topic: "Technology",
      title: "What's New In 2022 Tech",
      content: "Technologies like AI, ML, and Big Data are driving intelligent decision-making while Blockchain ensures secure and transparent processes.",
      author: "Aaditya",
      date: "2/10/2025",
      image: "images.jpeg",
      avatar: "google.png"
    },
    {
      bg: "bg-red-500",
      topic: "Health",
      title: "Fitness Trends in 2025",
      content: "Wearable devices and AI-driven workouts are transforming personal health and fitness routines globally.",
      author: "Riya",
      date: "1/10/2025",
      image: "health.jpeg",
      avatar: "riya.png"
    },
    {
      bg: "bg-green-500",
      topic: "Science",
      title: "Space Exploration Updates",
      content: "Recent missions to Mars and the Moon are opening new frontiers for scientific research and human exploration.",
      author: "Rahul",
      date: "30/09/2025",
      image: "space.jpeg",
      avatar: "rahul.png"
    },
     {
      bg: "bg-blue-500",
      topic: "Technology",
      title: "What's New In 2022 Tech",
      content: "Technologies like AI, ML, and Big Data are driving intelligent decision-making while Blockchain ensures secure and transparent processes.",
      author: "Aaditya",
      date: "2/10/2025",
      image: "images.jpeg",
      avatar: "google.png"
    }
  ];

  return (
    <>
      <Header textColor={"text-black"} textFamily={"font-mono"} />
      <div className='flex-wrap flex gap-12 ml-80 pl-30'>
     <Button variant="contained" disableElevation color="info">Education</Button>
    <Button variant="outlined" color="error">Challenges</Button>
     <Button variant="contained" color="success" disableElevation>Nature</Button>
     <Button variant="outlined" color='warning'>Cricket</Button>

      </div>
      <div className='flex mt-6 ml-8 flex-wrap'>
        {cards.map((card, index) => (
          <Card key={index} data={card} />
        ))}
      </div>
        <div className='flex mt-6 ml-8 flex-wrap'>
        {cards.map((card, index) => (
          <Card key={index} data={card} />
        ))}
      </div>
        <div className='flex mt-6 ml-8 flex-wrap'>
        {cards.map((card, index) => (
          <Card key={index} data={card} />
        ))}
      </div>
        
    </>
  );
}

export default Blog;
