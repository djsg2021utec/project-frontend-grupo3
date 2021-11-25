import Head from 'next/head'
//import Image from 'next/image'
//import styles from '../styles/Home.module.css'
import Navigation from '../components/navigation'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'


const ColoredLine = ({color}) => (
  <hr
              style={{
                color: color,
                backgroundColor: color,
                height: 1
              }}
            />
);
export default function Registro() {
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
                        Registro de pacientes
                      </h2>
                    </Col>
                </Row>
                <Row>
                  <ColoredLine color="black" />
                </Row>
                <Row>
                  <div>
                    <h6> Datos básicos </h6> 
                  </div>
                </Row>
                    <div class="row-inputs3">
                      <Col>
                        <label for ="text" class='form-label'>Nombres</label>
                        <input type="text" class="form-control" name="password"></input>
                      </Col>
                      <Col>
                        <label for ="password" class='form-label'>Apellido Paterno</label>
                        <input type="password" class="form-control" name="password"></input>
                      </Col>
                      <Col>
                        <label for ="password" class='form-label'>Apellido Materno</label>
                        <input type="password" class="form-control" name="password"></input>
                      </Col>
                    </div>
                    <div class="row-inputs3">
                      <Col>
                        <label for ="password" class='form-label'>Tipo de documento</label>
                        <input type="password" class="form-control" name="password"></input>
                      </Col>
                      <Col>
                        <label for ="password" class='form-label'>Número de documento</label>
                        <input type="password" class="form-control" name="password"></input>
                      </Col>
                    </div>
                    <div class="row-inputs3">
                      <Col>
                        <label for ="password" class='form-label'>Fecha de nacimiento</label>
                        <input type="password" class="form-control" name="password"></input>
                      </Col>
                      <Col>
                        <label for ="password" class='form-label'>Sexo</label>
                        <input type="password" class="form-control" name="password"></input>
                      </Col>
                    </div>
                    <div class="row-inputs3">
                      <Col>
                        <label for ="password" class='form-label'>Teléfono</label>
                        <input type="password" class="form-control" name="password"></input>
                      </Col>
                      <Col>
                        <label for ="password" class='form-label'>Correo electrónico</label>
                        <input type="password" class="form-control" name="password"></input>
                      </Col>
                      <Col>
                        <label for ="password" class='form-label'>Dirección domiciliaria</label>
                        <input type="password" class="form-control" name="password"></input>
                      </Col>
                    </div>
                    <div class="row-inputs3">
                      <Col>
                        <label for ="password" class='form-label'>Actividad/Puesto</label>
                        <input type="password" class="form-control" name="password"></input>
                      </Col>
                      <Col>
                        <label for ="password" class='form-label'>Institución/Empresa</label>
                        <input type="password" class="form-control" name="password"></input>
                      </Col>
                    </div>
                    <div>
                      <h6> Datos de consulta </h6> 
                    </div>
                    <div class="row-inputs3">
                      <Col>
                        <label for ="text" class='form-label'>Médico de consulta</label>
                        <input type="text" class="form-control" name="medico"></input>
                      </Col>
                    </div>
                    <div class="parrafo">
                      <label for ="text" class='form-label'>Observaciones</label>
                      <input type="text" class="form-control" name="observaciones"></input>
                    </div>
                    <div class="siguiente">
                      <a name="" id="" class="btn btn-primary" href="#" role="button">Siguiente</a>
                    </div>
              </Container>
            </div>
          </Navigation>
      </div>



  )
}