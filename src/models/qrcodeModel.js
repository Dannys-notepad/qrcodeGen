const fs = require('fs')
const path = require('path')
const genFileName = require('../utils/genFileName.js')
const generateQrCode = require('../utils/generateQrCode.js')
const generateExternal = require('../utils/generateExternal.js')
const genId = require('../utils/genId.js')

class qr{
  constructor(data){
    this.data = data
    this.path = ''
  }
  
  gen(res){
    generateQrCode(this.data, res)
  }
  
  generateExternalQr(res){
    generateExternal(this.data, genFileName(), genId(), res)
  }
  
  externalURL(res){
   this.path = path.join(__dirname, '../qrcodeImages', this.data)
    res.sendFile(this.path)
    //res.json({msg: hello})
  }
}

module.exports = {
  qr
}
