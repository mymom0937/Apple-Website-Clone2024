//// Working with databases (MySql) - Practice Exercises
// Question 1: Create a MySQL database by the name "myDB" and create a database user by
// the name "myDBuser" with a permissions to connect with the "myDB" database. Use the
// "mysql" module to create a connection with the newly created database. Display console
// message if the connection is successful or if it has an error.
// Please find further instructions under the “Instructions for question 1” below.

let express = require("express");
let mysql2 = require("mysql2");
let app = express();
let cors = require("cors");
let bodyparser = require("body-parser");
let PORT = 3002;
// Load environment variables
require('dotenv').config();

// Access environment variables
// const PORT = process.env.PORT || 3002;
// const host = process.env.host;
// const user = process.env.user;
// const password = process.env.password;

// Middle ware to extract info from the html body name attribute
app.use(express.urlencoded({ extended: true }));
// Middle ware to extract info from the frontend that are sent through json
app.use(express.json());
// Middle ware to let frontend app requests to read or use data

// const corsOptions = {
//   origin: [
//     "http://localhost:5173",
//     "https://www.evangadi.com",
//     "https://www.apple.com",
//   ],
// };
// app.use(cors(corsOptions));


app.use(cors());
// Use body parser as middle ware
app.use(bodyparser.urlencoded({ extended: true }));

let mysql2Connection = mysql2.createConnection({
  host: "localhost",
  user: "myDBuser3",
  password: "37597917",
  database: "myDB3",
});
// // Connect to MySQL2
mysql2Connection.connect((err) => {
  if (err) console.log(err.message);
  else console.log("Connected to MYSQL2");
});

// Question 2: Here is a link to a document that contains the tables we need to create and
// convert the apple.com/iphones page into a dynamic page with a database. As you can see
// from the document, there are 5 tables that are needed (please scroll horizontally and
// vertically over the document to see all the 5 tables). Write a SQL query to create the
// apple.com tables inside of the "myDB" database you created above. Once you write the
// queries, use the "mysql" module to execute the queries on the database. Try both of these
// methods to initiate the execution of the queries:
// ● Include the execution code directly in the module to be executed as you run the app
// ● Use the Express module to receive requests. Configure your module in a way that it
// executes the queries when the "/install" URL is visited.
// Please find further instructions under the “Instructions for question 2” below.

//Install: Create the tables necessary
app.get("/install", (req, res) => {
  let message = "All 5 Tables are Created";
  let createProducts = `CREATE TABLE if not exists Products(
      product_id int auto_increment,
      product_url varchar(255) not null,
      product_name varchar(255) not null,
      PRIMARY KEY (product_id)
  )`;
  let createProductDescription = `CREATE TABLE if not exists ProductDescription(
    description_id int auto_increment,
    product_id int(11) not null,
    product_brief_description TEXT not null,
    product_description TEXT not null,
    product_img varchar(255) not null,
    product_link varchar(255) not null,
    PRIMARY KEY (description_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
  )`;
  let createProductPrice = `CREATE TABLE if not exists ProductPrice(
    price_id int auto_increment,
    product_id int(11) not null,    
    starting_price varchar(255) not null,
    price_range varchar(255) not null,
    PRIMARY KEY (price_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
  )`;
  let createUser = `CREATE TABLE if not exists user(
    user_id int auto_increment,
    User_name varchar(255) not null,
    User_password varchar(255) not null,
    PRIMARY KEY (user_id)
  )`;
  let createOrders = `CREATE TABLE if not exists orders(
    order_id int auto_increment,
    product_id int(11) not null,
    user_id int not null,
    PRIMARY KEY (order_id),
    FOREIGN KEY (user_id) REFERENCES User(user_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
  )`;

  mysql2Connection.query(createProducts, (err, results, fields) => {
    if (err) console.log(err);
  });
  mysql2Connection.query(createProductDescription, (err, results, fields) => {
    if (err) console.log(err);
  });
  mysql2Connection.query(createProductPrice, (err, results, fields) => {
    if (err) console.log(err);
  });
  mysql2Connection.query(createUser, (err, results, fields) => {
    if (err) console.log(err);
  });
  mysql2Connection.query(createOrders, (err, results, fields) => {
    if (err) console.log(err);
  });
  // "http: localhost: 3002 / Products"
  res.end(message);
});
//
// Question 3: Create an HTML file called, “index.html” with a form to populate the
// "products" table you created above.
// ● The form on the HTML page should send a POST request to a URL named
// "/add-product"
// ● Use Express to receive the POST request
// ● Use the body-parser module to parse the POST request sent to your Express server
// ● Write a SQL query to insert the data received from the HTML form into the
// "products" table
// Please find further instructions under the “Instructions for question 3” below.
// Insert a new iPhone

http: app.post("/add-product", (req, res) => {
  // console.log(req.body);

  // let UserName = req.body.UserName;
  // let UserPassword = req.body.UserPassword;
  // let ProductName = req.body.ProductName;
  // let Description = req.body.Description;
  // let Price = req.body.Price;
  // let MonthlyPlan = req.body.MonthlyPlan;
  // let URL = req.body.URL;
  // let Image = req.body.Image;
  let {
    UserName,
    UserPassword,
    ProductName,
    Description,
    Price,
    MonthlyPlan,
    URL,
    Image,
  } = req.body;

  mysql2Connection.query(
    "INSERT INTO Products (product_url, product_name) VALUES ('" +
      URL +
      "', '" +
      ProductName +
      "' )",
    function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
      const id = result.insertId;

      mysql2Connection.query(
        "INSERT INTO ProductDescription (product_id,product_brief_description, product_description,product_img,product_link) VALUES ('" +
          id +
          "','" +
          Description +
          "', '" +
          Description +
          "', '" +
          Image +
          "', '" +
          URL +
          "' )",
        function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
        }
      );
      mysql2Connection.query(
        "INSERT INTO ProductPrice  (product_id,starting_price, price_range) VALUES ('" +
          id +
          "','" +
          Price +
          "', '" +
          MonthlyPlan +
          "' )",
        function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
        }
      );
      let Uid = 1;
      mysql2Connection.query(
        "INSERT INTO user (User_name, User_password) VALUES ('" +
          UserName +
          "', '" +
          UserPassword +
          "')",
        function (err, row) {
          if (err) throw err;
          console.log("1 record inserted");
          Uid = row.insertId;
          // console.log(Uid);
          // console.log(row);
        }
      );

      mysql2Connection.query(
        "INSERT INTO Orders (product_id, user_id) VALUES ('" +
          id +
          "', '" +
          Uid +
          "')",
        function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
        }
      );
    }
  );
  res.end("Product added");
});

// ********<!-- update start-->**********
// Route: /update => To adjust or update data from the tables
app.put("/update", (req, res) => {
  // console.table(req.body);
  let { newName, id } = req.body;

  let updateName = `UPDATE Products 
						SET name = '${newName}' 
					WHERE product_id = '${id}'`;

  mysql2Connection.query(updateName, (err, result) => {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
    res.send(result);
  });
});

// Route: /customers => To retrieve customized data from the tables
app.get("/products", (req, res) => {
  mysql2Connection.query(
    `SELECT Products.product_id AS id, Products.product_url,Products.product_name, ProductDescription.product_description,ProductDescription.product_brief_description,ProductDescription.product_img,ProductDescription.product_link,ProductPrice.starting_price, ProductPrice.price_range FROM
		Products INNER JOIN ProductDescription INNER JOIN ProductPrice
		ON 
		Products.product_id = ProductDescription.product_id
		AND 
		Products.product_id = ProductPrice.product_id`,
    (err, results, fields) => {
      if (err) console.log("Error During selection", err);
      res.json({ products: results });
    }
  );
});
// ********<!-- update end-->**********

// ********<!-- delete start-->**********
// Route: /remove-user => To delete all data from the tables
app.delete("/remove-user", (req, res) => {
  let { id } = req.body;
  let removeProducts = `DELETE FROM Products WHERE product_id = '${id}'`;
  let removeProductDescription = `DELETE FROM ProductDescription WHERE product_id = '${id}'`;
  let removeProductPrice = `DELETE FROM ProductPrice WHERE product_id = '${id}'`;
  let removeUser = `DELETE FROM user WHERE user_id = '${id}'`;
  let removeOrders = `DELETE FROM orders WHERE product_id = '${id}'`;

  mysql2Connection.query(removeOrders, (err, result) => {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) Deleted");
  });
  mysql2Connection.query(removeUser, (err, result) => {
    if (err) throw err;
    console.log(result);
    console.log(result.affectedRows + " record(s) Deleted");
  });

  mysql2Connection.query(removeProductPrice, (err, result) => {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) Deleted");
  });

  mysql2Connection.query(removeProductDescription, (err, result) => {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) Deleted");
  });

  mysql2Connection.query(removeProducts, (err, result) => {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) Deleted");
  });
  res.end("Deleted");
});
// ********<!-- delete end-->**********

// Start the Server
// app.listen(3002, () => {
//   console.log("Express app listening at http://localhost:3002");
// });

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});