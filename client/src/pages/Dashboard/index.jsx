import React, { useEffect, useState } from "react";
import api from "../../services/api";
import "./style.css";

import Header from "../../components/Header";
import Item from "../../components/Items";
import { useGlobalState } from "../../hooks/globalState";

export default function Dashboard() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        api.get("/list").then((response) => {
            setItems(response.data);
        });
    }, []);

    return (
        <main id="main_Dashboard">
            <Header />
            <div id="content_Dashboard">
                {items.map((item) => {
                    return (
                        <Item item={item} />
                    )
                })}
            </div>
        </main>
    )
}