import "./listaSuspensa.css"

function ListaSuspensa({label,data,obrigatorio}){
    return(
        <div className="lista-suspensa">
            <label>{label}</label>
            <select required={obrigatorio}>
                {data.map(each=>{
                    return(
                        <option key={each}>
                            {each}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa