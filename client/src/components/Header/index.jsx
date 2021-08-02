import React from "react";
import "./style.css";

import logo from "../../img/logo.png"

export default function Header() {
    return (
        <header>
            <section>
                <img className="img-logo" src={logo} alt="Ícone de um avião de papel dourado" />
                <h1 className="logo">LIBRARY ARTICLE</h1>
            </section>
        </header>
    )
}