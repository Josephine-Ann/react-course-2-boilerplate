import React from 'react'; 
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const UniversalListItem = ({ id, title, createdAt }) => (
    <div className={"list-item"}>
    <Link to={`/universalboard/${id}`}>
        <h3 className={"list-item__title" }>{title}</h3>
        <span className={"list-item__sub-title" }>{moment(createdAt).format('MMMM Do, YYYY')}</span>
    </Link>
    <div className={"list-item__data"}>
    </div>
    </div>
);

export default UniversalListItem;
