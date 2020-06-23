import React from 'react'; 
import { connect } from 'react-redux';
import UniversalListItem from './UniversalListItem';
import selectFlashcardsUniversal from '../selectors/flashcardsuniversal'; 


export const UniversalList = (props) => (
    <div className="content-container">
    <div className="list-header">
        <div className="show-for-mobile">Flashcards for everyone</div>
        <div className="show-for-desktop">Flashcards for everyone</div>
    </div>
        <div className="list-body"> 
            {
                props.flashcardsuniversal.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>No flashcards</span>
                    </div>
                    ) : (
                    props.flashcardsuniversal.map((flashcarduniversal) => {
                        return <UniversalListItem key={flashcarduniversal.id} {...flashcarduniversal} />;
                    })
                )
            }
        </div>
    </div>
);

const mapStateToProps = (state) => {
     return {
        
        flashcardsuniversal: selectFlashcardsUniversal(state.flashcardsuniversal, state.filters)
    };
 };

export default connect(mapStateToProps)(UniversalList);
