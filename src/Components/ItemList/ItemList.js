import React from 'react'
import Item from '../Item/Item'
import "./itemList.css"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


function ItemList(props) {
    return (

    //     <Tabs
    //     defaultActiveKey="profile"
    //     id="uncontrolled-tab-example"
    //     className="mb-3"
    //   >
    //     <Tab eventKey="home" title="Home">
    //       <Sonnet />
    //     </Tab>
    //     <Tab eventKey="profile" title="Profile">
    //       <Sonnet />
    //     </Tab>
    //     <Tab eventKey="contact" title="Contact" disabled>
    //       <Sonnet />
    //     </Tab>
    //   </Tabs>



        <div className='itemList'>

            {props.productList.map(product => (

                
                <Item
                    key={product.id}
                    product={product}
                />
                
            ))
            }

        </div>
    )
}

export default ItemList