const flashcardsReducerDefaultState = [];

export default (state = flashcardsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_FLASHCARD':
        return [
            ...state,
            action.flashcard
        ];
        case 'ADD_FLASHCARD_UNI':
        return [
            ...state.slice(0, state.length),
            action.flashcard
        ];
        case 'REMOVE_FLASHCARD':
            return state.filter(({ id }) => id !== action.id);
            case 'EDIT_FLASHCARD':
        return state.map((flashcard) => {
            if (flashcard.id === action.id) {
                return {
                    ...flashcard,
                    ...action.updates
                };
            } else {
                return flashcard;
            };
        });
        case 'SET_FLASHCARDS':
            return action.flashcards;  
        default: 
        return state;
    }
}; 