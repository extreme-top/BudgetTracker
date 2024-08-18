import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "../../context/global";
import Button from "../Button/Button";
import {plus} from "../../utilities/icons";

function ExpenseForm() {
    const {addExpense, getExpenses,error, setError} = useGlobalContext();
    const [inputState, setInputState] = useState({
        title: "",
        amount: "",
        date : "",
        category: "",
        description: "",
    })

    const {title, amount, date, category, description} = inputState;
    const handleInput = name => e => {
        setInputState({
            ...inputState,
            [name]: e.target.value
        })
        setError('')
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addExpense(inputState);
        getExpenses();
        setInputState({
            title: "",
            amount: "",
            date : "",
            category: "",
            description: "",
        })
    }
    return (
        <ExpenseFormSyled onSubmit={handleSubmit}>
            {error && <p className="error">{error}</p>}
            <div className="input-control">
                <input type="text" value={title} name={'title'} placeholder="Expense Title" onChange={handleInput('title')} />
            </div>
            <div className="input-control">
                <input type="text" value={amount} name={'amount'} placeholder="Expense Amount" onChange={handleInput('amount')} />
            </div>
            <div className="input-control">
                <DatePicker id="date" placeholderText="Select Date" selected={date} dateFormat="dd/MM/yyyy" onChange={
                    (date) => {setInputState({...inputState, date:date})}
                } />
            </div>
            <div className="selects input-control">
                <select required value={category} name="category" id="category" onChange={handleInput('category')}>
                    <option value="" disabled >Select Category</option>
                    <option value="bills">Bills</option>
                    <option value="rent">Rent</option>
                    <option value="mortgage">Mortgage</option>
                    <option value="bank">Bank</option>
                    <option valie="food">Food</option>
                    <option value="car">Car</option>
                    <option value="clothes">Clothes</option>
                    <option value="medical">Medical Bills</option>
                    <option value="others">Others</option>
                </select>
            </div>
            <div className="input-control">
                <textarea name="description" value={description} placeholder="Add Description" id="descrption" cols="25" rows="4" onChange={handleInput('description')}></textarea>
            </div>
            <div className="submit-btn">
                <Button name={'Add Expense'} icon={plus} bPad={'0.8rem 1.6 rem'} bRad={'30px'} bg={'var(--color--accent'} color={'black'}/>
                
            </div>
        </ExpenseFormSyled>
    )
}

const ExpenseFormSyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    input, textarea, select{
        font-family: inherit;
        font-size: 1.2rem;
        outline: none;
        border: none;
        padding: 1rem 1.5rem;
        border-radius: 5px;
        border: 2px solid black;
        background : transparent;
        resize: none;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        color: black;
        &::placeholder{
            color: black;
        }
    }
    .input-control{
        width: 100%;
    }

    .selects{
        display: flex;
        justify-content: space-between;
        select{
            color : black;
            &:focus, &:active{
                outline: none;
                color: black;
            }
        }
    }

    .submit-btn{
        color : black;
        background: white;
        button{
            box-shadow: 0px 0 10px rgba(0, 0, 0, 0.2);
            &:hover{
                background: black;
                color: white;
            }
        }
    }


`;

export default ExpenseForm;