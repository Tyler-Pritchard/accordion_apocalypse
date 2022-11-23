import { Navbar, NavbarBrand } from 'reactstrap';
import AALogo from '../app/assets/img/aa_small.jpg';

const Header = () => {
    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            <NavbarBrand href='/'>
                <img src={AALogo} alt='Accordion Apocalypse logo' />
            </NavbarBrand>
        </Navbar>
    )
}

export default Header;