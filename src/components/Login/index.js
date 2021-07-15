import './login.css';

export const Login = () => {
    return (
        <div className="login">
            <form className="form-signin">
                <label className={'label-login'} htmlFor="inputEmail">Usuario o correo electrónico</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Correo Electrónico"
                       required autoFocus/>
                <label className={'label-login'} htmlFor="inputPassword">Contrasena</label>
                <input type="password" id="inputPassword" className="form-control"
                       placeholder="Contraseña" required/>

                <button className="btn btn-lg btn-primary btn-block col-8 mx-auto mt-5" type="submit">INICIAR
                    SESIÓN
                </button>
                <button className="btn btn-lg btn-light btn-block col-8 mx-auto" type="button">REGISTRARSE
                </button>
            </form>
        </div>
    );
};