import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios"


function App() {

  const [cep,setCep]= useState("")
  const [dados,setDados]=useState("")

  function consultarCep  (){
    let url= `https://viacep.com.br/ws/${cep}/json/`;
    axios.get(url).then(
      (response)=> {
        if(!response.data.err){
        let objeto= JSON.stringify(response.data)
        setDados(objeto)
        }
        else{
          setDados("Sinto Muito")
        }
        } 

        )
        
      .catch((err) =>{setDados("Sinto muito não conseguimos encontar o CEP!")})
        
      
    }


  function atribuirCep(e){
     e.preventDefault();
     setCep(e.target.value)
     
  }

  return (
    <div className="App">
     <img src={logo} className="App-logo" alt="logo" />
       <h1> Consultar CEP</h1>
       <div>
        <input type="number" name="cep" maxLength="9" onChange={(e)=>atribuirCep(e)} />
        <button onClick={()=>consultarCep()}> Buscar CEP</button>
        
       
       
       </div>
       <div name ="resultado">
       {dados}
 
        </div>

        <section>
        <h2>CEP {dados.cep}</h2>
        <h3>{dados.localidade} - {dados.uf}</h3>

        </section>
        <div id="container">
            <div className="esquerda">
              <p><span>Logradouro:</span> {dados.logadouro}</p>
              <p><span>CEP:</span> {dados.cep}</p>
              <p><span>Bairro</span>: {dados.bairro}</p>
              <p><span>Cidade:</span> {dados.localidade}</p>
             <p><span>UF:</span> {dados.uf}</p>
             <p><span>Código DDD:</span> {dados.ddd}</p>
           

            </div>
            </div>

           
       </div>
  );
}

export default App;
