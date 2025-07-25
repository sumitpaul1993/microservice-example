import express from 'express';
import cors from 'cors';
import { DBConnection } from './config/db.config.js';
import { EnvConfig } from './config/env.config.js';
import ProductRouter from './route/product.route.js';
const app = new express();
EnvConfig()

// db connection 
DBConnection()

// express config
app.use(cors())
app.use(express.json())

// sample get route
app.get('/', (req, res) => {
    res.status(200).send("Welcome to user service.")
});

//define routers
app.use('/product', ProductRouter)

app.listen(process.env.PORT, () => {
    console.log(`user service listen on port ${process.env.PORT}`)
});