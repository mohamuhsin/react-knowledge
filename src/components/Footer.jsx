/* eslint-disable react/prop-types */
export default function Footer({ concepts }) {
    const conceptNum = concepts.length;

    if (!conceptNum) {
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
                {conceptNum === 5 ? (
                    <p>
                        You know {conceptNum} concepts, you can now build basic React app!
                    </p>
                ) : (
                    <p>
                        <p>
                            You know {conceptNum} concepts, you can now build pro React apps!
                        </p>
                    </p>
                )}
            </em>
        </footer>
    );
}
