import { useSelector } from "react-redux";

export default function Footer() {
    const concepts = useSelector((state) => state.concepts);
    const conceptNum = concepts.length;

    if (conceptNum < 5) {
        return (
            <em>
                <p className="stats">
                    You know {conceptNum} concepts, please learn more concepts to start
                    building basic React Apps!
                </p>
            </em>
        );
    }

    return (
        <footer className="stats">
            <em>
                {conceptNum >= 5 && conceptNum <= 8 ? (
                    <p>
                        You know {conceptNum} concepts, you can now build a basic React app!
                    </p>
                ) : (
                    <p>
                        You know {conceptNum} concepts, you can now build pro React apps!
                    </p>
                )}
            </em>
        </footer>
    );
}
