const qrCode = require('qrcode')
const writeData = require('./writeData.js')
let data = require('../DB/data.json')

const generateQRCode = (text, filename, id, res) => {
    qrCode.toFile(`./src/qrcodeImages/${filename}`, text, {
      errorCorrectionLevel: 'H',
      type: 'png',
      quality: 0.92,
      margin: 2,
      color: {
        dark: '#000000',
        light: '#FFFFFF' 
      }
  }, function (err) {
      if (err) throw err;
      res.status(201).json({message: 'qrcode generated',
      imgId: filename
      })
      let schema = {
        id,
        imgname: filename
      }
      let imgData = { ...schema}
      data.push(imgData)
      writeData('./src/DB/data.json', data)
      console.log('QR code saved as ' + filename)
  })
}

module.exports = generateQRCode