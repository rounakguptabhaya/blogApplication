import express from 'express';
import mongoose from 'mongoose';
import blogRouter from './routes/blog-routes';
import router from './routes/user-routes';
import cors from 'cors';


const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/user",router);
app.use("/api/blog",blogRouter);
mongoose.connect(
    'mongodb+srv://admin:c72ru00n5XJaLvcU@cluster0.2ovanxa.mongodb.net/Blog?retryWrites=true&w=majority'
)
    .then(() => app.listen(5000))
    .then(() => console.log("Server running on localhost 5000"))
    .catch((err) => console.log(err));



//c72ru00n5XJaLvcU
//1:09:32 / 3:48:38