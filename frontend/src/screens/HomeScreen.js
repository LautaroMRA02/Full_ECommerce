import axios from 'axios';
const HomeScreen = {
    render: async () => {
        const response = await axios({
            url: 'http://localhost:5000/api/products',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response || response.statusText !== 'OK') {
            console.log(response.data)
            return `<div>Error in getting data</div>`
        };
        const products = response.data;
        console.log(response.data)
        return `
        <section> 
        <ul class='products'>
            ${products.map((product) => `
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
