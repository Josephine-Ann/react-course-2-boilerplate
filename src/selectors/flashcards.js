import moment from 'moment';

// Get visible expenses

export default (flashcards, { text, sortBy, startDate, endDate }) => {
  return flashcards.filter((flashcard) => {
    const createdAtMoment = moment(flashcard.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    const textMatch = flashcard.title.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'difficulty') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};