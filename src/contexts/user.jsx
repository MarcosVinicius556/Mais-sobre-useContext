import { useState, createContext, Children } from "react";


export const UserContext = createContext({}); //Criando useContext

//Criando e disponibilizando o contexto para a aplicação
function UserProvider({children}) {

    const[aluno, setAluno] = useState('aluno');
    return(
        <UserContext.Provider value={{ aluno, setAluno }}> {/**value seria o valor que o contexto irá fornecer para a aplicação */}
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;