import React from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import AALogo from './app/assets/img/aa_small.jpg';
import AccordionCard from './features/accordions/AccordionCard';
import { ACCORDIONS } from './app/shared/ACCORDIONS';
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
      <AccordionCard accordion={ACCORDIONS[0]} />
    </div>
  );
}

export default App;
