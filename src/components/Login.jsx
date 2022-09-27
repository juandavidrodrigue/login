import React from 'react'

import { useState } from 'react'


var usuario = "1044"
var contraseña = "5695"

var prim = usuario.slice(0,1)
var ulti = contraseña.slice(3,4)

var total = Number(prim) + Number(ulti)


const Login = () => {

    const [Milogin, setMilogin] = useState("false");
    const [user, setUsu] = useState("");
    const [password, setPassword] = useState("");
    const [captcha, setCaptcha] = useState("");
  
    function inciarSesion(e){
        e.preventDefault();

    if([user, password].includes("")){
        alert("completar los datos faltantes");
        }else{
            if (user == usuario && password == contraseña && captcha == total){
                setMilogin("true");
                alert("Sesion Iniciada")


            }else{
                setMilogin("false");
                alert("error al iniciar sesion");

            }
        }       
    }

  return (
    <div className="Login">
        

        <form id="form_login">
        <h4>Bienvenido al sistema de ubicacion para zonas publicas wifi</h4>
          <p>digite su usuario</p>
        <div className='but'>
          <input className="controls" type="text" name="user" id="user" onChange={ (e) => setUsu(e.target.value)}/>
        </div>

          <p>digite su contraseña</p>
        <div className='but'>
          <input className="controls" type="text" name="password" id="password" onChange={ (e) => setPassword(e.target.value)}/>
        </div>
        <p> seguridad captcha</p>
        <p>Realice la sumatoria del numero { user.slice(0,1) } con el numero { password.slice(3,4) }</p>

        <div className='but'>
        <input className="controls" type="text" name="captcha" id="captch" onChange={ (e) => setCaptcha(e.target.value)}/>
        </div>
        

        <div className='but'>
          <input className="botons" type="submit" value="iniciar sesion" onClick={ inciarSesion }/>
        </div>

        </form>

      </div>
  )
}

export default Login