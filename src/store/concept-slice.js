import { createSlice } from "@reduxjs/toolkit";

const conceptSlice = createSlice({
    name: "concept",
    initialState: { concepts: [] },
    reducers: {
        addConcept(state, action) {
            state.concepts.push(action.payload); // Mutating state is fine with Redux Toolkit
        },

        deleteConcept(state, action) {
            state.concepts = state.concepts.filter(
                (concept) => concept.id !== action.payload
            );
        },

        clearConcept(state) {
            state.concepts = [];
        },
    },
});

export const conceptActions = conceptSlice.actions;
export default conceptSlice;
