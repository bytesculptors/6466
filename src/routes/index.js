const findRouter = require('./find')
//const carRouter = require('./car/car')



function route(app) {

    app.use('/find', findRouter)

    app.get('/', (req, res) => {
        res.render('./home/home')
    })



}

module.exports = route
