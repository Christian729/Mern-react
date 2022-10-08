import React from 'react';

const BoxDisplay = (props) => {
    const { box } = props;
console.log(box)

    return (
            <div >
                <div >
                    {
                        box.map((box, index) => (
                            <div key={index} style={{
                                width: "180px",
                                height: "180px",
                                margin: "0px 10px 10px 10px",
                                backgroundColor: box.color,
                            }}>
                            </div>
                        ))
                    }
                </div>
            </div>
            )
    
};

export default BoxDisplay;

// box,map(color, index) => 
//                         <div key={index} style={{
//                             display: "inline-block",
//                             margin: "10px",
//                             background: box.color
//                     }}></div>