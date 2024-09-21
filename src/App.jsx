import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Concepts from "./components/Concepts";
import { useState } from "react";

function App() {
  const [concepts, setConcepts] = useState([]);

  function addConcepts(concept) {
    setConcepts((prevConcepts) => [...prevConcepts, concept]);
  }

  function handleDeleteConcept(id) {
    setConcepts((prevConcepts) =>
      prevConcepts.filter((concept) => concept.id !== id)
    );
  }

  return (
    <div className="app">
      <Header />
      <Form onAddConcept={addConcepts} />
      <Concepts concepts={concepts} onDeleteConcept={handleDeleteConcept} />
      <Footer concepts={concepts} />
    </div>
  );
}

export default App;
