import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../syles/Layouts";
import { useGlobalContext } from "../../context/global";
import Form from "../Forms/Forms";
import IncomeItem from "../IncomeItem/IncomeItem";

function Incomes() {
    const {addIncome,incomes, getIncomes,deleteIncome,totalIncome} = useGlobalContext();

    useEffect(() =>{
        getIncomes()
    }, [incomes])

    return (
        <IncomeSyled>
            <InnerLayout>
                <h1>Income</h1>
                <h2 className="total-income">Total Income: <span>£{totalIncome()}</span></h2>
                <div className="income-content">
                    <div className="form-container">
                        <Form />
                    </div>
                    <div className="incomes">
                        {incomes.map((income) => {
                            const {_id, title, amount, date, category, description,type} = income;
                            return <IncomeItem
                                key={_id}
                                id={_id}
                                title={title}
                                amount={amount}
                                date={date}
                                type={type}
                                category={category}
                                description={description}
                                indicatorColor="var(--color-green)"
                                deleteItem={deleteIncome}
                            />
                        })}
                    </div>
                </div>

            </InnerLayout>
        </IncomeSyled>
    )
}

const IncomeSyled = styled.div`
    display: flex;
    overflow: auto;
    .income-content{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;
        .form-container{
            background: var(--white-color);
            padding: 2rem;
            border-radius: 20px;
            box-shadow: 0 0 10px rgba(0,0,0,0.2);
        }
        .incomes{
            background: var(--white-color);
            padding: 2rem;
            border-radius: 20px;
            box-shadow: 0 0 10px rgba(0,0,0,0.2);
        }
    }
    .total-income{
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--white-color);
        border: 4px solid black;
        box-shadow: 0 0 10px rgba(0,0,0,0.2);
        border-radius: 20px;
        padding: 1rem;
        font-size: 1.5rem;
        gap: .5rem;
        span{
            color: var(--color-green);
            font-size: 2rem;
            font-weight:1000;
        }
    }
    .body{
        font-family: 'Nunito', sans-serif;
        fony-size: 1rem;
        font-weight: 200;
        
    }
    
    h1,h2,h3,h4,h5,h6{
        color: var(--black-color);
    }
    



`;

export default Incomes;