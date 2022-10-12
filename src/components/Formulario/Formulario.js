import { useState } from "react"
import "./formulario.css"
import CampoTexto from "../CampoText"
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa"
import Botao from "../Botao/Botao"

const Formulario = ({ list,variant,sendSelecao,sendJogador, data }) => {
    const [nome, setNome] = useState("")
    const [cargo, setCargo] = useState("")
    const [image, setImage] = useState("")
    const [time, setTime] = useState("")
    const [nomeSelecao, setNomeSelecao] = useState("")
    const [imageBrasao, setImageBrasao] = useState("")
    const [formacao, setFormacao] = useState("")

    const aoSalvar = (evento) => {
        evento.preventDefault()
        sendJogador({
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
    const aoAdicionarSelecao = (evento)=>{
        evento.preventDefault()
        sendSelecao({
            nomeSelecao,
            imageBrasao,
            formacao,
        })
        setNomeSelecao("")
        setImageBrasao("")
        setFormacao("")
    }
    return (
        <section className="formulario">
            {variant === "primary" ?
                <form onSubmit={aoSalvar}>
                    <h2>Preencha os dados para criar o card do jogador:</h2>
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
                    <Botao texto="Criar Card" />
                </form>
                :
                <form onSubmit={aoAdicionarSelecao}>
                    <h2>Preencha os dados para escolher sua seleção:</h2>
                    <CampoTexto
                        obrigatorio={true}
                        label="Seleção"
                        placeholder="Digite o nome da seleção"
                        value={nomeSelecao}
                        change={value => setNomeSelecao(value)}
                    />
                  
                    <CampoTexto
                        label="Image"
                        placeholder="Informe o endereço da imagem do brasão"
                        value={imageBrasao}
                        change={value => setImageBrasao(value)}
                    />
                    <ListaSuspensa
                        obrigatorio={true}
                        label="Time"
                        data={list}
                        value={formacao}
                        change={value => setFormacao(value)}
                    />
                    <Botao texto="Seleção" />
                </form>
            }

        </section>
    )
}

export default Formulario