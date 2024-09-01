const fs = require('fs')
const path = require('path')

const imgCount = (folderPath) => {
  let count = 0
  fs.readdirSync(folderPath).forEach((file) => {
    const filePath = path.join(folderPath, file)
    const stat = fs.statSync(filePath)
    if(stat.isFile && /\.(jpg|jpeg|png|gif|bmp|tiff|svg|webp)$/i.test(file)){
      count++
    }
  })
  return count
}

const deleteImages = (folderPath) => {
  let imageNum = imgCount(folderPath)
  if(imageNum >= 300){
    fs.readdirSync(folderPath).forEach(file => {
      const filePath = path.join(folderPath, file)
      if(/\.(jpg|jpeg|png|gif|bmp|tiff|svg|webp)$/i.test(file)){
        fs.unlink(filePath, (error) => {
          if(error){
            console.log(error)
          }
        })
      }
    })
  }
}

module.exports = deleteImages