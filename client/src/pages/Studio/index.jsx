import React from "react";
import "./style.css";

import Header from "../../components/Header";
import Article from "../../components/Article";

export default function Studio(item) {
    const data = item.location.state;

    return (
        <main id="main_Reading">
            <Header />
            <Article data={data} />
        </main>
    )
}