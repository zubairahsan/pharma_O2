const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PharmaSchema = new Schema({
    serialNo: {
        type: String,
        required: true
    },
    medName: {
        type: String,
        required: true
    },
    manufacturingDate: {
        type: Date,
        default: Date.now,

    },
    expireDate: {
        type: Date,

    },
    status: {
        type: Boolean,
        required: true
    }

})


const Pharma_O2 = mongoose.model('Pharma_O2', PharmaSchema);
module.exports = Pharma_O2;


