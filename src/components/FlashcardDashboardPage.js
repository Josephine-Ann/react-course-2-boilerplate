import React from 'react';
import FlashcardList from './FlashcardList';
import FlashcardListFilters from './FlashcardListFilters';
import FlashcardsSummary from './FlashcardsSummary';

const FlashcardDashboardPage = () => (
    <div>
    <FlashcardsSummary />
    <FlashcardListFilters />
    <FlashcardList />
    </div>
);

export default FlashcardDashboardPage;