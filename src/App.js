import { Switch, Route, useLocation } from 'react-router-dom';

import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import MyProjects from './pages/MyProjects';
import ProjectDetail from './pages/ProjectDetail';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import { AnimatePresence } from 'framer-motion';


function App() {

  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/contact">
            <ContactUs />
          </Route>
          <Route path="/projects" exact>
            <MyProjects />
          </Route>
          <Route path="/projects/:id">
            <ProjectDetail />
          </Route>
          <Route path="/" exact>
            <AboutUs />
          </Route>
        </Switch>
        </AnimatePresence>
    </div>
  );
}

export default App;
