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