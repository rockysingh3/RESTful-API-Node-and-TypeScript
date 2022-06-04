import express from 'express';
import config from './config/default';
import connect from './db/connect';
import routes from './routes';



const port = config.port as number;
const host = config.host as string;


const app = express();


/* this will parse json on all routes */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, host, () => {
    console.log(`Sever listing at port: ${port}`);

    /* connection for DB */
    connect();

    /* rendering the routes */
    routes(app);
})


