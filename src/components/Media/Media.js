import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaThumbsUp, FaHeart } from "react-icons/fa";

const Media = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("http://localhost:5000/posts/timeline/63aad2c2487648ebc56f36f8");
            setPosts(res.data);
        }
        fetchPosts();
    }, [])

    return (
        <div>
            {
                posts.map(post => (
                    <div className="mx-auto my-12 card w-3/4 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">{post.userId}</h2>
                            <p>{post.desc}</p>
                        </div>
                        <figure><img className='w-3/4' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <div className='flex justify-between m-6'>
                        <div className='flex'>
                        <FaThumbsUp className='text-blue-600 text-xl m-3'></FaThumbsUp>
                        <FaHeart className='text-red-600 text-xl m-3'></FaHeart>
                        </div>
                        <p className='m-3 font-medium text-teal-400 underline'>
                            Comments
                        </p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Media;