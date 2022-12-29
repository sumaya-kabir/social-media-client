import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaThumbsUp, FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Media = () => {
    const [posts, setPosts] = useState([]);
    const [like, setLike] = useState(0);
    const [love, setLove] = useState(0);
    const [comment, setComment] = useState("");

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("http://localhost:5000/posts/");
            setPosts(res.data);
        }
        fetchPosts();
    }, [])

    const handleLike = () => {
        setLike(like + 1);
    }

    const handleLove =() => {
        setLove(love + 1);
    }

    const handleComment = (e) => {
        e.preventDefault();
        const newComment = e.target.comment.value;
        setComment(newComment)
    }

    return (
        <div>
            {
                posts.map(post => (
                    <div className="mx-auto p-6 my-12 card w-3/4 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">{post.userId}</h2>
                            <p>{post.desc}</p>
                        </div>
                        <figure><img className='w-2/4' src={post.img} alt="" /></figure>
                        <div className='flex justify-between m-6'>
                        <div className='flex'>
                        <button className='flex' onClick={handleLike}>
                        <FaThumbsUp className='text-blue-600 text-xl m-3'></FaThumbsUp>
                        <p className='font-medium mt-3'>{like}</p>
                        </button>
                        <button className='flex' onClick={handleLove}>
                        <FaHeart className='text-red-600 text-xl m-3'></FaHeart>
                        <p className='font-medium mt-3'>{love}</p>
                        </button>
                        </div>
                        
                        <p className='m-3 font-medium text-teal-400'>
                            <Link to={`/postDetails/${post._id}`}>
                            See Details
                            </Link>
                        </p>
                        </div>
                        <form  onSubmit={handleComment}>
                        <textarea name="comment" className="w-full textarea textarea-bordered" placeholder="Add a Comment"></textarea>
                        <button type="submit" className='btn btn-ghost ml-3'>
                            Post
                        </button>
                        </form>
                        <div className='m-6 text-left'>
                        <p className='text-2xl mb-6'>All comments
                        </p>
                        <p>{comment}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Media;