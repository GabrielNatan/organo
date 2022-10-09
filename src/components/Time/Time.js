import "./time.css"

function Time({titulo,primaryColor,secondaryColor}){
    return(
        <section style={{background:primaryColor}} key={titulo} className="time">
            <h3 style={{borderColor:secondaryColor}}>{titulo}</h3>
        </section>
    )
}

export default Time