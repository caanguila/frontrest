import React from 'react';
import './order.css';
import {OrderDish} from "../Dish";

export const Order = () => {
    return (
        <>
            <div className={"row"}>
                <label className={"col-md-8 mt-3 font-weight-bold"}>Detalle</label>
            </div>
            <div className={"mb-4"}>
                <OrderDish/>
                <OrderDish/>
            </div>
            <div className={"row mb-4"}>
                <div className={"col-md-8"}>Total: <b>$660</b></div>
            </div>
            <div className={"row mb-5"}>
                <div className="col-4 col-md-2 form-group">
                    <label className={"font-weight-bold mb-2"}>Forma de Pago</label>
                    <select className={"form-control"}>
                        <option>Efectivo</option>
                    </select>
                </div>
            </div>
            <div className={"row mb-3"}>
                <div className="col-8 col-md-8 form-group">
                    <label className={"font-weight-bold mb-2"}>Dirección</label>
                    <p>Ejemplo de dirección ipsem laurem </p>
                </div>
            </div>
            <button className="btn btn-lg btn-primary btn-block col-md-2 col-5 mx-auto mb-2 " type="submit">CONFIRMAR
                PEDIDO
            </button>
        </>
    );
};