import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import tux1 from "./img/tux-lvl1.png"
import tux2 from "./img/mine-tuxlvl2.png"
import tux3 from "./img/pix-art-tuxlvl3.png"
import tux4 from "./img/master-tuxlvl4.png"
import tux5 from "./img/metal-tuxlvl5.png"
import tux6 from "./img/ff-tuxlvl6.png"

const niveis = [
  {nome: "Normal tux", imagem: tux1, minimo: 0},
  {nome: "Mine tux", imagem: tux2, minimo: 500},
  {nome: "Pixel tux", imagem: tux3, minimo: 1500},
  {nome: "Master tux", imagem: tux4, minimo: 2500},
  {nome: "Metal tux", imagem: tux5, minimo: 3500},
  {nome: "FF tux", imagem: tux6, minimo: 4500}
]

function App() {
  const [counter, setCounter] = useState(0);
  // Procura, de trás para frente, o último nível cujo mínimo já foi alcançado pelo contador
  const nivelAtual = niveis.findLast(nivel => nivel.minimo <= counter)
  // A posição do nível na lista (começa em 0) + 1 = número do nível mostrado na tela
  const numeroNivel = niveis.indexOf(nivelAtual) + 1;

  function incrementer(){
    setCounter(prev => prev + 1);
  }
  
  return(
    <div className="App">
        <h1 className="tipo">{nivelAtual.nome}</h1>
      <h3 className="lvl">lvl {numeroNivel}</h3>
      <img 
      src={nivelAtual.imagem} 
      alt="tux" 
      onClick={incrementer}
      className="clicker"
      draggable={false}
      />
      <h3 className="counter">{counter}</h3>
    </div>
  )
}

export default App