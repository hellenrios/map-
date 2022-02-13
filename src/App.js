import React, {Component} from 'react'
import './App.css'

class App extends Component {
  state={
    musicas: [
    {
      nome: "Positions",
      artista: "Ariana Grande"
    }, 
    {
      nome: "Jealousy",
      artista: "FKA Twigs"
    }, 
    {
      nome: "It's a wrap",
      artista: "Tinashe"
    }, 
    {
      nome: "Butterfly",
      artista: "Grimes"
    }, 
    {
      nome: "Stay",
      artista: "Rihanna"
    }, 
    {
      nome: "Back & Forth",
      artista: "Rico Nasty"
    }
    ]
  }

  render(){
    return(
      <main>
        <h1>Músicas</h1>
       {this.state.musicas.map((item) => ( 
         <div className='container'>  
           <h3>Nome:{item.nome}</h3>
           <p>artista:{item.artista}</p>
         </div>
      ))}
      </main>
    )
  }
}

export default App