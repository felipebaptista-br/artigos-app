import React from "react";
import { useHistory } from "react-router";
import "./style.css";

import logo from "../../img/logo.png"

export default function Welcome() {
    const param = useHistory();

    function getStarted() {
        param.push("/dashboard");
    }

    return (
        <main id="main_Welcome">
            <div id="content_Welcome">
                <section>
                    <img src={logo} alt="Ícone de um avião de papel dourado" />
                    <h2 className="logo-welcome">LIBRARY ARTICLE</h2>
                </section>
                <h1 className="hello-welcome">HELLO!</h1>
                <section>
                    <p>Bem vindo ao Library Article!</p>
                    <p>Edite seus artigos e adicione imagens com apenas um clique.</p>
                </section>
                <button onClick={getStarted}>GET STARTED!</button>
            </div>
        </main>
    )
}