import { Fragment, useEffect, useState } from "react";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario/Formulario";
import Time from "./components/Time/Time";

function App() {
  const [jogadores,setJogadores] = useState([])
  const times = [
      'Programação',
      'Front-End',
      'Data Science',
      'Devops',
      'UX e Design',
      'Mobile',
      'Inovação e Gestão',
  ]
  const sendForm = (novoJogador)=>{
    setJogadores([...jogadores,novoJogador])
  }

  useEffect(()=>{console.log(jogadores)},[jogadores])
  return (
    <div className="App">
     <Banner/>
    <Formulario sendForm={sendForm}/>
    {times.map(el=>{
      return(
        <Fragment key={el}>
          <Time titulo={el}/>
        </Fragment>
      )
    })}
    </div>
  );
}

export default App;
