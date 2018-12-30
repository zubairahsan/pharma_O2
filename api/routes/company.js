const express = require('express');
const router = express.Router();
const companyController = require('../../controllers/companyController');

router.post('/register', (req, res) => {
    companyController.resgiterCompany(req.body, (err, data) => {
        res.json(data);
    })
})
router.put('/update/:id', (req, res) => {
    req.body.id = req.params.id;
    companyController.updateCompanyData(req.body, (err, data) => {
        res.json(data);
    })
})

router.get('/companies', (req, res) => {

    companyController.getCompaniesRecord(req, (err, data) => {
        res.json(data);
    })
})

module.exports = router;
