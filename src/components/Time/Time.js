import { Fragment } from "react"
import Jogador from "../Jogador/Jogador"
import "./time.css"

function Time({titulo,primaryColor,secondaryColor,jogadores}){
    return jogadores.length > 0 ? (
        <section style={{background:primaryColor}} key={titulo} className="time">
            <h3 style={{borderColor:secondaryColor}}>{titulo}</h3>
            <div className="colaboradoes">
                {jogadores.map(jogador=>{
                        return(
                            <Fragment key={`${jogador.cargo}-${jogador.image}-${jogador.nome}`}>
                                <Jogador 
                                    corDeFundo={secondaryColor}
                                    nome={jogador.nome}
                                    image={jogador.image}
                                    cargo={jogador.cargo}
                                />
                            </Fragment>
                        )
                    })
                }
            </div>
        </section>
    ) : ""
}

export default Time