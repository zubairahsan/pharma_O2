const Company = require('../models/Company');

module.exports = {
    resgiterCompany: (data, cb) => {
        console.log(data)
        let company = new Company(data);
        company.save()
            .then((data) => {
                cb(null, data)
            })
            .catch(err => console.log(err))


    },
    updateCompanyData: (data, cb) => {
        console.log(data)
        Company.findByIdAndUpdate({ _id: data.id }, data)
            .then(data => {
                cb(null, data)
            })
            .catch(err => {
                console.log(err)
            })


    },


    getCompaniesRecord : (req,cb) => {
        Company.find()
            .then(data => {
                cb(null, data)
            })
            .catch(err => console.log(err))
    }
}