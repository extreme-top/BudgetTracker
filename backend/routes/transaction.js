const router = require('express').Router();
const {addIncome, getIncome, getIncomes, deleteIncome} = require('../controllers/income');
const {addExpense, getExpense, getExpenses, deleteExpense} = require('../controllers/expenses');

router.post('/add-income', addIncome)
    .get('/get-incomes', getIncomes)
    .get('/get-income/:id', getIncome)
    .delete('/delete-income/:id', deleteIncome)
    .post('/add-expense', addExpense)
    .get('/get-expenses', getExpenses)
    .get('/get-expense/:id', getExpense)
    .delete('/delete-expense/:id', deleteExpense)

module.exports = router