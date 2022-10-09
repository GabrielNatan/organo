import { useState } from "react"
import "./formulario.css"
import CampoTexto from "../CampoText"
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa"
import Botao from "../Botao/Botao"

const Formulario = ({sendForm, data})=>{
    const [nome,setNome] = useState("")
    const [cargo,setCargo] = useState("")
    const [image,setImage] = useState("")
    const [time,setTime] = useState("")


    const aoSalvar = (evento) => { 
        evento.preventDefault()
        sendForm({
            nome,
            image,
            cargo,
            time
        })
        setNome("")
        setCargo("")
        setImage("")
        setTime("")
    }
    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
            <h2>Preencha os dados para criar o card do colaborador:</h2>
            <CampoTexto 
                obrigatorio={true}
                label="Nome" 
                placeholder="Digite o seu nome"
                value={nome}
                change={value => setNome(value)}
            />
            <CampoTexto 
                obrigatorio={true}
                label="Cargo" 
                placeholder="Digite o seu cargo"
                value={cargo}
                change={value => setCargo(value)}
            />
            <CampoTexto 
                label="Image" 
                placeholder="Informe o endereço da imagem"
                value={image}
                change={value => setImage(value)}
            />
            <ListaSuspensa
                obrigatorio={true}
                label="Time"
                data={data}
                value={time}
                change={value => setTime(value)}
            />
            <Botao texto="Criar Card"/>
            </form>
        </section>
    )
}

export default Formulario