/* eslint-disable react/prop-types */
export default function ConceptList({ concept }) {
    return (
        <li>
            <span>
                {concept.concept} - {concept.percent}
            </span>
            <button>Delete</button>
        </li>
    );
}
