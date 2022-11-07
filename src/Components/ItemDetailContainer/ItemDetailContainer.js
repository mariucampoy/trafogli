import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleItemFromAPI } from '../../mockService/mockService'
import ItemDetail from '../ItemDetail/ItemDetail'

function ItemDetailContainer() {
  const [product, setProduct] = useState([])
  let id = useParams().id

  useEffect(()=>{
    getSingleItemFromAPI(id).then((itemsDB)=>{
      setProduct(itemsDB)
    })
  },[id])

  return (
    <div>

        <ItemDetail

        img={product.img}
        title={product.title}
        price={product.price}
        stock={product.stock}

        />

    </div>
  )
}

export default ItemDetailContainer