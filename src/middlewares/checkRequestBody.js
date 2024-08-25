const Error = require('../utils/errorHandler.js')

const checkRequestBody = (req, res, next) => {
  let text = req.body.text
  if(text.length < 5 ||text.length > 100){
    Error('Text can\'t be shoter than 5 or longer than 40', 400, res)
  }else{
    next()
  }
}

module.exports = checkRequestBody