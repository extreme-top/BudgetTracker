import React, { useState, useMemo } from "react";
import styled from "styled-components";
import avatar from "../../img/avatar.png";
import {menuItems} from "../../utilities/menuItems";
import { signout } from "../../utilities/icons";

function Navigation({active, setActive}) {
    

    return (
        <NavStyled>
            <div className="user-con">
                <img src={avatar} alt="User Avatar" />
                <div className="text">
                    <h3>John Doe</h3>
                    <p>Admin</p>
                </div>
            </div>
            <ul className="menu-items">
                {menuItems.map((item) => {
                    return <li 
                    key={item.id}
                    onClick={() => setActive(item.id)}
                    className={active === item.id ? 'active' : ''}
                    >
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
    padding: 2rem 1rem;
    display: flex;
    width: 380px;
    height: 800px;
    background: aquamarine;
    backdrop-filter: blur(5px);
    border : 4px solid #007bff;
    border-radius: 25px;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    
    .user-con{
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;
        img
        {
            width : 80px;
            height: 80px;
            border-radius: 50%;
            border : 2px solid #007bff;
            object-fit: cover;
            background: white;
        }
            
        
    }
    .menu-items{
        flex: 1;
        display: flex;
        flex-direction: column;
        li{
            display : grip;
            grid-template-columns: 40px auto;
            align-items: center;
            margin: 1rem 0;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.4s ease-in-out;
            color: black;
            padding-left: 1rem;
            position: relative;
            i{
                font-size: 1.2rem;
                color : black;
                transition : all 0.4s ease-in-out;
            }


        }

    }

    .active{
        color: darkblue !important;
        i{
            color: darkblue !important;
        }
            &::before{
                content: "";
                position: absolute;
                left: 0;
                top: 0;
                width: 2px;
                height: 32px;
                background: darkblue;
            }

    }

    `;
    

export default Navigation;