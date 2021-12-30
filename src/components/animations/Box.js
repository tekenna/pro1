import React from 'react'
import styled from 'styled-components'

function Box() {
    return (
        <Cube>
            <div className="wrapper">
                <div className="box">
                    <div className="container">
                        <div className="cube">
                            <div className="front"></div>
                            <div className="left"></div>
                            <div className="back"></div>
                            <div className="right"></div>
                        </div>
                    </div>
                </div>
            </div>
        </Cube>
    )
}
const Cube = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .wrapper{
        height: 10rem;
        width: 10rem;
        position: relative;

        .box{
            height: 5rem;
            width: 5rem;
            position: absolute;
            top: 0;
            laft: 0;
            right: 0;
            bottom: 0;

            .container{
                height: 100%;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                perspective: 800px;
                perspective-origin: 50%;

                .cube{
                    height: 5rem;
                    width: 5rem;
                    transform-style: preserve-3d;
                    position: relative;
                    animation: spin 20s linear infinite;

                    @keyframes spin {
                        100%{
                            transform: rotateY(360deg);
                        }
                    }

                    div{
                        height: 5rem;
                        width: 5rem;
                        position: absolute;
                        backface-visibility: hidden;
                        background: rgba(251, 63, 63, 0.137);
                        background: radial-gradient(circle, rgba(251, 63, 63, 0.116) 5%, rgba(236, 112, 139, 0.116) 24%, rgba(211, 58, 206, 0.123) 50%, rgba(110, 19, 163, 0.123) 75%, rgba(33, 8, 13, 0.112) 100%);
                    }
                    .front{
                        transform: translateZ(-70px);
                        
                    }
                    .right{
                        transform: rotateY(-270deg) translateX(150px);
                        transform-origin: 100% 0;
                        
                    }
                    .back{
                        transform: translateZ(-150px) rotateY(180deg);
                    }
                    .left{
                        transform: rotateY(270deg) translateX(-150px);
                        transform-origin: 0 50%;
                        
                    }
                    
                }
            }
        }
        
    }

`
// .right{
//     transform: rotateY(-270deg) translateX(150px);
// }
// position: relative;
//             top: 100px;
//             left: 100px;
//             height: 250px
//             width: 250px;
//  background: blue;
// transform: translate(-50%, -50%);
export default Box
