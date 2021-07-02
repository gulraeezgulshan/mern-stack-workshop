import React from "react";
import ReactDOM from "react-dom";

//First Component of React

//Special Kind of function because it's a component
//condition for a function to be component
//1) Function's Name should be capitalized
//2) It must return something

/* function Greeting() {
  return "Hello World";
}
 */
//React Tag // Custom tag / Component
/* function Greeting() {
  //It looks like HTML but not really
  //It is JSX syntax

  return <h1>Hello World !</h1>;
} */

//Making a component using fat arrow

//Functional Component
//const Greeting = () => <h1>Hello World using fat arrow!</h1>;

//In JSX, there will only one parent element
/* function Greeting() {
  return (
    <div>
      <div>
        <h1>Hello World</h1>
        <ul>
          <li>Pakistan</li>
          <li>India</li>
          <li>China</li>
        </ul>
        <ul>
          <li>Karachi</li>
          <li>Lahore</li>
          <li>Islamabad</li>
        </ul>
      </div>
      <div>
        <h2>Hello Pakistan</h2>
      </div>
    </div>
  );
} */

/* function Greeting() {
  return (
    <React.Fragment>
      <div>
        <h1>Hello World</h1>
        <ul>
          <li>Pakistan</li>
          <li>India</li>
          <li>China</li>
        </ul>
        <ul>
          <li>Karachi</li>
          <li>Lahore</li>
          <li>Islamabad</li>
        </ul>
      </div>
      <div>
        <h2>Hello Pakistan</h2>
      </div>
    </React.Fragment>
  );
} */
/* 
function Greeting() {
  return (
    <>
      <div>
        <h1 className="hello">Hello World</h1>
        <ul>
          <li>Pakistan</li>
          <li>India</li>
          <li>China</li>
        </ul>
        <ul>
          <li>Karachi</li>
          <li>Lahore</li>
          <li>Islamabad</li>
        </ul>
      </div>
      <div>
        <h2>Hello Pakistan</h2>
      </div>
    </>
  );
} */

/*********** Nested Components *********** */

/* function Greeting() {
  return (
    <div>
      <h1>I am Gulraiz Gulshan</h1>
      <p>Be punctual in class</p>
    </div>
  );
} */

/* function Greeting() {
  return (
    <div>
      <Person />
      <Message />
      <Message />
    </div>
  );
} */

/* const Person = () => <h1>I am Gulraiz Gulshan</h1>;
const Message = () => <p>Be punctual in class</p>; */

//<html>, <div>, <ul>
//ReactDOM.render(<Greeting />, document.getElementById("root"));

/******** Nested components in more details******/

/* function BookList() {
  return (
    <section>
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img src="https://images-na.ssl-images-amazon.com/images/I/81TgUz%2B7JBS._AC_UL200_SR200,200_.jpg" />
);
const Title = () => <h1>American Marxism</h1>;
const Author = () => <h4>Mark R. Levin</h4>; */

/* const book1 = {
  title: "American Marxism",
  author: "Mark R. Levin",
  image:
    "https://images-na.ssl-images-amazon.com/images/I/81TgUz%2B7JBS._AC_UL200_SR200,200_.jpg",
};

const book2 = {
  title: "Malibu Rising: A Novel",
  author: "Taylor Jenkins Reid",
  image:
    "https://images-na.ssl-images-amazon.com/images/I/914BkcGCNgS._AC_UL200_SR200,200_.jpg",
};

const book3 = {
  title: "The 48 Laws of Power",
  author: "Robert Greene",
  image:
    "https://images-na.ssl-images-amazon.com/images/I/71951W96oWL._AC_UL200_SR200,200_.jpg",
};

function BookList() {
  return (
    <section>
      <Book title={book1.title} author={book1.author} image={book1.image} />
      <Book title={book2.title} author={book2.author} image={book2.image} />
      <Book title={book3.title} author={book3.author} image={book3.image} />
    </section>
  );
}

//rule vs convention

const Book = (props) => {
  //console.log(props);
  return (
    <article>
      <img src={props.image} />
      <h1 style={{ color: "red" }}>{props.title}</h1>
      <h4> {props.author} </h4>
    </article>
  );
}; */

/********************************Property Destructing *******************/

const books = [
  {
    title: "American Marxism",
    author: "Mark R. Levin",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81TgUz%2B7JBS._AC_UL200_SR200,200_.jpg",
  },
  {
    title: "Malibu Rising: A Novel",
    author: "Taylor Jenkins Reid",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/914BkcGCNgS._AC_UL200_SR200,200_.jpg",
  },
  {
    title: "The 48 Laws of Power",
    author: "Robert Greene",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71951W96oWL._AC_UL200_SR200,200_.jpg",
  },
  {
    title: "The Midnight Library: A Novel",
    author: "Matt Haig",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81YzHKeWq7L._AC_UL200_SR200,200_.jpg",
  },
];

/* function BookList() {
  return (
    <section>
      <Book
        title={books[0].title}
        author={books[0].author}
        image={books[0].image}
      />
      <Book
        title={books[1].title}
        author={books[1].author}
        image={books[1].image}
      />
      <Book
        title={books[2].title}
        author={books[2].author}
        image={books[2].image}
      />
    </section>
  );
}
 */

function BookList() {
  return (
    <section>
      {books.map((book) => {
        return (
          <Book title={book.title} author={book.author} image={book.image} />
        );
      })}
    </section>
  );
}

//rule vs convention

/* const Book = (props) => {
  console.log(props);

  const { title, author, image } = props;
  console.log(title);
  console.log(author);
  console.log(image);

  return (
    <article>
      <img src={image} />
      <h1 style={{ color: "red" }}>{title}</h1>
      <h4> {author} </h4>
    </article>
  );
}; */

const Book = ({ title, author, image }) => {
  /*   console.log(title);
  console.log(author);
  console.log(image); */

  return (
    <article>
      <img src={image} />
      <h1 style={{ color: "red" }}>{title}</h1>
      <h4> {author} </h4>
    </article>
  );
};

//<html>, <div>, <ul>
ReactDOM.render(<BookList />, document.getElementById("root"));
