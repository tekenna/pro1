import React from 'react'
import Card from './PayCard'
import styled from 'styled-components'

function PaySection() {
    return (
        <PayStyle>
            <h3 className="small_heading">An exceptional service, <span> at the right price.</span> </h3>
            <p>Start with our free plan and switch to our premium plan as you grow.</p>
            <div className="pay_body">
                <Card plan={"Free"}amount={"$0"}/>
                <Card plan={"Premium"} amount={"$9.36"}/>
            </div>
        </PayStyle>
    )
}

const PayStyle = styled.section`
    width: 100%;
    padding: 0 5rem;
    margin: auto;
    flex-wrap: wrap;

    .small_heading{
        text-align: center;
        span{
            color: var(--pink);
        }
    }
    p{
        text-align: center;
        padding-top: 1rem;
    }
    .pay_body{
        display: flex;
        justify-content: space-around;
        margin-top: 3rem;
        flex-wrap: wrap;
    }
    @media screen and (max-width: 800px){
        justify-content: space-between;
    }
    @media screen and (max-width: 700px){
        padding: 0 2rem;
    }

`

export default PaySection
