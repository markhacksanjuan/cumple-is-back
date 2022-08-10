const mongoose = require('mongoose')

// mongoose.connect(process.env.MONGODB_URI, {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
// })
// .then(connection => {
//     console.log('Connected to MongoDB!')
//     console.log('Connection: %j', connection)
// })
// .catch(err => {
    
//     console.error('Error connecting to MongoDB: ')
//     console.error('Error: %j', err)
// })

try {
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => {
        console.log('Connected to MongoDB!')
    })
}catch(err) {
    console.error('Error connecting to MongoDB: ')
    console.error('Error: %j', err)
}
const dbConnection = mongoose.connection
dbConnection.on('error', err => console.log(`Connection error: ${err}`))
dbConnection.on('open', () => console.log('Connected to DB'))