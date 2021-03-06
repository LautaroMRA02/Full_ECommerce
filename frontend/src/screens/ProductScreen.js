import {parseRequestUrl} from '../utils.js';
import { showLoading, hideLoading } from '../utils';
import {getProduct} from '../api.js';
import Rating from '../components/Rating.js'
const ProductScreen = {
    after_render: () => {
        const request = parseRequestUrl();
        document.getElementById('add-button').addEventListener('click', () => {
            document.location.hash = `/cart/${request.id}`;
        });
    },
    render: async () => {
        showLoading();
        const request = parseRequestUrl();
        const product = await getProduct(request.id)
        if (product.error) {
            return (`<div>${product.error}</div>>`)
        }
        hideLoading();
        return `
            <div class="content">
                <div className="back-to-result">
                    <a href="/#/">Back</a>
                </div>
                <div class="details">
                    <div class="details-image">
                    <img src="./images/${product.image}" alt="${product.name}">
                    </div>
               <div class="details-info">
                   <ul>
                       <li>
                        <h1>${product.name}</h1>
                       </li >
                       <li> ${Rating.render({
            value: product.rating,
            text: `${product.numReviews} reviews`
        })}
                        </li>
                       <li>
                            Price: <strong>$${product.price}</strong>
                            <li>                            Description:
                            <div>
                                ${product.description}
                            </div>
                            </li>
                       </li>
                   </ul >
               </div >

               <div class="details-action">
                   <ul>
                       <li>
                       Price: ${product.price}
                       </li>
                       <li>
                       Status:
                        ${product.countInStock > 0
                ? 
                `<span class="success">In Stock <span>(${product.countInStock}) </span></span>
                </li>
                <li>
                    <button id="add-button" class="fw primary">Add To Card</button>
                </li>
                `
                : 
                `<span class="error">Unavailable</span>
                </li>
                <li>
                    <button id="add-button-no" class="fw any" diabled>Add To Card</button>
                </li>
                `
            }
                     
                   </ul>
               </div>
               </div>
            </div >

    `
    },
};

export default ProductScreen;
