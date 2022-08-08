const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI, {
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
})
.then(connection => {
    console.log('Connected to MongoDB')
    console.log(connection)
})
.catch(err => {
    
    console.error('Error connecting to MongoDB: ')
    console.error(err)
})