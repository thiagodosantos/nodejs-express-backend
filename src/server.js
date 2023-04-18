import express from "express";
import BaseRouter from "./routes/Base.js";

const app = express();


app.use(BaseRouter);

const port = 3001;
app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});