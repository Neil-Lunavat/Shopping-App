import { Card, Form, Button } from 'react-bootstrap';
import { FaPlus, FaMinus } from 'react-icons/fa';

const CartItem = ({ data, plusItem, minusItem, removeItem }) => {
	return (
		<div>
			<Card style={{ width: '21rem', margin: 10 }} bg='secondary'>
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
					<Card.Footer style={{textAlign: 'end'}}><h4>{data.count * data.price}$</h4></Card.Footer>
				</Card.Body>

				<Card.Footer style={{ alignSelf: 'center' }}>
					<Form inline>
						<Button
							variant='outline-danger'
							onClick={() => removeItem(data.id)}
							style={{marginRight:10, color:'red'}}>
							Delete
						</Button>
						<Button
							variant='outline-danger'
							onClick={() => minusItem(data.id)}>
							<FaMinus style={{ color: 'red' }} />
						</Button>
						<h4 style={{ marginLeft: 20, marginRight: 20 }}>
							{data.count}
						</h4>
						<Button
							variant='outline-success'
							onClick={() => plusItem(data.id)}>
							<FaPlus style={{ color: 'yellowgreen' }} />
						</Button>
						<Button
							variant='outline-success'
							style={{marginLeft:10, color:'yellowgreen'}}>
							Buy
						</Button>
					</Form>
				</Card.Footer>
			</Card>
		</div>
	);
};

export default CartItem;
