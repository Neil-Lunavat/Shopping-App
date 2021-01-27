import { Alert } from 'react-bootstrap';

const ItemAddedAlert = ({ dismissAlert }) => {
	return (
		<div className='w3-animate-top'>
			<Alert variant='success' onClose={() => dismissAlert()} dismissible style={{textAlign: 'center'}}>
				<Alert.Heading>Successfully added item to cart.</Alert.Heading>
			</Alert>
		</div>
	);
};

export default ItemAddedAlert;
