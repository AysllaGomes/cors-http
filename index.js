const express = require('express');
const app = express();
const cors = require('cors');

const ingredients = [
    {
        "id": "1",
        "item": "Bacon"
    },
    {
        "id": "2",
        "item": "Eggs"
    },
    {
        "id": "3",
        "item": "Milk"
    },
    {
        "id": "4",
        "item": "Butter"
    }
];

app.get('/ingredients', (req, res, next) => {
    res.send(ingredients);
});

app.use(cors({
    origin: ['https://www.section.io', 'https://www.google.com/']
}));

app.listen(6069);
