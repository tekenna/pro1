import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import HeaderContent from './HeaderContent'
import Box from './animations/Box'
import headbg from "../img/header.jpg"


function Header() {
    return (
        <HeaderStyle>
            <div className="background">
                <div className="animation1">
                    <Box />
                </div>
                <div className="animation2">
                    <Box />
                </div>
                <div className="animation3">
                    <Box />
                </div>
                <div className="bg_wrapper">
                    <Nav />
                    <HeaderContent />
                </div>
                <div class="custom-shape-divider-bottom-1640560707">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>
            </div>
        </HeaderStyle>
    )
}
const HeaderStyle = styled.header`
    hieght: 100%;
    width: 100%;
    .background{
        width: 100%;
        height: 100%;
        postion: relative;

        .animation1{
            position: absolute;
            width: 100%
            height: 100%;
            bottom: 18rem;
            left: 30%;
            z-index: 111;
            display: flex;
            justify-content: center;
        }
        .animation2{
            position: absolute;
            width: 100%
            height: 100%;
            bottom: 2rem;
            left: 10%;
            z-index: 111;
            display: flex;
            justify-content: center;
        }
        .animation3{
            position: absolute;
            width: 100%
            height: 100%;
            top: 6rem;
            right: 20%;
            z-index: 111;
            display: flex;
            justify-content: center;
        }
        .custom-shape-divider-bottom-1640560707 {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            overflow: hidden;
            line-height: 0;
            transform: rotate(180deg);
        }

        .custom-shape-divider-bottom-1640560707 svg {
            position: relative;
            display: block;
            width: calc(160% + 1.3px);
            height: 360px;
            transform: rotateY(180deg);
        }

        .custom-shape-divider-bottom-1640560707 .shape-fill {
            fill: var(--neutral);
        }
        .bg_wrapper{
            width: 100%;
            height: 100vh;
            padding: 1rem 5rem;
            position: relative;
            background: url(${headbg});
        }
    }
    
    @media screen and (max-width: 700px){
        .background{
            .bg_wrapper{
                height: 100vh;
                padding: 1rem 2rem;
            }
        }
    }

`


export default Header
