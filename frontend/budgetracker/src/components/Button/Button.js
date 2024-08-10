import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../syles/Layouts";

function Button({name, icon, onClick, bg, bPad, color, bRad}) {
    return (
        <ButtonStyled style={{
            background: bg,
            padding: bPad,
            color: color,
            borderRadius: bRad

        }} onClick={onClick}>
            {icon}
            {name}

        </ButtonStyled>
    )
}

const ButtonStyled = styled.button`
    outline: none;
    border: none;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 400;
    display: flex;
    align-items: center;
    gap: .4rem;
    cursor: pointer;
    transition: all .4s ease-in-out;

`;

export default Button;