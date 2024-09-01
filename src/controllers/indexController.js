const Error = require('../utils/errorHandler.js')
//const deleteImages = require('../utils/deleteImages.js')

const index = async (req, res) => {
  /*const folderPath = './src/src/qrcodeImages'
  deleteImages(folderPath)*/
  res.render('index')
}

module.exports = index
