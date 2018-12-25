const Pharma_O2 = require('../models/Pharma_O2');



module.exports = {
    getDetails: (serialNo,  cb) => {
       
        Pharma_O2.findOne({ serialNo })
            .then(response => {
                if (response) {
                    cb(null, response);
                }

            })
            .catch(err => {
                console.log(err)
            })
    },
    addDetails: (data, cb) => {
        let newMedicine=new Pharma_O2(data)
        newMedicine.save(cb(null,data))
    }
}