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

// Show ids, names, and prices of products
connection.query('SELECT * FROM `products`', function (err, results, fields) {
  if (err) {
    console.log(err);
  }
  for (var i=0; i<results.length; i++) {
    console.log(results[i].item_id + " " + results[i].product_name + " [" + results[i].price + "]");
  }
  function buyPrompt() {
    inquirer.prompt( [{
      name: "buyItem",
      type: "input",
      message: "Enter the id of the product you'd like to buy."
    }, {
      name: "quantity",
      type: "input",
      message: "Enter the quantity to purchase."
    }]).then(function(answer) {
      for (var i=0; i<results.length; i++) {
        if (results[i].item_id === parseInt(answer.buyItem)) {
          if (results[i].stock_quantity < parseInt(answer.quantity)) {
            console.log("Insufficient stock!");
            buyPrompt();
          } else {
            console.log("You have successfully purchased " + answer.quantity + " " + results[i].product_name);
            console.log("Your order total is " + parseInt(answer.quantity)*results[i].price);
          }
        }
      }
    });
  }
  buyPrompt();
});