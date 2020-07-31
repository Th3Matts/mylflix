import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField'


function CadastroCategoria() {
  const valoresIniciais= {
    nome: '',
    descricao: '',
    cor: '',
  }
  const [categorias, setCategorias ] = useState([]);
  const [values, setValues] = useState([valoresIniciais]);
  

  function setValue(key, value){
    //Pode ser qualquer coisa!!!
    setValues({
      ...values,
      [key]: value, // nome: 'valor'

    })
  }
  function handleChange(infosDoEvento){
    setValue(
      infosDoEvento.target.getAttribute('nome'),
      infosDoEvento.target.value
      );
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome} </h1>

      <form onSubmit = {function handleSubmit(infosDoEvento){
          infosDoEvento.preventDefault();
          setCategorias([
            ...categorias,
            values
          ]);

          setValues(valoresIniciais)
        }}>

          <FormField
            label="Nome da Categoria"
            type= "text"
            name= "Nome"
            value= {values.nome}
            onChange = {handleChange}
          />

          <FormField
            label= "Descrição" 
            type= "textfield"
            name= "Nome"
            value= {values.nome}
            onChange = {handleChange}
          />

          <FormField 
            label="Cor"
            type= "color"
            name= "cor"
            value= {values.nome}
            onChange = {handleChange}
          />

        <button>
          Cadastrar 
        </button>
      </form>

            <ul>
              {categorias.map((categoria, indice) => {
                return (
                  <li key = {`${categoria}${indice}`}> 
                  {/* Usado quando precisa de duplicidade, no caso, cria um indice e torna cada parametro unico */}
                    {categoria.nome}
                  </li>
                );
              })
              
              }
            </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;