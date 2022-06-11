import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { Api } from "./util/Api";

function App() {
  const [notes, setNotes] = useState([]);

  const getNotes = () => {
    Api.getNotes().then(response => response.data).then(setNotes);
  }

  useEffect(() => {
    getNotes();
  }, []);


  return (
    <div className="App">
      <Navbar bg="light" style={{ marginBottom: "20px" }}>
        <Container>
          <Navbar.Brand href="#">
            Notes App
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <TodoForm notes={notes} onChange={getNotes} />
        <TodoList notes={notes} onChange={getNotes} />
      </Container>
    </div>
  );
}

export default App;
