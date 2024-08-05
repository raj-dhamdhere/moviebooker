import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

export default function Show3() {
    const [letters, setLetters] = useState(["A", "B", "C"]);

    const [obj, setObj] = useState({ selected: 0, label: "A1", show: 3 });

    const [obj1, setObj1] = useState([]);
    const [obj2, setObj2] = useState([]);
    const [obj3, setObj3] = useState([]);
    const [loading,setLoading] = useState(false);

    const [selectedSeats, setSelectedSeats] = useState([]);

    const [bookdetails,setBookDetails] = useState([]);

    useEffect(() => {
        setLoading(true);
        let already= localStorage.getItem("show 3")
       let data = JSON.parse(already)
       console.log(data)

    //    let A = [];
    //  for(let i = 0;i <(data ? data.length : 0); i++){
    //      for(let j = 0; j <=(data ? data.length : 0); j++){
    //          if(data[i].label === `A${j}`){
    //              A.push(data[i]);
    //              console.log(data[i]);
    //          }
    //      }
    //  }
    //  let B = [];
    //  for(let i = 0;i <(data ? data.length : 0); i++){
    //      for(let j = 0; j <=(data ? data.length : 0); j++){
    //          if(data[i].label === `B${j}`){
    //              B.push(data[i]);
    //              console.log(data[i]);
    //          }
    //      }
    //  }
    //  let C = [];
    //  for(let i = 0;i <(data ? data.length : 0); i++){
    //      for(let j = 0; j <=(data ? data.length : 0); j++){
    //          if(data[i].label === `C${j}`){
    //              C.push(data[i]);
    //              console.log(data[i]);
    //          }
    //      }
    //  }

        if(data ? data[0] : 0) {
            setObj1(data[0])
        } else {
            let obj1Temp = [];
            for (let i = 0; i <7 ; i++) {
                    obj1Temp[i] = { selected: 0, label: `A${i + 1}`, amount: "320" };
            }
            setObj1(obj1Temp);
        }

        if(data ? data[1] : 0) {
            setObj2(data[1])
        } else {
            
            let obj2Temp = [];
            for (let i = 0; i < 8; i++) {
                   
                        obj2Temp[i] = {
                            selected: 0,
                            label: `B${i + 1}`,
                            amount: "280",
                        };
            }
            setObj2(obj2Temp);
        }

        if(data ? data[2] : 0) {
            setObj3(data[2])
        } else {
            let obj3Temp = [];
            for (let i = 0; i < 9; i++) {
                    
                        obj3Temp[i] = {
                            selected: 0,
                            label: `C${i + 1}`,
                            amount: "240",
                        };
            }
            setObj3(obj3Temp);
        }
        
        setLoading(false);
        // if(data.length )
    }, []);


    const setSelectedObj1 = async (index) => {
        if (obj1[index]["selected"] === 0) {
            //obj1[index]["selected"] = 0;
            obj1[index]["selected"] = 1;
            await setObj1([...obj1]);
        }

        let temp = []
        for(let i=0; i<obj1.length; i++) {
            if(obj1[i]['selected'] === 1) {
                setSelectedSeats([...selectedSeats, obj1[i]])
            }
        }
        
        
    };

    const setSelectedObj2 = async (index) => {
        if (obj2[index]["selected"] === 0) {
            //obj1[index]["selected"] = 0;
            obj2[index]["selected"] = 1;
            await setObj2([...obj2]);
        } 
        let temp = []
        for(let i=0; i<obj2.length; i++) {
            if(obj2[i]['selected'] === 1) {
                setSelectedSeats([...selectedSeats, obj2[i]])
            }
        }
    };

    const setSelectedObj3 = async (index) => {
        if (obj3[index]["selected"] === 0) {
            //obj1[index]["selected"] = 0;
            obj3[index]["selected"] = 1;
            await setObj3([...obj3]);
        }
        let temp = []
        for(let i=0; i<obj3.length; i++) {
            if(obj3[i]['selected'] === 1) {
                setSelectedSeats([...selectedSeats, obj3[i]])
            }
        }
    };

    useEffect (()=>{
        let total = selectedSeats.reduce((prev, curr) => {

            return prev + parseInt(curr.amount);
            
        }, 0)
        setBookDetails(total)
    },[selectedSeats])

    return (
        <>
       { !loading &&<div>
            <h1>Show 3</h1><hr></hr>

            <Button style={{color:"white", backgroundColor:"black"}} onClick={() => {
                window.open('/', "_self")
            }}>Home</Button>
            <div>
                {obj1.length > 0 ? (
                    <div>
                        {obj1.map((el, index) => {
                            return (
                                <button
                                    key={index}
                                    style={{
                                        backgroundColor:
                                            el.selected !== 0
                                                ? "dimgray"
                                                : "lightgrey",
                                        padding: "1em",
                                        margin: "1em",
                                        visibility:
                                            el.show !== 0
                                                ? "visible"
                                                : "hidden",
                                    }}
                                    onClick={(e) => {
                                        setSelectedObj1(index);
                                    }}
                                >
                                    {el.label}
                                </button>
                            );
                        })}
                    </div>
                ) : (
                    ""
                )}
            </div>

            <div>
                {obj2.length > 0 ? (
                    <div>
                        {obj2.map((el, index) => {
                            return (
                                <button
                                    key={index}
                                    style={{
                                        backgroundColor:
                                            el.selected !== 0
                                                ? "dimgray"
                                                : "lightgrey",
                                        padding: "1em",
                                        margin: "1em",
                                        visibility:
                                            el.show !== 0
                                                ? "visible"
                                                : "hidden",
                                    }}
                                    onClick={(e) => {
                                        setSelectedObj2(index);
                                    }}
                                >
                                    {el.label}
                                </button>
                            );
                        })}
                    </div>
                ) : (
                    ""
                )}
            </div>

            <div>
                {obj3.length > 0 ? (
                    <div>
                        {obj3.map((el, index) => {
                            return (
                                <button
                                    key={index}
                                    style={{
                                        backgroundColor:
                                            el.selected !== 0
                                                ? "dimgray"
                                                : "lightgrey",
                                        padding: "1em",
                                        margin: "1em",
                                        visibility:
                                            el.show !== 0
                                                ? "visible"
                                                : "hidden",
                                    }}
                                    onClick={(e) => {
                                        setSelectedObj3(index);
                                    }}
                                >
                                    {el.label}
                                </button>
                            );
                        })}
                    </div>
                ) : (
                    ""
                )}
            </div>

            <div>
                <h2>
                    Selected Seats -
					{selectedSeats.map((el) => {
                    return <span>{el.label},</span>;
                })}
                </h2>
                
                <h3>
                    {selectedSeats.reduce((prev, curr) => {

                        return prev + parseInt(curr.amount);
                        
                    }, 0)}
                </h3>

                <Button onClick={()=>{
                    localStorage.setItem("Booking Details",bookdetails );
                    localStorage.setItem("Show Details","Show3" );
                    let getData = localStorage.getItem('show 3');
                    localStorage.setItem("show 3",JSON.stringify([obj1,obj2, obj3]))
                    // let fixedData = [];
                    // if(setData){
                    //     for(let i = 0;i <(setData ? setData.length : 0); i++){
                    //         for(let j = 0; j <=(setData ? setData.length : 0); j++){
                    //             if(setData[i] === selectedSeats[j]){
                    //                 fixedData.push(setData[i]);
                    //                 console.log(setData[i]);
                    //             }
                    //         }
                    //     }
                    //     localStorage.setItem("show 1",JSON.stringify([...fixedData]))
                    // }else{
                    //     localStorage.setItem("show 1",JSON.stringify([...selectedSeats]))

                    // }
                    window.open('/Summary', "_self")
                }}>Book</Button>

            </div>
        </div>}
        </>
    );
}
