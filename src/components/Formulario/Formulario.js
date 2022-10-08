import "./formulario.css"
import CampoTexto from "../CampoText"

const Formulario = ()=>{
    return(
        <section>
            <form>
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
            </form>
        </section>
    )
}

export default Formulario