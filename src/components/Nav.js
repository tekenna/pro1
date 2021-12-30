import React from 'react'
import styled from 'styled-components'
import { FaDraftingCompass } from "react-icons/fa"
import PryButton from './buttons/PryButton'

function Nav() {
    return (
        <Navbar>
            <FaDraftingCompass className="logo" />
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
            </ul>
            <PryButton name={"Sign up"} />

        </Navbar>
    )
}

const Navbar = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    .logo{
        color: orange;
        font-size: 2.5rem;
    }
    ul{
        display: flex;
        align-items: center;
        width: 40%;
        justify-content: space-between;

        li{
            font-size: 1rem;
            a{
                color: inherit;
            }
        }
    }
    @media screen and (max-width: 700px) {
        .logo{
            color: orange;
            font-size: 2rem;
        }
        ul{
            width: 50%;

            li{
                font-size: .8rem;
            }
        }
    }
`

export default Nav
