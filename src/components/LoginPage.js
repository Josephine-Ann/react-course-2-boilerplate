import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';


export const LoginPage = ({ startLogin }) => (
    <div className="box-layout">
        <div className="box-grid">
        </div>
        <div className="box-sec-part show-for-desktop">
            <div className="box-layout__box">
                <h1 className="box-layout__title">Flashcards</h1>
                <p></p>
                <button className="button" onClick={startLogin}>Login with Google</button>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);