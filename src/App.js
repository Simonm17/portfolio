import { Switch, Route } from 'react-router-dom';

import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/contact">
          <ContactUs />
        </Route>
        <Route path="/our-work">
          <OurWork />
        </Route>
        <Route path="/" exact>
          <AboutUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
