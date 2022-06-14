import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { Api } from "./util/Api";
import ProductsList from "./components/ProductsList";

function App() {
  const [notes, setNotes] = useState([]);
  const [products, setProducts] = useState([]);

  const getNotes = () => {
    Api.getNotes().then(response => response.data).then(setNotes);
  }

  const getProducts = () => {
    Api.getProducts().then(response => response.data).then(setProducts);
  }

  useEffect(() => {
    getProducts();
    getNotes();
  }, []);


  return (
    <div className="App">
      <Navbar bg="light" style={{ marginBottom: "20px" }}>
        <Container>
          <Navbar.Brand href="#">
            Amazon
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <ProductsList products={products}/>
      </Container>
    </div>
  );
}

export default App;
