const qrCode = require('qrcode')
const Error = require('./errorHandler.js')

const generateQrCode = (data, res) => {
  qrCode.toDataURL(data, (err, url) => {
    if(err){
      Error(`Could'nt generate qrcode`, 500, res)
      console.log(err)
    }else{
      res.status(201).render('qrcode', {url})
    }
  })
}

module.exports = generateQrCode