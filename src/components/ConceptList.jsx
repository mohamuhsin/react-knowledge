/* eslint-disable react/prop-types */
export default function ConceptList({ concept }) {
    return (
        <li>
            <span>
                {concept.description} - {concept.quantity}%
            </span>
            <button>Delete</button>
        </li>
    );
}
