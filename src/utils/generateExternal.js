const qrCode = require('qrcode')
const writeData = require('./writeData.js')
let db = require('../DB/imgData.json')

const generateExternal = (data, filename, id, res) => {
    qrCode.toFile(`./src/qrcodeImages/${filename}`, data, {
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
    res.status(201).json({status: 'success',
      message: 'qrcode image generated, the below link can be used externally',
      imgurl: `https://qrcode-gen-pad.onrender.com/api/v2/qrcode/image/${filename}`
      })
      let schema = {
        id,
        data,
        imgname: filename
      }
      let imgData = { ...schema }
      db.push(imgData)
      writeData('./src/DB/imgData.json', db)
      console.log('QR code saved as ' + filename)
  })
}

module.exports = generateExternal