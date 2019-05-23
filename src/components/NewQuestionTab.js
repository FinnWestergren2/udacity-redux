import React, { useState } from 'react';
import { connect } from 'react-redux';
import history from '../history';
import UserComponent from './UserComponent';
import { setCurrentUser as setCurrentUserAction } from '../actions/users';

const NewQuestionTab = (props) => {
    return (
        <div className="new-question-tab">
            NewQuestionTab
        </div>
    );
};

export default NewQuestionTab;
