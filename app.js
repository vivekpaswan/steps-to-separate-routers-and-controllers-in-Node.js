const express = require ('express');
const routes = require('./config/routes'); // import the routes

const app = express();

app.use(express.json());

app.use('/', routes); //to use the routes

const listener = app.listen(process.env.PORT || 3001, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})