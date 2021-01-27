import { Navbar, Nav, Button } from 'react-bootstrap';

const DarkNavbar = ({ nci, toggleCart }) => {
	return (
		<div>
			<Navbar bg='dark' variant='dark' className='dark-navbar'>
				<Navbar.Brand href='#home'>Shopping App</Navbar.Brand>
				<Nav className='ml-auto'>
					<Button variant='outline-info' onClick={toggleCart}>
						Cart {nci}
					</Button>
				</Nav>
			</Navbar>
		</div>
	);
};

export default DarkNavbar;