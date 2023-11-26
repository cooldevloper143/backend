import express from 'express';

const app = express();

// app.get('/', (req, res) => {
//     res.send('server is ready');
// });
app.use(express.static('dist'));


// get a list of 5 jokes with id , title , content
app.get('/api/jokes', (req, res) => {

    const jokes = [
        {
            id: 1,
            title: 'Why did the chicken cross the road?',
            content: 'To get to the other side.'
        },
        {
            id: 2,
            title: 'Why did the chicken cross the road?',
            content: 'To get to the other side.'
        },
        {
            id: 3,
            title: 'Why did the chicken cross the road?',
            content: 'To get to the other side.'
        },
        {
            id: 4,
            title: 'Why did the chicken cross the road?',
            content: 'To get to the other side.'
        },
        {
            id: 5,
            title: 'Why did the chicken cross the road?',
            content: 'To get to the other side.'
        }
    ];
    res.send(jokes);

});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});

