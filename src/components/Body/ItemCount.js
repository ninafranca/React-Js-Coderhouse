import React, {useState} from 'react';
import './_ItemCount.scss';

const ItemCount = ({stock, onAdd}) => {
    const [quantity, setQuantity] = useState(1);
    stock = 5;
    const handlerPlus = () => {
      setQuantity((quantity === stock) ? stock : quantity + 1 )
    };
    const handlerMinus = () =>{
      setQuantity((quantity >= 2) ? quantity - 1 : quantity)
    }

    onAdd = () => {
        alert("Producto agregado exitosamente");
    }

    return (
            <div className="card card-main">
                <div className="card-body">
                    <div className="card card-content">
                        <p onClick={handlerMinus} className="plus-minus">-</p>
                        <p id="counter-value">{quantity}</p>
                        <p onClick={handlerPlus} className="plus-minus">+</p>
                    </div>
                    <button className="btn btn-primary" onClick={onAdd}>Comprar</button>
                </div>
            </div>
    )
}



/*
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
*/

export default ItemCount;
