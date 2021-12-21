JS AMAZONA 

1# Create Folder Structure

    1. create root folder a
    2. add fronted and backend folder
    3. create src folder in fronted
    4. create index.html with heading js AZ in src
    5. run npm init in frontecd folder
    6. npm install live-server(npm start[script]) 

2# Design Website

    1. create style.css
    2. link style.css to index.html
    3. create div.grid-container
    4. create header, main and footer
    5. style html, body
    6. style grid-container, header, main , and footer

3# Create Static home Screen

    1. create ul.products
    2. create li 
    3. create div.produc
    4. add .product-image, .product-name, .product-brand, .produc-price
    5. style ul.product and internal divs
    6. duplicate 2 times to show 3 products

4# Render Dynamic Home Screen 

    1. create data.js
    2. export an array of 6 products
    3. create screen/HomeScreen.js
    4. export HomeScreen as object with render() method
    5. implement render()
    6. import data.js
    7. return products mapped to lis inside an ul
    8. create app.js 
    9. link it to index.html as module 
    10. set main id to main_container
    11. create router() function 
    12. set main_container innerHTML to HomeScreen.render()
    13. set load event of window to router() function  

5# Built Url Router
    
    1. Create route as rouete:screen object for Home screen 
    2. create utils.js
    3. export parseRequestURL()
    4. set url as hash adress split by slash
    5. return resource, id and verb of url 
    6. update router()
    7. set request as parseRequestURL()
    8. build pasedUrl and compare with rouetes
    9. if route exists render it , else render Error404
    10. create screen/Error404,js and render error message

6# Create Node.JS Server
    
    1. run npm init in root jsamazona folder
    2. npm install express
    3. create server.js
    4. add start command as node backend/server.js
    5. require expresss 
    6. move data.js from frontend to backend
    7. create route /api/products
    8. return products in data.js 
    9. run npm start

7# Load Products From Backend

    1. edit HomeScreen.js
    2. make render async
    3. fetch products from '/api/products in render()
    4. make router() async and call await HomeScreen.render()
    
8# Add Webpack 

    1. cd frontend 
    2. npm install -D webpack webpack-cli webpack-dev-server
    3. npm unistall live-server
    4."start": "webpack-dev-server --mode development  -watch-content-base --open"
    5. move index.html, style.css ad images to frontend folder
    6. rename app.js to index.js 
    7. update index.html
    8. ad <script src="main.js"></script>
    9. npm start
    10. npm install axios
    11. change fetch to axios in HomeScreen
    
#9 Install Babel For ES6 Sytax

    1. npm install -D babel core, cli, node, preset-env
    2. create .babelrc and set to @babel/preset-env
    3. npm install -D nodemon 
    4. set start: nodemon --watch bacnkend --exec babel-node backend/server.js
    5. convert require to import in server.jsamazona
    6. npm start

10# Enable Code Linting 

    1. npm install -D eslint
    2. install VScode eslint extension(estoy usando nvim)
    3.create es.lintra and set module exports fos env to node 
    4. set VScode setting for editor.codeActionsPnSAve source.fixAll.eslint to true
    5. check result for linying error
    6. npm install eslint-config-airbnb-base and eslint-plugin-import 
    7. set extends to airbnb-base
    8. set parserOptions to ecmaVersion 11 and sourceType to module
    9. set rules for no-console to 0 to ignore liting error 

12# Create Rating Component

    1. create components/Rating.js
    2. create div.rating
    3. link to fontawesome.css in index.html
    4. define Rating object with render()
    5. if !props.value return empty div
    6> else use fa fa-star, fa-start-half-o and fa-start-o
    7. last span for props.text || ''
    8. style div.rating, span and last span
    9. edit HomeScreen 
    10. Add div.product-rating and use Rating component


13# Product Screen 
    1. get product id from request 
    2. implement /api/product/:id api
    3. send Ajax request to product api
    4. create back to result link 
    5. create div.details with 3 columns 
    6. column 1 for product image
    7. column 2 for product information
    8. column 3 form product action 
    9. style .detaild and all colums
    10. create add to cart button with add-button id
    11. after_render() to add event to the button 
    12. redirect user to cart/:product_id
    