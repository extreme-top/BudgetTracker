const incomeSchema = require('../models/incomeModel')

//POST REQUEST to add an income to the database 
exports.addIncome = async (req, res) => {

    const { title, amount, category, date, description } = req.body
    const income = incomeSchema({
        title,
        amount,
        category,
        date,
        description
    })
    console.log(income) 
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
        await income.save()
        res.status(200).json({message: 'Income added successfully'})
        //res.json({message: 'Income added successfully'})
    } 
    catch (error) 
    {
        console.log(error)
        res.status(500).json({message: 'Server Error, ADDING INCOME FAILED'})
    }

}

//GET REQUEST to return all the available incomes in the database
exports.getIncomes = async (req, res) => {
    try 
    {
        const incomes = await incomeSchema.find({}).sort({createdAt: -1})
        res.status(200).json(incomes)
    } 
    catch (error) 
    {
        console.log(error)
        res.status(500).json({message: 'Server Error, GETTING INCOMES FAILED'})
    }
}

// GET REQUEST to return a single income from the database
exports.getIncome = async (req, res) => {
    const {id} = req.params;
    try 
    {
        const income = await incomeSchema.findById(id)
        res.status(200).json(income)
    }   
    catch (error) 
    {
        console.log(error)
        res.status(500).json({message: 'Server Error, GETTING INCOME FAILED'})
    }
}

// DELETE REQUEST to delere an income from the database
exports.deleteIncome = async (req, res) => {
    const {id} = req.params;
    console.log(req.params)
    incomeSchema.findByIdAndDelete(id)
        .then((income) =>{
            res.status(200).json({message: 'Income deleted successfully'})
        })
        .catch((error) => {
            console.log(error)
            res.status(500).json({message: 'Server Error, DELETING INCOME FAILED'})
        })
    }