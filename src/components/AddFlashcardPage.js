import React from 'react';
import { connect } from 'react-redux';
import FlashcardForm from './FlashcardForm';
import { startAddFlashcard } from '../actions/flashcards'
import { startAddFlashcardsUniversal } from '../actions/flashcardsuniversal'


export class AddFlashcardPage extends React.Component {
    onSubmit = (flashcard) => {
        this.props.startAddFlashcard(flashcard);
        this.props.history.push('/');
        if (flashcard.universal) {
            this.props.startAddFlashcardsUniversal(flashcard);
        }
    };
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Add Flashcard</h1>
                    </div>
                </div>
                <div className="content-container">
                    <FlashcardForm
                        onSubmit={this.onSubmit}
                    />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddFlashcard: (flashcard) => dispatch(startAddFlashcard(flashcard)),
    startAddFlashcardsUniversal: (flashcard) => dispatch(startAddFlashcardsUniversal(flashcard))
});

export default connect(undefined, mapDispatchToProps)(AddFlashcardPage);