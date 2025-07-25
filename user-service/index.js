import express from 'express';
import cors from 'cors';
import Connection from './config/db.config.js';
const app = new express();
import AuthRouter from './route/auth.route.js';

// db connection 
new Connection()

// express config
app.use(cors())
app.use(express.json())

// sample get route
app.get('/', (req, res) => {
    res.status(200).send("Welcome to user service.")
});

//define routers
app.use('/auth', AuthRouter)

app.listen(3000, () => {
    console.log(`user service listen on port 3000`)
});