import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import Frase from "./components/Frase";
import "./style.css";
import Spinner from "./components/Spinner";


function App() {
  const [personaje, setPersonaje] = useState({});
  const [mostrarSpinner, setMostrarSpinner] = useState(true);

  useEffect(() => {
    consultarAPI();
  }, []);


  const consultarAPI = async() => {
    try {
      //mostramos el spinner en true para que al hacer click lo reinicie
      setMostrarSpinner(true)
      const respuesta = await fetch(
        "https://thesimpsonsquoteapi.glitch.me/quotes"
      );
      console.log(respuesta);
      const dato = await respuesta.json();
      console.log(dato[0]);
      setPersonaje(dato[0]);
      //desactivamos el spinnner para que aparezca la frase
      setMostrarSpinner(false)

    } catch (error) {
      console.log(error);
    }
  }

  const mostrarComponente = (mostrarSpinner === true) ? (<Spinner></Spinner>) : (<Frase personaje={personaje}></Frase>)

    return (
      <Container>
        <div className="text-center">
          <img
            src="https://trello.com/1/cards/632a448eb47fe800d9bdef25/attachments/632cd857ffabe0042d12baf2/download/image.png"
            alt=""
            className=""
          />
        </div>
        <div className="text-center">
          <Button className="botonNaranja mb-5" variant='warning' onClick={consultarAPI}>Obtener frase</Button>
        </div>
        {
          mostrarComponente
        }    
      </Container>
    );
  };


export default App;
