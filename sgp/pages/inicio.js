import Head from 'next/head'
//import Image from 'next/image'
//import styles from '../styles/Home.module.css'
import Navigation from '../components/navigation'

export default function Inicio() {
  return (   
       <div>
          <Head>
            <title>Clinica internacional - SGP</title>
          </Head>
           <Navigation/>
          <div>
             <p className="test">seccion inicio</p>            
          </div>
       
      </div>

  )
}