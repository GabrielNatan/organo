import "./listaSuspensa.css"

function ListaSuspensa({label,data}){
    return(
        <div className="lista-suspensa">
            <label>{label}</label>
            <select>
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