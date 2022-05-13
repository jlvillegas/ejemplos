import {Container, Row, Col} from "react-bootstrap"
import ItemList from "../ItemList/ItemList";

export default function ItemListContainer ({title}) {


return (
  
  <div className="ItemListContainer">
    {products.map((product, index) => (
        <Item product={product} key={product.id}/>
      )
    )}
  </div>
);
    }