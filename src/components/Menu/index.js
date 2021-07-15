import React from "react";
import './menu.css';
import {AddDish} from "../Dish";

export const Menu = () => {
    return (
        <>
            <div className={"row"}>
                <div className={"col-md-8 mt-3 font-weight-bold"}>Nuestros platos</div>
            </div>
            <AddDish></AddDish>
            <AddDish></AddDish>
            <AddDish></AddDish>
            <AddDish></AddDish>
            <AddDish></AddDish>
        </>
    );
};