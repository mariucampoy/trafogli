import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleItemFromAPI } from '../../services/firebase'
import ItemDetail from '../ItemDetail/ItemDetail'
import Loader from "../Loader/Loader";

function ItemDetailContainer() {
  const [product, setProduct] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  let id = useParams().id

  useEffect(()=>{
    getSingleItemFromAPI(id).then((itemsDB)=>{
      setProduct(itemsDB)
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => setIsLoading(false));
  },[id])

  if (isLoading)
    return (
        <Loader/>
    )


  return (
    <div>

        <ItemDetail product={product}/>

    </div>
  )
}

export default ItemDetailContainer