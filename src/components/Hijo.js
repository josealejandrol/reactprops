import React,{Component} from 'react';

export default class Hijo extends Component {

    render() {
        return (
            <div className="class-name">
                <p>Bienvenido {this.props.nombre} {this.props.proyecto}</p>
            </div>
        );
    }
}