import React from "react";
import { Provider } from "react-redux";
import store from "../store";

import NavBar from "./nav-bar/nav-bar-container";
import Hero from "./hero/hero-container";
import Body from "./body/body"
import Footer from "./footer/footer-container"
import ThemeContextProvider from './contexts/ThemeContext'


const App = () => {
  return (
    <Provider store={store}>
      {/*Placeholder for <Router>*/}

      {/*Place All Comps Below*/}

      <ThemeContextProvider>
          <NavBar />
          <Hero />
          <Body/>
          <Footer/>
      </ThemeContextProvider>
    //
    </Provider>
  );
};

export default App;
