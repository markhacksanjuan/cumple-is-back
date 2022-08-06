require('dotenv').config()

const app = require('./src/configs/app')
require('./src/configs/mongoose')

app.listen(app.get('port'), () => {
    console.log('Conectado al puerto: ', app.get('port'))
})
