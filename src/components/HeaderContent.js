import React from 'react'
import styled from 'styled-components'
import SecButton from './buttons/SecButton'
import { CgArrowLongRight } from "react-icons/cg"
import phone from "../img/phone.png"

function HeaderContent() {
    return (
        <Content>
            <div className="left_content">
                <div className="text_wrap">
                    <h1>Smart banking for freelancers</h1>
                    <p className="white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, libero voluptatum esse unde repellat, culpa sint, autem saepe rerum doloremque eveniet dolor ipsam sunt est! Omnis tenetur molestias nesciunt quod.</p>
                    <div className="btn_wrap">
                        <SecButton name={"Register Now"} Icon={CgArrowLongRight} />
                    </div>
                </div>
            </div>
            <div className="right_content">
                <img src={phone} alt="phone" />
            </div>
        </Content>
    )
}

const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-top: 3rem;
    .left_content{
        display: flex;
        align-items: center;
        padding-right: 3rem;
        height: 100%;
        margin-top: 6rem;
        h1{
            font-size: 3rem;
            font-weight: 600;
            
        }
        .white{
            padding: 1.4rem 0;
            font-weight: 100;
            font-size: 1rem;
            line-height: 1.4rem;
            color: white;
        }
    }
    .right_content{
        position: relative;
        display: flex;

        img{
            position: absolute;
            z-index: 111;
            max-width: 35rem;
            height: 25rem;
            top: 4rem;
            right: 0;
        }
    }
    @media screen and (max-width: 1000px){
        padding-top: 3rem;
        .left_content{
            padding-right: 2rem;
            margin-top: 3rem;
            h1{
                font-size: 2.5rem;
            }
            .white{
                font-size: 1rem;
            }
        }
        .right_content{
            position: relative;
            display: flex;

            img{
                position: absolute;
                z-index: 111;
                width: 40rem;
                width: 100%;
                height: 20rem;
                right: -2rem;
            }
        }
    }
    @media screen and (max-width: 780px){
        padding-top: 5rem;
        .left_content{
            padding-right: 1rem;
            margin-top: 3rem;
            z-index: 111;
            h1{
                font-size: 2.2rem;
            }
        }
        .right_content{
            
            img{
                position: absolute;
                z-index: 111;
                width: 20rem;
                height: 20rem;
                right: -2rem;
            }
        }
    }
    @media screen and (max-width: 600px){
        display: flex;
        position: relative;
        flex-direction: column;
        padding-top: 3rem;
        .left_content{
            h1{
                font-size: 2rem;
                font-weight: 600;
                
            }
            .white{
                padding: 1.4rem 0;
                font-weight: 100;
                font-size: 1rem;
                line-height: 1.4rem;
                color: white;
            }
        }
        .right_content{
            position: relative;
            display: flex;

        }
    }

`

export default HeaderContent
