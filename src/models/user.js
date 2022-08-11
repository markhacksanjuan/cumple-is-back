const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        name: { type: String, unique: true, required: true },
        password: { type: String, required: true },
        prueba1: { type: { }, default: { solved: false, show: true } }, // crucigrama de Rocio
        prueba2: { type: { }, default: { solved: false, show: false } }, // prisionero de Vero
        prueba3: { type: { }, default: { solved: false, show: false } }, // morse de Guille
        prueba4: { type: { }, default: { solved: false, show: false } }, // braille de Fran
        prueba5: { type: { }, default: { solved: false, show: false } }, // adivinanza de Jota
        prueba6: { type: { }, default: { solved: false, show: false } }, // prueba de Montse
    },
    { timestamps: true }
)

module.exports = mongoose.model('User', userSchema)