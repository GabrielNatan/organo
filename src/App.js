import { Fragment, useEffect, useState } from "react";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario/Formulario";
import Time from "./components/Time/Time";

function App() {
  const [jogadores,setJogadores] = useState([])
  const times = [
      {nome:'Programação',primaryColor:"#D9F7E9",secondaryColor:"#57C278"},
      {nome:'Front-End',primaryColor:"#E8F8FF",secondaryColor:"#82CFFA"},
      {nome:'Data Science',primaryColor:"#F0F8E2",secondaryColor:"#A6DFFA"},
      {nome:'Devops',primaryColor:"#FDE7E8",secondaryColor:"#E06B69"},
      {nome:'UX e Design',primaryColor:"#FAE9F5",secondaryColor:"#DB6EBF"},
      {nome:'Mobile',primaryColor:"#FFF5D9",secondaryColor:"#FFBA05"},
      {nome:'Inovação e Gestão',primaryColor:"#FFEED9",secondaryColor:"#FF8A29"},
  ]
  const sendForm = (novoJogador)=>{
    setJogadores([...jogadores,novoJogador])
  }

  useEffect(()=>{console.log(jogadores)},[jogadores])
  return (
    <div className="App">
     <Banner/>
    <Formulario data={times.map(time=> time.nome)} sendForm={sendForm}/>
    {times.map(el=>{
      return(
        <Fragment key={el.nome}>
          <Time titulo={el.nome} 
                primaryColor={el.primaryColor} 
                secondaryColor={el.secondaryColor}
          />
        </Fragment>
      )
    })}
    </div>
  );
}

export default App;
