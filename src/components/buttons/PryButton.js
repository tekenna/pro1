import React from 'react'
import styled from 'styled-components'

function PryButton({name}) {
    return (
        <BtnStyle>{name}</BtnStyle>
    )
}

const BtnStyle = styled.button`
    background: var(--pink);
    padding: 0.5rem 2rem ;
    border-radius: 1rem;
    cursor: pointer;
    border: none;
    color: inherit;

    @media screen and (max-width: 600px){
        padding: 0.5rem 1rem ;
    }

`

export default PryButton
