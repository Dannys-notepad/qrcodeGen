const qrCode = require('../services/apiService')
const Error = require('../utils/errorHandler.js')
const deleteImages = require('../utils/deleteImages.js')

const genQrcode = async (req, res) => {
  try{
    const folderPath = './src/src/qrcodeImages'
    deleteImages(folderPath)
    let type = req.query.type
    let object = Object.keys(req.query).length-1
    
    if((req.query.type === 'text') && (object === 1)){
      let data = await req.query.text
      let qrcode = await qrCode.gen(data, res)
    }else if((req.query.type === 'url') && (object === 1)){
      let data = await req.query.url
      let qrcode = await qrCode.gen(data, res)
    }else if((req.query.type === 'wifi') && (object === 2)){
      let data = await `${req.query.wifiname}\n${req.query.wifipassword}`
      let qrcode = await qrCode.gen(data, res)
    }else if((req.query.type === 'vcard') && (object === 3)){
      let data = await `${req.query.companyname}\n${req.query.companyaddress}\n${req.query.companyemail}`
      let qrcode = await qrCode.gen(data, res)
    }else if((req.query.type === 'external') && (object === 1)){
      let data = await req.query.data
      let qrcode = await qrCode.genExternal(data, res)
    }else{
      Error(`You can't make a request to this route without a query, or your queries are not in order. Check the API documentation to learn how to use queries`, 400, res)
    }
  }catch (e){
    console.log(e)
    Error('Internal Server Error', 500, res)
  }
}

const returnURL = async (req, res) => {
  try{
    const folderPath = './src/src/qrcodeImages'
    deleteImages(folderPath)
    let data = await req.params.imgname
    let func = await qrCode.externalURL(data, res)
  } catch (e) {
    console.log(e)
    Error('Internal Server Error', 500, res)
  }
}

module.exports = {
  genQrcode,
  returnURL
}