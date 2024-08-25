const fs = require('fs')
const path = require('path')
const genFileName = require('../utils/genFileName.js')
const generateQRCode = require('../utils/generateQrcode.js')
const genId = require('../utils/genId.js')

const db = require('../DB/data.json')


class qr{
  constructor(data){
    this.data = data
    this.path = ''
  }
  
  gen(res){
    generateQRCode(this.data, genFileName(), genId(), res)
  }
  
  render(res){
   this.path = path.join(__dirname, '../qrcodeImages', this.data);
    res.sendFile(this.path);
  }
}

module.exports = {
  qr
}