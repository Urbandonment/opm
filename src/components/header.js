import '../style.css';
import logo from '../images/logo.png';

function Header() {
    return (
        <div className='header'>
            <img className='logo-header' src={logo} />
        </div>
    )
}

export default Header;
