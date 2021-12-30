import { getUserInfo } from '../localStorage';

const Header = {
	render: () => {
		const { name } = getUserInfo();
		return `

			<div class="brand">
                <a href="/#/"><span>JS</span>amazona</a>
            </div>
            <div>
                ${
                	name
                	? `<a href="/#/signin">${ name }</a>`
                	: `<a href="/#/signin">Sign-In</a>`
                }


                <a href="/#/cart">Cart</a>
           </div>
           `
	},
	after_render: () => {},
};
export default Header;