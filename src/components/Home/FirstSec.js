import React from 'react';


const FirstSec = () => {

    const handlePostSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const image = form.image.files[0];
        const text = form.text.value;
        console.log(text);
        

        const formData = new FormData()
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=6eaa2cc146b940fd45a845c1a9e57ba2`;

        fetch(url, {
            method: 'POST',
            body: formData,
        })
        .then(res => res.json())
        .then(data => {
            console.log(data.data.display_url)
            const photo = data.data.display_url;
            // create post
            const newPost = {
                desc: text,
                userId: "63aad2c2487648ebc56f36f8",
                img: photo
            }
    
            fetch('https://socail-media-server.vercel.app/posts', {
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

        })

        console.log(formData)

        
    }

    return (
        <div className='w-1/4 mx-auto'>
            <form onSubmit={handlePostSubmit}>
                <textarea className="textarea textarea-success w-full mb-2" placeholder="What's on your mind?" name="text" id="" cols="30" rows="2"></textarea>

                <input type="file"
                    
                    name="image"
                    
                    className="file-input file-input-bordered file-input-accent w-full mb-6" />
                <button type='submit' className="btn btn-outline btn-accent">Post</button>
            </form>
        </div>
    );
};

export default FirstSec;