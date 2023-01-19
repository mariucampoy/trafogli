import React, { useEffect, useState, useContext } from "react";
import cartContext from "../../Context/CartContext";
import ItemList from "../ItemList/ItemList";
import { getItemsFromAPI } from "../../services/firebase";
import "./itemListContainer.css";
import ItemListAll from "../ItemList/ItemListAll";

function ItemListContainer() {
  
  const [filteredProductList, setFilteredProductList] = useState([]);

  const { filteredCategory, filtrarCategoria} = useContext(cartContext);

  let defaultFilters = {category: filteredCategory};

  useEffect(() => {

    getItemsFromAPI().then((itemsDB) => {

      if (filteredCategory == "") {
        setFilteredProductList(itemsDB);

      } else {

        function buildFilter(defaultFilters) {
          let query = {};

          for (let keys in defaultFilters) {
            if (
              defaultFilters[keys].constructor === Array &&
              defaultFilters[keys].length > 0
            ) {
              query[keys] = defaultFilters[keys];
            }
          }
          return query;
        }

        let query = buildFilter(defaultFilters);

        function filterData(productList, query) {
          const filteredData = productList.filter((item) => {
            for (let key in query) {
              if (!(item[key] == query[key][0])) {
                return false;
              }
              return true;
            }
          });

          setFilteredProductList(filteredData);
        }

        filterData(itemsDB, query);
      }
    });

  }, [filteredCategory]);

  return (
    <div className="container-item-list-container">
      <div className="container-filter-items">
        <div className="filter">
          <h2>Categorias</h2>

          <button onClick={() => filtrarCategoria("")}>VER TODOS</button>
          <button onClick={() => filtrarCategoria("Edredon")}>EDREDÓN</button>
          <button onClick={() => filtrarCategoria("Fundas de Edredón")}>
            FUNDAS EDREDÓN
          </button>
          <button onClick={() => filtrarCategoria("Sabanas")}>SABANAS</button>
          <button onClick={() => filtrarCategoria("Sabanas Ajustables")}>
            SABANAS AJUSTABLES
          </button>
          <button onClick={() => filtrarCategoria("Fundas de Almohada")}>
            FUNDAS
          </button>
          <button onClick={() => filtrarCategoria("Mantas")}>MANTAS</button>
          <button onClick={() => filtrarCategoria("Kimonos")}>KIMONOS</button>
        </div>
      </div>

      {filteredCategory == "" ? (
        <div>
          <ItemListAll productList={filteredProductList} />
        </div>
      ) : (
        <div>
          <ItemList productList={filteredProductList} />
        </div>
      )}
    </div>
  );
}

export default ItemListContainer;
