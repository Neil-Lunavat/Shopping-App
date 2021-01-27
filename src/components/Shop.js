import ShopItem from './ShopItem';
import { CardColumns, Spinner } from 'react-bootstrap';

const Shop = ({ isShowing, isLoading, data, addItem, showAlert }) => {
	return (
		<>

			{!isShowing ? (
				<CardColumns
					style={{ margin: 20 }}
					className='w3-animate-bottom'>
					{isLoading ? (
						<Spinner animation='border' className='centered' />
					) : (
						data.map((item) => {
							return (
								<ShopItem
									data={item}
									key={item.id}
									addItem={addItem}
									showAlert={showAlert}
								/>
							);
						})
					)}
				</CardColumns>
			) : null}
		</>
	);
};

export default Shop;
