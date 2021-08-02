import "./App.css";
import Header from "./component/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./component/home/Home";
import Product from "./component/product/Product";
import SignUp from "./component/auth/SignUp";
import Index from "./component/admin/Index";
import CreateProduct from "./component/admin/product/CreateProduct";
import ManageProduct from "./component/admin/product/ManageProduct";
import CreateCate from "./component/admin/category/CreateCate";
import ManageCate from "./component/admin/category/ManageCate";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/product" component={Product}></Route>
          <Route exact path="/signup" component={SignUp}></Route>
          <Route exact path="/createProduct" component={CreateProduct}></Route>
          <Route exact path="/manageProduct" component={ManageProduct}></Route>
          <Route exact path="/createCate" component={CreateCate}></Route>
          <Route exact path="/manageCate" component={ManageCate}></Route>

          {/* admin route */}
          <Route exact path="/admin" component={Index}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
