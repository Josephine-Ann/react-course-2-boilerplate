import React from 'react'; 
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const FlashcardListItem = ({ id, title, createdAt, difficulty }) => (
    <div className="list-item">
    <Link to={`/board/${id}`}>
        <h3 className="list-item__title">{title}</h3>
        <span className="list-item__sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</span>
    </Link>
    <div className="list-item__data">
    <h3>Difficulty: {difficulty}</h3>
    <Link to={`/edit/${id}`}>
    <p>Edit deck</p>
    </Link>
    </div>
    </div>
);

export default FlashcardListItem;