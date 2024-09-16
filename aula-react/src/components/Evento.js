import Button from "./Button";

function Evento() {

    function meuEvento() {
        console.log("Ativando Primeiro Evento! ")
    }

    function segundoEvento() {
        console.log("Ativado Segundo Evento! ")
    }

    return (
        <div>
            <p>Click para disparar um evento</p>
            <Button event={meuEvento} text="Primeiro Evento" />
            <Button event={segundoEvento} text="Segundo Evento Evento" />
        </div>
    )
}

export default Evento;