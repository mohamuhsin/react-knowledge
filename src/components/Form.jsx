import { useState } from "react";

export default function Form() {
    const [concepts, setConcepts] = useState("");
    const [percent, setPercent] = useState(1);

    const numbers = Array.from({ length: 100 }, (_, index) => index + 1);

    function handleSubmit(event) {
        event.preventDefault();
    }

    function handleConceptInput(event) {
        setConcepts(event.target.value);
    }

    function handlePercent(event) {
        setPercent(event.target.value);
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What react concepts do you know, at what %?</h3>
            <input
                type="text"
                placeholder="concepts..."
                value={concepts}
                onChange={handleConceptInput}
            />
            <select
                name="numbers"
                id="number"
                value={percent}
                onChange={handlePercent}
            >
                {numbers.map((number) => (
                    <option key={number}>{number}%</option>
                ))}
            </select>
            <button>Add</button>
        </form>
    );
}
