import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blogsContainer'>
            <div className='mt-9'>
                <h1 className='font-semibold text-2xl md:text-3xl lg:text-4xl'>What is context API?</h1>
                <p>Context API refers to the way of passing data through the component tree instead of passing props down manually at each and every level.</p>
            </div>
            <div className='mt-9'>
                <h1 className='font-semibold text-2xl md:text-3xl lg:text-4xl'>What are Semantic Tags?</h1>
                <p>The Semantic Tags refer to the tags that brings meaning to an HTML page rather than just presentation. It makes HTML more understandable by better indicating the different sections and layout of web pages.</p>
            </div>
            <div className='mt-9'>
                <h1 className='font-semibold text-2xl md:text-3xl lg:text-4xl'>What are the differences between inline and inline block elements?</h1>
                <p>Compared to display:inline, the major difference is that inline-block allows to set a width and height on the element. Also, with display:inline, top and bottom margins & paddings are not respected, and with display: inline-block they are.</p>
            </div>
        </div>
    );
};

export default Blog;