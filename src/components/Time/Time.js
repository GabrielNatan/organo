import "./time.css"

function Time({titulo}){
    return(
        <section key={titulo} className="time">
            <h3>{titulo}</h3>
        </section>
    )
}

export default Time