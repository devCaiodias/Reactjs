import { useState } from "react";

function Condicional() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault()

        setUserEmail(email)
        console.log(userEmail)
    }

    function limparEmail() {
        setUserEmail('')
    }

    return (
        <div>

            <h2>Cadastre o seu e-mail</h2>
            <form>
                <input type="email" name="email" id="email" placeholder="Dijite o seu email" onChange={(e) => setEmail(e.target.value)}/>
                <button type="submit" onClick={enviarEmail}>Enviar email</button>
            </form>
            {userEmail && (
                <div>
                    <p>O email do Usuario é: {userEmail}</p>
                    <button onClick={limparEmail}>Limpar Email!</button>
                </div>
            )}
        </div>

    )
}

export default Condicional;