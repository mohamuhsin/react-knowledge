import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Concepts from "./components/Concepts";
import { useState } from "react";

function App() {
  const [concepts, setConcepts] = useState([]);

  function addConcepts(concept) {
    setConcepts((prevItems) => [...prevItems, concept]);
  }

  return (
    <div className="app">
      <Header />
      <Form onAddConcept={addConcepts} />
      <Concepts concepts={concepts} />
      <Footer />
    </div>
  );
}

export default App;
