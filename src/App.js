import React from "react"
import { ToastContainer } from "react-toastify"

import { Container } from "./components/UI/Container/Container"
import Dashboard from "./containers/Dashboard/Dashboard"

import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <Container>
      <ToastContainer />
      <Dashboard />
    </Container>
  )
}

export default App
