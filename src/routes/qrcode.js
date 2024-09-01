const express = require('express')
const router = express.Router()
const apicache = require('apicache')
const cache = apicache.middleware
const { genQrcode, returnURL } = require('../controllers/apiController.js')
const checkImgName = require('../middlewares/checkImgName.js')

router.get('/gen', genQrcode)
router.get('/image/:imgname', cache('60 minutes'), checkImgName, returnURL)

module.exports = router