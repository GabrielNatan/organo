import Jogador from "../Jogador/Jogador"
import "./time.css"

function Time({titulo,primaryColor,secondaryColor,jogadores}){
    return(
        <section style={{background:primaryColor}} key={titulo} className="time">
            <h3 style={{borderColor:secondaryColor}}>{titulo}</h3>
            <div className="colaboradoes">
                {jogadores.map(jogador=>{
                        return(
                            <Jogador 
                                nome={jogador.nome}
                                image={jogador.image}
                                cargo={jogador.cargo}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Time