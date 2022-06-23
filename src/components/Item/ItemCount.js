import { useState } from "react";


const ItemCount = ({ stock, initial,  onAdd }) => {
    
    const [Count, setCount] = useState (Number(initial));
        
    const increment = () => {
        if (Count < stock) setCount(Count+1);
    };
            
    const decrement = () => {
        if (Count > 0)setCount(Count-1);
    };


    return (
        <div className="itemCount ">
            <div className="countContainer">
                <div>
                    <button type="button" className="btn btn-outline-warning text-white" onClick={decrement}>-</button>
                </div>
                <div className="px-5 count">
                    <h5 className="text-white">{Count}</h5>
                </div>
                <div>
                    <button type="button" className="btn btn-outline-warning text-white" onClick={increment}>+</button>
                </div>
            </div>
            <div>
                { Count === 0 ? <button type="button" className="btn btn-warning text-black" disabled>Agregar al Carrito</button> :
                    <button type="button" className="btn btn-outline-warning text-black" onClick={(e) => {e.stopPropagation();onAdd(Count)}}>Agregar al Carrito</button>
                }
            </div>
        </div>
    );
}

export default ItemCount;
