import React, { useMemo, useRef, useState } from 'react';
import JoditEditor from 'jodit-react';
import axios from 'axios';


const AddBlog = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const handleAddBlog = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.vakue;
        const image = form.image.vakue;
        const blogContent = { title, status: 'draft', image, content, };
        axios.post('https://blood-donation-server-eight.vercel.app/addblog', blogContent)
            .then(res => {
                console.log(res.data);
            })
    }






    return (
        <form onSubmit={handleAddBlog} className="card-body flex-shrink-0">

            <h1 className="text-5xl font-bold flex justify-center">Create Blog</h1>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Title</span>
                </label>
                <input type="text" name="title" placeholder="Title" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Image</span>
                </label>
                <input type="text" name="image" placeholder="Image" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Content</span>
                </label>
                <JoditEditor
                    ref={editor}
                    value={content}
                    // config={config}
                    tabIndex={1} // tabIndex of textarea
                    onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                    onChange={newContent => { }}
                />
            </div>
            <div className="form-control mt-6">
                <button className="btn btn-primary">Create Blog</button>
            </div>
        </form>
    );
};

export default AddBlog;