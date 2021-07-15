import React from "react";
import './signup.css';

export const SignUp = () => {
    return (
        <div className="sign-up">
            <form className="form-signin">
                <label className={'label-login'} htmlFor="inputUsuario">Usuario</label>
                <input type="text" id="inputUsuario" className="form-control" placeholder="Usuario"
                       required autoFocus/>
                <label className={'label-login'} htmlFor="inputNombreApellido">Nombre y Apellido</label>
                <input type="text" id="inputNombreApellido" className="form-control"
                       placeholder="Nombre y Apellido" required/>
                <label className={'label-login'} htmlFor="inputCorreoElectronico">Correo electrónico</label>
                <input type="text" id="inputCorreoElectronico" className="form-control"
                       placeholder="Correo electrónico" required/>
                <label className={'label-login'} htmlFor="inputTelefono">Teléfono</label>
                <input type="text" id="inputTelefono" className="form-control"
                       placeholder="Teléfono" required/>
                <label className={'label-login'} htmlFor="inputDireccionEnvio">Dirección de envió</label>
                <input type="text" id="inputDireccionEnvio" className="form-control"
                       placeholder="Dirección de envió" required/>
                <label className={'label-login'} htmlFor="inputPasword">Contraseña</label>
                <input type="password" id="inputPasword" className="form-control"
                       placeholder="Contraseña" required/>

                <button className="btn btn-lg btn-primary btn-block col-8 mx-auto mt-5" type="submit">CREAR CUENTA
                </button>
                <button className="btn btn-lg btn-light btn-block col-8 mx-auto" type="button">INICIAR SESIÓN
                </button>
            </form>
        </div>
    );
};