import Home from "../../pages/Home/Home";
import { Redirect, Route, Switch } from "react-router-dom";
import SinglePage from "../../components/SingleContentPage/SinglePage";
import MainNav from "../../components/MainNavbar/MainNav";

const Routes = () => {
  return (
    <>
      <MainNav />

      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:mediaType/:id" children={<SinglePage />} />
          <Redirect to="/error" />
        </Switch>
      </div>
    </>
  );
};

export default Routes;
