import { useContext } from "react"
import { UserContext } from "../../contexts/user"

function Nome() {

    const { aluno, setAluno } = useContext(UserContext);
    return (
      <>
        <span>Bem vindo: {aluno}</span>
        <button onClick={() => setAluno('teste')}>Mudar nome</button>
        <br/>
      </>
    )
  }
  
  export default Nome
  