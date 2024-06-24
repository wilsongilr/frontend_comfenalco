import { useState } from "react";
import Saludo from "./components/Saludo";




function App() {
const [nombre, setNombre]=useState("");

const changeName = () => {
  setNombre("Wilson");

}

  return (
    <>
    <div className="App">
      <h1>Hola {nombre}</h1>
      <button onClick={() => changeName()}>Change Name</button>
    </div>
    <Saludo/>
    </>
  );
}

export default App;
