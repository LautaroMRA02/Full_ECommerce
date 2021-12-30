import { parseRequestUrl , rerender } from '../utils';
import { getProduct } from '../api';
import { getCartItems, setCartItems } from '../localStorage';

const addToCart = (item, forceUpdate = false) => {
  let cartItems = getCartItems();
  const existItem = cartItems.find((x) => x.product === item.product);
  if (existItem) {
  	if(forceUpdate){
  	cartItems = cartItems.map((x) => x.product === existItem.product ? item : x);
  	}
  } else {
    cartItems = [...cartItems, item];
  }
  setCartItems(cartItems);
  if(forceUpdate){
  	rerender(CartScreen);
  }
};

const removeFromCart = (id) => {
	setCartItems(getCartItems().filter((x) => x.product !== id))
	if(id === parseRequestUrl().id){
		document.location.hash = '/cart';
	} else {
		rerender(CartScreen);
	}
}

const CartScreen = {
  after_render: () => {
  	const qytselect = document.getElementsByClassName('qty-select');
  	Array.from(qytselect).forEach((qytselect)=> {
  		qytselect.addEventListener('change', (e) =>{
  		const item = getCartItems().find((x) => x.product === qytselect.id);
  		addToCart({...item, qty:new Number(e.target.value)}, true);
  	});
  	});
  	const deleteButtons = document.getElementsByClassName('delete-button');
  	Array.from(deleteButtons).forEach((deleteButton) => {
  		deleteButton.addEventListener('click', () =>{
  			console.log(deleteButton.id)
  			removeFromCart(deleteButton.id);
  		});
  	});
  	document.getElementById('checkout-button').addEventListener('click', () => {
  		document.location.hash = '/signin';
  	});
  },
  render: async () => {
    const request = parseRequestUrl();
    if (request.id) {
      const product = await getProduct(request.id);
      addToCart({
        product: product._id,
        name: product.name,
        image: product.image,
        price: product.price,
        countInStock: product.countInStock,
        qty: 1,
      });
    }
    const cartItems = getCartItems();
    return `
    <div class="content cart">
    	<div class="cart-list">
    		<ul class="cart-list-container">
	    		<li>
	    			<h3>Shopping Cart</h3>
	    			<h3>Price</h3>
	    		</li>
	    		${
	    			cartItems.length === 0 ?
	    			'<div>Cart is Empty. <Shopping></Shopping></a></div>' :
	    			cartItems.map(item => `
	    		<li>
	    		 	<div>
	    		 		<img src="../images/${item.image}" alt="${item.name}">
	    			</div>
	    			<div class="cart-name">
	    				<a href="/#/product/${item.product}">${item.name}</a>
	    			</div>
	    			<div>
	    				<label htmlFor="${item.product}">Qty</label>
	    				<select class="qty-select" id="${item.product}">
	    					${
	    						[...Array(item.countInStock).keys()].map((x) =>
	    							item.qty === x+1
	    							? `<option selected value="${x + 1}">${x + 1}</option>` 
	    							: `<option  value="${x + 1}">${x + 1}</option>`

	    							)

	    					}
	    				</select>
	    				<button type="button" class="delete-button" id="${item.product}">Delete	</button>
	    			</div>
	    			<div class="cart-price">
	    				$${item.price}
	    			</div>
	    		</li>
	    				`).join('\n')
	    		}
    		</ul>
    	</div>
    	<div class="cart-action">
    			<h3>
    					Subtotal(${cartItems.reduce((a,b) => a + b.qty , 0 )} items ):
    					$${cartItems.reduce((a,b) => a + b.price * b.qty, 0)}
    			</h3>
    			<button id="checkout-button" class="primary fw">Proceed to Checkout</button>
    	</div>
    </div>
    `;
  },
};

export default CartScreen;
