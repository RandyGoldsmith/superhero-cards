import React from 'react';
import SingleCard from '../Card/card-component';
import { Container, Row, Col } from 'react-bootstrap';


const CardList = ({heroes}) => {
    
    return (                   
        <Container>
            <Row>
            {
                heroes.map((hero, i) => {
                    return (      
                        <Col md={4} className="my-1 p-2">                  
                            <SingleCard
                                 
                                key={heroes[i].id} 
                                id={heroes[i].id} 
                                name={heroes[i].name}         
                            />  
                        </Col>                       
                    );
                })    
            }
            </Row>
        </Container>            
        );
    }

export default CardList;