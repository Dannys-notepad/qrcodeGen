const fs = require('fs')
const Error = require('../utils/errorHandler.js')

const checkImgName = (req, res, next) => {
  let name = req.params.imgname
  let path = `./src/qrcodeImages/${name}`
  if(fs.existsSync(path)){
    next()
  }else{
    Error('the qrcode image name.entered does not exist, maybe it might have been automatically deleted by the server because of CPU management', 400, res)
  }
}

module.exports = checkImgName