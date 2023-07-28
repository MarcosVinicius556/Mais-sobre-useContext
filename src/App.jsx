import { useState } from "react"
import Alunos from "./components/Alunos"

function App() {

  const[nome, setNome] = useState('Marcos Vinicius');

  return (
    <div>
      <Alunos nome={nome} mudaNome={setNome}/>
    </div>
  )
}

export default App
