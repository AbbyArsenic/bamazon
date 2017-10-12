// Dependencies
var mysql = require('mysql');
var inquirer = require('inquirer');

// Connect to database
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Bacardi13',
  database : 'bamazon'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

function menu() {
  inquirer.prompt( {
    name: "menu",
    type: "list",
    message: "What would you like to do?",
    choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"]
  }).then(function(answer) {
    switch (answer.menu) {
      case "View Products for Sale":
        return viewProducts();

      case "View Low Inventory":
        return viewInventory();

      case "Add to Inventory":
        return addInventory();

      case "Add New Product":
        return addProduct();
    }
  });
};

// Define function to view available products
function viewProducts() {
  connection.query('SELECT * FROM `products`', function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    for (var i=0; i<results.length; i++) {
      console.log(
        results[i].item_id + " " + 
        results[i].product_name + " [" + 
        results[i].price + "]"
      );
    }
    console.log("\n--------------\n");
    menu();
  })
};

// Define function to view low inventory
function viewLow() {

};

// Define function to add to current inventory
function addInventory() {

};

// Define function to add a new product
function addProduct() {

};

menu();