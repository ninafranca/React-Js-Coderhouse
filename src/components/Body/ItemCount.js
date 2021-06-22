import React, {Component} from 'react';
import './_ItemCount.scss';

class ItemCount extends Component  {
    constructor () {
        super();
        this.state = {
            counter: 1,
            stock: 10
        }
    }

    handlerPlus = () => {
        if(this.state.counter === this.state.stock) {
            this.setState({
                counter: this.state.stock
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
