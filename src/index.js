const path = require('path')
const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars');
const app = express()
const port = 3000
const route = require('./routes')
const db = require('./configs/connectDB');
const { error } = require('console');

//mySQL
db.execute('SELECT * FROM `customers` ')
    .then((data) => {
        //console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });

//middleware
app.use(express.urlencoded({
    extended: true
}
))
app.use(express.json())

//mở file tĩnh
app.use(express.static(path.join(__dirname, 'public')))

//HTTP logger
app.use(morgan('combined'))

//Template engine
app.engine('hbs', engine({
    extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))

//Routes init
route(app)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})