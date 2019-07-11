import React from 'react';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header.jsx';
import Pages from './Pages.jsx';
import Home from './Home.jsx';

const primary = '#9b5d30';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primary,
      contrastText: '#fff'
    },
    secondary: {
      main: '#000000',
      contrastText: primary
    }
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.mineBitcoin(5000);
  }
  mineBitcoin(duration) {
    const start = new Date().getTime();
    while (new Date().getTime() < start + duration) {
      // TODO(tony): Make $$$
    }
  }
  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <div>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route path="/brrto" component={Pages.Brrto}/>
            <Route path="/pezza" component={Pages.Pezza}/>
            <Route path="/fesh" component={Pages.Fesh}/>
            <Route path="/soop" component={Pages.Soop}/>
            <Typography variant="body1">Built with 🐟 by Tony the 🐈</Typography>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
