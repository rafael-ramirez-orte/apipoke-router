import React from "react";
import './estilo-cards.css'
import { Conexion } from "../conexion/conexion";

export const InfoPokemon = ({url}) => {
    const estado = Conexion(url);
    const {cargando,dato}=estado

    return(
        <div>
            {
            cargando
            ?
            <h1>cargando</h1>
            :
            <div className="card">

                <div className="titulo-card">
                    <h5 className="card-title">{dato.id}</h5>
                </div>

                <div className="imagen">
                <img src={dato.sprites.front_default} alt=""/>
                </div>

                <div className="nombre-pokemon">
                <p class="texto">{dato.forms[0].name}</p>
                </div>
                
                <div className="habilidades">
                    
                </div>
            </div>
            }
        </div>
    )
}
