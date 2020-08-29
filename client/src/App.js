import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Axios from "axios";
// import Btn from "./components/Button"
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Forms from "./components/Form";
// import Card from "./components/Card";
import Adoption from "./Pages/Adoption";
import MyPets from "./Pages/MyPets";
import Home from "./Pages/Home";
import UserContext from "./Context/UserContext";
import Landing from "./Pages/Landing";

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post("/users/tokenIsValid", null, {
        headers: { "x-auth-token": token },
      });
      if (tokenRes.data) {
        const userRes = await Axios.get("/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };
    checkLoggedIn();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ userData, setUserData }}>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/home" component={Home} />
            <Route path="/mypets" component={MyPets} />
            <Route path="/adoption" component={Adoption} />
          </Switch>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
