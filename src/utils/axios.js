import axios from "axios"

const axiosConfig = {
  baseURL: "http://localhost:3001",
  timeout: 30000,
}

export default axios.create(axiosConfig)
