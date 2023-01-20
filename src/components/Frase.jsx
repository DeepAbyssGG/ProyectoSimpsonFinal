import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const frase = ({personaje}) => {
  return (
    <Card>
     <Card.Body md={4}>
    <Row>
        <Col>
        <img 
        src={personaje.image} 
        alt={personaje.character}
        className='w-100' />     
        </Col>
        <Col md={8}>
            <Card.Title><h3>{personaje.character}</h3></Card.Title>
            <Card.Text>
          {personaje.quote}
            </Card.Text>                        
        </Col>
    </Row>
    </Card.Body>
    </Card>
  );
}

export default frase




