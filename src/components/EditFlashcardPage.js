import React from 'react';
import { connect } from 'react-redux';
import FlashcardForm from './FlashcardForm';
import { startEditFlashcard, startRemoveFlashcard } from '../actions/flashcards';
import { startAddFlashcardsUniversal } from '../actions/flashcardsuniversal';
import DeleteModal from './DeleteModal'

export class EditFlashcardPage extends React.Component {
    state = {
        deletedOption: false
    };
    onSubmit = (flashcard) => {
        this.props.startEditFlashcard(this.props.flashcard.id, flashcard);
        if (flashcard.putInUniversal === true) {
            this.props.startAddFlashcardsUniversal(flashcard);
        }
        this.props.history.push('/');
    };
    onRemove = () => {
        this.props.startRemoveFlashcard({ id: this.props.flashcard.id });
        this.props.history.push('/');
    }
    onSelect = () => {
        this.setState({ deletedOption: true })
    }
    clearStateCloseModal = () => {
        this.setState(() => ({ deletedOption: null }));
    }
    render() {
        return (
            <div>
                <div className="content-container">
                    <div className="page-header">
                        <h1 className="page-header__title">Edit Flashcard</h1>
                    </div>
                    <FlashcardForm
                        flashcard={this.props.flashcard}
                        onSubmit={this.onSubmit}
                    />
                    <button className="button button--secondary" onClick={this.onSelect}>Remove flashcard</button>
                    <DeleteModal
                        modalOpen={this.state.deletedOption}
                        clearStateCloseModal={this.clearStateCloseModal}
                        onRemove={this.onRemove}
                    />
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, props) => ({
    flashcard: state.flashcards.find((flashcard) => flashcard.id === props.match.params.id),
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditFlashcard: (id, flashcard) => dispatch(startEditFlashcard(id, flashcard)),
    startRemoveFlashcard: (id) => dispatch(startRemoveFlashcard(id)),
    startAddFlashcardsUniversal: (flashcard) => dispatch(startAddFlashcardsUniversal(flashcard))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditFlashcardPage);
