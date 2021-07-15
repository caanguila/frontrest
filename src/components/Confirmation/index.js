import './confirmation.css';
import imgSuccess from "./../../img/sample.PNG";

export const Confirmation = () => {
    return (
        <div className="sign-up">
            <form className="form-signin">
                <img src={imgSuccess} alt={"Exito"}/>
                <div className={"text-center font-weight-bolder"}>¡Recibimos tu pedido!</div>
                <p className={"text-center"}>Carlos, gracias por pedir a Delilah. Puedes seguir tu pedido para saber
                    dónde está.</p>
                <button className="btn btn-lg btn-primary btn-block col-8 mx-auto mt-5" type="submit">SEGUIR PEDIDO
                </button>
            </form>
        </div>
    );
};