const Error = (err, code, res) => {
  res.status(code).json({message: err})
}

module.exports = Error