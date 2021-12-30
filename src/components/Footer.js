import React from 'react'
import styled from 'styled-components'
import { FaDraftingCompass } from "react-icons/fa"

function Footer() {
    return (
        <FooterStyle>
            <div className="col">
                <FaDraftingCompass className='logo' />
                <p>Copyright @2021 TekOfficial </p>
                <p>Allrights reserved. </p>
            </div>
            <div className="col col2">
                <span>Team</span>
                <span>Press</span>
                <span>About Us</span>
                <span>Services</span>
                <span>Offers</span>
            </div>
            <div className="col col_">
                <span>Terms and Conditions</span>
                <span>Privacy Policy</span>
                <span>Contact Us</span>
                <span>Projects</span>
                <span>Affiliate</span>
                <span>Career</span>
            </div>
        </FooterStyle>
    )
}

const FooterStyle = styled.footer`
    width: 100%;
    min-height: 300px;
    background: #DCE2F0;
    padding: 2rem 5rem;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    flex-wrap: wrap;
    &:last-child{

    }
    .col{
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;
        .logo{
            color: orange;
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }
        p{
            font-size: 0.8rem;
        }
        span{
            color: var(--lavender);
            font-size: 0.9rem;
            padding-bottom: 1rem;
            cursor: pointer;
        }
    }
    .col2{
        margin: 0 2rem;
    }
    .col_{
        text-align: right;
    }
    @media screen and (max-width: 700px){
        width: 100%;
        padding: 2rem;

        .col2{
            text-align: right;
        }
        .col_{
            text-align: left;
        }
    }
    @media screen and (max-width: 365px){
        width: 100%;
        padding: 2rem;
        col{
            padding-bottom: 2rem;
        }
        .col2{
            text-align: left;
        }
        .col_{
            text-align: left;
        }
    }
`

export default Footer
