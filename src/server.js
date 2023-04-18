import express from "express";

const app = express();


app.get('/', (req, res) => {
    res.send('Oi tudo bem!');
});

const port = 3001;

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});