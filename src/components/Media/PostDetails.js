import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const details = useLoaderData();
    return (
        <div className=' text-xl font-medium p-12 border-2 border-teal-400 text-center'>
            <p>userId: {details.userId}</p>
            <p>Description: {details.desc}</p>
            <p>Likes: {details.likes}</p>
            <p>Post Created At: {details.createdAt}</p>
            <img className='w-1/4 mx-auto' src={details.img} alt="" />
        </div>
    );
};

export default PostDetails;