import React from 'react';
import {Layout} from "./components/Shared/Layout.jsx";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import {LoginPage} from "./components/Content/Routes/Login/LoginPage.jsx";
import {Provider} from "react-redux";
import store from "./redux/store";
import MarketContainer from "./components/Content/Routes/Market/MarketContainer.jsx";
import CartContainer from "./components/Content/Routes/Cart/CartContainer";
import {LoginPageContainer} from "./components/Content/Routes/Login/LoginPageContainer.jsx";

const App = () => {
  return (
      <BrowserRouter>
          <Provider store={store}>
            <Layout>
                <Route exact path={"/"} render={() => <Redirect to={"/login"}/>}/>
                <Route path={"/market"} render={() => <MarketContainer/>}/>
                <Route path={"/login"} render={() => <LoginPageContainer/>}/>
                <Route path={"/cart"} render={() => <CartContainer/>}/>
            </Layout>
          </Provider>
      </BrowserRouter>
  )
};

export default App;