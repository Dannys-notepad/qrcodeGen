const express = require('express')
const router = express.Router()
const apicache = require('apicache')
const cache = apicache.middleware
const { qrInfo, renderQr } = require('../controllers/apiController.js')
const checkRequestBody = require('../middlewares/checkRequestBody.js')
const checkImgName = require('../middlewares/checkImgName.js')

router.post('/gen',checkRequestBody, qrInfo)
router.get('/image/:imgname', cache('60 minutes'), checkImgName, renderQr)

module.exports = router