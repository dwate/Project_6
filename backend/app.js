const express = require('express');

const app = express();

app.use('/api/sauces', (req, res, next) => {
    const sauces = [
        {
            _id: 'sakjfk',
            userId: 'ghghgh',
            name: 'one hot sauce',
            manufacturer: 'one',
            description: 'hot sauce',
            mainPepper: 'hot',
            imageUrl: '',
            heat: 6,
            likes: 5,
            dislikes: 3,
            usersLiked: 'djddj',
            usersDisliked: 'shshs',
        },
        {
            _id: 'sakjff',
            userId: 'ghghgh',
            name: 'two hot sauce',
            manufacturer: 'two',
            description: 'hot sauce',
            mainPepper: 'hot',
            imageUrl: '',
            heat: 8,
            likes: 15,
            dislikes: 30,
            usersLiked: 'djddj',
            usersDisliked: 'shshs',
        },
    ];
    res.status(200).json(sauces)
  });
  
  
module.exports = app;