import "./formulario.css"
import CampoTexto from "../CampoText"
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa"
import Botao from "../Botao/Botao"

const Formulario = ()=>{
    let data = [
        "Goleiro",
        "Lateral esquerdo",
        "Lateral direito",
        "Zagueiro",
        "Volante",
        "Meia",
        "Atacante"
    ]

    const aoSalvar = (evento) => { 
        evento.preventDefault()
        console.log('Form foi submetido')
    }
    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
            <h2>Preencha os dados para criar o card do colaborador:</h2>
            <CampoTexto 
                obrigatorio={true}
                label="Nome" 
                placeholder="Digite o seu nome"
            />
            <CampoTexto 
                obrigatorio={true}
                label="Cargo" 
                placeholder="Digite o seu cargo"
            />
            <CampoTexto 
                label="Image" 
                placeholder="Informe o endereço da imagem"
            />
            <ListaSuspensa
                obrigatorio={true}
                label="Time"
                data={data}
            />
            <Botao texto="Criar Card"/>
            </form>
        </section>
    )
}

export default Formulario