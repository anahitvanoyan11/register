const dbConnection = require('./db-connection/mongo');

const express = require("express");
const bodyParser = require("body-parser");
 
const app = express();
const jsonParser = bodyParser.json();

app.use(bodyParser.urlencoded({ extended: false, limit: '100mb', parameterLimit: 30000 }));
app.use(bodyParser.json());

const PORT = 3000;
  
try {
    dbConnection.connect();
    includeRoutes();
    app.listen(PORT, () => {
        console.log('SERVER_RUNNING PORT:' + PORT);
    });
} catch (e) {
    console.error('DB_CONNECTION_ERROR:', e);
}

function includeRoutes() {
    const auth = require('./routes/auth');
    app.use('/auth', auth);
}
