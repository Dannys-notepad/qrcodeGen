const genId = () => {
  let result = ''
  let characters = 'ascdefghijklmnopqrstuvwxyz123456789'
  for(i = 0; i < 6; i++){
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}

module.exports = genId