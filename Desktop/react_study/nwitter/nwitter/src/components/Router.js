import React  from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Navigation from "components/Navigation";
import Profile from "routes/Profile";

const AppRouter = ({ refreshUser, isLoggedIn, userObject }) => {
  return (
      <Router>
        {isLoggedIn && <Navigation userObject={userObject} refreshUser={refreshUser} />}
        <Switch>
          {isLoggedIn ? (
              <div
                  style={{
                    maxWidth: 890,
                    width: "100%",
                    margin: "0 auto",
                    marginTop: 80,
                    display: "flex",
                    justifyContent: "center",
                  }}
              >
                <Route exact path="/">
                  <Home userObject={ userObject } />
                </Route>
                <Route exact path="/profile">
                  <Profile userObject={ userObject } refreshUser={refreshUser}/>
                </Route>
                <Redirect from="*" to="/" />
              </div>
          ) : (
              <>
                <Route exact path="/">
                  {Auth()}
                </Route>
                <Redirect from="*" to="/" />
              </>
          )}
        </Switch>
      </Router>
  );
};

export default AppRouter;