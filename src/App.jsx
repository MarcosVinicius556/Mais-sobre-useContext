import Alunos from "./components/Alunos"

import UserProvider from './contexts/user';

function App() {

  return (
    <div>
      {/* Passando o contexto para toda a aplicação */}
      <UserProvider> 
        <Alunos/>
        <Titulo>
          <h1>Titulo</h1>
        </Titulo>
      </UserProvider>
    </div>
  )
}

export default App

function Titulo({ children }) { //Children é o conteúdo que está "dentro" da tag pai
  return(
    <div>
      {children}
    </div>
  );
}
