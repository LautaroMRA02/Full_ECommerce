import data from '../data.js'

const HomeScreen = {
    render: () => {
        const {products} = data
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
                                Fit Slim Shirt
                            </a>
                            <p>${product.brand}</p>
                            <p>${product.price}</p>
                        </div>
                    </div>
                </li>
                `).join('\n')}
        `
    },
};

export default HomeScreen;