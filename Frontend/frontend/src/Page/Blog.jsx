import Header from "../component/Header";
import TechCard from "../component/Resuable/TechCard";
import SmallCard from "../component/SmallCard";

function Blog() {
  return (
    <>
    <Header textColor={"text-black"} textFamily={"font-mono"}></Header>
    
 <div className="flex mt-10">
    <div className="bg-[url('cricket.jpeg')] bg-cover bg-center w-200 h-110 ml-10 p-5 text-white  rounded-2xl flex">
       <h1 className="w-250 m-auto items-baseline text-2xl mt-5 font-[cursive]">Welcome to our blog, a place where ideas, stories, and knowledge come together. Here,
       we share insights, tips, and experiences that inspire, inform, and empower our readers.
        Whether you're looking for practical advice, the latest trends, or a spark of creativity,
         our articles are crafted to provide value and engage your mind. We believe that every story 
         has the power to teach, every idea can
       ignite change, and every reader can find something meaningful to take away. Join us on this 
       journey of discovery, learning, and inspiration. </h1>
    </div>
    <div className="w-150 h-110 ml-8">
    <h1 className="text-3xl ml-40 font-[cursive] text-red-600 ">Other Featured Posts</h1>
    <SmallCard image="rohit.avif" content="Rohit Sharma is a calm yet explosive batsman known for his effortless strokeplay and record-breaking..."/>
    <SmallCard image="virat.webp" content="Virat Kohli is a fierce and passionate cricketer known for his relentless consistency, aggre ..."/>

     <SmallCard image="rohit.avif" content="Rohit Sharma is a calm yet explosive batsman known for his effortless strokeplay and record-breaking..."/>
    <SmallCard image="virat.webp" content="Virat Kohli is a fierce and passionate cricketer known for his relentless consistency, aggre ..."/>

     <SmallCard image="rohit.avif" content="Rohit Sharma is a calm yet explosive batsman known for his effortless strokeplay and record-breaking..."/>
    
     </div>
</div>

    <h1 className="text-3xl m-10"><b>Recent posts</b></h1>
    <h1 className=" ml-15 text-2xl text-red-600 font-[cursive] ">Technical :-</h1>
    <div className="flex flex-wrap ml-18">
    <TechCard image="aiml.jpeg" topic="Rohit Sharma" content="Rohit Sharma is a calm yet explosive batsman known for his effortless strokeplay and record-breaking..."/>
    <TechCard image="aiml3.jpeg"topic="Virat Kholi" content="Virat Kohli is a fierce and passionate cricketer known for his relentless consistency, aggre ..."/>

     <TechCard image="aiml.jpeg" topic="Rohit Sharma" content="Rohit Sharma is a calm yet explosive batsman known for his effortless strokeplay and record-breaking..."/>
    <TechCard image="aiml2.webp"topic="Virat Kholi" content="Virat Kohli is a fierce and passionate cricketer known for his relentless consistency, aggre ..."/>
</div>

 <h1 className=" ml-15 text-2xl text-red-600 font-[cursive] mt-2 ">Nature :-</h1>
    <div className="flex flex-wrap ml-18">
    <TechCard image="nature.jpg" topic="Rohit Sharma" content="Rohit Sharma is a calm yet explosive batsman known for his effortless strokeplay and record-breaking..."/>
    <TechCard image="nature3.jpg"topic="Virat Kholi" content="Virat Kohli is a fierce and passionate cricketer known for his relentless consistency, aggre ..."/>

     <TechCard image="rohit.avif" topic="Rohit Sharma" content="Rohit Sharma is a calm yet explosive batsman known for his effortless strokeplay and record-breaking..."/>
    <TechCard image="nature1.jpg"topic="Virat Kholi" content="Virat Kohli is a fierce and passionate cricketer known for his relentless consistency, aggre ..."/>
</div>

 <h1 className=" ml-15 text-2xl text-red-600 font-[cursive] mt-2 ">Cricket :-</h1>
    <div className="flex flex-wrap ml-18">
    <TechCard image="rohit.avif" topic="Rohit Sharma" content="Rohit Sharma is a calm yet explosive batsman known for his effortless strokeplay and record-breaking..."/>
    <TechCard image="virat.webp"topic="Virat Kholi" content="Virat Kohli is a fierce and passionate cricketer known for his relentless consistency, aggre ..."/>

     <TechCard image="rohit.avif" topic="Rohit Sharma" content="Rohit Sharma is a calm yet explosive batsman known for his effortless strokeplay and record-breaking..."/>
    <TechCard image="virat.webp"topic="Virat Kholi" content="Virat Kohli is a fierce and passionate cricketer known for his relentless consistency, aggre ..."/>
</div>


<h1 className=" ml-15 text-2xl text-red-600 font-[cursive] mt-2 ">Motivation :-</h1>
    <div className="flex flex-wrap ml-18">
    <TechCard image="motive.webp" topic="Rohit Sharma" content="Rohit Sharma is a calm yet explosive batsman known for his effortless strokeplay and record-breaking..."/>
    <TechCard image="virat.webp"topic="Virat Kholi" content="Virat Kohli is a fierce and passionate cricketer known for his relentless consistency, aggre ..."/>

     <TechCard image="motive3.jpeg" topic="Rohit Sharma" content="Rohit Sharma is a calm yet explosive batsman known for his effortless strokeplay and record-breaking..."/>
    <TechCard image="motive1.jpg"topic="Virat Kholi" content="Virat Kohli is a fierce and passionate cricketer known for his relentless consistency, aggre ..."/>
</div>

    </>
  );
}

export default Blog;
