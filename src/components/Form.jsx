import { useState } from "react";
import { useDispatch } from "react-redux";
import { conceptActions } from "../store/concept-slice";

export default function Form() {
    const [concept, setConcept] = useState("");
    const [percent, setPercent] = useState(1);
    const dispatch = useDispatch();

    const numbers = Array.from({ length: 100 }, (_, index) => index + 1);

    function handleSubmit(event) {
        event.preventDefault();

        const newConcept = {
            concept,
            percent,
            id: Date.now(),
        };

        dispatch(conceptActions.addConcept(newConcept));

        // onAddConcept(newConcept);
        setConcept("");
        setPercent(1);
    }

    function handleConcept(event) {
        setConcept(event.target.value);
    }

    function handlePercent(event) {
        setPercent(event.target.value);
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What react concepts do you know, and at what %?</h3>
            <input
                type="text"
                placeholder="concept..."
                value={concept}
                onChange={handleConcept}
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
