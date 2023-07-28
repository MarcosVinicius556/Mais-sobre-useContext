
function Nome({ nome, mudaNome }) {

    return (
      <>
        <span>Bem vindo: {nome}</span>
        <br/>
        <button onClick={() => { mudaNome('Marcos Vinicius Angeli Costa') }}>Trocar nome</button>
      </>
    )
  }
  
  export default Nome
  