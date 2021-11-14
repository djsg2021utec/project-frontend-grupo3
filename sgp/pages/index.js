import Head from 'next/head'
//import Image from 'next/image'
//import styles from '../styles/Home.module.css'

//import Navigation from './navigation'
import Navigation from '../components/navigation'


export default function Login() {
  return (   
       <div>
          <Head>
            <title>Clinica internacional - SGP</title>
          </Head>
          <Navigation/>
          <div>
            <p className="test">seccion login</p>
          </div>
       
      </div>



  )
}
