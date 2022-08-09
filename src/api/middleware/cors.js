module.exports = (req, res, next) => {
    const method = req.method?.toUpperCase()
    if(method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', '*')
        res.header('Access-Control-Allow-Headers', 'Content-Type')
    }
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Expose-Headers', '*')
    next()
}