/* eslint-disable react/prop-types */
export default function ConceptList({ concept, onDelete }) {
    return (
        <li>
            <span>
                {concept.concept} - {concept.percent}
            </span>
            <button onClick={() => onDelete(concept.id)}>❌</button>
        </li>
    );
}
