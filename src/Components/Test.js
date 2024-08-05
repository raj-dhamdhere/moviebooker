import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";


const Test = () =>{
    return(
        <div>

            <Container className="text-center">

            <h1 style={{color:"red"}}>Welcome To Our Movie Booking Center</h1>
            
        
            <Row>
                <Col md={4}></Col>

                <Col xs={1} md={1}>
                        <Button onClick={()=>{
                            window.open('/Show1', "_self")
                        }}>Show 1</Button>
                    
                    </Col>

                    <Col xs={1} md={1}>
                    <Button onClick={()=>{
                            window.open('/Show2')
                        }}>Show 2</Button>
                    </Col>

                    <Col xs={1} md={1}>
                    <Button onClick={()=>{
                            window.open('/Show3')
                        }}>Show 3</Button>
                    </Col>
           </Row>
            </Container>
            
              
         
        </div>
    )
}

export default Test; 