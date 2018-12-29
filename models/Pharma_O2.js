const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PharmaSchema = new Schema({
    compnayName: {
       type:String,
       required:true
    },
    serialNo: {
        type: String,
        required: true
    },
    medicineName: {
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
        default:false
    },
    statusChecked:{
        type:Date,
        
    }

})


const Pharma_O2 = mongoose.model('Pharma_O2', PharmaSchema);
module.exports = Pharma_O2;


