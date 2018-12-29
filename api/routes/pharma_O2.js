const express = require('express');
const CryptoJS = require('crypto-js');

const router = express.Router();
const pharmacontroller = require('../../controllers/pharmaController');

router.get('/getDetail/:serialNo', (req, res) => {
    var bytes = CryptoJS.AES.decrypt(req.params.serialNo.toString(), 'secret key');
    var serialNo = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    pharmacontroller.getDetails(serialNo, (err, data) => {
        res.json(data)
    })

})

router.post('/addDetail', (req, res) => {

    pharmacontroller.addDetails(req.body, (err, data) => {
        console.log(data)
        res.json({ message: 'successfully entered the  data' })
    })
})


module.exports = router;