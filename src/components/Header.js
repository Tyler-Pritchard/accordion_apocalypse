import { useState } from 'react';
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import AALogo from '../app/assets/img/aa_small.jpg';
import UserLoginForm from '../features/user/UserLoginForm';
import { Search } from '@material-ui/icons';
import styled from "styled-components";

const SearchContainer = styled.span`
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 1.5rem;
`;

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            <NavbarBrand className='ms-5' href='/'>
                <img src={AALogo} alt='Accordion Apocalypse logo' />
                <h1 className='mt-1'>Accordion Apocalypse</h1>
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <SearchContainer>
                    <Search />
                    input
                </SearchContainer>
                <Nav className='ms-auto' navbar>
                    <div className='navLink-container'>
                        <div className='login-controls'>
                            <UserLoginForm />
                        </div>
                        <div className='site-links'>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <i className='fa fa-home fa-lg' /> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/directory'>
                            <i className='fa fa-list fa-lg' /> Products
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/repairs'>
                            <i className='fa fa-wrench fa-lg' /> Repairs
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/instructors'>
                            <i className='fa fa-mortar-board fa-lg' /> Instructors
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/about'>
                            <i className='fa fa-info fa-lg' /> About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/contact'>
                            <i className='fa fa-address-card fa-lg' /> Contact
                        </NavLink>
                    </NavItem>
                        </div>
                    </div>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header;