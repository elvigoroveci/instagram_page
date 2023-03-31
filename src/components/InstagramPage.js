import NavBar from "./Navigation"
import Post from "./Post";
import { useEffect, useState } from "react";

const API_URL = 'https://pixabay.com/api/?key=33387929-afc042d47368a5c5770213c28&q=cat&image_type=photo&pretty=true'

const InstagramPage = () =>{

    const [Posts, setPosts] = useState([]);

    const HandleFetchData = () =>{
        fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          setPosts(data.hits);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }

    useEffect(() => {
        HandleFetchData()
    },[]);

    return (
        <div>
        <NavBar />
        <Post Posts={Posts}/>
        </div>
    ); 
};

export default InstagramPage;