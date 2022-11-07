import React, { useState } from 'react'
import "./itemDetail.css"

function ItemDetail(props) {


    const [count, setCount] = useState(1);

    function handleAdd() {
        if (count < props.stock)
            setCount(count + 1);
    }

    function handleSubstract() {
        if (count > 1)
            setCount(count - 1)
    }

    return (
        <div className='itemDetail'>

            <div className='imgDetail'>

                <img src={props.img}></img>

            </div>

            <div className='textDetail'>

                <p>{props.title}</p>
                <p>${props.price}</p>


                <div >
                    <div className='itemCount'>
                        <button onClick={handleSubstract}> - </button>
                        <p>{count}</p>
                        <button onClick={handleAdd}> + </button>
                    </div>
                    <div>
                        <button className='addCart'>Agregar al carrito</button>
                    </div>
                </div>


            </div>

        </div>

    )
}

export default ItemDetail