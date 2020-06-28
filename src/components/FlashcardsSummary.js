import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectFlashcards from '../selectors/flashcards';
import flashcards from '../selectors/flashcards';

export const FlashcardsSummary = ({ visibleFlashcardCount, invisibleFlashcardCount, flashcardsToStudy }) => {
  const visibleFlashcardWord = visibleFlashcardCount === 1 ? 'flashcard' : 'flashcards' ;
  const invisibleFlashcardWord = invisibleFlashcardCount === 1 ? 'flashcard' : 'flashcards' ;
  const toStudyFlashcardWord = flashcardsToStudy === 1 ? 'flashcard' : 'flashcards' ;

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{visibleFlashcardCount}</span> {visibleFlashcardWord}</h1>
        <h1 className="page-header__title to-study-red">To study: <span>{flashcardsToStudy}</span> {toStudyFlashcardWord}</h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Flashcards</Link>
          <Link className="button" to="/universaldashboardpage">See Shared Flashcards</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleFlashcards = selectFlashcards(state.flashcards, state.filters);
  const allFlashcards = state.flashcards 

  return {
    visibleFlashcardCount: visibleFlashcards.length,
    invisibleFlashcardCount: allFlashcards.length - visibleFlashcards.length,
    flashcardsToStudy: state.flashcards.filter(flashcard => ( Date.now() - flashcard.lastStudiedAt) > parseInt(flashcard.difficulty, 10)).length
  };
};

export default connect(mapStateToProps)(FlashcardsSummary);