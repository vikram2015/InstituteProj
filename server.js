let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let morgan = require('morgan');
let path = require('path');


let config = require('./config/config');
let companyRoute = require('./backend/company/companyRoutes');
let employRoute = require('./backend/employ/employRoutes');
let HomeRoute = require('./backend/home/homeRouter');


let app = express();

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser());
app.use(express.static(path.join(__dirname, 'dist')));


//Routes

app.use('/company',companyRoute);
app.use('/employ',employRoute);
app.use('/home',HomeRoute);


app.use((data,req, res, next) => {
    const error = new Error(data);
    error.status = 404;
    next(error);
});

// app.use((error, req, res) => {
//     res.status(error.status || 500);
//     res.send({
//         error: {
//             message: error.message,
//             status: error.status
//         }
//     })
// })

app.get('*', function (req, res, next) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
})

//server start
app.listen(config.port, function (err) {
    if (err) {
        console.log('error found in server start' + err);
    } else {
        console.log("connected to server at port " + config.port);
    }
});



//databse connectivity
mongoose.connect(config.database);
mongoose.connection.on("connected", function (err) {
    if (err) {
        console.log("error in database connectivity" + err);
    } else {
        console.log('connected to database at port 27017');
    }
});



