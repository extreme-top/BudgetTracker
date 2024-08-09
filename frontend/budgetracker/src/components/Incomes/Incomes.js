import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../syles/Layouts";
import { useGlobalContext } from "../../context/global";

function Incomes() {
    const {addIncome} = useGlobalContext();
    return (
        <IncomeSyled>
            <InnerLayout>
                <h1>Income</h1>
                <div className="income-content">
                    <div className="form-container">

                    </div>
                    <div className="income">
                    </div>
                </div>

            </InnerLayout>
        </IncomeSyled>
    )
}

const IncomeSyled = styled.div`




`;

export default Incomes;