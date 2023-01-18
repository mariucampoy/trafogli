import React, { useEffect, useState, useContext } from 'react'
import cartContext from '../../Context/CartContext'
import { Link } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import { getItemsFromAPI } from '../../services/firebase'
import "./itemListContainer.css"
import ItemListAll from '../ItemList/ItemListAll'


function ItemListContainer() {
  const [productList, setProductList] = useState([])
  const [filteredProductList, setFilteredProductList] = useState([])
  const { filteredSize, filtrarMedida, filtrarColor, filteredColor, filteredCategory, filtrarCategoria } = useContext(cartContext)

  let defaultFilters = {
    category: filteredCategory,
    medida: filteredSize,
    color: filteredColor
  }


  useEffect ( () => {

    getItemsFromAPI().then((itemsDB) => {
      setFilteredProductList(itemsDB)
    })
  },[])




  useEffect(() => {

    getItemsFromAPI().then((itemsDB) => {
      setProductList(itemsDB)

    })

    function buildFilter(defaultFilters) {
      let query = {};

      for (let keys in defaultFilters) {
        if (defaultFilters[keys].constructor === Array && defaultFilters[keys].length > 0) {
          query[keys] = defaultFilters[keys];
        }
      }
      return query;
    }

    let query = buildFilter(defaultFilters)

    function filterData(productList, query) {

      const filteredData = productList.filter((item) => {
        if (JSON.stringify(query) === '{}') {
          console.log('test')
          setFilteredProductList(productList);
        } else {
        for (let key in query) {

          if (!item[key].includes(query[key][0])) {

            return false;
          }
        }
        return true;}
      });

      setFilteredProductList(filteredData);

    }

    filterData(productList, query)

  }, [filteredSize, filteredColor, filteredCategory])

  return (

    <div className='container-item-list-container'>
      <div className='container-filter-items'>
        <div className='filter'>

          <div><p>{filteredCategory}</p><button>X</button></div>
          <div><p>{filteredSize}</p> <button>X</button></div>
          <div><p>{filteredColor}</p> <button>X</button></div>
          <h2>Categorias</h2>

          <button onClick={() => filtrarCategoria('')}>VER TODOS</button>
          <button onClick={() => filtrarCategoria('Edredon')}>EDREDÓN</button>
          <button onClick={() => filtrarCategoria('Sabanas')}>SABANAS</button>
          <button onClick={() => filtrarCategoria('Fundas')}>FUNDAS</button>
          <button onClick={() => filtrarCategoria('Mantas')}>MANTAS</button>
          <button onClick={() => filtrarCategoria('Kimonos')}>KIMONOS</button>


        </div>

        {/* <div className='filter'>
          <h2>Filtros</h2>
          <h4>Color</h4>

          <button onClick={() => filtrarColor('blanco')}>Blanco</button>
          <button onClick={() => filtrarColor('gris')}>Gris</button>

          <h4>Medidas</h4>
          <button onClick={() => filtrarMedida('queen')}>Queen</button>
          <button onClick={() => filtrarMedida('king')}>King</button>
          <button onClick={() => filtrarMedida('superking')}>Super King</button>

        </div> */}

      </div>

      { filteredCategory == "" ? (


      <div>

      <ItemListAll productList={filteredProductList} />

    </div>
      ):(

      <div>
        <ItemList productList={filteredProductList} />

    </div>
      )



      }


    </div>
  )
}

export default ItemListContainer