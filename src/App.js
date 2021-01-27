import Shop from './components/Shop';
import DarkNavbar from './components/DarkNavbar';
import Cart from './components/Cart';
import { useState, useEffect } from 'react';
import ItemAddedAlert from './components/ItemAddedAlert';

const App = () => {
	const [data, setData] = useState([]);
	const [cart, setCart] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const [isShowing, setShowing] = useState(false);
	const [isAlertShowing, setShowAlert] = useState(false);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const response = await fetch('https://fakestoreapi.com/products');
		const fetchedData = await response.json();

		fetchedData.map((item) => {
			item.count = 0;
			return item;
		});

		setData(fetchedData);
		setLoading(false);
	};

	const addItem = (id) => {
		let exists = false;
		cart.forEach((item) => (item.id === id ? (exists = true) : false));

		if (exists) {
			setCart(
				cart.map((item) => {
					return item.id === id
						? { ...item, count: item.count + 1 }
						: item;
				})
			);
		} else {
			setCart([
				...cart,
				{ ...data.find((item) => item.id === id), count: 1 },
			]);
		}
	};

	const removeItem = (id) => setCart(cart.filter((item) => item.id !== id));

	const checkCart = (id) => {
		if (cart.find((item) => item.id === id).count <= 1) removeItem(id);
	}

	const minusItem = (id) => {
		
		setCart(
			cart.map((item) => {
				return item.id === id
					? { ...item, count: item.count - 1 }
					: item;
			})
		);
		checkCart(id);
	};

	const plusItem = (id) => {
		setCart(
			cart.map((item) => {
				return item.id === id
					? { ...item, count: item.count + 1 }
					: item;
			})
		);
	};

	const showAlert = () => {
		setShowAlert(true);
		setTimeout(dismissAlert, 5000);
	};

	const dismissAlert = () => setShowAlert(false);

	const toggleCart = () => setShowing(!isShowing);

	return (
		<>
			<DarkNavbar nci={cart.length} toggleCart={toggleCart} />

			{isAlertShowing ? (
				<ItemAddedAlert dismissAlert={dismissAlert} />
			) : null}
			<Cart
				isShowing={isShowing}
				length={cart.length}
				cart={cart}
				plusItem={plusItem}
				minusItem={minusItem}
				removeItem={removeItem}
			/>

			<Shop
				isShowing={isShowing}
				isLoading={isLoading}
				data={data}
				addItem={addItem}
				showAlert={showAlert}
			/>
		</>
	);
};

export default App;
