import "./listaSuspensa.css"

function ListaSuspensa({label,data,obrigatorio,value,change}){
    return(
        <div className="lista-suspensa">
            <label>{label}</label>
            <select onChange={(e)=>change(e.target.value)} value={value} required={obrigatorio}>
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