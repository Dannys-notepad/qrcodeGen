const genFilename = () => {
  let result = 'qrcode_'
  let characters = 'ascdefghijklmnopqrstuvwxyz123456789'
  for(i = 0; i < 5; i++){
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  result += '.png'
  return result
}

module.exports = genFilename