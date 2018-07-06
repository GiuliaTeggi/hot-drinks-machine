# Hot drinks machine :coffee:

Based on the selection of the user, the web app provides a readout on the actions performed by the machine during the preparation of the drink. When the drinks is ready, the machine displays "Your drink is ready". 


## How to run the app locally

* Make sure you have [MongoDB](https://www.mongodb.com) and [Node JS](https://nodejs.org/en/) set up on your local computer.
* Fork the repo and navigate to your local folder where you would like to store its local copy
* Clone the repo
`git clone https://github.com/GiuliaTeggi/hot-drinks-machine.git`
* Add a .env file in the root directory of the  project where to store the folloring environment variables:
```
DATABASE_URL = mongodb://localhost/drinksdb
TEST_DATABASE_URL = mongodb://localhost/drinkstestdb
```
* Type `npm install` or `npm i` in the terminal to download the Node modules that are used by the app.
* Type `npm run build-database` to build your local database
* Type `npm run client` to run the Parcel bundler.
* Type `npm run start` to start the server or `npm run dev` to restart the server automatically after any changes.
* You should now be able to view the app on http://localhost:3000/

#### Testing

* Type `npm run test` to run the tests

## Tech stack

| Front end             | Backend              | Testing    | 
|:---------------------:|:--------------------:|:----------:|
| HTML5                 | Node.js              | Jest       | 
| SASS                  | Express              |            | 
| React                 | MongoDB              |            |                    
