import database from '../firebase/firebase';

export const addFlashcardUni = (flashcardsuniversal) => ({
    type: 'ADD_FLASHCARD_UNI',
    flashcardsuniversal
});

export const startAddFlashcardsUniversal = (flashcardData = {}) => {
    return (dispatch) => {
        const {
            universal = true,
            englishone = '', 
            englishtwo = '',
            englishthree = '',
            englishfour = '',
            englishfive = '',
            englishsix = '',
            englishseven = '',
            englisheight = '',
            englishnine = '',
            spanishone = '',
            spanishtwo = '',
            spanishthree = '',
            spanishfour = '',
            spanishfive = '',
            spanishsix = '',
            spanishseven = '',
            spanisheight = '',
            spanishnine = '',
            difficulty = '',
            title = '', 
            createdAt = 0,
            lastStudiedAt = 0
        } = flashcardData;
        const flashcard = { 
            universal,
            englishone, 
            englishtwo, 
            difficulty,
            englishthree, 
            englishfour, 
            englishfive, 
            englishsix, 
            englishseven,
            englisheight,
            englishnine,
            spanishone,
            spanishtwo,
            spanishthree,
            spanishfour,
            spanishfive,
            spanishsix,
            spanishseven,
            spanisheight,
            spanishnine,
            title,
            createdAt, 
            lastStudiedAt
        }
       return database.ref(`flashcardsuniversal`).push(flashcard).then((ref) => {
            dispatch(addFlashcardUni({
                id: ref.key,
                ...flashcard
            }));
        })
    }
}



export const setFlashcardsUniversal = (flashcardsuniversal) => ({
    type: 'SET_FLASHCARDS_UNI',
    flashcardsuniversal
})

export const startSetFlashcardsUniversal = () => {
    return (dispatch) => {
        return database.ref(`flashcardsuniversal`).once('value').then((snapshot) => {
        const flashcardsuniversal = []
 
        snapshot.forEach((childSnapshot) => {
            flashcardsuniversal.push({
                id: childSnapshot.key,
               ...childSnapshot.val()
           })
       })
       dispatch(setFlashcardsUniversal(flashcardsuniversal))
         })
     }
    }


export const removeFlashcard = ({ id } = {}) => ({
    type: 'REMOVE_FLASHCARD_UNI',
    id  
});

export const startRemoveFlashcard = ({ id } = {}) => {
   return (dispatch) => {
       return database.ref(`flashcardsuniversal/${id}`).remove().then(() => {
            dispatch(removeFlashcard({ id }));
        });
    }
}