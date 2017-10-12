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
        return viewLow();

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
    console.log("\nAll available products:\n");
    for (var i=0; i<results.length; i++) {
      console.log(
        results[i].item_id + " " + 
        results[i].product_name + " [" + 
        results[i].price + "] Qty: " + 
        results[i].stock_quantity
      );
    }
    console.log("\n--------------\n");
    menu();
  })
};

// Define function to view low inventory
function viewLow() {
  connection.query('SELECT * FROM `products` WHERE `stock_quantity` < 5', function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    console.log("\nYou will soon sell out of the following:\n");
    for (var i=0; i<results.length; i++) {
      console.log( 
        results[i].item_id + " " + 
        results[i].product_name + 
        results[i].price + " [Remaining quantity: " + 
        results[i].stock_quantity + "]"
      );
    }
    console.log("\n--------------\n");
    menu();
  })
};

// Define function to add to current inventory
function addInventory() {
  inquirer.prompt( [{
    name: "itemId",
    type: "input",
    message: "Enter an item ID for which to increase inventory"
  }, {
    name: "addQty",
    type: "input",
    message: "Enter quantity of items to ADD"
  }]).then(function(answer) {

  });
};

/*Below here, code is incomplete and not yet functional...
// Define function to add a new product
function addProduct() {
  connection.query('INSERT INTO `products` (product_name, department_name, price, stock_quantity) VALUES ' + , function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    console.log("\nYou will soon sell out of the following:\n");
    for (var i=0; i<results.length; i++) {
      console.log( 
        results[i].item_id + " " + 
        results[i].product_name + 
        results[i].price + " [Remaining quantity: " + 
        results[i].stock_quantity + "]"
      );
    }
    console.log("\n--------------\n");
    menu();
  })
};

menu();