const express = require('express')
const app = express()
const path = require('path')
//const rateLimit = require('express-rate-limit')
const PORT = 8000
const index = require('./controllers/indexController')
const qrcode = require('./routes/qrcode')

/*const apiLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 10
})*/

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: true}))
app.use('/qrcodeImages', express.static(path.join(__dirname, './qrcodeImages')))

app.get('/', index)
app.use('/api/v2/qrcode', qrcode)

app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`))
