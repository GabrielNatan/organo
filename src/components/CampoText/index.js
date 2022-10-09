import "./campoTexto.css"
function CampoTexto({label,placeholder,obrigatorio}){
    return(
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input 
                required={obrigatorio} 
                placeholder={placeholder}
            />
        </div>
    )
}

export default CampoTexto