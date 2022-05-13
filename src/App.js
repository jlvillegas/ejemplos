import React from "react"
import Item from "./components/Item/Item";
import {products} from "./data/productos"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  
  const task = new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 3000)
    
  })

  task.then((result) => {
    console.log(result)
  }, err => {
    console.log(err)
  }).catch((err) => {
    console.log(err)
  })

  return (
    <div className="App">
      <Header />
      <ItemListContainer title="Nuestros productos" />
      <Footer />
    </div>
  );

}

export default App;
