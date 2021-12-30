import React, {useState} from 'react'
import styled from 'styled-components'
import {AiOutlinePlus, AiOutlineMinus} from "react-icons/ai"

function Questions({question}) {
    const [ans, setAns] = useState(false)
    return (
        <QuestContainer>
            <div className="question">
                <span classsName="main_quest">{question}</span>
                <span>
                    {
                        !ans ? <AiOutlinePlus className='add' onClick={() => setAns(!ans)} /> :
                        <AiOutlineMinus className='add' onClick={() => setAns(!ans)} />
                     }
                    
                </span>
            </div>
                {ans ?
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis voluptatibus eaque eum sunt molestias! Laudantium, voluptatibus? Beatae amet dicta dolor?</p>
                    </div> : ""
            }
        </QuestContainer>
    )
}

const QuestContainer = styled.div`
    margin: 1rem auto;
    width: 80%;
    display: flex;
    padding: 0.5rem;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: white;
    border-radius: 1rem ;
    box-shadow: 0px 0px 13px -5px rgba(0,0,0,0.3);
    -webkit-box-shadow: 0px 0px 13px -5px rgba(0,0,0,0.3);
    -moz-box-shadow: 0px 0px 13px -5px rgba(0,0,0,0.3);
    transition: all .6s linear;

    .question{
        padding: 0 2rem;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--dark);
        transition: all .9s linear;
        
        

        .add{
            color: var(--lavender);
            font-size: 1.7rem;
            cursor: pointer;
            transition: all .5s linear;

            &:hover{
                transition: all .5s linear;
                font-size: 2rem;
            }
        }
    }
    .answer{
        font-size: 0.8rem;
        padding: 0 2rem;
        width: 100%;
        padding-top: 1rem;
        transition: all .9s linear;
    }
    
    @media screen and (max-width: 600px){
        width: 100%;
        .question{
            padding: 0 1rem;
            span{
                font-size: 0.8rem;
            }
            .add{
                font-size: 1.3rem;

                &:hover{
                    font-size: 1.5rem;
                }
            }
        }
    }
`

export default Questions
