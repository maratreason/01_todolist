const express = require("express")
const bodyParser = require("body-parser")
const fs = require("fs")
const path = require("path")
const jwt = require("jsonwebtoken")

const app = express()

const port = 3001
const DATA_FILE = path.join(__dirname, "db.json")
const USERS_FILE = path.join(__dirname, "users.json")

app.set("port", port || 3001)

app.use("/", express.static(path.join(__dirname, "public")))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use((req, res, next) => {
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate")
  res.setHeader("Pragma", "no-cache")
  res.setHeader("Expires", "0")
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE")
  res.header("Access-Control-Allow-Headers", "Content-Type")
  next()
})

app.get("/api", (req, res) => {
  res.json({
    message: "Welcome to the api",
  })
})

// app.post("/api/todos", verifyToken, (req, res) => {
//   jwt.verify(req.token, "secretkey", (err, authData) => {
//     if (err) {
//       res.sendStatus(403)
//     } else {
//       res.json({
//         message: "Todo created...",
//         authData,
//       })
//     }
//   })
// })

app.get("/api/login", (req, res) => {
  fs.readFile(USERS_FILE, (err, data) => {
    res.setHeader("Cache-Control", "no-cache")
    res.json(JSON.parse(data))
  })
})

app.post("/api/login", (req, res) => {
  // Mock user
  const user = {
    email: req.body.email,
    username: req.body.password,
  }

  jwt.sign({ user }, "secretkey", { expiresIn: "2h" }, (err, token) => {
    res.json({
      token,
    })
  })
})

// Format on token
// Authorization: Bearer <access_token>

// Verify Token
function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers["authorization"]
  // check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    // Split at the space
    const bearer = bearerHeader.split(" ")
    // Get token from array
    const bearerToken = bearer[1]
    // Set the token
    req.token = bearerToken
    // Next middleware
    next()
  } else {
    // Forbidden
    res.sendStatus(403)
  }
}

// Controllers

// getTodos
app.get("/api/todos", (req, res) => {
  fs.readFile(DATA_FILE, (err, data) => {
    res.setHeader("Cache-Control", "no-cache")
    res.json(JSON.parse(data))
  })
})

// createTimer
app.post("/api/todos", verifyToken, (req, res) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.sendStatus(403)
    } else {
      fs.readFile(DATA_FILE, (err, data) => {
        const todos = JSON.parse(data)
        const newTodo = {
          id: req.body.id,
          title: req.body.title,
          done: req.body.done,
        }
        todos.push(newTodo)
        fs.writeFile(DATA_FILE, JSON.stringify(todos), () => {
          res.setHeader("Cache-Control", "no-cache")
          res.json(authData)
        })
      })
    }
  })
})

// updateTodo
app.put("/api/todos", (req, res) => {
  fs.readFile(DATA_FILE, (err, data) => {
    const todos = JSON.parse(data)
    todos.forEach(todo => {
      if (todo.id === req.body.id) {
        todo.title = req.body.title
        todo.done = req.body.done
      }
    })
    fs.writeFile(DATA_FILE, JSON.stringify(todos), () => {
      res.json({})
    })
  })
})

// deleteTodo
app.delete("/api/todos", (req, res) => {
  fs.readFile(DATA_FILE, (err, data) => {
    let todos = JSON.parse(data)
    todos = todos.reduce((memo, todo) => {
      if (todo.id === req.body.id) {
        return memo
      }

      return memo.concat(todo)
    }, [])
    fs.writeFile(DATA_FILE, JSON.stringify(todos), () => {
      res.json({})
    })
  })
})

app.listen(port, () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`)
})
