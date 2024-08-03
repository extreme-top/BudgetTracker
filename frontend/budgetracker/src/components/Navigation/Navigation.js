import React from "react";
import styled from "styled-components";
import avatar from "../../img/avatar.png";
import {menuItems} from "../../utilities/menuItems";
import { signout } from "../../utilities/icons";

function Navigation() {
    return (
        <NavStyled>
            <div className="user-icon">
                <img src={avatar} alt="User Avatar" />
                <div className="text">
                    <h3>John Doe</h3>
                    <p>Admin</p>
                </div>
            </div>
            <ul className="menu-items">
                {menuItems.map((item) => {
                    return <li 
                    key={item.id}>
                        {item.icon}
                        <span>{item.title}</span>
                    </li>})}

            </ul>
            <div className="bottom-nav">
                <li>
                    {signout} Sign Out
                </li>

            </div>
        </NavStyled>
    )
}
const NavStyled = styled.nav`
    paddinf: 2rem 1rem;
    display: flex;
    width: 380px;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    border : 4px solid #007bff;
    border-radius: 25px;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    
    .user-icon{
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;
        img
        {
        width : 80px;
        height: 80px;
        border-radius: 50%;
        object-fit: cover;
        }
        }
    `;
    

export default Navigation;