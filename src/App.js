import React from 'react';
import './style.css';

import Comment from './components/Comment';
import UserInfo from './components/UserInfo';
import Text from './components/Text';
import CustomInput from './components/CustomInput';
import commentList from './components/Comment/CommentList';


export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      {/* <CustomInput  type="datetime-local" /> */}
      <CustomInput
        className="my-custom-input"
        placeholder="Please fill in the blank input fields"
      />
     <Text content="Long Blog Post" />
      <UserInfo
        avatarUrl="https://gravatar.com/avatar/e73695a4fa790dbe3415c5a258a91c99?s=400&d=robohash&r=x"
        name="Emre"
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar
        libero in odio vehicula laoreet. Ut tristique, orci in blandit iaculis,
        nisl diam auctor arcu, eget auctor enim diam ac dui. Nunc molestie,
        dolor ac elementum laoreet, est leo consectetur sem, ac imperdiet dui
        elit in eros. Ut a risus et quam aliquam scelerisque quis at ex. Nullam
        iaculis faucibus ex, at porta lacus tincidunt vel. Quisque porta
        tincidunt urna, nec pulvinar neque tincidunt eu. Sed tempor, dolor vel
        condimentum euismod, diam urna consequat dui, id tincidunt diam mi quis
        dui. Suspendisse faucibus, sem sed consequat rutrum, metus lorem auctor
        metus, id congue lectus orci nec metus. Morbi felis velit, tristique
        vitae eros nec, gravida convallis libero. Quisque a odio lacus.
        Suspendisse potenti. Nullam vitae erat cursus, porttitor urna non,
        congue mi. Praesent vel dictum ex. Ut quam orci, maximus a odio maximus,
        euismod cursus libero. Aenean ante nunc, laoreet ut dolor at, consequat
        vestibulum ipsum. Maecenas a malesuada diam. In eu magna ut tellus
        ultrices mattis. Duis arcu mi, consequat id cursus et, aliquet et magna.
        Duis nec lacinia odio, non fermentum libero. Nam vitae consectetur
        augue. Vestibulum feugiat lacus sed venenatis porttitor. Morbi lacinia
        tempus nunc quis laoreet. Duis a sapien nunc. Morbi ultricies ligula
        vitae metus dignissim molestie. Donec sit amet iaculis massa. Mauris sem
        massa, accumsan id porta sodales, maximus ac urna. Nulla laoreet aliquam
        aliquam. Fusce et quam in sapien blandit tincidunt at tincidunt nulla.
        Integer nulla justo, aliquet vel risus ac, dapibus pellentesque lacus.
        Cras pellentesque lobortis libero aliquam venenatis. Fusce bibendum
        vitae libero ac aliquam. Etiam tortor metus, laoreet vitae posuere non,
        aliquam at magna. Curabitur ac arcu non odio imperdiet efficitur eu vel
        ligula. Mauris nec aliquet risus. Nullam eu nisi nunc.
      </p>
      {/* <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
      /> */}
      Enter your Comment:
      <CustomInput
        className="comment-input"
        placeholder="Please fill in the blank input fields"
      />
      {commentList.map(function (comment, index) {
        return (
          <Comment
            key={index}
            text={comment.text}
            date={comment.date}
            author={comment.author}
          />
        );
      })}
    </div>
  );
}
