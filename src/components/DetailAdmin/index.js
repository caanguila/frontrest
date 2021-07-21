import React from 'react';
import './detailAdmin.css';
import {ShowDish} from "../Dish";

export const DetailAdmin = () => {
    return (
        <>
            <section className={"row"}>
                <label className={"col-md-8 mt-3 font-weight-bold"}>Detalle</label>
            </section>
            <section className={"mb-4"}>
                <ShowDish/>
                <ShowDish/>
            </section>
            <section className={"row mb-4"}>
                <div className={"col-md-8"}>Total: <b>$660</b></div>
            </section>
            <section className={"mb-4"}>
                <label className={""}>Estado</label>
                <div className={"col-md-8"}>
                    <table className={"table "}>
                        <tr><span className="badge badge-pill badge-danger btn-overlay ">NUEVO</span></tr>
                        <tr><span className="badge badge-pill badge-orange btn-overlay ">CONFIRMADO</span></tr>
                        <tr><span className="badge badge-pill badge-warning">PREPARANDO</span></tr>
                        <tr><span className="badge badge-pill badge-success btn-overlay ">ENVIANDO</span></tr>
                        <tr><span className="badge badge-pill badge-secondary btn-overlay ">ENTREGADO</span></tr>
                    </table>
                </div>
            </section>
            <section className={"row mb-4"}>
                <div className="col-4 col-md-2 form-group">
                    <label className={"font-weight-bold mb-2"}>Forma de Pago</label>
                    <select className={"form-control"}>
                        <option>Efectivo</option>
                    </select>
                </div>
            </section>
            <section className={"row mb-3"}>
                <div className="col-8 col-md-8 form-group">
                    <label className={"font-weight-bold mb-2"}>Dirección</label>
                    <p>Ejemplo de dirección ipsem laurem </p>
                </div>
            </section>
            <section className={"mb-4"}>
                <label className={""}>Usuario</label>
                <div className={"row"}>
                    <div className={"col-6 col-md-5"}>
                        <b>Freddie Mercury</b>
                    </div>
                    <div className={"col-6 col-md-6"}>
                        queen_freddie
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col-6 col-md-5"}>
                        freddiemercury@gmail.com
                    </div>
                    <div className={"col-6 col-md-6"}>
                        +44 7712345678
                    </div>
                </div>
            </section>
            <section className={"row"}>
                <div className={"col-5 col-md-2"}>
                    <button className="btn btn-lg btn-primary btn-block "
                            type="submit">LLAMAR AL TELÉFONO
                    </button>
                </div>
                <div className={"col-5 col-md-2"}>
                    <button className="btn btn-lg btn-primary btn-block   "
                            type="submit">CANCELAR ORDEN
                    </button>
                </div>
            </section>
        </>
    );
};