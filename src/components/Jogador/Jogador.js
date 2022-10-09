import "./jogador.css"

function Jogador({cargo,nome,image}){
        return(
            <div className='colaborador'>
                <div className='cabecalho'>
                    <img src={image} alt={nome}/>
                </div>
                <div className='rodape'>
                    <h1>{nome}</h1>
                    <h5>{cargo}</h5>
                </div>
            </div>
        )
}

export default Jogador