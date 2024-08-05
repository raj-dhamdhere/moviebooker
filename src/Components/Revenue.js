import React, { useState,useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";


const Revenue = () =>{

    const [totall, setTotal] = useState([]);
    const [servicetax,setServicetax]  = useState([]);
    const [swach,setSwach]  = useState([]);
    const [kalyan,setKalyan]  = useState([]);

    const total = () =>{
        let totall = localStorage.getItem("Revenue");
        let servicetax = localStorage.getItem("Service Tax ")
        let Swach=  localStorage.getItem("Swach Bharat Cess")
        let kalyan=  localStorage.getItem("Krishi Kalyan Cess")
        
        setTotal(totall)
        setServicetax(servicetax)
        setSwach(Swach)
        setKalyan(kalyan)
       
    }

    useEffect(
        ()=>{
            total();
        },[]
    );
    
return(
    <div>
        <h1>Revenue</h1> <hr></hr>
        
        <h2>Revenue:Rs.{totall}</h2>
        <h2>Service Tax @14%:Rs.{servicetax}</h2>
        <h2>Swach Bharat Cess @0.5% Rs.{swach}</h2>
        <h2>Krishi Kalyan Cess @0.5% Rs.{kalyan}</h2>
        
        <Row>
            <Col md={2}>
            <Button onClick={()=>{
                    window.open('/', "_self")
                }}>Home</Button>
            </Col>

            
        </Row>
    </div>
)

}

export default Revenue;