import React, { useState,useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";


const Summary = () =>{

    const [totall, setTotal] = useState([]);
    const [show, setShow] = useState([]);
    const [servicetax,setServicetax]  = useState([]);
    const [swach,setSwach]  = useState([]);
    const [kalyan,setKalyan]  = useState([]);
    const [finaltotal,SetFinalTotal] = useState([]);
    const total = () =>{
        let response = localStorage.getItem("Booking Details");
        let Show = localStorage.getItem("Show Details")
        let servicetax= response * 0.14
        servicetax= Math.round((servicetax + Number.EPSILON) * 100) / 100
        let Swach= response * 0.005
        Swach= Math.round((Swach + Number.EPSILON) * 100) / 100
        let kalyan= response * 0.005
        kalyan= Math.round((kalyan + Number.EPSILON) * 100) / 100
        let finaltotal = parseInt(response) +servicetax+Swach+kalyan
        finaltotal= Math.round((finaltotal + Number.EPSILON) * 100) / 100
        setShow(Show)
        setTotal(response)
        setServicetax(servicetax)
        setSwach(Swach)
        setKalyan(kalyan)
        SetFinalTotal(finaltotal)
    }

    useEffect(
        ()=>{
            total();
        },[]
    );
    
return(
    <div>
        <h1>Summary Details</h1> <hr></hr>
        <h2>Successfully Booked {show}</h2>
        <h2>SubTotal:Rs.{totall}</h2>
        <h2>Service Tax @14%:Rs.{servicetax}</h2>
        <h2>Swach Bharat Cess @0.5% Rs.{swach}</h2>
        <h2>Krishi Kalyan Cess @0.5% Rs.{kalyan}</h2>
        <h2>Total:Rs{finaltotal} </h2>
        <Row>
            <Col md={2}>
            <Button onClick={()=>{
                    window.open('/Show1', "_self")
                }}>Back</Button>
            </Col>
            <Col md={2}>
            <Button onClick={()=>{
                    window.open('/Show2', "_self")
                }}>Back2</Button>
            </Col>
            <Col md={2}>
            <Button onClick={()=>{
                    window.open('/Show3', "_self")
                }}>Back3</Button>
            </Col>

            <Col>
            <Button onClick={()=>{
                    localStorage.setItem("Revenue",totall );
                    localStorage.setItem("Service Tax ",servicetax );
                    localStorage.setItem("Swach Bharat Cess",swach );
                    localStorage.setItem("Krishi Kalyan Cess",kalyan );
                    window.open('/revenue', "_self")
                }}>Book</Button>
            </Col>
        </Row>
    </div>
)

}

export default Summary;