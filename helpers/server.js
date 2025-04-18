const express = require('express')
const helmet = require('helmet')
const path = require('path')
const http = require('http')
const cors = require('cors')

// SERVER CONFIG
const PORT = process.env.PORT || 5000
const app = express();
app.use(helmet());
const server = http.createServer(app).listen(PORT, () => console.log(`Listening on ${PORT}\n`))
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors({ credentials: true, origin: '*' }))