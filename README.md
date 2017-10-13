# bamazon
Node.js and MySQL HW Week12

## Challenge 1: Customer View

**Step 1** 

Open command line or terminal and enter "node bamazonCustomer.js" to start the app
![step 1](/basicImages/Step1.png)


**Step 2** 

A list of available products is displayed. Where prompted, enter the item id of the product you wish to purchase. 
![step 2](/basicImages/Step2.png)


**Step 3** 

After selecting the desired product, enter the quantity you wish to purchase. 
![step 3](/basicImages/Step3.png)


**Step 4** 

If there is sufficient quantity in stock, the app will update inventory in the database and calculate your order total. 
![step 4](/basicImages/Step4.png)


**Insufficient Stock** 

If selected quantity is greater than available inventory, you will be notified of insufficient stock and prompted to begin your search again. <br>
![Insufficient Stock](/basicImages/Error.png)

<hr>
## Challenge 2: Manager View

**Step 1**

Open command line or terminal and enter "node bamazonManager.js" to start the app
![step 1](/managerImages/Step1.png)


**Step 2** 

Select the action you wish to perform from the dropdown menu 
![step 2](/managerImages/Step2.png)


**View Products**

When this option is selected, a list is displayed of all items currently available in inventory. 
![View Products](/managerImages/view.png)


**View Low Inventory**

When this option is selected, a list is displayed of all products with fewer than 5 in stock. 
![View Low Inventory](/managerImages/low.png)


**Add to Inventory**

*Step 1*
When this option is selected, you will be prompted to enter the id of a product you wish to update. 

*Step 2*
After entering product id, you will be prompted to enter the quantity you wish to add to current inventory. 


**Add New Product**

*Step 1*
When this option is selected, you will be prompted to enter the name of the product you wish to create in your inventory. 

*Step 2*
Next you will be prompted to select a category in which to list the newly created product. 

*Step 3*
Continue by entering a unit price for your product. 

*Step 4*
Finally, you will be prompted to enter the quantity available for purchase for this product. 


**Log Out**
You can end your manager session by selecting "Log Out" from the menu.