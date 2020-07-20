const express = require('express');

const app = express();

app.get('/api/posts', (req, res) => {
    const posts = [
        {id: 1, author: 'Jane Doe', title: 'Post 1', body: 'Blah, blah, blah'},
        {id: 2, author: 'John Doe', title: 'Post 2', body: 'More Blah, blah, blah'},
        {id: 3, author: 'Jimmy Doe', title: 'Post 3', body: 'Even more Blah, blah, blah'},
        {id: 4, author: 'Josh Doe', title: 'Post 4', body: 'Myriads of Blah, blah, blah'},
    ];
    res.json(posts);
})

app.listen(5000, () => console.log('Running on port 5000'))