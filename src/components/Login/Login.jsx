import React from 'react'
import axios from 'axios';

const Login = () => {

    const handleSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const regExEmail = /\S+@\S+\.\S+/;;
        console.log(email, password);
        if (email === "" || password === "") {
            console.log("l")
            return
        }
        if (email !== "" && !regExEmail.test(email)) {
            console.log("de")
            return
        }
        if (email !== "challenge@alkemy.org" || password !== "react") {
            console.log("Credenciales invalidas");
            return
        }
        console.log("Ok estamos listos para enviar la información");
        axios.post("http://challenge-react.alkemy.org", {email, password})
        .then(res => {
            console.log(res.data);
        })
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Correo electronico:</span><br />
                <input type={'email'} name={'email'} />
            </label>
            <br />
            <label>
                <span>Contraseña:</span><br />
                <input type={'password'} name={'password'}/>
            </label>
            <br />
            <button type='submit'>Ingresar</button>
        </form>
    </div>
  )
}

export default Login;