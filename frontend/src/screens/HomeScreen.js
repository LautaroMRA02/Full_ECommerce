import data from '../data.js'

const HomeScreen = {
    render: async() => {
        // const { products } = data;
        const response = await fetch('http://localhost:5000/api/products', {
            'Content-Type':'application/json',
        });
        if(!response || !response.ok){
            return `<div>Error in getting data</div>`
        };
        const products = await response.json();
        return `
        <section> 
        <ul class='products'>
            ${products.map( (product) => `
                <li>
                    <div class="product">
                        <a href="/#/product/${product._id}">
                            <img src="./images/${product.image}" alt="${product.name}">
                        </a>
                        <div class="product_data">
                            <a href="/#/product/${product._id}" >
                                ${product.name}
                            </a>
                            <p>${product.brand}</p>
                            <p>$${product.price}</p>
                        </div>
                    </div>
                </li>
                `).join('\n')}
        `
    },
};

export default HomeScreen;