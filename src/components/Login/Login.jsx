import React from 'react'
import axios from 'axios';
import swal from '@sweetalert/with-react';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const regExEmail = /\S+@\S+\.\S+/;;
        console.log(email, password);
        if (email === "" || password === "") {
            swal(<h2>Los campos no pueden estar vacios</h2>);
            return
        }
        if (email !== "" && !regExEmail.test(email)) {
            swal(<h2>Debes escribir tu correo electronico</h2>);
            return
        }
        if (email !== "challenge@alkemy.org" || password !== "react") {
            swal(<h2>Credenciales invalidas</h2>);
            return
        }
        console.log("Ok estamos listos para enviar la información");
        axios.post("http://challenge-react.alkemy.org", {email, password})
        .then(res => {
            swal(<h2>Has ingresa exitosamente</h2>)
            const tokenRecibido = res.data.token;
            localStorage.setItem("token", tokenRecibido);
            history.push("/list");
        })
    }

  return (
    <>
        <h2>Formulario de login</h2>
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
    </>
  )
}

export default Login;