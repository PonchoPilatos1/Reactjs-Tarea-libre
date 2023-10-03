import React, {useState} from 'react'
import './componente.css';

export default function Micomponente() {

    const [text, setText] = useState();
    const [updated=[], setUpdated] = useState();

    const textOnChange = (event) => {
        setText(event.target.value)
    }

    const buttonOnClick = () => {
        if(text!==""){
            setUpdated(updated+text+". ")
        }
    }

    const Eliminiar = () => {
        setUpdated("");
    }

  return (
    <div>
        <input type="text" value={text} onChange={textOnChange}/>
        <button onClick={buttonOnClick}>Actualizar</button>
        <button onClick={Eliminiar}>Eliminiar</button>
        <p>Texto Escrito: {text}</p>
        <p>Texto Guardado: {updated}</p>
    </div>
  )
}
