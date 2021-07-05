import React from "react";

const Book = (props) => {
  console.log(props);
  //console.log(props.book);

  //const { title, author, image } = props.book;
  const { title, author, image, isbn } = props;

  return (
    <article>
      {/* <img src={props.book.image} />
      <h1 style={{ color: "red" }}>{props.book.title}</h1>
      <h4> {props.book.author} </h4> */}

      <img src={image} />
      <h1 style={{ color: "red" }}>{title}</h1>
      <h4> {author} </h4>
      <h4> {isbn} </h4>
    </article>
  );
};

//Component Export
export default Book;
