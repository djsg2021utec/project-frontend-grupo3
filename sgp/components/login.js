
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
import { BsTextLeft } from "react-icons/bs";
import React, { useRef } from "react";
import { Container } from 'react-bootstrap';
import { LabelHTMLAttributes } from 'react';
import '/styles/Home.module.css'

const Login = () => {
    return (
        <body>
            {/* <div class = 'container'>
                <div class = 'row '> 
                
                </div>
            </div> */}
            <div>
                <div style={{backgroundColor: '#329fe7'}} id="sidebar-wrapper">
                    <form class="login-form">
                        <div class="row">
                            <div class="column">
                                
                                <h2 class = 'fw-bold text-center py-5 '>Bievenido al Sistema</h2>
                                
                                <form action="#">
                                    <div class='mb-4'>
                                        <label for ="email" class='form-label'>Nombre de usuario</label>
                                        <input type = "text" class='form-control' name='IDuser'></input>
                                    </div>
                                    <div class='mb-4'>
                                        <label for ="password" class='form-label'>Contraseña</label>
                                        <input type="password" class="form-control" name="password"></input>
                                    </div>
                                    <a name="" id="" class="btn btn-primary" href="#" role="button">Ingresar</a>

                                </form>
                                

                            </div>
                        </div>
                    </form>
                </div>
                
            </div>
        </body>
    )
}

export default Login

