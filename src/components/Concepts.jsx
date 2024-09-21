/* eslint-disable react/prop-types */
import ConceptList from "./ConceptList";

// const initialItems = [
//     { id: 1, description: "Passports", quantity: 2, packed: false },
//     { id: 2, description: "Socks", quantity: 12, packed: false },
// ];

export default function Concepts({ concepts }) {
    return (
        <div className="list">
            <ul>
                {concepts.map((concept) => (
                    <ConceptList key={concept.id} concept={concept} />
                ))}
            </ul>
        </div>
    );
}
