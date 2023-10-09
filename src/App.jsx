import { useState } from 'react'

import Registro from './componets/Registro'
import Alert from './componets/Alert'


import './App.css'



function App() {

  const [alertMessage, setAlertMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState('');
  
  const muestraAlerta = (message, variant) => {
  setAlertMessage(message);
  setAlertVariant(variant);
  };



return (
    <>
<div className='container'>
  <div className='card'>
      <Registro />
     
  </div>
</div>
    </>
  )
}
export default App
