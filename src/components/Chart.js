import React from 'react'
import styled from 'styled-components'

function Chart({title, amount}) {
    return (
        <ChartWrapper>
            <p>{title}</p>
            <p className='sec_heading'><b>{amount}</b></p>
        </ChartWrapper>
    )
}
const ChartWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 10rem;
    padding: 1rem;
    background: white;
    box-shadow: 0px 0px 13px -5px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 0px 13px -5px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 13px -5px rgba(0,0,0,0.75);
    border-radius: 1rem;

    p{
        text-transform: capitalize;
    }
    @media screen and (max-width: 1000px){
        width: 8rem;
        padding: 1rem 0.5rem;
        p{
            font-size: 0.8rem;
        }
        .sec_heading{
            font-size: 1.5rem;
        }
    }
`

export default Chart
