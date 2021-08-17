import React, { useState }from 'react';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';

const Calculator = () => {
    const [principal, setPrincipal] = useState();
    const [years, setYears] = useState();
    const [interest, setInterest] = useState();
    const [result, setResult] = useState();

    const calculateInterest = () => {
        const interestRate = interest / 100
        const total = principal * (1 + interestRate * years); 
        setResult(total); 
    };

    return (
    <>
        <Form>
            <Row className="mb-3">
                <Form.Group as={Col}>
                <Form.Label>Principal</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter principal amount" 
                    onChange={(e) => setPrincipal(e.target.value)}/>
                </Form.Group>
        
                <Form.Group as={Col}>
                <Form.Label>Interest Rate</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter interest rate" 
                    onChange={(e) => setInterest(e.target.value)}/>
                </Form.Group>
 
                <Form.Group as={Col}>
                <Form.Label>Years</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter number of years" 
                    onChange={(e) => setYears(e.target.value)}/>
                </Form.Group>
            </Row>
        </Form>

        <Button 
            variant="primary"
            onClick={() => {calculateInterest()}}
            >
            CALCULATE
        </Button>

        <h3 className="result">
            { result ?  `TOTAL: $${result}` : null }
        </h3>
    </>

    )
}; 

export default Calculator; 
