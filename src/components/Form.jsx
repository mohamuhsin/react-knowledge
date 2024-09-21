import { useState } from "react";

export default function Form() {
    const [concepts, setConcepts] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
    }

    function handleConceptInput(event) {
        setConcepts(event.target.value);
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What concepts of react do you know?</h3>
            <input
                type="text"
                placeholder="concepts..."
                value={concepts}
                onChange={handleConceptInput}
            />
            <button>Add</button>
        </form>
    );
}
