const qrCode = require('../services/apiService')
const Error = require('../utils/errorHandler.js')

const qrInfo = async (req, res) => {
  try{
    let data = await req.body.text
    let qrcode = await qrCode.gen(data, res)
  }catch (e){
    console.log(e)
    Error('Internal Server Error', 500, res)
  }
}

const renderQr = async (req, res) => {
  try{
    let data = req.params.imgname
    let func = await qrCode.render(data, res)
  } catch (e) {
    console.log(e)
    Error('Internal Server Error', 500, res)
  }
}

module.exports = {
  qrInfo,
  renderQr
}