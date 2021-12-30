import React from 'react'
import styled from 'styled-components'

function AnimatedBtn({name}) {
    return (
        <BtnStyle>{name} </BtnStyle>
    )
}

const BtnStyle = styled.button`
    background: var(--dark);
    padding: 0.7rem 2rem ;
    border-radius: 1rem;
    font-family: inherit;
    font-size: inherit;
    border: none;
    outline: none;
    color: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover{
        transition: all .8s ease-in-out;
        background: var(--purple);
        color: var(--pink);
    }

`



export default AnimatedBtn
