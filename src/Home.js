import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {title: "My new website😁", body: "I'm so glad to...", author: "Simone", id: 1},
    {title: "Welcome to the party!💃🏾", body: "Great, now that we're all here...", author: "Brian", id: 2},
    {title: "Vacation Time🌴", body: "So I'm planning this trip...", author: "Simone", id: 3}
  ]);

  const handleDelete = (id) =>{
    const newBlogs = blogs.filter(blog => blog.id !== id)
    setBlogs(newBlogs);
  }
  

  return ( 
     <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
    </div>
   );
}
 
export default Home;