import React from 'react'
import styled from 'styled-components'



function SecButton({name, Icon}) {
    return (
        <BtnStyle>{name} <Icon className="arrow" /></BtnStyle>
    )
}

const BtnStyle = styled.button`
    background: var(--dark);
    padding: 0.7rem 2rem ;
    border-radius: 1rem;
    font-family: inherit;
    font-size: inherit;
    cursor: pointer;
    border: none;
    outline: none;
    color: inherit;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    .arrow{
        margin-left: 1rem;
        font-size: 1.5rem;
        font-weight: 50;
        
    }
    &:hover{
        transition: all .8s ease-in-out;
        background: var(--purple);
        color: var(--pink);
        .arrow{
            font-size: 1.8rem;
            transition: all .8s ease-in-out;
            transform: translateX(10px)
        }
    }

`

export default SecButton
