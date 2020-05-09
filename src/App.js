import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './Components/UITheme/Theme';

import Navigation from './Components/Navigation/Navigation';
import Home from './Components/Home/Home';
import Destinations from './Components/Destinations/Destinations';
import Packages from './Components/Packages/Packages';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Blogs from './Components/Blogs/Blogs';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/destinations" component={Destinations} />
            <Route path="/packages" component={Packages} />
            <Route path="/blogs" component={Blogs} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App;
