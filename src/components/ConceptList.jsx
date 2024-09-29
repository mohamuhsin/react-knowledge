/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { conceptActions } from "../store/concept-slice";

export default function ConceptList({ concept }) {
    const dispatch = useDispatch();

    function onDelete() {
        dispatch(conceptActions.deleteConcept(concept.id));
    }

    return (
        <li>
            <span>
                {concept.concept} - {concept.percent}
            </span>
            <button onClick={onDelete}>❌</button>
        </li>
    );
}
