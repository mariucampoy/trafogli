import React, { useEffect, useState, useContext } from "react";
import cartContext from "../../Context/CartContext";
import ItemList from "../ItemList/ItemList";
import { getItemsFromAPI } from "../../services/firebase";
import "./itemListContainer.css";
import ItemListAll from "../ItemList/ItemListAll";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';



function ItemListContainer() {

  const [filteredProductList, setFilteredProductList] = useState([]);
  const { filteredCategory, filtrarCategoria } = useContext(cartContext);

  let defaultFilters = { category: filteredCategory };

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
    <Container fluid>
      <Row>

        {/* <Col xs={2}>
          <div className="container-filter-items">

            <h2>CATEGORIAS</h2>

            <Button variant='dark' onClick={() => filtrarCategoria("")}>VER TODOS</Button>
            <Button variant='dark' onClick={() => filtrarCategoria("Edredon")}>EDREDÓN</Button>
            <Button variant='dark' onClick={() => filtrarCategoria("Fundas de Edredón")}>FUNDAS EDREDÓN</Button>
            <Button variant='dark' onClick={() => filtrarCategoria("Sabanas")}>SABANAS</Button>
            <Button variant='dark' onClick={() => filtrarCategoria("Sabanas Ajustables")}>SABANAS AJUSTABLES</Button>
            <Button variant='dark' onClick={() => filtrarCategoria("Fundas de Almohada")}>FUNDAS</Button>
            <Button variant='dark' onClick={() => filtrarCategoria("Mantas")}>MANTAS</Button>
            <Button variant='dark' onClick={() => filtrarCategoria("Kimonos")}>KIMONOS</Button>

          </div>

        </Col> */}

        <Col xs={2}>
          <div className="container-filter-items">

            <h2>CATEGORIAS</h2>

            <ToggleButtonGroup  vertical="true" type="radio" name="options">

              <ToggleButton className="category-button-item" id="tbg-radio-1" value={1} variant='light' onClick={() => filtrarCategoria("")}>
              VER TODOS
              </ToggleButton>
              <ToggleButton className="category-button-item" id="tbg-radio-2" value={2} variant='light' onClick={() => filtrarCategoria("Edredon")}>
              EDREDÓN
              </ToggleButton>
              <ToggleButton  className="category-button-item" id="tbg-radio-3" value={3} variant='light' onClick={() => filtrarCategoria("Fundas de Edredón")}>
              FUNDAS EDREDÓN
              </ToggleButton>
              <ToggleButton  className="category-button-item" id="tbg-radio-4" value={4} variant='light' onClick={() => filtrarCategoria("Sabanas")}>
              JUEGO DE SABANAS
              </ToggleButton>
              <ToggleButton className="category-button-item" id="tbg-radio-5" value={5} variant='light' onClick={() => filtrarCategoria("Sabanas Ajustables")}>
              SABANAS AJUSTABLES
              </ToggleButton>
              <ToggleButton className="category-button-item" id="tbg-radio-6" value={6} variant='light' onClick={() => filtrarCategoria("Fundas de Almohada")}>
              FUNDAS
              </ToggleButton>
              <ToggleButton className="category-button-item" id="tbg-radio-7" value={7} variant='light' onClick={() => filtrarCategoria("Mantas")}>
              MANTAS
              </ToggleButton>
              <ToggleButton  className="category-button-item" id="tbg-radio-8" value={8} variant='light' onClick={() => filtrarCategoria("Kimonos")}>
              KIMONOS
              </ToggleButton>
            </ToggleButtonGroup>

          </div>

        </Col>

        <Col>
          <Container>
            <Row>
              {filteredCategory == "" ? (
                <div>
                  <ItemListAll productList={filteredProductList} />
                </div>
              ) : (
                <div>
                  <ItemList productList={filteredProductList} />
                </div>
              )}
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>


  );
}

export default ItemListContainer;
