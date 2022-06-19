import React from 'react';
import style from './style.module.css';

import UserInfo from '../UserInfo';
import Text from '../Text';
import * as Utils from '../../utils/utils.js';

function CommentDate({ date }) {
  return <div className="Comment-date">{Utils.formatDate(date)}</div>;
}

export default CommentDate;