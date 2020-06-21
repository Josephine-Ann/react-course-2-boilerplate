import uuid from 'uuid';
import database from '../firebase/firebase';


export const addFlashcard = (flashcard) => ({
    type: 'ADD_FLASHCARD',
    flashcard
});

export const startAddFlashcard = (flashcardData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
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
       return database.ref(`users/${uid}/flashcards`).push(flashcard).then((ref) => {
            dispatch(addFlashcard({
                id: ref.key,
                ...flashcard
            }));
        })
    }
}

export const removeFlashcard = ({ id } = {}) => ({
    type: 'REMOVE_FLASHCARD',
    id  
});

export const startRemoveFlashcard = ({ id } = {}) => {
   return (dispatch, getState) => {
       const uid = getState().auth.uid;
       return database.ref(`users/${uid}/flashcards/${id}`).remove().then(() => {
            dispatch(removeFlashcard({ id }));
        });
    }
}

export const editFlashcard = (id, updates) => ({
    type: 'EDIT_FLASHCARD',
    id,
    updates   
})

export const startEditFlashcard = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
       return database.ref(`users/${uid}/flashcards/${id}`).update(updates).then(() => {
             dispatch(editFlashcard(id, updates));
         });
     } 
}

export const setFlashcards = (flashcards) => ({
    type: 'SET_FLASHCARDS',
    flashcards
})

export const startSetFlashcards = () => {
   return (dispatch, getState) => {
       const uid = getState().auth.uid;
       return database.ref(`users/${uid}/flashcards`).once('value').then((snapshot) => {
       const flashcards = []

       snapshot.forEach((childSnapshot) => {
           flashcards.push({
               id: childSnapshot.key,
              ...childSnapshot.val()
          })
      })
      dispatch(setFlashcards(flashcards))
        })
    }
   }