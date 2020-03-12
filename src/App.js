import React from "react"
import { ToastContainer, toast } from "react-toastify"
import { Container } from "./components/UI/Container/Container"
import Dashboard from "./containers/Dashboard/Dashboard"

import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <Container>
      <ToastContainer
        draggablePercent={80}
        autoClose={2000}
        position={toast.POSITION.TOP_CENTER}
        style={{
          width: "1000px",
          margin: "0 auto",
          left: "50%",
          transform: "translate(-50%, 0)",
          textAlign: "center",
          fontSize: "1.2rem",
        }}
      />
      <Dashboard />
    </Container>
  )
}

export default App
