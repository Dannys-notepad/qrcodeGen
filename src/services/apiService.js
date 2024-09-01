const { qr } = require('../models/qrcodeModel')

const gen = async (data, res) => {
  let dat = await data
  const Qrcode = new qr(dat)
  let func = await Qrcode.gen(res)
}

const genExternal = async (data, res) => {
  let dat = await data
  const Qrcode = new qr(dat)
  let func = await Qrcode.generateExternalQr(res)
}

const externalURL = async (data, res) => {
  let dat = await data
  const Qrcode = new qr(dat)
  let func = await Qrcode.externalURL(res)
}

module.exports = {
  gen,
  genExternal,
  externalURL
}