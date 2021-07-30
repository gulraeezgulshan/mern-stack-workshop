/* const name = require("./names");
const sayHi = require("./utils");

sayHi(name.gulraiz);
sayHi(name.gulshan);
sayHi("Aptech"); */

//Built-in modules
//1) os module
//2) path module
//3) fs (file system module)
//4) http

//OS Module
/* const os = require("os");
console.log(os.userInfo());
console.log(os.type());
console.log(os.release());
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.uptime()); */

//Path Module

//const path = require("path");
//console.log(path.sep);

//Relative path
/* const filePath = path.join("/content/", "subfolder", "test.txt");
console.log(filePath); */

//Absolute Path
/* const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute); */

//To get base file name
/* console.log(path.basename(absolute)); */

//fs module (file-system)

//Reading/Writing in sync mode
//const { readFileSync, writeFileSync } = require("fs");

//console.log("start first task");

//const first = readFileSync("./content/first.txt");
//const first = readFileSync("./content/first.txt", "utf8");
//const second = readFileSync("./content/second.txt", "utf8");
/* 
writeFileSync("./content/result-sync.txt", `${first}, ${second}`, {
  flag: "a",
});

console.log("end first task");
console.log("starting next task..."); */
/* 
const { readFile, writeFile } = require("fs");

console.log("Task is started");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  const first = result;

  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    // console.log(first, second);

    writeFile(
      "./content/result-async.txt",
      `${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("Task is completed");
      }
    );
  });
});

console.log("starting next task...");
 */

//http module
/* 
const http = require("http");

const server = http.createServer((req, res) => {
  //console.log("Server Started");
  //res.end("Hello World");
  //console.log(req.url);
  if (req.url === "/") {
    res.end("<h1>This is our home page</h1>");
  } else if (req.url === "/about") {
    res.end("This is our about page");
  } else {
    res.end("No resource found !");
  }
});

server.listen(5000); */

//Event Emitter
/* 
const EventEmitter = require("events");

const customEventEmitter = new EventEmitter();

customEventEmitter.on("response1", () => {
  console.log("Response 1 Event fired");
});

customEventEmitter.on("response2", () => {
  console.log("Response 2 Event fired");
});

customEventEmitter.on("response3", (name) => {
  console.log(`Response 3 Event fired with data ${name}`);
});
customEventEmitter.emit("response3", "Aptech"); */

//http event emitter

/* const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  if (req.url === "/") {
    res.end("<h1>This is our home page</h1>");
  } else if (req.url === "/about") {
    res.end("This is our about page");
  } else {
    res.end("No resource found !");
  }
});

server.listen(5000); */

//EXPRESS

//working with HTTP using NODE JS
/* const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>This is our home page</h1>");
    res.end();
  } else if (req.url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>This is our about page</h1>");
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Page Not found</h1>");
    res.end();
  }
});

server.listen(5000); */

//Working with Http using ExpressJS

/* const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log(req.url);
  res.status(200).send("<h1>This is our home page</h1>");
});

app.get("/about", (req, res) => {
  console.log(req.url);
  res.status(200).send("<h1>This is our about page</h1>");
});

app.all("*", (req, res) => {
  console.log(req.url);
  res.status(404).send("<h1>Page Not found</h1>");
});

app.listen(5000, () => {
  console.log("Server is listening on Port 5000.");
});
 */

// Express Basic App

/* const express = require("express");
const path = require("path");

const app = express();

//Use will require Express Middleware as an input
app.use(express.static("./public"));

app.get("/", (req, res) => {
  //res.send("Hello");
  res.status(200).send("Hello");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
 */

//Basic JSON
/* 
const express = require("express");
const app = express();

const { products } = require("./data");

app.get("/", (req, res) => {
  //res.json(products);
  res.send("<h1>Home Page</h1>");
});

app.get("/api/products/all", (req, res) => {
  res.json(products);
});

app.get("/api/products", (req, res) => {
  //res.json(products);

  const newProducts = products.map((p) => {
    const { id, name, image } = p;
    return { id, name, image };
  });

  res.json(newProducts);
});

app.get("/api/products/:productID", (req, res) => {
  console.log(req.url);
  console.log(req.params);

  const { productID } = req.params;

  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );

  if (!singleProduct) {
    return res.status(404).send("Product Not Found");
  }

  return res.json(singleProduct);
});

//For Searching

app.get("/api/v1/query", (req, res) => {
  //console.log(req.query);
  let searchedProducts = [...products];

  const { search, limit } = req.query;

  if (search) {
    searchedProducts = products.filter((p) => {
      return p.name.startsWith(search);
    });
  }

  if (limit) {
    searchedProducts = searchedProducts.slice(0, Number(limit));
  }
  if (searchedProducts.length < 1) {
    return res.status(200).json({ success: true, data: [] });
  }
  res.status(200).json(searchedProducts);
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
 */

//MiddleWare

//req => MiddleWare => res

//req.params
//req.url
//req.method
/* 
const express = require("express");
const app = express();

const logger = require("./logger");
const authorize = require("./authorize");

//app.use(logger);
//app.use(authorize);

app.use([logger, authorize]);

app.get("/", (req, res) => {
  console.log(req.user);
  res.send("Home: Welcome " + req.user.name);
});

app.get("/about", (req, res) => {
  console.log(req.user);
  res.send("About: Welcome " + req.user.name);
});

app.listen(5000, () => {
  console.log("Server is listening on Port 5000");
});
 */

//Http Methods / Http Verbs
//GET , POST, PUT, PATCH, DELETE
/* 
const express = require("express");
const app = express();

//to parse form data
app.use(express.urlencoded({ extended: true }));

//to parse json
app.use(express.json());

let { people } = require("./data");

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({
      success: false,
      msg: "Please provide name",
    });
  }
  res.status(200).json({ success: true, person: name });
});

app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  console.log(id, name);
  const person = people.find((p) => p.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person found with ${id}` });
  }

  const newPeople = people.map((p) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return p;
  });

  res.status(200).json({ success: true, data: newPeople });
});

app.delete("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const person = people.find((p) => p.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person found with ${id}` });
  }

  const newPeople = people.filter((p) => p.id !== Number(id));
  res.status(200).json({ success: true, data: newPeople });
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
 */

const express = require("express");
const app = express();

const peopleRoutes = require("./router");

//to parse form data
app.use(express.urlencoded({ extended: true }));

//to parse json
app.use(express.json());

app.use("/api/people", peopleRoutes);

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
