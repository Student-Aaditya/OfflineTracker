import Header from "../component/Header";
import SmallCard from "../component/SmallCard";
function Blog() {
  return (
    <>
    <Header textColor={"text-black"} textFamily={"font-mono"}></Header>
 <div className="flex">
    <div className="bg-[url('cricket.jpeg')] bg-cover bg-center w-200 h-120 ml-10 p-5 text-white  rounded-2xl flex">
       <h1 className="w-250 m-auto items-baseline text-2xl mt-5 font-[cursive]">Welcome to our blog, a place where ideas, stories, and knowledge come together. Here,
       we share insights, tips, and experiences that inspire, inform, and empower our readers.
        Whether you're looking for practical advice, the latest trends, or a spark of creativity,
         our articles are crafted to provide value and engage your mind. We believe that every story 
         has the power to teach, every idea can
       ignite change, and every reader can find something meaningful to take away. Join us on this 
       journey of discovery, learning, and inspiration. </h1>
    </div>
    <div className="w-150 h-120 ml-8">
    <h1 className="text-3xl ml-40 ">Other Featured Posts</h1>
    <SmallCard image="rohit.avif" content="Rohit Sharma is a calm yet explosive batsman known for his effortless strokeplay and record-breaking..."/>
    <SmallCard image="virat.webp" content="Virat Kohli is a fierce and passionate cricketer known for his relentless consistency, aggre ..."/>

     <SmallCard image="rohit.avif" content="Rohit Sharma is a calm yet explosive batsman known for his effortless strokeplay and record-breaking..."/>
    <SmallCard image="virat.webp" content="Virat Kohli is a fierce and passionate cricketer known for his relentless consistency, aggre ..."/>

     <SmallCard image="rohit.avif" content="Rohit Sharma is a calm yet explosive batsman known for his effortless strokeplay and record-breaking..."/>
    
     </div>
</div>
    </>
  );
}

export default Blog;
