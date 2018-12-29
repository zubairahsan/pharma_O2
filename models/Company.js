const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companySchema = new Schema({
    companyName: {
        type: String,
        required: true
    },
    CEO: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    postalCode: {
        type: Number,
        required: true
    },

})

const Company = mongoose.model('companies', companySchema);
module.exports = Company;