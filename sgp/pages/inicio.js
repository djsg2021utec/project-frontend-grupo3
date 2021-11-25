import Head from 'next/head'
//import Image from 'next/image'
//import styles from '../styles/Home.module.css'
import Navigation from '../components/navigation'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

// Linea Horizontal
const ColoredLine = ({color}) => (
  <hr
              style={{
                color: color,
                backgroundColor: color,
                height: 1
              }}
            />
);


export default function Inicio() {
  return (   
       <div>
          <Head>
            <title>Clinica internacional - SGP</title>
          </Head>
           <Navigation>
          <div> 
             <Container>
                <Row>
                  <Col>
                    <h2>
                      Inicio
                    </h2>
                  </Col>
                </Row>
                <Row>
                  <ColoredLine color="black" />
                </Row>
                <Row>
                <Col>
                  <Button variant="primary" size="lg">
                    Pacientes a Cargo
                  </Button>
                </Col>
                <Col>
                  <Button variant="primary" size="lg">
                    Objetivos Pendientes
                  </Button>
                </Col>
                </Row>
                <Row>
                <Col>
                  <h2>
                    Inicio
                  </h2>
                </Col>
                <Row>
                  <ColoredLine color="black" />
                </Row>
                </Row>
                <Row>
                <Col>
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>Jose Ortiz</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Cod: 00001</Card.Subtitle>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Card.Link href="#">Ver</Card.Link>
                    <Card.Link href="#">Plan</Card.Link>
                  </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>Dan Santivañez</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Cod: 00002</Card.Subtitle>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Card.Link href="#">Ver</Card.Link>
                    <Card.Link href="#">Plan</Card.Link>
                  </Card.Body>
                </Card>                
                </Col>
                <Col>
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>Gabriel Salazar</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Cod: 00003</Card.Subtitle>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Card.Link href="#">Ver</Card.Link>
                    <Card.Link href="#">Plan</Card.Link>
                  </Card.Body>
                </Card>                
                </Col>
                </Row>
            </Container>
             {/* <p> Probando 1 2 3</p> */}
          </div>
          </Navigation>
       
      </div>

  )
}