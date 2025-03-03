const express = require('express');
const connectionTODB = require('./configure/db');
const ProductRouter = require('./Routes/productRoutes');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors({
    origin:  ["http://localhost:5173","http://localhost:5174","http://localhost:5175"],   
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credential:true
}))
app.use('/productData',ProductRouter);

const port = 5000
app.listen(port,async()=>{
    try {
        await connectionTODB;
        console.log(`server is running on port ${port}`);
    } catch (error) {
        console.log(error);
    }
})
