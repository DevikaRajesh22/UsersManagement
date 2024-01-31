const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 5000;
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');
const userRoute = require('./routes/userRoutes');
const adminRoute = require('./routes/adminRoutes');
const connectDB = require('./config/db');
const cors = require('cors');
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  })
);

app.use(cookieParser());

app.use('/api/', userRoute);
app.use('/api/admin', adminRoute);
app.get('/', (req, res) => res.send("server is ready"))

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log(`Server started at port ${port}`));