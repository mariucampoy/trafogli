import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { getItemsFromAPI, getItemsFromAPIByCategory } from '../../services/firebase'
import {useParams} from "react-router-dom"
import CarouselBoostrap from './Carousel'
import CategoryItem from './CategoryItem'
import "./itemListContainer.css"


function ItemListContainer() {
  const [productList, setProductList] = useState([])
  let categoryid = useParams().categoryid

  useEffect(()=>{
    if(categoryid){
      getItemsFromAPIByCategory(categoryid).then((itemsDB)=>{
        setProductList(itemsDB)
      })
    }
    else{
    getItemsFromAPI().then((itemsDB)=>{
      setProductList(itemsDB)
    })
  }
  },[categoryid])

  return (
    <div >

      <CarouselBoostrap></CarouselBoostrap>

      <div className='container-categoryItem'>

      <CategoryItem title="Edredon" text="edredon" img="/img/category1.webp"></CategoryItem>
      <CategoryItem title="Sabanas" text="sabanas" img="/img/category1.webp"></CategoryItem>
      <CategoryItem title="Fundas" text="fundas" img="/img/category1.webp"></CategoryItem>

      </div>

      <div className='container-categoryItem'>

     <CategoryItem title="Edredon" text="edredon" img="/img/category1.webp"></CategoryItem>
     <CategoryItem title="Sabanas" text="sabanas" img="/img/category1.webp"></CategoryItem>


</div>

      <ItemList productList={productList}/>

   </div>
  )
}

export default ItemListContainer