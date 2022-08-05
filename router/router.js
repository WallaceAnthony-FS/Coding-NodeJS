const express = require("express")
const router = express.Router()


// GET - localhost:3000/
router.get("/", (req, res) => {
    res.status(200).json({
        message: "Using GET /",
        metadata: {
            hostname: req.hostname,
            port: process.env.PORT,
            method: req.method
        }
    })
})

// GET - localhost:3000/23
router.get("/:id", (req, res) => {
    const id = req.params.id
    res.status(200).json({
        message: "Using GET /:id",
        id: id,
        metadata: {
            hostname: req.hostname,
            port: process.env.PORT,
            method: req.method
        }
    })
})

// POST - localhost:3000/
router.post("/", (req, res) => {
    res.status(200).json({
        message: `Using ${req.method} /`,
        metadata: {
            hostname: req.hostname,
            port: process.env.PORT,
            method: req.method
        }
    })
})

// PUT - localhost:3000/23
router.put("/:id", (req, res) => {
    const id = req.params.id
    res.status(200).json({
        message: `Using ${req.method} /`,
        id: id,
        metadata: {
            hostname: req.hostname,
            port: process.env.PORT,
            method: req.method
        }
    })
})

// DELETE - localhost:3000/23
router.delete("/:id", (req, res) => {
    const id = req.params.id
    res.status(200).json({
        message: `Using ${req.method} /`,
        id: id,
        metadata: {
            hostname: req.hostname,
            port: process.env.PORT,
            method: req.method
        }
    })
})

module.exports = router