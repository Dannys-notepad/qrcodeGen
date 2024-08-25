const { qr } = require('../models/qrcodeModel')

const gen = async (data, res) => {
  let dat = await data
  const Qrcode = new qr(dat)
  let func = await Qrcode.gen(res)
}

const render = async (data, res) => {
  let dat = await data
  const Qrcode = new qr(dat)
  let func = await Qrcode.render(res)
}

module.exports = {
  gen,
  render
}