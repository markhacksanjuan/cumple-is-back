const bcrypt = require('bcrypt')

module.exports.check = (password, hash) => bcrypt.compare(password, hash)

module.exports.hash = password => bcrypt.hash(password, 10)