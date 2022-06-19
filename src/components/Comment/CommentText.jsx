import React from 'react';
import style from './style.module.css';
import Text from '../Text';


function CommentText({ text }) {
  return <Text className={style.commentText} content={text} />;
}

export default CommentText;