import React from 'react'
import styled from 'styled-components'
import Questions from './Questions'

function Opinion() {
    return (
        <OpninionStyle>
            <h3 className="small_heading">Frequently asked <span> Questions.</span> </h3>
            <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error minima sint rerum repellat autem iusto quis accusantium vitae quia natus quasi eaque, perferendis cupiditate voluptate illum! Odio ut ipsam rerum.</p>
            <Questions question={"Who can open a Draft account?"} />
            <Questions question={"What if I make a withdrawal abroad?"} />
            <Questions question={"What happens when my subscription ends?"} />
            <Questions question={"Why should I bank with you?"} />
            <Questions question={"What are my daily and monthly limits?"} />
            <Questions question={"How secure is my account?"} />
        </OpninionStyle>
    )
}

    
const OpninionStyle = styled.section`
    width: 100%;
    padding: 5rem;

    .small_heading{
        text-align: center;
        span{
            color: var(--pink);
        }
    }
    .text{
        text-align: center;
        padding-top: 1rem;
        font-size: 0.8rem;
        max-width: 500px;
        margin: auto
    }
    @media screen and (max-width: 700px){
        padding: 5rem 2rem;
    }
`

export default Opinion
