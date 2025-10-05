import Header from "../component/Header";
function Blog() {
  return (
    <>
    <Header textColor={"text-black"} textFamily={"font-mono"}></Header>
 
    <div className="bg-[url('cricket.jpeg')] bg-cover bg-center w-250 h-125 ml-55 p-5 text-white  rounded-3xl ">
       <h1 className="w-250 m-auto items-center text-2xl mt-5">Welcome to our blog, a place where ideas, stories, and knowledge come together. Here,
       we share insights, tips, and experiences that inspire, inform, and empower our readers.
        Whether you're looking for practical advice, the latest trends, or a spark of creativity,
         our articles are crafted to provide value and engage your mind. We believe that every story 
         has the power to teach, every idea can
       ignite change, and every reader can find something meaningful to take away. Join us on this 
       journey of discovery, learning, and inspiration. </h1>
    </div>
    </>
  );
}

export default Blog;
