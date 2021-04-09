import "./App.css";
import React, { useState, useEffect } from "react";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./components/common/register";
import Login from "./components/common/login";
import Navbar from "./components/common/navbar";
import Home from "./components/home";
import Test from "./components/Test";
import Profile from "./components/profile";
import ProtectedRoute from "./components/common/protectedRoute";
import Test1 from "./components/common/Test1";
import Test2 from "./components/common/Test2";
import Test3 from "./components/common/Test3";
import Test4 from "./components/common/Test4";
import Test42 from "./components/common/Test42";
import Test5 from "./components/common/Test5";
import Test52 from "./components/common/Test52";
import Test6 from "./components/common/Test6";
import Test62 from "./components/common/Test62";
import Test6a from "./components/common/Test6a";
import Test62a from "./components/common/Test62a";
import Test7 from "./components/common/Test7";
import Test7a from "./components/common/Test7a";
import {
  getUserLocalStorage,
  logout,
  getCurrentUserApi,
  setUserLocalStorage,
} from "./../src/services/authService";
import ResetPassword from "./components/resetPassword";
import ForgotPassword from "./components/forgotPassword";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (getUserLocalStorage()) {
      setCurrentUser();
    } else {
      getUserFromServer();
    }
    async function getUserFromServer() {
      const data = await getCurrentUserApi();
      setUserLocalStorage(data);
      setUser(data);
    }
  }, []);

  const handleLogout = () => {
    setUser(null);
    logout();
  };

  const setCurrentUser = () => {
    setUser(getUserLocalStorage());
  };

  return (
    <div className="App">
      <ToastContainer />
      <Navbar user={user} onLogout={handleLogout} />
      <Switch>
        <Redirect exact from="/" to="/home" />

        <ProtectedRoute path="/home" exact component={Home} />

        <Route
          path="/register"
          render={(props) => <Register {...props} onSignup={setCurrentUser} />}
        />
        <Route
          path="/login"
          render={(props) => <Login {...props} onLogin={setCurrentUser} />}
        />
        <Route path="/resetPassword" component={ResetPassword} />
        <Route path="/test" component={Test} />
        <Route path="/logout" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/forgotPassword" component={ForgotPassword} />
        <Route path="/Test1" component={Test1} />
        <Route path="/Test2" component={Test2} />
        <Route path="/Test3" component={Test3} />
        <Route path="/Test4" component={Test4} />
        <Route path="/Test42" component={Test42} />
        <Route path="/Test5" component={Test5} />
        <Route path="/Test52" component={Test52} />
        <Route path="/Test6" component={Test6} />
        <Route path="/Test62" component={Test62} />
        <Route path="/Test6a" component={Test6a} />
        <Route path="/Test62a" component={Test62a} />
        <Route path="/Test7" component={Test7} />
        <Route path="/Test7a" component={Test7a} />
      </Switch>
    </div>
  );
}

export default App;
