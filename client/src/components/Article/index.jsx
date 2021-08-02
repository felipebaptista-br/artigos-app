import React, { useState, useEffect } from "react";
import { IoMdFlashlight } from "react-icons/io";
import { AiOutlineZoomIn, AiOutlineZoomOut } from "react-icons/ai";
import api from "../../services/api";

import "./style.css"

export default function Article(data) {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState();
    const [zoom, setZoom] = useState("100%");
    const [dark, setDark] = useState(false);
    const id = data.data._id;
    console.log(id);

    async function handleDark() {
        if (dark === false) {
            setDark(true);
        } else {
            setDark(false);
        }
    }

    async function IncreaseZoom() {
        switch (zoom) {
            case "100%":
                setZoom("110%")
                break;
            case "110%":
                setZoom("120%")
                break;
            default:
                break;
        }
        document.body.style.zoom = zoom;
    }

    async function decreaseZoom() {
        switch (zoom) {
            case "120%":
                setZoom("110%")
                break;
            case "110%":
                setZoom("100%")
                break;
            default:
                break;
        }
        document.body.style.zoom = zoom;
    }

    async function IncreaseZoom() {
        switch (zoom) {
            case "100%":
                setZoom("110%")
                break;
            case "110%":
                setZoom("120%")
                break;
            default:
                break;
        }
        document.body.style.zoom = zoom;
    }

    useEffect(() => {
        api.get("/list").then((response) => {
            setItems(response.data);
            console.log(response.data);
        });
    }, []);

    return (
        <main id="main_Article" className={dark === true ? "dark-background" : ""}>
            <div id="article" className={dark === true ? "dark-article" : "sure-article"}>
                <section className="title-data space-data">{data.data.title}</section>
                <section className="description-data space-data">{data.data.description}</section>
                <section className="content-data space-data">{data.data.content}</section>
            </div>
            <div id="icons_Article">
                <IoMdFlashlight
                    onClick={handleDark}
                    size={45}
                    className={dark == true ? "icon dark-icon" : "icon sure-icon"}
                />
                <AiOutlineZoomIn
                    onClick={IncreaseZoom}
                    size={45}
                    className={dark == true ? "icon dark-icon" : "icon sure-icon"}
                />
                <AiOutlineZoomOut
                    onClick={decreaseZoom}
                    size={45}
                    className={dark == true ? "icon dark-icon" : "icon sure-icon"}
                />
            </div>
        </main>
    )
}