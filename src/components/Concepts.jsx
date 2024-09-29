/* eslint-disable react/prop-types */
import ConceptList from "./ConceptList";
import { useDispatch } from "react-redux";
import { conceptActions } from "../store/concept-slice";
import { useSelector } from "react-redux";

// const initialItems = [
//     { id: 1, description: "Passports", quantity: 2, packed: false },
//     { id: 2, description: "Socks", quantity: 12, packed: false },
// ];

export default function Concepts() {
    const dispatch = useDispatch();
    const concepts = useSelector((state) => state.concepts);

    function onClear() {
        dispatch(conceptActions.clearConcept());
    }

    return (
        <div className="list">
            <ul>
                {concepts.map((concept) => (
                    <ConceptList key={concept.id} concept={concept} />
                ))}
            </ul>
            <button onClick={onClear}>Clear Concepts</button>
        </div>
    );
}
