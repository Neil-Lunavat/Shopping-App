import { Card, Nav, Button, Form } from 'react-bootstrap';

const ShopItem = ({ data, addItem, showAlert }) => {
	return (
		<>
			<Card bg='secondary'>
				<Card.Img
					variant='top'
					src={data.image}
					style={{
						width: '97%',
						height: '97%',
						position: 'relative',
						left: '1.5%',
						marginTop: '1.5%',
					}}
					className="sizeOnHover"
				/>
				<Card.Body>
					<Card.Title>{data.title}</Card.Title>
				</Card.Body>
				<Card.Footer>
					<Form inline>
						<Nav className='mr-auto' />
						<h3
							style={{
								marginRight: 10,
								fontSize: 'x-large',
							}}>
							{data.price}$
						</h3>
						<Button
							variant='outline-warning'
							onClick={() => {
								addItem(data.id);
								showAlert();
							}}>
							Add
						</Button>
					</Form>
				</Card.Footer>
			</Card>
		</>
	);
};

export default ShopItem;
