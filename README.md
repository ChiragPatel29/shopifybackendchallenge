## shopifybackendchallenge

I have implemented\
Basic CRUD Functionality\
Push a button export product data to a CSV.


Backend api is hosted at https://shopifybackendapi.herokuapp.com \
Front-end is hosted at https://shopifyfrontendforbackendapi.herokuapp.com/

ALL API endpoints can be tested with POSTMAN

### GET https://shopifybackendapi.herokuapp.com/inventory/items/

### GET Particular ID https://shopifybackendapi.herokuapp.com/inventory/items/:id 
eg https://shopifybackendapi.herokuapp.com/inventory/items/61db4361c40b2caad92e31e2

### POST https://shopifybackendapi.herokuapp.com/inventory/add
JSON Object in body eg
      {
      "itemname":"Pouch",
      "price": "12245",
      "quantity": "123",
      "location":"Dorval"
    }
    

### Update is with POST https://shopifybackendapi.herokuapp.com/inventory/update/:id
with JSON Object in body eg

https://shopifybackendapi.herokuapp.com/inventory/update/61db4d1bc40b2caad92e31e4
   
   {
      "itemname":"NewValue",
      "price": "12245",
      "quantity": "123",
      "location":"Laval"
    }
    
### Delete https://shopifybackendapi.herokuapp.com/inventory/delete/:id
eg https://shopifybackendapi.herokuapp.com/inventory/delete/61db5343c40b2caad92e31f1 

### To run backend 
Install NodeJS\
Download the repositry\
run npm install in directory\
run npm start

### To run frontend 
cd frontend\
Run npm install\
Run npm start




    






   
