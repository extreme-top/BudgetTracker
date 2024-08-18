import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/global";


function History() {
    const {transactionHistory} = useGlobalContext()

    const [...history] = transactionHistory()
    return (
        <HistoryStyled>
            <h2>Recent Transaction History</h2>
            {history.map((item) =>{
                const {_id, title, amount, type} = item
                return(
                    <div key={_id} className="history-item">
                        <p style={{
                            color: type === "income" ? "green" : "red"
                        }}>
                            {title}
                        </p>

                        <p style={{
                           color: type === "income" ? "green" : "red"
                        }}>
                            {
                                type === "income" ? `+£${amount}` : `-£${amount}`
                            }
                        </p>

                       
                    </div>
                )
            })}
        </HistoryStyled>
    )
}

const HistoryStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .history-item{
        display: flex;
        justify-content: space-between;
        background: white;
        border: 4px solid black;
        padding: 1rem;
        border-radius: 10px;
        align-items: center;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }

`;

export default History;
