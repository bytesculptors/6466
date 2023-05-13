const mongoose = require('mongoose')

function connnectDB(){
    mongoose.connect('mongodb+srv://6466car:1122334455@cluster0.f6xygee.mongodb.net/car6466', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    //chua co database
    mongoose.connection.on('connected', () => {
        console.log('Mongodb connected')
    })
    mongoose.connection.on('error', (err) => {
        console.log(err)
    })
}

connnectDB()

module.exports = connnectDB
