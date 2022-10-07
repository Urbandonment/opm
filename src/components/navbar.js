import { Button } from 'react-bootstrap';

function Navbar(props) {
  return (
    <nav className='navbar-items'>
      <Button
        variant='outline-danger'
        size='lg'
        onClick={() => props.setPage('Home')}
      >
        Home
      </Button>
      <Button
        variant='outline-danger'
        size='lg'
        onClick={() => props.setPage('Line-Up Creator')}
      >
        Line-Up Creator
      </Button>
      <Button
        variant='outline-danger'
        size='lg'
        onClick={() => props.setPage('Black Ticket Calculation')}
      >
        Black Ticket Calculation
      </Button>
    </nav>
  );
}

export default Navbar;
