const flashcardsUniversalReducerDefaultState = [];

export default (state = flashcardsUniversalReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_FLASHCARD_UNI':
        return [
            ...state,
            action.flashcardsuniversal
        ];
        case 'REMOVE_FLASHCARD_UNI':
            return state.filter(({ id }) => id !== action.id);
        case 'SET_FLASHCARDS_UNI':
            return action.flashcardsuniversal;  
        default: 
        return state;
    }
}; 