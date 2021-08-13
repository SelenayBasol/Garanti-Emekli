import "./App.css";
import Header from "./component/Header";
import Home from './component/Home';
import Footer from './component/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./component/About";
import Form from "./component/Form"





function App() {
  return <div className="app">
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact><Home /></Route>
        <Route path="/hakkimizda"> <About /></Route>
        <Route path="/gorusleriniz"><Form /></Route>
      </Switch>
      <Footer />
    </Router>

  </div>;

}

export default App;
