import React from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import AALogo from './assets/img/aa_small.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color='primary' sticky='top' expand='md'>
          <Container>
              <NavbarBrand href='/'>
                  <img src={AALogo} alt='Accordion Apocalypse logo' />
              </NavbarBrand>
          </Container>
      </Navbar>
    </div>
  );
}

export default App;
