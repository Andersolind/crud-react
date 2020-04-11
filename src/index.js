import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "reactstrap";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import BlogDetail from "./Components/Forms/BlogDetail";
import Header from "./Components/Header/Header";
// <Router history={appHistory} onUpdate={() => window.scrollTo(0, 0)}>
// <Route path="/" component={ Detail } />
// </Router>,
// ReactDOM.render(<App />, document.getElementById("root"));
const routing = (
  <Router>
    <Container className="App">
      <div>
        <Header />
        <hr />
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/detail/:blogPost" component={BlogDetail} exact />
        </Switch>
      </div>
    </Container>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
// ReactDOM.render(
//   <BrowserRouter>
//     <main>
//       <Switch>
//         <Route path="/" component={App} exact />
//         <Route path="/detail/:blogPost" component={BlogDetail} exact />
//       </Switch>
//     </main>
//   </BrowserRouter>,
//   document.getElementById("root")

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
