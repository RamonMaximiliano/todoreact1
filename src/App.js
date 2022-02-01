import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Form from "./components/Form"
import Item from "./components/Item"
import {useState} from "react";

function App() {
  //O método useState abaixo define o valor inicial do state
  //talvez tenha que trocar de chaves para colchetes para que ele seja um array vazio
  const [itemData, updateItemData] = useState({});

  return (
    <div className="body">
      <Header/>
      <Form updateItemData={updateItemData}/>
      <Item itemData={itemData}/>
      <Footer/>
    </div>
  );
}

export default App;




