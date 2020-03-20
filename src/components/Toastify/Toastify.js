import { ToastContainer, toast } from "react-toastify"
import React, { PureComponent } from "react"

import "react-toastify/dist/ReactToastify.css"

export default class Toastify extends PureComponent {
  render() {
    return (
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
    )
  }
}
