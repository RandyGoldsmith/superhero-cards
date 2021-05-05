import React from 'react';
import './card-style.css';
import { Card, Button } from 'react-bootstrap';


const SingleCard = ({name, powers}) => {
    return (    
        <Card className="text-center card-style" >
            <Card.Img src="https://picsum.photos/id/1/150/100"/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    
                </Card.Text>
                <Button variant="primary">Read More</Button>
            </Card.Body>
        </Card>                        
    );
}

export default SingleCard;