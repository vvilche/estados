// Objetivo: componente de registro
import React, { useState } from "react";
import {faFacebook,faGithub,faLinkedin} from "@fortawesome/free-brands-svg-icons"
import SocialButton from "./SocialButton"
import Formulario from "./Formulario";
import Alert from "./Alert";
//import Formulario from "./Formulario";




function Registro() {

    const [alert, setAlert] = useState({ variant: '', message: '' });
    const muestraAlerta = (variant, message) => {
        setAlert({ variant, message });
      };
  
  
    return (
    <>

   <h1>Crea una cuenta</h1>
<div className="Social">
    <SocialButton icon={faFacebook}/>
    <SocialButton icon={faGithub}/>
    <SocialButton icon={faLinkedin}/>
</div>
    <p>o usa tu email para registrarte</p>
    <div className="Formulario">

        <Formulario/>
        <Alert variant={alert.variant} message={alert.message} />     
        </div>
    </>
  )
}

export default Registro;