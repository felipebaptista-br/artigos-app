import React from "react";
import { useHistory } from "react-router";
import { AiFillEdit } from "react-icons/ai"
import "./style.css";

export default function Item({ item }) {
    const param = useHistory();

    async function startedStudio(item) {
        param.push(
            {
                pathname: `/studio`,
                state: item
            }
        )
    }

    async function startedReading(item) {
        param.push(
            {
                pathname: `/reading`,
                state: item
            }
        )
    }

    return (
        <div className="main-card">
            <section className="img-card">
                <AiFillEdit size={25} className="icon-decoration" onClick={() => { startedStudio(item) }} />
            </section>
            <section className="content-card" onClick={() => { startedReading(item) }}>
                <section className="text-card">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </section>
                <button>Ler</button>
            </section>
        </div>

    )
}