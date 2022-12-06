import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { getItemsFromAPI, getItemsFromAPIByCategory } from '../../services/firebase'
import { useParams } from "react-router-dom"
import CarouselBoostrap from './Carousel'
import CategoryItem from './CategoryItem'
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
    <div >

      <CarouselBoostrap />

      <div className='container-categoryItem'>
        <CategoryItem link="/category/Edredon" title="Edredón" text="Edredon" img="/img/category1.webp"></CategoryItem>
        <CategoryItem link="/category/Sabanas" title="Sábanas" text="Sábanas" img="/img/category1.webp"></CategoryItem>
        <CategoryItem link="/category/Fundas" title="Funda Almohada" text="fundas" img="/img/category1.webp"></CategoryItem>
      </div>

      <div className='container-categoryItem'>
        <CategoryItem link="/category/Mantas" title="Mantas" text="Mantas" img="/img/category1.webp"></CategoryItem>
        <CategoryItem link="/category/Kimonos" title="Kimonos" text="Kimonos" img="/img/category1.webp"></CategoryItem>
      </div>

      <img src="/img/img-home.webp" width="100%"></img>

      <ItemList productList={productList} />

    </div>
  )
}

export default ItemListContainer