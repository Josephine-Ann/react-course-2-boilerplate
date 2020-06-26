import React from 'react'; 
import { connect } from 'react-redux';
import UniversalListItem from './UniversalListItem';
import selectFlashcardsUniversal from '../selectors/flashcardsuniversal'; 
import { startAddFlashcard } from '../actions/flashcards';

    export class UniversalList extends React.Component {
        onClick = (flashcard) => {
        this.props.startAddFlashcard(flashcard);
        };
        render() {
            return (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Flashcards for everyone</div>
            <div className="show-for-desktop">Flashcards for everyone</div>
        </div>
        <div className="list-body"> 
            {
                this.props.flashcardsuniversal.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>No flashcards</span>
                    </div>
                        ) : (
                            this.props.flashcardsuniversal.map((flashcarduniversal) => {
                            return <UniversalListItem key={flashcarduniversal.id} {...flashcarduniversal} onClick={this.onClick}/>;
                            })
                        )
                    }
                </div>
            </div>
        );
                }
            }

const mapStateToProps = (state) => {
     return { 
        flashcardsuniversal: selectFlashcardsUniversal(state.flashcardsuniversal, state.filters)
    };
 };

 const mapDispatchToProps = (dispatch) => ({
    startAddFlashcard: (flashcard) => dispatch(startAddFlashcard(flashcard))
}); 

export default connect(mapStateToProps, mapDispatchToProps)(UniversalList);
