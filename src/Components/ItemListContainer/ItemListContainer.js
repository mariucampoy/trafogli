import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { getItemsFromAPI, getItemsFromAPIByCategory } from '../../services/firebase'
import { useParams } from "react-router-dom"


function ItemListContainer() {
  const [productList, setProductList] = useState([])
  let categoryid = useParams().categoryid

  useEffect(() => {
    if (categoryid) {
      getItemsFromAPIByCategory(categoryid).then((itemsDB) => {
        setProductList(itemsDB)
      })
    }
    else {
      getItemsFromAPI().then((itemsDB) => {
        setProductList(itemsDB)
      })
    }
  }, [categoryid])

  return (
    <div >


      <ItemList productList={productList} />

    </div>
  )
}

export default ItemListContainer