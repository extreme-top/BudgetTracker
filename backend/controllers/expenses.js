const expenseSchema = require('../models/expenseModel')

//POST REQUEST to add an expense to the database 
exports.addExpense = async (req, res) => {

    const { title, amount, category, date, description } = req.body
    const expense = expenseSchema({
        title,
        amount,
        category,
        date,
        description
    })
    console.log(expense) 
    try 
    {
        //Make error checks
        if(!title || !amount || !category || !date || !description)
        {
            return res.status(400).json({message: 'All fields are required'})
        }
        else if(amount < 0 || amount === 'number')
        {
            return res.status(400).json({message: 'Amount should be a positive number'})
        }
        await expense.save()
        res.status(200).json({message: 'Expense added successfully'})
        //res.json({message: 'expense added successfully'})
    } 
    catch (error) 
    {
        console.log(error)
        res.status(500).json({message: 'Server Error, ADDING expense FAILED'})
    }

}

//GET REQUEST to return all the available expenses in the database
exports.getExpenses = async (req, res) => {
    try 
    {
        const expenses = await expenseSchema.find({}).sort({createdAt: -1})
        res.status(200).json(expenses)
    } 
    catch (error) 
    {
        console.log(error)
        res.status(500).json({message: 'Server Error, GETTING expenseS FAILED'})
    }
}

// GET REQUEST to return a single expense from the database
exports.getExpense = async (req, res) => {
    const {id} = req.params;
    try 
    {
        const expense = await expenseSchema.findById(id)
        res.status(200).json(expense)
    }   
    catch (error) 
    {
        console.log(error)
        res.status(500).json({message: 'Server Error, GETTING expense FAILED'})
    }
}

// DELETE REQUEST to delere an expense from the database
exports.deleteExpense = async (req, res) => {
    const {id} = req.params;
    console.log(req.params)
    expenseSchema.findByIdAndDelete(id)
        .then((expense) =>{
            res.status(200).json({message: 'Expense deleted successfully'})
        })
        .catch((error) => {
            console.log(error)
            res.status(500).json({message: 'Server Error, DELETING expense FAILED'})
        })
    }