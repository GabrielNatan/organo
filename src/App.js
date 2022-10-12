import { Fragment, useState } from "react";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario/Formulario";
import Rodape from "./components/Rodape/Rodape";
import { Selecao } from "./components/Selecao/Selecao";
import Time from "./components/Time/Time";

function App() {
  const [jogadores,setJogadores] = useState([])
  const [step,setStep] = useState(1)
  const [selecao,setSelecao] = useState({})
  
  const times = [
      {nome:'Goleiro',primaryColor:"#D9F7E9",secondaryColor:"#57C278"},
      {nome:'Laterais direito',primaryColor:"#E8F8FF",secondaryColor:"#82CFFA"},
      {nome:'Laterais esquerdo',primaryColor:"#F0F8E2",secondaryColor:"#A6DFFA"},
      {nome:'Zagueiro',primaryColor:"#FDE7E8",secondaryColor:"#E06B69"},
      {nome:'Volante',primaryColor:"#FAE9F5",secondaryColor:"#DB6EBF"},
      {nome:'Meia',primaryColor:"#FFF5D9",secondaryColor:"#FFBA05"},
      {nome:'Atacante',primaryColor:"#FFEED9",secondaryColor:"#FF8A29"},
  ]

  const list = [
    {nome:"4-2-3-1"},
    {nome:"3-5-2"},
    {nome:"4-5-1"},
    {nome:"4-4-2"},
    {nome:"4-3-3"},
  ]
  const sendForm = (novoJogador)=>{
    setJogadores([...jogadores,novoJogador])
  }
  const sendSelecao = (novaSelecao)=>{
    setSelecao(novaSelecao)
    setStep(2)
  }

  return (
    <div className="App">
     <Banner/>
    {step === 1 ?
     <Formulario 
      variant="secondary" 
      list={list.map(formacao=> formacao.nome)} 
      data={times.map(time=> time.nome)} 
      sendSelecao={sendSelecao}
      />
      :
      <Formulario 
      variant="primary" 
      list={list.map(formacao=> formacao.nome)} 
      data={times.map(time=> time.nome)} 
      sendJogador={sendForm}
      />
    }
    {selecao &&
      <Selecao
      selecao={selecao}
      />
    }
    {times.map(el=>{
      return(
        <Fragment key={el.nome}>
          <Time titulo={el.nome} 
                primaryColor={el.primaryColor} 
                secondaryColor={el.secondaryColor}
                jogadores={jogadores.filter(jogador=>jogador.time === el.nome)}
          />
        </Fragment>
      )
    })}
    <Rodape/>
    </div>
  );
}

export default App;
