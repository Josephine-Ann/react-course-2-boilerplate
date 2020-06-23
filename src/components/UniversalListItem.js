import React from 'react'; 
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const UniversalListItem = ({ id, title, createdAt, difficulty, lastStudiedAt }) => (
    <div className={(Date.now() - lastStudiedAt) < parseInt(difficulty, 10) ? "list-item" : "list-item to-study"}>
    <Link to={`/universalboard/${id}`}>
        <h3 className={(Date.now() - lastStudiedAt) < parseInt(difficulty, 10) ? "list-item__title" : "list-item__title to-study"}>{title}</h3>
        <span className={(Date.now() - lastStudiedAt) < parseInt(difficulty, 10) ? "list-item__sub-title" : "list-item__sub-title to-study"}>{moment(createdAt).format('MMMM Do, YYYY')}</span>
    </Link>
    <div className={(Date.now()) - lastStudiedAt < parseInt(difficulty, 10) ? "list-item__data" : "list-item__data to-study"}>
    </div>
    </div>
);

export default UniversalListItem;
