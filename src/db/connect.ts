import mongoose from 'mongoose';
import config from '../config/default';
import { log } from 'console';

const connect = () => {
    const dbUri = config.dbUri as string;

    return mongoose
        .connect(dbUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => {
            console.log('Database connected');
        })
        .catch((error) => {
            log("db error", error);
        })
}


export default connect;