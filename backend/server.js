import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import cors from "cors"

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

mongoose.connect(process.env.MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
}).then(()=> {
    console.log("mongoose is successeful connected");
}).catch((error)=>{
		console.log("mongoose connection fail");
    console.log(error);
});


app.get('/api/products', productRouter);
app.get('/api/users', userRouter);
app.get('/', );



app.get('/', (req, res) => {
	res.send("server is ready");
});



const port = process.env.PORT || 4000;

app.listen(port, () => {
console.log("URI", process.env.MONGODB_URI)
	console.log(`serve at http://localhost:${port}`);
});