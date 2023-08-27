import mongoose from "mongoose";

const connectDatabase = () => {
    try {
        if (process.env.ENV_MODE === 'PRODUCTION') {
            mongoose.connect(process.env.DB_URI_PROD, { useNewUrlParser: true, useUnifiedTopology: true }).then((data) => {
                console.log(`MongoDB connected with server: ${data.connection.host}`);
            })
        }
        else {
            mongoose.connect(process.env.DB_URI_DEV, { useNewUrlParser: true, useUnifiedTopology: true }).then((data) => {
                console.log(`MongoDB connected with server: ${data.connection.host}`);
            })
        }
    }
    catch (err) {
        console.log(`Error: ${err}`)
    }
}

export default connectDatabase;