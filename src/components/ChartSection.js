import React from 'react'
import styled from 'styled-components'
import Chart from './Chart'
import SecButton from './buttons/SecButton'
import { CgArrowLongRight } from "react-icons/cg"

function ChartSection() {
    return (
        <Charts>
            <div className="left_card">
                <div className="transaction">
                    <Chart title={"balance"} amount={"$250"} />
                    <Chart title={"Last Transaction"} amount={"$1000"} />
                </div>
                <div className="chart_img">
                    <img src="https://designrfix.com/wp-content/uploads/2018/12/Stacked-Bar-Charts.jpg" alt="chart" />
                </div>
            </div>
            <div className="right_card">
                <h2 className="sec_heading">Manage your finances like a pro in no time</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolorem voluptas qui vero? Non pariatur atque eum iste ipsam minus aperiam corrupti eaque veniam repellendus.</p>
                <SecButton name={"Learn More"} Icon={CgArrowLongRight}  />
            </div>
        </Charts>
    )
}
const Charts = styled.section`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    height: 100%;
    padding: 0 5rem;
    background: radial-gradient(circle, rgba(251,63,63,0.4) 5%, rgba(236,112,139,0.4) 24%, rgba(211,58,205,0.4) 50%, rgba(109,19,163,1) 75%, rgba(33,8,13,0.4) 100%), url(https://i.pinimg.com/originals/09/c9/b9/09c9b945b424bf6f2a545f6002abb69f.jpg);
    background-repeat: no-repeat;
    background-size: cover;

    .left_card{
        width: 50%;
        padding-right: 5rem;
        padding-top: 1rem;
        height: 350px;

        .transaction{
            display: flex;
            justify-content: space-between;
            height: 30%;
        }
        .chart_img{
            width: 100%;
            height: 205px;
            background: white;
            margin-top: 2rem;
            border-radius: 1rem;
            padding: 1rem;
            box-shadow: 0px 0px 13px -5px rgba(0,0,0,0.75);
            -webkit-box-shadow: 0px 0px 13px -5px rgba(0,0,0,0.75);
            -moz-box-shadow: 0px 0px 13px -5px rgba(0,0,0,0.75);

            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    .right_card{
        width: 50%;
        padding-left: 5rem;

        h2{
           max-width: 400px;
        }
        p{
            margin: 1rem 0 2rem 0;
        }
    }

    @media screen and (max-width: 1000px){
        
        .left_card{
            padding-right: 2rem;

            .transaction{
                height: 22%;
            }
            .chart_img{
                height: 180px;
                
            }
        }
        .right_card{
            width: 55%;
            padding-left: 2rem;

        }
    }
    @media screen and (max-width: 700px){
        display: flex;
        padding: 0 2rem;
        .left_card{
            padding-right: 2rem;
            .transaction{
                height: 22%;
            }
            .chart_img{
                height: 180px;
            }
        }
        .right_card{
            width: 55%;
        }
    }
    @media screen and (max-width: 600px){
        display: flex;
        flex-direction: column;
        padding: 0 2rem;
        .left_card{
            width: 100%;
            padding: 2rem;
            .transaction{
                height: 22%;
            }
            .chart_img{
                height: 180px;
            }
        }
        .right_card{
            width: 100%;
        }
    }
`
export default ChartSection
