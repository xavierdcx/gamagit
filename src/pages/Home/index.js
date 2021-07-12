import React, {useState} from 'react';
import axios from 'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

function App(props) {
  
  const history = useHistory();
  const [ usuario, setUsuario ] = useState('');
  const [ erro, setErro ] = useState(false);
  
  function hendlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(Response => {
      
      const repositories = Response.data;
      const repositoriesName = [];
      repositories.map((repository) => {
        repositoriesName.push(repository.name);
      
      });
      
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      setErro(false);
      history.push('/repositories'); 
    
    })
    .catch(err => {
      setErro(true);
    });
  }

  return (
    <S.HomeContainer>
      <S.Contant>
        <S.Input className="usuarioInput" placeholder="Usuario" value={usuario} onChange={e => setUsuario(e.target.value)} />
        <S.Button type="button" onClick={hendlePesquisa}>Pesquisar</S.Button>
      </S.Contant>
     { erro ? <S.ErrorMsg>Ocorreu um erro. Tente novamente.</S.ErrorMsg> : '' } 
    </S.HomeContainer>  
  );
}
export default App;
