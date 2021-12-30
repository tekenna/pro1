import React from 'react'
import styled from 'styled-components'
import creditCard from "../img/card.jpg"
import Box from './animations/Box'

function CardSection() {
    return (
        <Cards>
            <div className="left_card">
                <h2 className="sec_heading">One card for all payments</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolorem voluptas qui vero? Non pariatur atque eum iste ipsam minus aperiam corrupti eaque veniam repellendus.</p>
            </div>
            <div className="right_card">
                <img src={creditCard} alt="credit of debit card" />
            </div>
            <div className="animation1">
                <Box />
            </div>
            <div className="animation2">
                <Box />
            </div>
        </Cards>
    )
}

const Cards = styled.section`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 5rem;
    position: relative;

    .animation1{
        position: absolute;
        width: 100%
        height: 100%;
        bottom: 2rem;
        left: 30%;
        top: 0;
        z-index: 111;
        display: flex;
        justify-content: center;
    }

    .animation2{
        position: absolute;
        width: 100%
        height: 100%;
        bottom: 2rem;
        left: 0;
        z-index: 111;
        display: flex;
        justify-content: center;
    }

    .left_card{
        width: 50%;
        padding-right: 5rem;

        h2{
           max-width: 400px;
        }
    }
    .right_card{
        width: 50%;
        padding: 5rem;

        img{
            width: 100%;
            border-radius: 1rem;
            box-shadow: 2px 64px 50px -30px rgba(0,0,0,0.75);
            -webkit-box-shadow: 2px 64px 50px -30px rgba(0,0,0,0.75);
            -moz-box-shadow: 2px 64px 50px -30px rgba(0,0,0,0.75);
        }
    }
    @media screen and (max-width: 1000px) {
        .left_card{
            width: 60%;
            padding-right: 3rem;


            h2{
                max-width: 400px;
                width: 100%
            }
        }
        .right_card{
            width: 50%;
            padding: 2rem;
        }
    }
    @media screen and (max-width: 750px) {
        padding: 0 2rem;
        .left_card{
            width: 60%;
            padding-right: 3rem;

            h2{
                max-width: 400px;
                width: 100%
            }
        }
        .right_card{
            width: 40%;
            padding: 0.5rem;
        }
    }
    @media screen and (max-width: 600px) {
        margin-top: 5rem;
        padding: 0 2rem;
        flex-direction: column;
        .left_card{
            width: 100%;
            padding: 3rem 0;
            text-align: center;
            

            h2{
                max-width: 400px;
                width: 100%;
                margin: 0 auto;
            }
        }
        .right_card{
            width: 100%;
            padding: 2rem;
        }
    }
`

export default CardSection
