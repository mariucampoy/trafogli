import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import { getItemsFromAPI, getItemsFromAPIByCategory } from '../../services/firebase'
import { useParams } from "react-router-dom"
import "./itemListContainer.css"


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
    <div className='container-item-list-container'>

      <div className='container-filter-items'>
      <div className='filter-category'>
      <h2>Categorias</h2>
      <Link className='a-large' to='/category/Edredon'>EDREDÓN</Link>
      <Link className='a-large' to='/category/Sabanas'>SÁBANAS</Link>
      <Link className='a-large' to='/category/Fundas'>FUNDA ALMOHADA</Link>
      <Link className='a-large' to='/category/Mantas'>MANTAS</Link>
      <Link className='a-large' to='/category/Kimonos'>KIMONOS</Link>
      </div>

      <div>
        <h2>Filtros</h2>
        <h4>Color</h4>
        <h4>Medidas</h4>
      </div>

      </div>

      <div>
      <ItemList productList={productList} />
      </div>

    </div>
  )
}

export default ItemListContainer