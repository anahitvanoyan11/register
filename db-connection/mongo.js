const mongoose = require('mongoose');
/*** DB VARIABLES ***/
const BD_NAME = 'xxxProject';
const BD_HOST = 'localhost:27017';
/*** CONNECT TO MONGOOESE ***/
module.exports = {
    connect: () => {
        // mongoose.set('useNewUrlParser', true);
        // mongoose.set('useFindAndModify', false);
        // mongoose.set('useCreateIndex', true);
        mongoose.connect(`mongodb://${BD_HOST}/${BD_NAME}`, {
            useNewUrlParser: true,
            useFindAndModify: true,
            useCreateIndex: true,
        }, (err, client) => {
            if (err) {
                console.error(err)
                return
            }
            return mongoose;

        })
    },
    getMongoose() {
        return mongoose;
    }
};