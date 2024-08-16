import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../syles/Layouts";
import Chart from "../Chart/Chart";
import { useGlobalContext } from "../../context/global";

function Dashboard() {
    const {totalExpenses, totalIncome} = useGlobalContext()
    return (
        <DashboardStyled>
            Dashboard
            <InnerLayout>
                <h1> All Transactions History </h1>
                <div className="stats-con">
                    <div className="chart-con">
                        <Chart />
                        <div className="amount-con">
                            <div className="income">
                                <h2>Total Income</h2>
                                <p>£ {totalIncome()}</p>
                            </div>
                            <div className="expense">
                                <h2>Total Expenses</h2>
                                <p>£ {totalExpenses()}</p>
                            </div>
                            <div className="balance">
                                <h2>Balance</h2>
                                <p>£ {totalIncome() - totalExpenses()}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </InnerLayout>

        </DashboardStyled>
    )
}

const DashboardStyled = styled.div`




`;

export default Dashboard;