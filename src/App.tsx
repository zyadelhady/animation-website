import React from 'react';
import { Layout } from './hoc/Layout/Layout';
import { ThemeProvider } from 'styled-components';
import theme from './styled/defaultTheme';
import { GlobalStyle } from './styled/globalStyle';
import { Home } from './containers/Home/Home';
import { Switch, Route } from 'react-router-dom';
import { About } from './containers/About/About';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
