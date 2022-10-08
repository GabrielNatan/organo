import "./formulario.css"
import CampoTexto from "../CampoText"
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa"

const Formulario = ()=>{
    let data = [
        "goleiro","atacante","meio campo"
    ]
    return(
        <section className="formulario">
            <form>
            <h2>Preencha os dados para criar o card do colaborador:</h2>
            <CampoTexto 
                label="Nome" 
                placeholder="Digite o seu nome"
            />
            <CampoTexto 
                label="Cargo" 
                placeholder="Digite o seu cargo"
            />
            <CampoTexto 
                label="Image" 
                placeholder="Informe o endereço da imagem"
            />
            <ListaSuspensa
                label="Time"
                data={data}
            />
            </form>
        </section>
    )
}

export default Formulario