import { parseRequestUrl } from '../utils'
import {createOrder,getOrder} from '../api'



const OrderScreen = {
	after_render: async() => {
	},
	render: async() => {
		const request = parseRequestUrl();
		const {
			_id,
			shipping,
			payment,
			orderItems,
			itemsPrice,
			shippingPrice,
			taxPrice,
			totalPrice,
			isDelivered,
			idPaid,
		} = await getOrder(request.id);
		return `
		<h1>Order ${_id}</h1>
		<div class="order">
			<div class="order-info">
				<div class="order-info1">
					<h2>Shipping</h2>
					<div>${shipping.address}, ${shipping.city}, ${shipping.postalCode}, ${shipping.country} </div>
					${
						isDelivered 
						? `<div class="success">delivered at ${deliveredAt}</div>`
						: `<div class="error">Not Delivered</div>`
					}
				</div>
				<div class="order-info2">
					<h2>Payment</h2>
					<div>
						Payment Method: ${payment.paymentMethod}
					</div>
					${
						idPaid
						? `<div class="success">Paid at ${idPaidAt}</div>`
						: `<div class="error">Not Paid</div>`
					}
				</div>
				<div class="cart-list">
					<ul class="cart-list-container">
						<li>
							<h2>Shopping Cart</h2>
							<div>Price</div>
						</li>
						${
							orderItems.map(item => `
								<li>
									<div class="cart-image">
										<img src="../images/${item.image}" alt="${item.name}">
									</div>
									<div class="cart-name">
									<div>
	    								<a href="/#/product/${item.product}">${item.name}</a>
	    							</div>
	    							</div>
	    							<div>Qty: ${item.qty}</div>
	    							<div class="cart-price">${item.price}</div>
								</li>
								`)
						}
					</ul>
				</div>
			</div>
			<div class="order-action">
				<ul>
					<li><h2>Order Summary</h2></li>
					<li><div>Items</div><div>$${itemsPrice}</div></li>
					<li><div>Shipping</div><div>$${shippingPrice}</div></li>
					<li><div>Tax</div><div>$${taxPrice}</div></li>
					<li class="total"><div>Order Total</div><div>$${totalPrice}</div></li>
				</ul>
			</div>
		</div>
		`
	},
};
export default OrderScreen;