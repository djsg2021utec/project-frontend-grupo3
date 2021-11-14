import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
//import {HiMenuAlt2}  from 'react-icons/HiMenuAlt2';
import { BsTextLeft } from "react-icons/bs";



const Navigation = () => {
  return (


<div className="d-flex" id="wrapper">
    <div style={{backgroundColor: '#329fe7'}} id="sidebar-wrapper">

      <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
      <h5 className="text-white">Clinica internacional</h5>
      </div>
      <div className="list-group list-group-flush my-3">      
        <p className="list-group-item list-group-item-action bg-transparent text-white borderless">Bienvenido Teo Chambilla</p>
        <Link href="/inicio">
        <p className="list-group-item list-group-item-action bg-transparent text-white borderless">Inicio</p>
        </Link> 
        <Link href="/registro">
        <p className="list-group-item list-group-item-action bg-transparent text-white borderless">Registro</p>
        </Link> 
        <Link href="/pacientes">
        <p className="list-group-item list-group-item-action bg-transparent text-white borderless">Pacientes</p>
        </Link> 
        <Link href="/seguimiento">
        <p className="list-group-item list-group-item-action bg-transparent text-white borderless">Seguimiento</p>
         </Link> 
         <Link href="/administracion">
        <p className="list-group-item list-group-item-action bg-transparent text-white borderless">Administración</p> 
        </Link>     
        <Link href="/">           
        <p className="list-group-item list-group-item-action bg-transparent text-white borderless">Cerrar sesión</p>
        </Link> 
      </div> 




    </div>
    <div id="page-content-wrapper">
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-4 px-4">
        <div className="d-flex align-items-center">
          <BsTextLeft className="fas fa-align-left primary-text fs-4 me-3"  id="menu-toggle"/>
         
          <h2 className="fs-2 m-0">Sistema de Gestión de Pacientes</h2>
        </div> 
      </nav>



    hola 2
    </div>


</div> 



   /* 

 <i className="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"/>

   
      <ListGroup variant="flush">
        <ListGroup.Item>
        <p>Bienvenido Teo Chambilla</p>    
        </ListGroup.Item>
        <ListGroup.Item>
        <Link href="/inicio">
        <a className="bg-transparent text-white">Inicio</a>
        </Link>  
        </ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      </ListGroup>





   borderless
      <div className="list-group list-group-flush my-3">      
        <p className="list-group-item list-group-item-action bg-transparent text-white">Bienvenido Teo Chambilla</p>
        <Link href="/inicio">
        <a className="list-group-item list-group-item-action bg-transparent text-white">Inicio</a>
        </Link> 
        <Link href="/registro">
        <a className="list-group-item list-group-item-action bg-transparent text-white">Registro</a>
        </Link> 
        <Link href="/pacientes">
        <a href="#" className="list-group-item list-group-item-action bg-transparent text-white">Pacientes</a>
        </Link> 
        <Link href="/seguimiento">
        <a href="#" className="list-group-item list-group-item-action bg-transparent text-white">Seguimiento</a>
         </Link> 
         <Link href="/administracion">
        <a href="#" className="list-group-item list-group-item-action bg-transparent text-white">Administración</a> 
        </Link>     
        <Link href="/">           
        <a className="list-group-item list-group-item-action bg-transparent text-white">Cerrar sesión</a>
        </Link> 
      </div> 




	<nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link href="/">
          	<a className="navbar-brand">Home</a>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                 <Link href="/registro">
          			<a className="nav-link">Registro</a>
          		</Link>          		                
              </li>              
              <li className="nav-item">
               <Link href="/pacientes">
                <a className="nav-link">Pacientes</a>
          		</Link>
              </li>
               <li className="nav-item">
               <Link href="/seguimiento">
                <a className="nav-link">Seguimiento</a>
              </Link>
              </li>
               <li className="nav-item">
               <Link href="/administracion">
                <a className="nav-link">Administración</a>
              </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> 
      */


  )
}

export default Navigation