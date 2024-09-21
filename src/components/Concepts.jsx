import ConceptList from "./ConceptList";

const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default function Concepts() {
    return (
        <div className="list">
            <ul>
                {initialItems.map((concept) => (
                    <ConceptList key={concept.id} concept={concept} />
                ))}
            </ul>
        </div>
    );
}
