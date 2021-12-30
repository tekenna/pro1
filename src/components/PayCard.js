import React from 'react'
import styled from 'styled-components'
import AnimatedBtn from './buttons/AnimatedBtn'
import card from "../img/card.jpg"
import {AiOutlineCheck} from "react-icons/ai"

function PayCard({ plan, amount }) {
    return (
        <Pay>
            <p className='top'>{plan}</p>
            <p className='amount'>{ amount}<span>/m</span></p>
            <p className='text'>Manage your business at no cost. Enjoy your time with us.</p>
            <AnimatedBtn name={"Get Started"}/>
            <img src={card} alt="card" />
            <div className="list">
                <span>
                    <AiOutlineCheck className='check' />
                    <span>10 free local transfers.</span>
                </span>
                
                <span>
                    <AiOutlineCheck className='check' />
                    <span>Free payment to other draft accounts.</span>
                </span>
                <span>
                    <AiOutlineCheck className='check' />
                    <span>Free atm withdrawals in Dollar.</span>
                </span>
                <span>
                    <AiOutlineCheck className='check' />
                    <span>Prepaid debit card.</span>
                </span>
                <span>
                    <AiOutlineCheck className='check' />
                    <span>Virtual debit card.</span>
                </span>
                <span>
                    <AiOutlineCheck className='check' />
                    <span>Priority 24/7</span>
                </span>
                <span>
                    <AiOutlineCheck className='check' />
                    <span>Priority 24/7</span>
                </span>
                <span>
                    <AiOutlineCheck className='check' />
                    <span>Multi-user access</span>
                </span>
            </div>
        </Pay>
    )
}

const Pay = styled.div`
    box-shadow: 0px 0px 13px -5px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 0px 13px -5px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 13px -5px rgba(0,0,0,0.75);
    max-width: 300px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    background: white;
    border-radius: 1rem;
    margin: 1rem;

    .amount{
        font-size: 3.5rem;
        font-weight: 100;

        span{
            font-size: 1rem;
        }
    }
    .text{
        padding-bottom: 1.5rem;
        font-size: 0.8rem;
        font-weight: 100;
    }
    img{
        border-radius: 1rem;
        margin: 2rem 0;
    }
    .list{
        display: flex;
        flex-direction: column;

        span{
            display: flex;
            margin-bottom: 0.2rem;

            .check{
                color: green;
                font-size: 1rem;
                margin-right: 1rem
            }
            span{
                font-size: 0.8rem;
                text-align: start;
                color: var(--lavender);

            }
        }
    }
    @media screen and (max-width: 820px){
        max-width: 500px;

        .list{
            display: none;
        }
    }

`

export default PayCard
