const express=require('express');
const cors=require('cors');
const dotenv=require('dotenv');

const userRoute = require('./routes/userRoutes');
const adminRoute = require('./routes/adminRoutes');
const connectDB = require('./config/db');

dotenv.config();
connectDB();
const app = express();
const port = process.env.PORT||5000;


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  })
);

app.use('/',userRoute)
app.use('/admin',adminRoute)

app.listen(port,()=>console.log("server started"))
