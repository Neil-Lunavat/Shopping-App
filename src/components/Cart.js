import { CardDeck } from 'react-bootstrap';
import CartItem from './CartItem';

const Cart = ({ isShowing, length, cart, plusItem, minusItem, removeItem }) => {
	return (
		<>
			{isShowing ? (
				length > 0 ? (
					<CardDeck style={{ margin: 10 }} className='w3-animate-top'>
						{cart.map((item) => {
							return (
								<CartItem
									data={item}
									key={item.id}
									plusItem={plusItem}
									minusItem={minusItem}
									removeItem={removeItem}
								/>
							);
						})}
					</CardDeck>
				) : (
					<h3
						style={{ margin: 10, textAlign: 'center' }}
						className='w3-animate-top'>
						Your cart is empty. Go on and add some items!
					</h3>
				)
			) : null}
		</>
	);
};

export default Cart;
