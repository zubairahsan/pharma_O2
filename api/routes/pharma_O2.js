const express = require('express');
const router = express.Router();
const pharmacontroller = require('../../controllers/pharmaController');

router.get('/getDetail/:serialNo', (req, res) => {
    pharmacontroller.getDetails(req.params.serialNo, (err,data) => {
        res.json(data)
    })

})

router.post('/addDetail',(req,res)=>{
    pharmacontroller.addDetails(req.body,(err,data)=>{
        console.log(data)
        res.json({message:'successfully entered the  data'})
    })
})


module.exports = router;