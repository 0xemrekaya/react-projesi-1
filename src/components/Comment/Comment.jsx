import React from 'react';
import style from './style.module.css';

import UserInfo from '../UserInfo';
import Text from '../Text';

import CommentText from './CommentText';
import CommentDate from './CommentDate';

// import { formatDate } from '../../utils/utils.js';
import * as Utils from '../../utils/utils.js';



function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo
        avatarUrl={props.author.avatarUrl}
        name={props.author.name}
        isComment={true}
      />
      <CommentText text={props.text} />
      <CommentDate date={props.date} />
    </div>
  );
}

export default Comment;
