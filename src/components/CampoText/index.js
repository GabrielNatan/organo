import "./campoTexto.css"
function CampoTexto({label,placeholder,obrigatorio, change,value}){

    function aoDigitar(event){
        change(event.target.value)
    }
    return(
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input 
                value={value}
                onChange={aoDigitar}
                required={obrigatorio} 
                placeholder={placeholder}
            />
        </div>
    )
}

export default CampoTexto