import styled from 'styled-components'
import chatImg from "../img/chat.jpg"
import avatar1 from "../img/boy1.png"
import avatar2 from "../img/girl.png"
import avatar3 from "../img/boy2.png"
import avatar4 from "../img/boy3.png"
import avatar5 from "../img/girl2.png"
import avatar6 from "../img/boy4.png"

function ChatSection() {
    return (
        <Cards>
            <div className="left_card">
                <h2 className="sec_heading">We support 5 different languages</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolorem voluptas qui vero? Non pariatur atque eum iste ipsam minus aperiam corrupti eaque veniam repellendus.</p>
                <div className="img_icons">
                    <img src={avatar1} alt="avatar" />
                    <img src={avatar2} alt="avatar" />
                    <img src={avatar3} alt="avatar" />
                    <img src={avatar4} alt="avatar" />
                    <img src={avatar5} alt="avatar" />
                    <img src={avatar6} alt="avatar" />
                    <span>+25</span>
                </div>
            </div>
            <div className="right_card">
                <img src={chatImg} alt="credit of debit card" />
            </div>
        </Cards>
    )
}

const Cards = styled.section`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    height: 100%;
    padding: 0 5rem;
    .left_card{
        width: 50%;
        padding-right: 5rem;

        h2{
           max-width: 400px;
        }
        .img_icons{
            display: flex;
            margin-top: 1rem;
            align-items: center;
            padding-left: 0.5rem;
            img{
                width: 3rem;
                height: 3rem;
                border-radius: 50%;
                object-fit: cover;
                margin-left: -0.5rem;
                box-shadow: 0px 0px 13px -5px rgba(245,238,238,0.75);
                -webkit-box-shadow: 0px 0px 13px -5px rgba(245,238,238,0.75);
                -moz-box-shadow: 0px 0px 13px -5px rgba(245,238,238,0.75);
            }
            span{
                color: var(--lavender);
                padding-left: 0.5rem;
                font-size: 0.8rem;
            }
        }
    }
    .right_card{
        width: 50%;
        padding: 5rem;

        img{
            max-width: 300px;
            width: 100%;
            height: 450px;
            border-radius: 2rem;
            box-shadow: 0px 0px 13px -5px rgba(0,0,0,0.75);
            -webkit-box-shadow: 0px 0px 13px -5px rgba(0,0,0,0.75);
            -moz-box-shadow: 0px 0px 13px -5px rgba(0,0,0,0.75);
        }
    }

    @media screen and (max-width: 1000px){
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
        padding: 5rem 2rem;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .left_card{
            width: 100%;
            padding: 3rem 0;
            text-align: center;
            margin: 0 auto;

            h2{
                max-width: 400px;
                width: 100%;
                margin: 0 auto;
            }
            .img_icons{
                display: flex;
                margin-top: 1rem;
                justify-content: center;
                align-items: center;
                
            }
        }
        .right_card{
            width: 100%;
            padding: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`

export default ChatSection
