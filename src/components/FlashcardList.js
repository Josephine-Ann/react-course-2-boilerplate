import React from 'react'; 
import { connect } from 'react-redux';
import FlashcardListItem from './FlashcardListItem';
import selectFlashcards from '../selectors/flashcards'; 


export const FlashcardList = (props) => (
    <div className="content-container">
    <div className="list-header">
        <div className="show-for-mobile">Flash</div>
        <div className="show-for-desktop">Flashcards</div>
    </div>
        <div className="list-body">                 
            {
                props.flashcards.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>No flashcards</span>
                    </div>
                    ) : (
                    props.flashcards.map((flashcard) => {
                        return <FlashcardListItem key={flashcard.id} {...flashcard} />;
                    })
                )
            }
        </div>
    </div>
);

const mapStateToProps = (state) => {
     return {
         flashcards: selectFlashcards(state.flashcards, state.filters)
     };
 };

export default connect(mapStateToProps)(FlashcardList);