import React, {Component} from 'react';
import './ItemCount.css';

class ItemCount extends Component  {
    constructor () {
        super();
        this.state = {
            counter: 1
        }
    }

    handlerPlus = () => {
        if(this.state.counter === 5) {
            this.setState({
                counter: 5
            });
        } else {
            this.setState({counter: this.state.counter + 1})
        }
    }

    handlerMinus = () => {
        if(this.state.counter === 1){
            this.setState({
                counter: 1
            });
          } else {
            this.setState({
                counter: this.state.counter - 1
            });
          }
    }

    onAdd = () => {
        alert("Producto agregado exitosamente");
    }

    render() {
        return (
            <div className="card card-main">
                <div className="card-body">
                    <h5 className="card-title">Botas</h5>
                    <p className="card-text">Botas altas negras</p>
                    <div className="card card-content">
                        <p onClick={this.handlerMinus} className="plus-minus">-</p>
                        <p id="counter-value">{this.state.counter}</p>
                        <p onClick={this.handlerPlus} className="plus-minus">+</p>
                    </div>
                    <button className="btn btn-primary" onClick={this.onAdd}>Comprar</button>
                </div>
            </div>
        )
    }
}

export default ItemCount;
