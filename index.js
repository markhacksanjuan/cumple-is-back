require('dotenv').config()

const app = require('./src/configs/app')
require('./src/configs/mongoose')
require('./src/configs/passport')

app.listen(app.get('port'), () => {
    console.log('Conectado al puerto: ', app.get('port'))
    console.log(process.env.MONGODB_URI)
})
