import React, {useState, useEffect} from 'react';
import './posts.css';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('/api/posts') //beacuse we set a proxy in package.json
            .then(res => res.json())
            .then(data => setPosts(data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h2>Posts</h2>
            <div className="list">
                {posts.map(post => 
                <div key={post.id} className="list-item">
                    <h3 className="title">{post.title}</h3>
                    <p className="author">author: {post.author}</p>
                    <p className="body">{post.body}</p>
                </div>)}
            </div>
        </div>
    )
}

export default Posts;
