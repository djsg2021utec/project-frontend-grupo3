import Head from 'next/head'
//import Image from 'next/image'
//import styles from '../styles/Home.module.css'
import Navigation from '../components/navigation'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"


export default function Inicio() {
  return (   
       <div>
          <Head>
            <title>Clinica internacional - SGP</title>
          </Head>
           <Navigation>
          <div>
             <p className="test">seccion inicio</p>
          </div>
          </Navigation>
       
      </div>

  )
}

