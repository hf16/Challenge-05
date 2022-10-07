import "./App.css";
import Routes from "./config/Routes/Routes";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/touch-loader/touchLoader";
function App() {
  return (
    <>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Routes} />
          </Switch>
        </BrowserRouter>
      
       



      
    </>
  );
}

export default App;
