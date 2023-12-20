## MERNSTACK  
  
#### REQUIREMENTS  
+ nodejs version 14.x.x or later  
(Please note earlier versions of nodejs don't support nullish coalescing and optional chaining  
and may thus result in syntax errors)  
+ nodemon version 3.0.2 or later  
+ mongodb version 4.2.19 or later  
+ set the value of environment variable MONGO_URI equal to the connection string to the mongodb  
  
#### USAGE EXAMPLE  
##### Starting application  
+ $export MONGO_URI="mongodb://127.0.0.1:27017/mernstack"  
+ $nodemon server.js
+ app.js  
##### Testing endpoints  
+ Try accessing the different routes using an API testing tool e.g. POSTMAN
