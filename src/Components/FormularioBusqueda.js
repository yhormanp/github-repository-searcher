import React, { Component } from 'react';
import '../styles/FormularioBusqueda.css';


class FormularioBusqueda extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            usuario: this.props.usuario,
            incluirMiembro: this.props.incluirMiembro
        }

    }

    handleUsuario(ev){
        this.setState({usuario: ev.target.value});
    }

    handleIncluirMiembro(ev){
        this.setState({incluirMiembro: ev.target.value});
    }

    handleSubmit(ev){
        ev.preventDefault();
        this.props.onBuscar({
            usuario: this.state.usuario,
            incluirMiembro: this.state.incluirMiembro
        })
    }

    render () {
        return (
            <form className="formulario-busqueda" onSubmit={this.handleSubmit.bind(this)}>
                <input 
                className="input-usuario" 
                type="text" 
                value={this.state.usuario}
                onChange= {this.handleUsuario.bind(this)}
                ></input>
                <button className="formulario-submit" type="submit"> Buscar</button>
                <br></br>
                <label className="check-miembro">
                    <input 
                    type ="checkbox" 
                    checked={this.state.incluirMiembro}
                    onChange= {this.handleIncluirMiembro.bind(this)}
                    /> Incluir repositorios donde el usuario es miembro
                </label>
            </form>
        )
    }
}

export default FormularioBusqueda;