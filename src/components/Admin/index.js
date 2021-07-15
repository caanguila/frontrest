import './admin.css';

export const Admin = () => {
    return (
        <>
            <div className={"row mt-2 "}>
                <div className={"table-responsive"}>
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col">ESTADO</th>
                            <th scope="col">HORA</th>
                            <th scope="col">NÚMERO</th>
                            <th scope="col">DESCRIPCIÓN</th>
                            <th scope="col">PAGO</th>
                            <th scope="col">USUARIO</th>
                            <th scope="col">DIRECCION</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row"><span className="badge badge-pill badge-danger">NUEVO</span></th>
                            <td>12:30PM</td>
                            <td>#7</td>
                            <td>1X HamClas 1xSandVegg</td>
                            <td><i className="bi bi-cash"></i> $660</td>
                            <td>Otto</td>
                            <td>Calle falsa 123</td>
                        </tr>
                        <tr>
                            <th scope="row"><span className="badge badge-pill badge-warning">PREPARANDO</span></th>
                            <td>12:30PM</td>
                            <td>#77</td>
                            <td>1X HamClas 1xSandVegg</td>
                            <td><i className="bi bi-credit-card"></i> $660</td>
                            <td>Thornton</td>
                            <td>Calle falsa 123</td>
                        </tr>
                        <tr>
                            <th scope="row"><span className="badge badge-pill badge-success">ENVIANDO</span></th>
                            <td>12:30PM</td>
                            <td>#5</td>
                            <td>1X HamClas 1xSandVegg</td>
                            <td><i className="bi bi-credit-card"></i> $660</td>
                            <td>the Bird</td>
                            <td>Calle falsa 123</td>
                        </tr>
                        <tr>
                            <th scope="row"><span className="badge badge-pill badge-secondary">ENTREGADO</span></th>
                            <td>12:30PM</td>
                            <td>#7</td>
                            <td>1X HamClas 1xSandVegg</td>
                            <td><i className="bi bi-credit-card"></i> $660</td>
                            <td>the Bird</td>
                            <td>Calle falsa 123</td>
                        </tr>
                        <tr>
                            <th scope="row"><span className="badge badge-pill badge-orange">CONFIRMADO</span></th>
                            <td>12:30PM</td>
                            <td>#7</td>
                            <td>1X HamClas 1xSandVegg</td>
                            <td><i className="bi bi-credit-card"></i> $660</td>
                            <td>the Bird</td>
                            <td>Calle falsa 123</td>
                        </tr>
                        <tr>
                            <th scope="row"><span className="badge badge-pill badge-purple">CANCELADO</span></th>
                            <td>12:30PM</td>
                            <td>#7</td>
                            <td>1X HamClas 1xSandVegg</td>
                            <td><i className="bi bi-credit-card"></i> $660</td>
                            <td>the Bird</td>
                            <td>Calle falsa 123</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};