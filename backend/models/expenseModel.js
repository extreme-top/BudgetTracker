const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim : true,
        maxLength : 75
    },
    amount: {
        type: Number,
        required: true,
        trim : true,
        maxLength : 20
    },
    type: {
        type: String,
        default: "expense"
    },
    category: {
        type: String,
        required: true,
        trim : true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    description : {
        type: String,
        trim : true,
        required: true,
        maxLength : 100
    }
}, {timestamps: true})

module.exports = mongoose.model('Expense', expenseSchema);
