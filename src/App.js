import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Form from "./components/Form"
import Item from "./components/Item"

function App() {
  return (
    <div className="body">
      <Header/>
      <Form/>
      <Item text="My first item"/>
      <Footer/>
    </div>
  );
}

export default App;
