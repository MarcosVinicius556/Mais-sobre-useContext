import Nome from "../Nome"

function Alunos({ nome, mudaNome }) {

    return (
      <div>
        Componente Alunos <br />
        <Nome nome={nome} mudaNome={mudaNome}/>
      </div>
    )
  }
  
  export default Alunos
  