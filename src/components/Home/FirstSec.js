import React, { useEffect } from 'react';

const FirstSec = () => {

    const handlePostSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const text = form.text.value;
        console.log(text);
        form.reset();

        const newPost = {
            desc: text,
            userId: "63aad2c2487648ebc56f36f8"
        }

        fetch('http://localhost:5000/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPost)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    console.log(data);
                    
                } else {
                    console.error(data.message)
                }
            })
    }
    return (
        <div className='w-1/4 mx-auto'>
            <form onSubmit={handlePostSubmit}>
                <textarea className="textarea textarea-success w-full mb-2" placeholder="What's on your mind?" name="text" id="" cols="30" rows="2"></textarea>
                <input type="file" className="file-input file-input-bordered file-input-accent w-full mb-6" />
                <button type='submit' className="btn btn-outline btn-accent">Post</button>
            </form>
        </div>
    );
};

export default FirstSec;