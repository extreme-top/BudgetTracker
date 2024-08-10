import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "../../context/global";
import Button from "../Button/Button";
import {plus} from "../../utilities/icons";

function Forms() {
    const {addIncome, getIncomes} = useGlobalContext();
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
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addIncome(inputState);
        getIncomes();
    }
    return (
        <FormSyled onSubmit={handleSubmit}>
            <div className="input-control">
                <input type="text" value={title} name={'title'} placeholder="Salary Title" onChange={handleInput('title')} />
            </div>
            <div className="input-control">
                <input type="text" value={amount} name={'amount'} placeholder="Salary Amount" onChange={handleInput('amount')} />
            </div>
            <div className="input-control">
                <DatePicker id="date" placeholderText="Select Date" selected={date} dateFormat="dd/MM/yyyy" onChange={
                    (date) => {setInputState({...inputState, date:date})}
                } />
            </div>
            <div className="selects input-control">
                <select required value={category} name="category" id="category" onChange={handleInput('category')}>
                    <option value="" disabled >Select Category</option>
                    <option value="income">Income</option>
                    <option value="salary">Salary</option>
                    <option value="business">Business</option>
                    <option value="bank">Bank</option>
                    <option valie="investments">Investments</option>
                    <option value="stocks">Stocks</option>
                    <option value="others">Others</option>
                </select>
            </div>
            <div className="input-control">
                <textarea name="description" value={description} placeholder="Add Description" id="descrption" cols="25" rows="4" onChange={handleInput('description')}></textarea>
            </div>
            <div className="submit-btn">
                <Button name={'Add Income'} icon={plus} bPad={'0.8rem 1.6 rem'} bRad={'30px'} bg={'var(--color--accent'} color={'black'}/>
                
            </div>
        </FormSyled>
    )
}

const FormSyled = styled.form`
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

export default Forms;