module.exports = (req, res, next) => {
    const method = req.method?.toUpperCase()
    // if(method === 'OPTIONS'){
    //     res.header('Access-Control-Allow-Methods', '*')
    //     res.header('Access-Control-Allow-Headers', 'Content-Type')
    // }
    if(method === 'OPTIONS'){
        res.status(200).end()
        return
    }
    // res.header('Access-Control-Allow-Origin', '*')
    // res.header('Access-Control-Expose-Headers', '*')
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', '*')
    // another common pattern
    // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    )
    next()
}