const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        name: { type: String, unique: true, required: true },
        password: { type: String, required: true },
        prueba1: { type: Boolean, default: false }, // crucigrama de Rocio
        prueba2: { type: Boolean, default: false }, // prisionero de Vero
        prueba3: { type: Boolean, default: false }, // morse de Guille
        prueba4: { type: Boolean, default: false }, // braille de Fran
        prueba5: { type: Boolean, default: false }, // adivinanza de Jota
        prueba6: { type: Boolean, default: false }, // prueba de Montse
    },
    { timestamps: true }
)

module.exports = mongoose.model('User', userSchema)