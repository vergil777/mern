const express = require('express');
const mongoose = require('mongoose');
const config = require('config');


const app = express();
const PORT = config.get('port') || 5000;

async function start(){
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        app.listen(PORT, () => {
            console.log(`App has been started on ${PORT}`)
        });
    } catch (error) {
        console.log('Server Error', error.message);
        process.exit(1);
    }
}

