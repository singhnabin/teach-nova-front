
import './App.css';
import Header from './component/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './component/home/Home';
import Product from './component/product/Product';
import SignUp from './component/auth/SignUp';


function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/product" component={Product}></Route>
          <Route exact path="/signup" component={SignUp}></Route>


        </Switch>

      </BrowserRouter>

    </div>

  );
}

export default App;
