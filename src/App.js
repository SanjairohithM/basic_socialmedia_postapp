import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import Missing from "./Missing";
import Newpost from "./Newpost";
import Postpage from "./Postpage";
import Post from "./Post";
import { Link,Navigate,Route, Routes } from "react-router-dom";
import Postlayout from "./Postlayout";
import { useEffect, useState } from "react";
import {format} from "date-fns";



function App() {
  const[posts,setPosts]=useState([
   { 
    id:1,
    title:"hello",
    datetime:"July 01,2021 11:17:36 AM",
    body:"From tiruppur gsjkskskgsbsnbnkbdbkkbndkbdkbnddkbndkbdbkdbndkbdkbdkbkbdbdkb"
   },
   {
    id:2,
    title:"i am sanjai",
    datetime:"July 01,2021 11:17:36 AM",
    body:"From tiruppur"


  }])
  const[search,setSearch]=useState('')
  const [searchResults,setSeachResults]=useState([])
  const [postTitle,setPostTitle]=useState('')
  const [postBody,setPostBody]=useState('')

  useEffect(()=> {
    const filteredResults = posts.filter((post)=>((post.body).toLowerCase()).includes(search.toLowerCase())||((post.title).toLowerCase()).includes(search.toLowerCase()));
    setSeachResults(filteredResults.reverse());},[posts,search])
    
  
  const handleSubmit=(e)=>
    {
      e.preventDefault();
      const id =posts.length ? posts[posts.length-1].id+1:1;
      const datetime=format(new Date(),'MMMM dd,yyyy pp');
      const newPost={id, title:postTitle,datetime,body:postBody};
      const allPosts=[...posts,newPost];
      setPosts={allPosts}
      setPostTitle('')
      setPostBody('')
      Navigate('/')
    }
  const handleDelete=(e)=>{

  }
  return (
    <div className="App">
      
      <Header title="social media"/>
      <Nav 
      search={search}
      setSearch={setSearch}/>
      <Routes>
      <Route path="/" element={<Home posts={searchResults}/>}/>
      <Route path="/Post">
      <Route index element={<Newpost
       handleSubmit={handleSubmit}
       postTitle={postTitle}
       setPostTitle={setPostTitle}
       postBody={postBody}
       setPostBody={setPostBody}
       />}/>
       <Route path=":id" element={<Postpage posts={posts}handleDelete={handleDelete} />} /></Route>

     
     <Route path="/About" element={<About/>}/>
     <Route path="*" element={<Missing />}/>
     </Routes>
      <Footer /> 
      <Postpage/>
        
       

      

      </div>
      
  );
  }
    
export default App;
