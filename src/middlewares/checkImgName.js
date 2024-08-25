const fs = require('fs')
const Error = require('../utils/errorHandler.js')

const checkImgName = (req, res, next) => {
  let name = req.params.imgname
  let path = `./src/qrcodeImages/${name}`
  if(fs.existsSync(path)){
    next()
  }else{
    Error('Qrcode image name does not exist', 400, res)
  }
}

module.exports = checkImgName