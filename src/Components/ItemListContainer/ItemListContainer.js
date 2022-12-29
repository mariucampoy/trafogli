import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import { getItemsFromAPI, getItemsFromAPIByCategory, getItemsFromAPIByColor, getItemsFromAPIBySizes } from '../../services/firebase'
import { useParams } from "react-router-dom"
import "./itemListContainer.css"


function ItemListContainer() {
  const [productList, setProductList] = useState([])

  let categoryid = useParams().categoryid
  let colorid = useParams().colorid
  let medidaid = useParams().medidaid

  useEffect(() => {
    if (categoryid) {
      getItemsFromAPIByCategory(categoryid).then((itemsDB) => {
        setProductList(itemsDB)
      })
    }
    else if (colorid) {
          getItemsFromAPIByColor(colorid).then((itemsDB) => {
            setProductList(itemsDB)
          })
        }
    else if (medidaid) {
          getItemsFromAPIBySizes(medidaid).then((itemsDB) => {
            setProductList(itemsDB)
          })
        }
    else {
      getItemsFromAPI().then((itemsDB) => {
        setProductList(itemsDB)
      })
    }

  }, [categoryid, colorid, medidaid])



  return (

    <div className='container-item-list-container'>


      <div className='container-filter-items'>
      <div className='filter'>
      <h2>Categorias</h2>
      <Link className='a-large' to='/productos'> <b> TODAS </b></Link>
      <Link className='a-large' to='/category/Edredon'>EDREDÓN</Link>
      <Link className='a-large' to='/category/Sabanas'>SÁBANAS</Link>
      <Link className='a-large' to='/category/Fundas'>FUNDA ALMOHADA</Link>
      <Link className='a-large' to='/category/Mantas'>MANTAS</Link>
      <Link className='a-large' to='/category/Kimonos'>KIMONOS</Link>
      </div>

      <div className='filter'>
        <h2>Filtros</h2>
        <h4>Color</h4>
        <Link className='a-large' to='/color/blanco'>Blanco</Link>
        <Link className='a-large' to='/color/gris'>Gris</Link>
        <h4>Medidas</h4>
        <Link className='a-large' to='/medida/queen'>Queen</Link>
        <Link className='a-large' to='/medida/king'>King</Link>
        <Link className='a-large' to='/medida/superking'>Super King</Link>
      </div>

      </div>

      <div>
      <ItemList productList={productList} />
      </div>

    </div>
  )
}

export default ItemListContainer