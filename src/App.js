import React from "react"
import { Switch, Route } from "react-router-dom"

import Toastify from "./components/Toastify/Toastify"
import { Container } from "./components/UI/Container/Container"
import Login from "./components/Login/Login"

import Dashboard from "./pages/Dashboard/Dashboard"
import Page404 from "./pages/Page404/Page404"

function App() {
  return (
    <Container>
      <Toastify />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Dashboard} />
        <Route path="*" component={Page404} />
      </Switch>
    </Container>
  )
}

export default App
