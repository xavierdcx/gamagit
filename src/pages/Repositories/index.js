import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

export default function Repositories() {
   const History = useHistory();
   const [ repositories, setRepositories ] = useState([]);

   useEffect(() => {
      
      let repositoriesName = localStorage.getItem('repositoriesName');
      
      if(repositoriesName != null){ 
      
         JSON.parse(repositoriesName);
      setRepositories(repositoriesName);
      localStorage.clear(); 
      
      } else {
         History.push('/');
      }
   
   }, []);

    return (
       <S.Container> 
        <S.Title>Repositorios</S.Title> 
        <S.List>
           {
              repositories.map(repository => {
                 return (
                    <S.ListItem>Repositorio: { repository }</S.ListItem>
                 )
              })
           }
        </S.List>
        <S.LinkHome to="/">Voltar</S.LinkHome>
       </S.Container> 
    )
}

 