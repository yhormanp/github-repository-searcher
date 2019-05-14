import React, { Component } from 'react';
import ItemResultado  from './ItemResultado';


class Resultados extends React.Component{
    render (){
        return (
            <ul className="resultados-lista">
                {this.props.resultados.map( function ( resultado) { 
                    return <ItemResultado key={resultado.id} resultado ={resultado}></ItemResultado>
                    })
                }
            </ul>
        )
    }
}


export default Resultados;