import "./selecao.css"

export const Selecao = ({campo,selecao})=>{
    console.log(selecao)
    return(
        <div className="selecao">
            <div className="container-selecao">
                <div>
                    <div className="cont">
                        <img src="/images/campo.jpg" alt="campo"/>
                        <div className="jogador goleiro"></div>
                        <div className="jogador zagueiro um"></div>
                        <div className="jogador zagueiro dois"></div>
                        <div className="jogador lateral dr"></div>
                        <div className="jogador lateral es"></div>
                        <div className="jogador meia um"></div>
                        <div className="jogador meia dois"></div>
                        <div className="jogador meia tres"></div>
                        <div className="jogador atacante um"></div>
                        <div className="jogador atacante dois"></div>
                        <div className="jogador atacante tres"></div>
                    </div>
                </div>
                <div>
                    <h1>{selecao?.nomeSelecao}</h1>
                    <img 
                        className="brasao"
                        src={selecao?.imageBrasao}
                        alt="brasao"
                    />
                    <h1>Formação</h1>
                    <strong>{selecao?.formacao}</strong>
                </div>
            </div>
        </div>
    )
}