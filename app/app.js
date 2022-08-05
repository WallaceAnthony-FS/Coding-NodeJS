const express = require("express")
const router = require("../router/router")
const app = express()

// middleware
app.use(express.json())

// cors

// Routing
// localhost:3000/
app.use("/", router)


// add middleware to handle errors and bad urls
app.use((req, res, next) => {
    const error = new Error("Not found")
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message,
            status: error.status
        }
    })
})

module.exports = app