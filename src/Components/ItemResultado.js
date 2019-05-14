import React, { Component } from 'react';
import '../styles/ItemResultado.css';
import { Moment } from 'react-moment'; 

class ItemResultado extends React.Component {
    render (){
        var resultado = this.props.resultado;

        return (
            <li className="resultado">
                <h3>
                    <a href="{resultado.html_url" target="blank">
                        {resultado.name}
                    </a> {resultado.private && <span className="resultado-privado">Privado</span>}
                </h3>
                <div className="resultado-stats">
                    <span className="resultado-stat">
                        {resultado.language}
                    </span>
                    <span className="resultado-stat">
                        <i className="fa fa-code-fork"/> {resultado.forks_count}
                    </span>
                    <span className="resultado-stat">
                        <i className="fa fa-star"/> {resultado.stargazers_count}
                    </span>
                    <span className="resultado-stat">
                        <i className="fa fa-eye"/> {resultado.watchers_count}
                    </span>
                </div>
                <p className="resultado-info">
                    {resultado.fork && <span className=" resultado-fork">
                        <i className="fa fa-code-fork"/> forkeado
                    </span>}
                </p>
                <p className ="resultado-descripcion"> { resultado.description } </p>
                <p className="resultado-actualizado"> Actualizado {resultado.updated_at}</p>
                
            </li>
        )
    }
}

export default ItemResultado;